import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import { useState, useCallback, useEffect } from "react";
import { useNarration } from "../hooks/useNarration";

/**
 * VoiceButton — Floating speaker icon that auto-narrates screen text.
 * Sits as a fixed pill in the bottom-right of the screen.
 * Speaks the provided text on mount (once), and lets user replay or mute.
 */
interface Props {
  screenKey: string;
  autoSpeak?: boolean;
}

export default function VoiceButton({ screenKey, autoSpeak = true }: Props) {
  const { speak, stop } = useNarration();
  const [muted, setMuted] = useState(false);
  const [hasSpokeOnce, setHasSpokeOnce] = useState(false);

  // Auto-speak on first render of this text
  useEffect(() => {
    if (autoSpeak && !muted && !hasSpokeOnce) {
      // Small delay so the screen transition settles first
      const timer = setTimeout(() => {
        speak(screenKey);
        setHasSpokeOnce(true);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [screenKey, autoSpeak, muted, hasSpokeOnce, speak]);

  // Reset hasSpokeOnce when text changes (new screen)
  useEffect(() => {
    setHasSpokeOnce(false);
  }, [screenKey]);

  // Cleanup on unmount
  useEffect(() => {
    return () => stop();
  }, [stop]);

  const handleTap = useCallback(() => {
    if (muted) {
      setMuted(false);
      speak(screenKey);
    } else {
      stop();
      setMuted(true);
    }
  }, [muted, screenKey, speak, stop]);

  return (
    <motion.button
      className="voice-btn"
      onClick={handleTap}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, type: "spring", stiffness: 300 }}
      aria-label={muted ? "आवाज़ चालू करो" : "आवाज़ बंद करो"}
      title={muted ? "आवाज़ चालू करो" : "आवाज़ बंद करो"}
      style={{
        position: "absolute",
        bottom: "16px",
        right: "16px",
        zIndex: 500,
        width: "44px",
        height: "44px",
        borderRadius: "50%",
        background: muted
          ? "rgba(62, 39, 35, 0.2)"
          : "linear-gradient(135deg, var(--earth-green), var(--earth-green-light))",
        border: "2px solid rgba(255,255,255,0.6)",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: muted ? "none" : "0 4px 16px rgba(74,124,89,0.4)",
        cursor: "pointer",
      }}
    >
      {muted ? <VolumeX size={20} /> : <Volume2 size={20} />}
    </motion.button>
  );
}
 
