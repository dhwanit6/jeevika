import { motion, useMotionValue, useTransform } from "framer-motion";
import { useGameStore, SAVINGS_DECISION_AMOUNT } from "../store/gameStore";
import { formatRupees } from "../data/story";
import { Coins, Landmark, TrendingDown, Sprout, ArrowRight, TreeDeciduous, Wind } from "lucide-react";

export default function SavingsScreen() {
  const { setAsideSavings, skipSavings } = useGameStore();

  const x = useMotionValue(0);
  const rotate = useTransform(x, [-150, 0, 150], [-15, 0, 15]);
  const skipOpacity = useTransform(x, [-150, -50, 0], [1, 0.6, 0.2]);
  const saveOpacity = useTransform(x, [0, 50, 150], [0.2, 0.6, 1]);
  const cardScale = useTransform(x, [-150, 0, 150], [0.95, 1, 0.95]);
  const THRESHOLD = 80;

  return (
    <motion.div
      className="section-gap savings-swipe-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Question */}
      <h2 className="section-title-hindi" style={{ textAlign: "center", fontSize: "1rem" }}>
        {formatRupees(SAVINGS_DECISION_AMOUNT)} बचाओगी?
      </h2>

      {/* Swipe Arena — same pattern as Kharif */}
      <div className="swipe-arena">
        {/* Left: Let it go */}
        <motion.div className="bag-target bag-skip" style={{ opacity: skipOpacity }}>
          <span className="bag-icon"><TrendingDown size={28} /></span>
          <span className="bag-label">रहने दो</span>
        </motion.div>

        {/* Draggable coin card */}
        <motion.div
          className="coin-card glass-card"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.9}
          style={{ x, rotate, scale: cardScale }}
          onDragEnd={(_, info) => {
            if (info.offset.x < -THRESHOLD) {
              skipSavings();
            } else if (info.offset.x > THRESHOLD) {
              setAsideSavings();
            }
            x.set(0);
          }}
          whileDrag={{ cursor: "grabbing" }}
        >
          <span className="coin-emoji"><Coins strokeWidth={1.5} size={48} color="var(--terracotta)" /></span>
          <span className="coin-amount">{formatRupees(SAVINGS_DECISION_AMOUNT)}</span>
          <span className="coin-hint">← छोड़ो &nbsp; खींचो &nbsp; बचाओ →</span>
        </motion.div>

        {/* Right: Save */}
        <motion.div className="bag-target bag-save" style={{ opacity: saveOpacity }}>
          <span className="bag-icon"><Landmark size={28} /></span>
          <span className="bag-label">बचाओ</span>
        </motion.div>
      </div>

      {/* Visual futures — compact row */}
      <div className="split-panels" style={{ gap: "8px" }}>
        <div className="future-card safe" style={{ padding: "8px", textAlign: "center" }}>
          <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "4px", color: "var(--earth-green)", margin: "4px 0" }}><Sprout size={20} /> <ArrowRight size={14} /> <TreeDeciduous size={20} /></span>
          <p style={{ fontSize: "0.72rem", fontFamily: "var(--font-hindi)", fontWeight: 600, marginTop: "4px" }}>
            सपना करीब
          </p>
        </div>
        <div className="future-card risk" style={{ padding: "8px", textAlign: "center" }}>
          <span style={{ display: "flex", alignItems: "center", justifyContent: "center", color: "var(--danger)", margin: "4px 0" }}><Wind size={24} /></span>
          <p style={{ fontSize: "0.72rem", fontFamily: "var(--font-hindi)", fontWeight: 600, marginTop: "4px" }}>
            पैसा खो जाएगा
          </p>
        </div>
      </div>

      {/* Fallback buttons — for tap users */}
      <div className="btn-row swipe-fallback" style={{ marginTop: "auto" }}>
        <motion.button
          className="btn-secondary"
          onClick={skipSavings}
          whileTap={{ scale: 0.95 }}
          style={{ display: "flex", alignItems: "center", gap: "6px" }}
        >
          <TrendingDown size={18} /> रहने दो
        </motion.button>
        <motion.button
          className="btn-primary btn-green"
          onClick={setAsideSavings}
          whileTap={{ scale: 0.95 }}
          style={{ display: "flex", alignItems: "center", gap: "6px" }}
        >
          <Landmark size={18} /> बचाओ!
        </motion.button>
      </div>
    </motion.div>
  );
}
 
