import { useGameStore, useComputedState } from "../store/gameStore";
import { ReactNode } from "react";
import { Wheat, Umbrella, Snowflake, Smartphone, BarChart3 } from "lucide-react";

const TOTAL_STEPS = 8;

export default function GameHeader() {
  const { screen, reset } = useGameStore();
  const { progressIndex } = useComputedState();

  const seasonLabel = getSeasonLabel(screen);

  return (
    <>
      <header className="game-header">
        <div className="game-header-left">
          <h1>जीविका</h1>
          {seasonLabel && <span className="season-tag">{seasonLabel.icon} {seasonLabel.text}</span>}
        </div>
        {screen !== "splash" && screen !== "setup" && (
          <button className="reset-btn" onClick={reset}>
            ↻ शुरू से
          </button>
        )}
      </header>

      <div className="progress-bar">
        {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
          <span
            key={i}
            className={`progress-dot ${i <= progressIndex ? "active" : ""}`}
          />
        ))}
      </div>
    </>
  );
}

function getSeasonLabel(screen: string): { icon: ReactNode; text: string } | null {
  const s = { display: 'inline-flex', verticalAlign: 'middle', marginRight: '4px' } as const;
  switch (screen) {
    case "kharif":
    case "savings":
      return { icon: <Wheat size={14} style={s} />, text: "खरीफ़ — फ़सल का मौसम" };
    case "scheme":
      return { icon: <Umbrella size={14} style={s} />, text: "बारिश से पहले" };
    case "crisis":
      return { icon: <Snowflake size={14} style={s} />, text: "सर्दी — कठिन समय" };
    case "otp":
      return { icon: <Smartphone size={14} style={s} />, text: "डिजिटल परीक्षा" };
    case "report":
      return { icon: <BarChart3 size={14} style={s} />, text: "रिपोर्ट कार्ड" };
    default:
      return null;
  }
}
