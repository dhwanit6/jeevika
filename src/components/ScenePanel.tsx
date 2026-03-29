import { useGameStore, useComputedState } from "../store/gameStore";
import { dreams, formatRupees } from "../data/story";
import { ShieldCheck } from "lucide-react";

/** CSS-animated Savings Tree — grows from seed to banyan */
function SavingsTreeSVG({ stage }: { stage: number }) {
  const configs = [
    { trunk: 4, canopy: 0, leaves: 0, color: "#6B8E5B", label: "🌱" },
    { trunk: 16, canopy: 12, leaves: 3, color: "#5A9E4B", label: "" },
    { trunk: 28, canopy: 22, leaves: 6, color: "#4A8E3B", label: "" },
    { trunk: 38, canopy: 32, leaves: 10, color: "#3A7E2B", label: "" },
    { trunk: 44, canopy: 42, leaves: 16, color: "#2A6E1B", label: "" },
  ];
  const c = configs[stage];

  if (stage === 0) {
    return (
      <div className="tree-svg-wrap">
        <svg width="48" height="54" viewBox="0 0 48 54">
          <rect x="22" y="44" width="4" height="10" rx="1" fill="#8B6914" />
          <ellipse cx="24" cy="42" rx="6" ry="5" fill="#5A9E4B" opacity="0.9" />
          <ellipse cx="24" cy="40" rx="4" ry="3" fill="#7BC86C" opacity="0.7" />
        </svg>
        <span className="tree-label">बीज</span>
      </div>
    );
  }

  return (
    <div className="tree-svg-wrap">
      <svg width="56" height="60" viewBox="0 0 56 60">
        {/* Trunk */}
        <rect x="24" y={60 - c.trunk} width={4 + stage} height={c.trunk} rx="2" fill="#8B6914" />
        {/* Canopy layers */}
        <ellipse cx="28" cy={60 - c.trunk - c.canopy * 0.3} rx={c.canopy * 0.6} ry={c.canopy * 0.5} fill={c.color} opacity="0.85" />
        <ellipse cx="22" cy={60 - c.trunk - c.canopy * 0.4} rx={c.canopy * 0.4} ry={c.canopy * 0.35} fill="#7BC86C" opacity="0.6" />
        <ellipse cx="34" cy={60 - c.trunk - c.canopy * 0.35} rx={c.canopy * 0.35} ry={c.canopy * 0.3} fill="#8ED87E" opacity="0.5" />
        {/* Golden coins on large trees */}
        {stage >= 3 && (
          <>
            <circle cx="18" cy={60 - c.trunk - c.canopy * 0.2} r="3" fill="#F5A623" stroke="#D4900A" strokeWidth="0.5" />
            <circle cx="36" cy={60 - c.trunk - c.canopy * 0.3} r="3" fill="#F5A623" stroke="#D4900A" strokeWidth="0.5" />
            {stage >= 4 && <circle cx="28" cy={60 - c.trunk - c.canopy * 0.5} r="3.5" fill="#FFD700" stroke="#D4900A" strokeWidth="0.5" />}
          </>
        )}
      </svg>
      <span className="tree-label">{stage < 2 ? "पौधा" : stage < 4 ? "पेड़" : "बरगद"}</span>
    </div>
  );
}

/** CSS-animated Debt Snake — coils around a house silhouette */
function DebtSnakeSVG({ stage }: { stage: number }) {
  if (stage === 0) return null;
  const length = 20 + stage * 18;
  const thickness = 3 + stage;

  return (
    <div className="snake-svg-wrap">
      <svg width="56" height="56" viewBox="0 0 56 56">
        {/* House silhouette */}
        <path d="M18 32 L28 20 L38 32 L38 48 L18 48 Z" fill="rgba(139,105,20,0.2)" stroke="rgba(139,105,20,0.3)" strokeWidth="1" />
        {/* Snake body — sinuous path */}
        <path
          d={`M ${48 - stage * 2} 48 Q 40 ${48 - length * 0.3} ${28 + stage * 2} ${48 - length * 0.5} Q ${16 - stage} ${48 - length * 0.7} ${20 + stage} ${48 - length * 0.9}`}
          fill="none"
          stroke="#C0392B"
          strokeWidth={thickness}
          strokeLinecap="round"
          opacity="0.85"
          className="snake-path"
        />
        {/* Snake head */}
        <circle cx={20 + stage} cy={48 - length * 0.9} r={thickness * 0.8} fill="#E74C3C" />
        <circle cx={18 + stage} cy={48 - length * 0.9 - 1} r="1.2" fill="#2C3E50" />
        {/* Second head for stage 4 */}
        {stage >= 4 && (
          <>
            <circle cx={24 + stage} cy={48 - length * 0.85} r={thickness * 0.6} fill="#E74C3C" />
            <circle cx={23 + stage} cy={48 - length * 0.85 - 1} r="1" fill="#2C3E50" />
          </>
        )}
        {/* ₹ symbols on body */}
        <text x="35" y="42" fontSize="8" fill="#C0392B" fontWeight="bold" opacity="0.6">₹</text>
        {stage >= 2 && <text x="25" y="36" fontSize="8" fill="#C0392B" fontWeight="bold" opacity="0.6">₹</text>}
      </svg>
      <span className="snake-label">कर्ज़ का साँप</span>
    </div>
  );
}

