import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useGameStore } from "../store/gameStore";
import { Star, PiggyBank, ShieldCheck, ShieldAlert } from "lucide-react";

const badgeDetails: Record<string, { icon: React.ReactNode; title: string; desc: string }> = {
  samajhdar: { icon: <Star size={24} />, title: "समझदार", desc: "लगातार 3 सही फ़ैसले!" },
  bachat_rani: { icon: <PiggyBank size={24} />, title: "बचत रानी", desc: "गुड़िया के लिए बचत की!" },
  satark_nagrik: { icon: <ShieldCheck size={24} />, title: "सतर्क नागरिक", desc: "सुरक्षा कवच लिया!" },
  himmat_wali: { icon: <ShieldAlert size={24} />, title: "हिम्मत वाली", desc: "ठग का फ़ोन काट दिया!" },
};

export default function AchievementPopup() {
  const { newAchievement, clearNewAchievement } = useGameStore();
  const [activeBadge, setActiveBadge] = useState<string | null>(null);

  useEffect(() => {
    if (newAchievement) {
      setActiveBadge(newAchievement);
      const timer = setTimeout(() => {
        setActiveBadge(null);
        clearNewAchievement();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [newAchievement, clearNewAchievement]);

  const badge = activeBadge ? badgeDetails[activeBadge] : null;

  return (
    <AnimatePresence>
      {badge && (
        <motion.div
          className="achievement-popup"
          initial={{ y: -100, opacity: 0, scale: 0.8, x: "-50%" }}
          animate={{ y: 20, opacity: 1, scale: 1, x: "-50%" }}
          exit={{ y: -100, opacity: 0, scale: 0.8, x: "-50%" }}
          transition={{ type: "spring", damping: 14, stiffness: 200 }}
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            background: "linear-gradient(135deg, var(--gold), #ffce44)",
            border: "2px solid #fff",
            boxShadow: "0 8px 32px rgba(192, 137, 28, 0.4)",
            borderRadius: "20px",
            padding: "12px 16px",
            display: "flex",
            alignItems: "center",
            gap: "14px",
            zIndex: 1000,
            width: "90%",
            maxWidth: "340px",
            pointerEvents: "none"
          }}
        >
          <div style={{
            background: "rgba(255,255,255,0.4)",
            borderRadius: "50%",
            width: "44px",
            height: "44px",
            display: "flex",
            flexShrink: 0,
            alignItems: "center",
            justifyContent: "center",
            color: "var(--dark-brown)"
          }}>
            {badge.icon}
          </div>
          <div>
            <h4 style={{ margin: 0, fontSize: "0.95rem", color: "var(--dark-brown)", fontFamily: "var(--font-hindi)", fontWeight: 800 }}>
              🏆 नई उपलब्धि: {badge.title}
            </h4>
            <p style={{ margin: 0, fontSize: "0.75rem", color: "var(--dark-brown)", opacity: 0.9 }}>
              {badge.desc}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
