import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import { useGameStore } from "../store/gameStore";
import {
  kharifEvents,
  formatRupees,
} from "../data/story";
import { Home, Briefcase, TrendingDown, TrendingUp, CheckCircle2, XCircle, Coins } from "lucide-react";
import { useState, useEffect, useCallback, useRef } from "react";
import { useHaptic } from "../hooks/useHaptic";

const teachingLines: Record<string, string> = {
  "harvest-income": "फ़सल का पैसा घर चलाने के लिए है।",
  "orders-advance": "ग्राहक का एडवांस काम का पैसा है।",
  "school-fee": "बच्चों की फ़ीस घर का ख़र्चा है।",
  "fabric": "कपड़ा-धागा काम का ख़र्चा है।",
  "ration": "राशन घर का ख़र्चा है।",
  "final-payment": "सिलाई की कमाई = काम का पैसा।",
  "medicine": "दवाई घर का ख़र्चा है — सबकी सेहत पहले।",
  "travel": "काम के लिए यात्रा = काम का ख़र्चा।",
  "diwali-bonus": "त्योहार पर ज़्यादा ऑर्डर = काम की कमाई।",
  "machine-repair": "मशीन ठीक करना काम का ख़र्चा है।",
};

interface Feedback {
  correct: boolean;
  msg: string;
  teach: string;
}

