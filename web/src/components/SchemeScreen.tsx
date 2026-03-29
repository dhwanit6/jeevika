import { motion, useMotionValue, useTransform } from "framer-motion";
import { useGameStore, INSURANCE_COST } from "../store/gameStore";
import { formatRupees } from "../data/story";
import { SkipForward, ShieldCheck, Shield, Zap, Hospital, AlertOctagon, ClipboardList } from "lucide-react";

export default function SchemeScreen() {
  const chooseInsurance = useGameStore((s) => s.chooseInsurance);

  const x = useMotionValue(0);
  const rotate = useTransform(x, [-150, 0, 150], [-12, 0, 12]);
  const skipOpacity = useTransform(x, [-150, -50, 0], [1, 0.6, 0.2]);
  const equipOpacity = useTransform(x, [0, 50, 150], [0.2, 0.6, 1]);
  const THRESHOLD = 80;

  return (
    <motion.div
      className="section-gap"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ position: "relative" }}
    >
      {/* Swipe Arena — power-up card */}
      <div className="swipe-arena">
        {/* Left: Skip */}
        <motion.div className="bag-target bag-skip" style={{ opacity: skipOpacity }}>
          <span className="bag-icon"><SkipForward size={28} /></span>
          <span className="bag-label">छोड़ो</span>
        </motion.div>

        {/* Draggable power-up card */}
        <motion.div
          className="powerup-swipe-card glass-card"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.9}
          style={{ x, rotate }}
          onDragEnd={(_, info) => {
            if (info.offset.x < -THRESHOLD) {
              chooseInsurance(false);
            } else if (info.offset.x > THRESHOLD) {
              chooseInsurance(true);
            }
            x.set(0);
          }}
          initial={{ opacity: 0, y: 40, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 16 }}
          whileDrag={{ cursor: "grabbing" }}
        >
          <span style={{ color: "var(--earth-green)", marginBottom: "8px" }}><ShieldCheck size={48} strokeWidth={1.5} /></span>
          <span className="powerup-badge" style={{display:'flex',alignItems:'center',gap:'4px'}}><Zap size={14} /> सरकारी योजना — बीमा विस्तार (IRDAI)</span>
          <h3 style={{ fontFamily: "var(--font-hindi)", fontSize: "1.1rem", fontWeight: 800, color: "var(--dark-brown)" }}>
            सुरक्षा कवच
          </h3>
          <span style={{ fontFamily: "var(--font-english)", fontSize: "0.85rem", fontWeight: 700, color: "var(--terracotta)" }}>
            {formatRupees(INSURANCE_COST)}
          </span>
          <ul className="powerup-benefits-mini">
            <li style={{display:'flex',alignItems:'center',gap:'4px'}}><Hospital size={14} /> बीमारी में बचत सुरक्षित</li>
            <li style={{display:'flex',alignItems:'center',gap:'4px'}}><AlertOctagon size={14} /> सेठ से कर्ज़ नहीं</li>
          </ul>
          <span className="coin-hint">← छोड़ो &nbsp; खींचो &nbsp; लो →</span>
        </motion.div>

        {/* Right: Equip */}
        <motion.div className="bag-target bag-save" style={{ opacity: equipOpacity }}>
          <span className="bag-icon"><Shield size={28} /></span>
          <span className="bag-label">लो!</span>
        </motion.div>
      </div>

      {/* Real-world action */}
      <div className="helpline-box" style={{ marginTop: "auto" }}>
        <span style={{display:'inline-flex',alignItems:'center',gap:'4px'}}><ClipboardList size={14} /> <strong>असल में:</strong> बैंक/पोस्ट ऑफ़िस जाओ, आधार+पासबुक लेकर</span>
      </div>

      {/* Fallback buttons */}
      <div className="btn-row swipe-fallback">
        <motion.button
          className="btn-secondary"
          onClick={() => chooseInsurance(false)}
          whileTap={{ scale: 0.95 }}
        >
          अभी नहीं
        </motion.button>
        <motion.button
          className="btn-primary btn-green"
          onClick={() => chooseInsurance(true)}
          whileTap={{ scale: 0.95 }}
          style={{ display: "flex", alignItems: "center", gap: "6px" }}
        >
          <ShieldCheck size={18} strokeWidth={2.5} /> सुरक्षा लो!
        </motion.button>
      </div>
    </motion.div>
  );
}
