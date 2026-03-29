import { motion, useMotionValue, useTransform } from "framer-motion";
import { useGameStore } from "../store/gameStore";
import { otpTrap } from "../data/story";
import { PhoneOff, PhoneCall, Timer, AlertTriangle, Siren } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function OTPScreen() {
  const handleOtpChoice = useGameStore((s) => s.handleOtpChoice);
  const [timerLeft, setTimerLeft] = useState(10);
  const resolved = useRef(false);

  const x = useMotionValue(0);
  const rotate = useTransform(x, [-150, 0, 150], [-12, 0, 12]);
  const rejectOpacity = useTransform(x, [-150, -50, 0], [1, 0.6, 0.2]);
  const answerOpacity = useTransform(x, [0, 50, 150], [0.2, 0.6, 1]);
  const THRESHOLD = 80;

  // Urgency countdown timer
  useEffect(() => {
    const interval = setInterval(() => {
      setTimerLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          if (!resolved.current) {
            resolved.current = true;
            handleOtpChoice("safe");
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [handleOtpChoice]);

  const handleChoice = (choice: "safe" | "unsafe") => {
    if (resolved.current) return;
    resolved.current = true;
    handleOtpChoice(choice);
  };

  return (
    <motion.div
      className="section-gap otp-swipe-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Urgency timer bar */}
      <div className="otp-timer-bar">
        <motion.div
          className="otp-timer-fill"
          initial={{ width: "100%" }}
          animate={{ width: "0%" }}
          transition={{ duration: 10, ease: "linear" }}
        />
        <span className="otp-timer-text" style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <Timer size={14} /> {timerLeft}s — जल्दी निर्णय लो!
        </span>
      </div>

      {/* Swipe Arena — phone card */}
      <div className="swipe-arena">
        {/* Left: Reject call */}
        <motion.div className="bag-target bag-safe" style={{ opacity: rejectOpacity }}>
          <span className="bag-icon"><PhoneOff size={28} /></span>
          <span className="bag-label">काटो</span>
        </motion.div>

        {/* Draggable phone card */}
        <motion.div
          className="phone-swipe-card glass-card"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.9}
          style={{ x, rotate }}
          onDragEnd={(_, info) => {
            if (info.offset.x < -THRESHOLD) {
              handleChoice("safe");
            } else if (info.offset.x > THRESHOLD) {
              handleChoice("unsafe");
            }
            x.set(0);
          }}
          whileDrag={{ cursor: "grabbing" }}
          animate={resolved.current ? {} : {
            y: [0, -3, 3, -2, 2, 0],
          }}
          transition={resolved.current ? {} : {
            y: { duration: 0.5, repeat: Infinity, repeatDelay: 0.8 },
          }}
        >
          <div className="phone-ring-badge" style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <AlertTriangle size={12} /> अनजान नंबर
          </div>
          <p className="phone-scam-text">
            &ldquo;{otpTrap.callerHindi}&rdquo;
          </p>
          <span className="coin-hint">← काटो  खींचो  OTP दो →</span>
        </motion.div>

        {/* Right: Answer (unsafe) */}
        <motion.div className="bag-target bag-danger" style={{ opacity: answerOpacity }}>
          <span className="bag-icon"><PhoneCall size={28} /></span>
          <span className="bag-label">OTP दो</span>
        </motion.div>
      </div>

      {/* Helpline info */}
      <div className="helpline-box" style={{ marginTop: "auto" }}>
        <span style={{display:'flex',alignItems:'center',gap:'6px'}}><Siren size={16} color="var(--danger)" /> फ़्रॉड हो जाए → <strong>1930</strong> पर कॉल करो</span>
      </div>

      {/* Fallback buttons */}
      <div className="btn-row swipe-fallback">
        <motion.button
          className="btn-wallet btn-wallet-work"
          onClick={() => handleChoice("safe")}
          whileTap={{ scale: 0.92 }}
        >
          <span className="btn-wallet-icon"><PhoneOff size={18} /></span>
          <span className="btn-wallet-label">फ़ोन काटो!</span>
        </motion.button>
        <motion.button
          className="btn-wallet btn-wallet-danger"
          onClick={() => handleChoice("unsafe")}
          whileTap={{ scale: 0.92 }}
        >
          <span className="btn-wallet-icon"><PhoneCall size={18} /></span>
          <span className="btn-wallet-label">OTP बता दो</span>
        </motion.button>
      </div>
    </motion.div>
  );
}
