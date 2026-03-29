import { motion } from "framer-motion";
import { useGameStore } from "../store/gameStore";
import { livelihoods, dreams } from "../data/story";

export default function SetupScreen() {
  const { livelihoodId, dreamId, setLivelihood, setDream, beginJourney } =
    useGameStore();

  return (
    <motion.div
      className="section-gap setup-screen"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      {/* Kavita intro — compact horizontal */}
      <div className="setup-intro">
        <img
          src="/images/kavita.webp"
          alt="Kavita"
          className="setup-kavita-img"
          draggable={false}
        />
        <div className="setup-intro-text">
          <h2 className="setup-intro-name">कविता की कहानी</h2>
          <p className="setup-intro-desc">
            गाँव में रहती है। सिलाई करती है। बेटी गुड़िया स्कूल जाती है।
          </p>
        </div>
      </div>

      {/* Step 1: Livelihood — 3-col icon grid */}
      <div className="setup-section">
        <span className="step-label">1/2 — काम चुनो</span>
        <div className="icon-choice-grid">
          {livelihoods.map((item, i) => (
            <motion.button
              key={item.id}
              className={`icon-choice-card ${livelihoodId === item.id ? "selected" : ""}`}
              onClick={() => setLivelihood(item.id)}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.05 + i * 0.06 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="icon-choice-emoji">{item.icon}</span>
              <span className="icon-choice-label">{item.titleHindi}</span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Step 2: Dream — 3-col icon grid */}
      <div className="setup-section">
        <span className="step-label">2/2 — सपना चुनो</span>
        <div className="icon-choice-grid">
          {dreams.map((item, i) => (
            <motion.button
              key={item.id}
              className={`icon-choice-card ${dreamId === item.id ? "selected" : ""}`}
              onClick={() => setDream(item.id)}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.08 + i * 0.06 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="icon-choice-emoji">{item.icon}</span>
              <span className="icon-choice-label">{item.titleHindi}</span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* CTA — pinned to bottom */}
      <motion.button
        className="btn-primary"
        disabled={!livelihoodId || !dreamId}
        onClick={beginJourney}
        whileTap={{ scale: 0.97 }}
        style={{ marginTop: "auto" }}
      >
        शुरू करो →
      </motion.button>
    </motion.div>
  );
}
 
