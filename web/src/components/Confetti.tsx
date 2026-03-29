import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const COLORS = ["#F5A623", "#4A7C59", "#C84B31", "#E67E22", "#27AE60"];

export default function Confetti() {
  const [pieces, setPieces] = useState<{ id: number; x: number; color: string; duration: number; delay: number }[]>([]);

  useEffect(() => {
    // Generate 40 confetti pieces once
    const newPieces = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100, // random start X %
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      duration: 2 + Math.random() * 3, // 2-5s fall
      delay: Math.random() * 0.5, // staggered start
    }));
    setPieces(newPieces);
    
    // Cleanup after finish
    const timer = setTimeout(() => setPieces([]), 5500);
    return () => clearTimeout(timer);
  }, []);

  if (pieces.length === 0) return null;

  return (
    <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 9999, overflow: "hidden" }}>
      {pieces.map((p) => (
        <motion.div
          key={p.id}
          initial={{ y: -20, x: `${p.x}vw`, rotate: 0, opacity: 1 }}
          animate={{
            y: "110vh",
            x: `${p.x + (Math.random() * 20 - 10)}vw`,
            rotate: 720,
            opacity: [1, 1, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            ease: "easeOut",
          }}
          style={{
            position: "absolute",
            width: "8px",
            height: "16px",
            backgroundColor: p.color,
            borderRadius: "2px",
          }}
        />
      ))}
    </div>
  );
}
 
