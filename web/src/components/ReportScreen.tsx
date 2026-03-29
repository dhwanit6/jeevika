import { motion } from "framer-motion";
import { useGameStore, useComputedState } from "../store/gameStore";
import {
  formatRupees,
  buildActionList,
  otpTrap,
} from "../data/story";
import {
  Wallet,
  AlertOctagon,
  ClipboardList,
  CheckCircle2,
  RefreshCw,
  TrendingUp,
  Shield,
  ShieldX,
  Lock,
  Unlock,
  Star,
} from "lucide-react";

import Confetti from "./Confetti";

/** Simple animated progress ring */
function ScoreRing({ value, color, size = 52 }: { value: number; color: string; size?: number }) {
  const r = (size - 8) / 2;
  const c = 2 * Math.PI * r;
  const offset = c - (value / 100) * c;

  return (
    <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="rgba(62,39,35,0.08)" strokeWidth="5" />
      <motion.circle
        cx={size / 2} cy={size / 2} r={r}
        fill="none" stroke={color} strokeWidth="5"
        strokeLinecap="round"
        strokeDasharray={c}
        initial={{ strokeDashoffset: c }}
        animate={{ strokeDashoffset: offset }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
      />
    </svg>
  );
}

export default function ReportScreen() {
  const state = useGameStore();
  const { walletScore, debt, digitalCourage, photoClarity } =
    useComputedState();

  const actions = buildActionList({
    insurance: state.insurance,
    walletScore,
    otpOutcome: state.otpOutcome,
    savings: state.savings,
  });

  const isSuccess = walletScore >= 70 && debt === 0;

  // Overall life score
  const lifeScore = Math.round(
    (walletScore * 0.3) +
    (photoClarity * 0.25) +
    (digitalCourage * 0.2) +
    ((debt === 0 ? 100 : 0) * 0.15) +
    ((state.insurance ? 100 : 0) * 0.1)
  );

  return (
    <motion.div
      className="section-gap report-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {isSuccess && <Confetti />}

      {/* Hero score */}
      <div className="report-hero">
        <div className="report-hero-ring">
          <ScoreRing value={lifeScore} color={lifeScore >= 60 ? "var(--earth-green)" : "var(--danger)"} size={80} />
          <span className="report-hero-score">{lifeScore}</span>
        </div>
        <div className="report-hero-text">
          <h2 className="report-hero-title">
            {lifeScore >= 70 ? "🌟 शाबाश कविता!" : lifeScore >= 40 ? "💪 अच्छी कोशिश!" : "😔 अगली बार बेहतर"}
          </h2>
          <p className="report-hero-sub">कविता की ज़िंदगी का स्कोर</p>
        </div>
      </div>

      {/* Compact 2x2 metrics */}
      <div className="metrics-grid">
        <div className={`metric-card ${walletScore >= 70 ? "earth" : "risk"}`}>
          <span className="metric-icon"><Wallet size={18} /></span>
          <span className="metric-label">बटुआ अलग</span>
          <span className="metric-value">{walletScore}%</span>
        </div>
        <div className={`metric-card ${photoClarity >= 50 ? "gold" : "risk"}`}>
          <span className="metric-icon"><Star size={18} /></span>
          <span className="metric-label">सपना</span>
          <span className="metric-value">{photoClarity}%</span>
        </div>
        <div className={`metric-card ${debt === 0 ? "earth" : "risk"}`}>
          <span className="metric-icon">{debt ? <AlertOctagon size={18} /> : <CheckCircle2 size={18} />}</span>
          <span className="metric-label">कर्ज़</span>
          <span className="metric-value">{debt ? formatRupees(debt) : "नहीं ✅"}</span>
        </div>
        <div className={`metric-card ${digitalCourage >= 60 ? "leaf" : "risk"}`}>
          <span className="metric-icon">{state.otpOutcome === "safe" ? <Lock size={18} /> : <Unlock size={18} />}</span>
          <span className="metric-label">डिजिटल हिम्मत</span>
          <span className="metric-value">{digitalCourage}%</span>
        </div>
      </div>

      {/* Key decisions summary */}
      <div className="report-decisions">
        <div className={`decision-chip ${state.insurance ? "good" : "bad"}`}>
          {state.insurance ? <Shield size={14} /> : <ShieldX size={14} />}
          <span>सुरक्षा: {state.insurance ? "ली ✅" : "नहीं ली ❌"}</span>
        </div>
        <div className={`decision-chip ${state.otpOutcome === "safe" ? "good" : "bad"}`}>
          {state.otpOutcome === "safe" ? <Lock size={14} /> : <Unlock size={14} />}
          <span>OTP: {state.otpOutcome === "safe" ? "बचाया ✅" : "दे दिया ❌"}</span>
        </div>
        {state.savings > 0 && (
          <div className="decision-chip good">
            <TrendingUp size={14} />
            <span>बचत: {formatRupees(state.savings)}</span>
          </div>
        )}
      </div>

      {/* OTP result */}
      {state.otpOutcome && (
        <div
          className="card"
          style={{
            borderLeft: `3px solid ${state.otpOutcome === "safe" ? "var(--earth-green)" : "var(--danger)"}`,
            padding: "8px 10px",
          }}
        >
          <p style={{ fontFamily: "var(--font-hindi)", fontSize: "0.8rem", lineHeight: 1.4 }}>
            {state.otpOutcome === "safe" ? otpTrap.safeHindi : otpTrap.unsafeHindi}
          </p>
        </div>
      )}

      {/* Real-life actions */}
      <div className="action-card">
        <h3 style={{ fontSize: "0.85rem", display: "flex", alignItems: "center", gap: "6px" }}>
          <ClipboardList size={16} /> असल ज़िंदगी में यह करो:
        </h3>
        <div className="action-list">
          {actions.slice(0, 4).map((action, i) => (
            <div key={i} className="action-item">
              <span className="action-bullet" style={{ background: "transparent", color: "var(--terracotta)", padding: 0 }}>{action.icon}</span>
              <p style={{ fontFamily: "var(--font-hindi)", fontWeight: 600, fontSize: "0.78rem" }}>
                {action.hindi}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Replay */}
      <motion.button
        className="btn-primary"
        onClick={state.reset}
        whileTap={{ scale: 0.97 }}
        style={{ marginTop: "auto" }}
      >
        <span style={{ display: 'flex', alignItems: 'center', gap: '6px', justifyContent: 'center' }}>
          <RefreshCw size={18} /> फिर से खेलो — नए फ़ैसले लो!
        </span>
      </motion.button>
    </motion.div>
  );
}
