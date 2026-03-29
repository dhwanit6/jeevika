import { motion, AnimatePresence } from "framer-motion";
import { Smile, Frown, Lightbulb } from "lucide-react";
import { ReactNode } from "react";

interface Props {
  text: string;
  side?: "left" | "right";
  mood?: "happy" | "worried" | "wise";
  visible?: boolean;
}

const moodIcons: Record<string, ReactNode> = {
  happy: <Smile size={16} color="var(--saffron)" />,
  worried: <Frown size={16} color="var(--danger)" />,
  wise: <Lightbulb size={16} color="var(--earth-green)" />,
};

export default function CharacterBubble({
  text,
  side = "left",
  mood = "wise",
  visible = true,
}: Props) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className={`char-bubble-wrap ${side}`}
          initial={{ opacity: 0, x: side === "left" ? -60 : 60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: side === "left" ? -60 : 60 }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
        >
          <div className="char-cutout">
            <img
              src="/images/kavita.webp"
              alt="कविता"
              className="char-cutout-img"
              draggable={false}
            />
            <span className="char-mood">{moodIcons[mood]}</span>
          </div>
          <div className="speech-bubble glass-card">
            <p className="speech-text">{text}</p>
            <div className={`speech-arrow ${side}`} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
 
