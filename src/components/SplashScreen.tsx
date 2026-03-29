import { motion } from "framer-motion";
import { useGameStore } from "../store/gameStore";
import { Gamepad2, Coins, ShieldCheck } from "lucide-react";
import { ReactNode } from "react";
import kavitaBg from "../images/kavita.webp";

export default function SplashScreen() {
  const setScreen = useGameStore((s) => s.setScreen);

  return (
    <motion.div
      className="splash-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      {/* Full-bleed village panorama — Ken Burns slow zoom */}
      <div className="splash-hero">
        <motion.img
          src={kavitaBg}
          alt="Indian village"
          className="splash-hero-img"
          draggable={false}
          initial={{ scale: 1.15, x: -20 }}
          animate={{ scale: 1.25, x: 20 }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
        />
        <div className="splash-hero-overlay" />

        {/* Floating particles — fireflies / dust motes */}
        <div className="splash-particles">
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.span
              key={i}
              className="particle"
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: [0, 0.8, 0],
                y: [10, -30, -60],
                x: [0, (i % 2 === 0 ? 15 : -15)],
              }}
              transition={{
                duration: 3 + i * 0.5,
                delay: i * 0.6,
                repeat: Infinity,
                ease: "easeOut",
              }}
              style={{
                left: `${15 + i * 14}%`,
                bottom: `${10 + (i % 3) * 8}%`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Kavita portrait — bounces up from hero with spring */}
      <motion.div
        className="splash-kavita"
        initial={{ y: 60, opacity: 0, scale: 0.8 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, type: "spring", stiffness: 180, damping: 14 }}
      >
        <img
          src="/images/kavita.webp"
          alt="Kavita"
          className="splash-kavita-img"
          draggable={false}
        />
      </motion.div>

      {/* Title — staggered text reveal */}
      <motion.div
        className="splash-text-block"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
      >
        <h1 className="splash-title">जीविका</h1>
        <motion.p
          className="splash-tagline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          अपनी ज़िंदगी, अपने फ़ैसले
        </motion.p>
      </motion.div>

      {/* Feature chips — stagger in */}
      <motion.div
        className="splash-features"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0 }}
      >
        {([
          { icon: <Gamepad2 size={14} />, label: "खेलो" },
          { icon: <Coins size={14} />, label: "सीखो" },
          { icon: <ShieldCheck size={14} />, label: "बचाओ" },
        ] as { icon: ReactNode; label: string }[]).map((chip, i) => (
          <motion.span
            key={chip.label}
            className="splash-chip"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 + i * 0.12 }}
            style={{ display: 'flex', alignItems: 'center', gap: '4px' }}
          >
            {chip.icon} {chip.label}
          </motion.span>
        ))}
      </motion.div>

      {/* CTA — pulses gently to draw attention */}
      <motion.button
        className="btn-primary splash-cta"
        onClick={() => setScreen("setup")}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.3 }}
        whileTap={{ scale: 0.95 }}
      >
        खेलना शुरू करो →
      </motion.button>
    </motion.div>
  );
}
 