/** Photo Frame — blurs/clears based on savings progress */
function PhotoFrameSVG({ clarity, label }: { clarity: number; label: string }) {
  const blur = Math.max(0, (100 - clarity) / 15);

  return (
    <div className="photo-frame-wrap">
      <div className="photo-frame-inner">
        {/* Girl illustration — SVG based */}
        <svg width="40" height="44" viewBox="0 0 40 44" style={{ filter: `blur(${blur}px)`, transition: "filter 0.6s ease" }}>
          {/* Face */}
          <circle cx="20" cy="14" r="10" fill="#D4A574" />
          {/* Hair */}
          <path d="M10 12 Q10 4 20 4 Q30 4 30 12" fill="#2C1810" />
          <path d="M10 12 L8 24" stroke="#2C1810" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M30 12 L32 24" stroke="#2C1810" strokeWidth="2.5" strokeLinecap="round" />
          {/* Bindi */}
          <circle cx="20" cy="10" r="1.2" fill="#C0392B" />
          {/* Eyes */}
          <ellipse cx="16" cy="14" rx="1.5" ry="1.2" fill="#2C3E50" />
          <ellipse cx="24" cy="14" rx="1.5" ry="1.2" fill="#2C3E50" />
          {/* Smile */}
          <path d="M16 18 Q20 22 24 18" stroke="#8B4513" strokeWidth="1" fill="none" />
          {/* Uniform */}
          <rect x="12" y="24" width="16" height="16" rx="3" fill="#3498DB" />
          <rect x="18" y="24" width="4" height="8" rx="1" fill="white" opacity="0.5" />
          {/* Book */}
          <rect x="28" y="28" width="8" height="10" rx="1" fill="#E74C3C" opacity="0.8" />
          {/* Ribbons */}
          <circle cx="8" cy="22" r="2" fill="#E74C3C" />
          <circle cx="32" cy="22" r="2" fill="#E74C3C" />
        </svg>
        {/* Frame border */}
        <div className="photo-frame-border" />
      </div>
      <span className="frame-pct-label">{label} {clarity}%</span>
    </div>
  );
}


export default function ScenePanel() {
  const { dreamId, savings, insurance } = useGameStore();
  const { photoClarity, treeStage, snakeStage, debt } = useComputedState();

  const selectedDream = dreams.find((d) => d.id === dreamId);

  return (
    <section className="scene-panel">
      <div className="scene-visual">
        {/* Village panorama */}
        <img
          src="/images/village.webp"
          alt="Indian village scene"
          className="scene-bg-img"
          loading="eager"
          draggable={false}
        />

        {/* Overlay elements */}
        <div className="scene-overlay">
          <SavingsTreeSVG stage={treeStage} />
          <DebtSnakeSVG stage={snakeStage} />
          <PhotoFrameSVG
            clarity={photoClarity}
            label={selectedDream?.frameLabel ?? "सपना"}
          />
          {insurance && (
            <div className="shield-badge" style={{ display: "flex", alignItems: "center", justifyContent: "center", color: "var(--earth-green)" }}>
              <ShieldCheck size={20} />
            </div>
          )}
        </div>
      </div>

      {/* Stats row */}
      <div className="scene-stats">
        <div className="scene-stat">
          <span className="stat-label">💰 बचत</span>
          <span className="stat-value">{formatRupees(savings)}</span>
        </div>
        <div className="scene-stat">
          <span className="stat-label">{debt ? "🐍" : "✅"} कर्ज़</span>
          <span className="stat-value">{debt ? formatRupees(debt) : "नहीं"}</span>
        </div>
        <div className="scene-stat">
          <span className="stat-label">🖼️ सपना</span>
          <span className="stat-value">{photoClarity}%</span>
        </div>
      </div>
    </section>
  );
}
 
