import { motion } from "framer-motion";
import { useGameStore } from "../store/gameStore";
import { crisisPaths, narratorLines } from "../data/story";
import CharacterBubble from "./CharacterBubble";

export default function CrisisScreen() {
  const { insurance, continueCrisis } = useGameStore();

  const myPath = insurance ? crisisPaths.protected : crisisPaths.exposed;
  const otherPath = insurance ? crisisPaths.exposed : crisisPaths.protected;

  return (
    <motion.div
      className="section-gap crisis-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ overflowY: "auto", overflowX: "hidden", paddingBottom: "16px" }}
    >
      <CharacterBubble
        text={narratorLines.crisisIntro.hindi}
        side="right"
        mood="worried"
      />

      <h2 className="section-title-hindi crisis-headline">
        ⚡ एक हादसा। दो ज़िंदगियाँ।
      </h2>

      {/* Split-screen consequence engine */}
      <div className="consequence-split">
        {/* YOUR path — highlighted, animated */}
        <motion.div
          className={`consequence-path consequence-active ${insurance ? "path-safe" : "path-danger"}`}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
        >
          <div className="consequence-header">
            <span className="consequence-you-tag">← तुम्हारा रास्ता</span>
            <span className="consequence-icon">{myPath.icon}</span>
          </div>
          <h3 className="consequence-title">{myPath.titleHindi}</h3>
          <p className="consequence-body">{myPath.bodyHindi}</p>
          <ul className="consequence-outcomes">
            {myPath.outcomes.map((o) => (
              <li key={o.text}>
                <span className="outcome-icon">{o.icon}</span>
                <span>{o.text}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Divider with VS */}
        <div className="consequence-divider">
          <span className="vs-badge">VS</span>
        </div>

        {/* OTHER path — dimmed */}
        <motion.div
          className={`consequence-path consequence-other ${insurance ? "path-danger" : "path-safe"}`}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 0.55, x: 0 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
        >
          <div className="consequence-header">
            <span className="consequence-icon" style={{ transform: "scale(0.8)" }}>{otherPath.icon}</span>
          </div>
          <h3 className="consequence-title" style={{ fontSize: "0.85rem" }}>{otherPath.titleHindi}</h3>
          <p className="consequence-body" style={{ fontSize: "0.75rem" }}>
            {insurance
              ? "अगर सुरक्षा नहीं लेते तो यह होता..."
              : "अगर सुरक्षा ली होती तो सब सँभल जाता..."
            }
          </p>
        </motion.div>
      </div>

      <motion.button
        className="btn-primary"
        onClick={continueCrisis}
        whileTap={{ scale: 0.97 }}
        style={{ marginTop: "auto" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        आगे देखो →
      </motion.button>
    </motion.div>
  );
}
 