export default function KharifScreen() {
  const { currentEventIndex, allocateEvent, unlockAchievement } = useGameStore();
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const [streak, setStreak] = useState(0);
  const [shaking, setShaking] = useState(false);
  const [coins, setCoins] = useState<{ id: number; x: number; y: number }[]>([]);
  const coinIdRef = useRef(0);
  const haptic = useHaptic();
  const [showTutorial, setShowTutorial] = useState(true);

  const event = kharifEvents[currentEventIndex];

  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 0, 200], [-12, 0, 12]);
  const homeOpacity = useTransform(x, [-200, -60, 0], [1, 0.6, 0.2]);
  const workOpacity = useTransform(x, [0, 60, 200], [0.2, 0.6, 1]);
  const cardOpacity = useTransform(x, [-200, -100, 0, 100, 200], [0.6, 0.9, 1, 0.9, 0.6]);

  useEffect(() => {
    if (feedback) {
      const timer = setTimeout(() => setFeedback(null), 2200);
      return () => clearTimeout(timer);
    }
  }, [feedback]);

  const spawnCoins = useCallback(() => {
    const newCoins = Array.from({ length: 4 }, () => ({
      id: coinIdRef.current++,
      x: 40 + Math.random() * 60,
      y: 30 + Math.random() * 30,
    }));
    setCoins(newCoins);
    setTimeout(() => setCoins([]), 900);
  }, []);

  const triggerShake = useCallback(() => {
    setShaking(true);
    setTimeout(() => setShaking(false), 400);
  }, []);

  const handleAllocate = useCallback((target: "home" | "work") => {
    if (!event) return;
    const correct = event.correct === target;

    if (correct) {
      const newStreak = streak + 1;
      setStreak(newStreak);
      spawnCoins();
      haptic.tap();
      
      if (newStreak >= 3) {
        unlockAchievement("samajhdar");
      }

      setFeedback({
        correct: true,
        msg: newStreak >= 3 ? `${newStreak} सही!` : "सही!",
        teach: teachingLines[event.id] || "",
      });
    } else {
      setStreak(0);
      triggerShake();
      haptic.error();
      setFeedback({
        correct: false,
        msg: "ग़लत बटुआ",
        teach: teachingLines[event.id] || "अगली बार ध्यान से सोचना।",
      });
    }

    allocateEvent(event, target);
    setShowTutorial(false);
  }, [event, streak, allocateEvent, unlockAchievement, spawnCoins, triggerShake]);

  if (!event) return null;

  const total = kharifEvents.length;
  const step = currentEventIndex + 1;
  const SWIPE_THRESHOLD = 80;

  return (
    <motion.div
      className={`section-gap kharif-screen ${shaking ? "screen-shake" : ""}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Coin burst particles — absolute */}
      {coins.map((c) => (
        <span
          key={c.id}
          className="coin-burst"
          style={{ left: `${c.x}%`, top: `${c.y}%`, color: 'var(--saffron)' }}
        >
          <Coins size={20} />
        </span>
      ))}

      {/* Feedback overlay — absolute positioned, not in flow */}
      <AnimatePresence>
        {feedback && feedback.teach && (
          <motion.div
            className="kharif-feedback-overlay"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            <span className={`feedback-pill ${feedback.correct ? "correct" : "wrong"}`} style={{display:'flex',alignItems:'center',gap:'5px'}}>
              {feedback.correct ? <CheckCircle2 size={16} /> : <XCircle size={16} />}
              {feedback.msg} — {feedback.teach}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Progress dots */}
      <div className="swipe-progress">
        {kharifEvents.map((_, i) => (
          <span
            key={i}
            className={`swipe-dot ${i < currentEventIndex ? "done" : ""} ${i === currentEventIndex ? "current" : ""}`}
          />
        ))}
      </div>

      {/* ─── SWIPE ARENA ─── */}
      <div className="swipe-arena">
        {/* Swipe tutorial — auto-dismisses */}
        {showTutorial && currentEventIndex === 0 && (
          <div className="swipe-tutorial">
            <div style={{ position: 'relative' }}>
              <span className="tutorial-hand">👆</span>
              <span className="tutorial-text">कार्ड को खींचो ← या →</span>
            </div>
          </div>
        )}
        <motion.div className="bag-target bag-home" style={{ opacity: homeOpacity }}>
          <span className="bag-icon"><Home size={28} /></span>
          <span className="bag-label">घर</span>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={event.id}
            className="swipe-card glass-card"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.9}
            style={{ x, rotate, opacity: cardOpacity }}
            onDragEnd={(_, info) => {
              if (info.offset.x < -SWIPE_THRESHOLD) {
                handleAllocate("home");
              } else if (info.offset.x > SWIPE_THRESHOLD) {
                handleAllocate("work");
              }
              x.set(0);
            }}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            whileDrag={{ scale: 1.04, cursor: "grabbing" }}
          >
            <div className="swipe-card-top">
              <span className={`swipe-badge ${event.kind}`} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                {event.kind === "income" ? <TrendingUp size={14} /> : <TrendingDown size={14} />} 
                {event.kind === "income" ? "आमदनी" : "ख़र्चा"}
              </span>
              <span className="swipe-step">{step}/{total}</span>
            </div>

            <div style={{ margin: "12px 0", display: "flex", justifyContent: "center", color: "var(--dark-brown)" }}>
              {event.icon}
            </div>

            <p className="swipe-amount">{formatRupees(event.amount)}</p>
            <h3 className="swipe-title">{event.titleHindi}</h3>
            <p className="swipe-hint">← घर &nbsp; खींचो &nbsp; काम →</p>
          </motion.div>
        </AnimatePresence>

        <motion.div className="bag-target bag-work" style={{ opacity: workOpacity }}>
          <span className="bag-icon"><Briefcase size={28} /></span>
          <span className="bag-label">काम</span>
        </motion.div>
      </div>

      {/* Fallback tap buttons — always at bottom */}
      <div className="btn-row swipe-fallback" style={{ marginTop: "auto" }}>
        <motion.button
          className="btn-wallet btn-wallet-home"
          onClick={() => handleAllocate("home")}
          whileTap={{ scale: 0.92 }}
        >
          <span className="btn-wallet-icon"><Home size={18} /></span>
          <span className="btn-wallet-label">घर</span>
        </motion.button>
        <motion.button
          className="btn-wallet btn-wallet-work"
          onClick={() => handleAllocate("work")}
          whileTap={{ scale: 0.92 }}
        >
          <span className="btn-wallet-icon"><Briefcase size={18} /></span>
          <span className="btn-wallet-label">काम</span>
        </motion.button>
      </div>
    </motion.div>
  );
}
