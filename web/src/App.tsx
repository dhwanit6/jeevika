import { AnimatePresence, motion } from "framer-motion";
import "./upgrades.css";
import { useGameStore, type Screen } from "./store/gameStore";
import GameHeader from "./components/GameHeader";
import WalletBar from "./components/WalletBar";
import ScenePanel from "./components/ScenePanel";
import SplashScreen from "./components/SplashScreen";
import SetupScreen from "./components/SetupScreen";
import KharifScreen from "./components/KharifScreen";
import SavingsScreen from "./components/SavingsScreen";
import SchemeScreen from "./components/SchemeScreen";
import CrisisScreen from "./components/CrisisScreen";
import OTPScreen from "./components/OTPScreen";
import ReportScreen from "./components/ReportScreen";
import AchievementPopup from "./components/AchievementPopup";
import VoiceButton from "./components/VoiceButton";
import ErrorBoundary from "./components/ErrorBoundary";

const screenComponents: Record<string, React.ComponentType> = {
  splash: SplashScreen,
  setup: SetupScreen,
  kharif: KharifScreen,
  savings: SavingsScreen,
  scheme: SchemeScreen,
  crisis: CrisisScreen,
  otp: OTPScreen,
  report: ReportScreen,
};

/* Narration mapping moved to Audio files directly for highest fidelity */

// Screens that show the scene panel (village visual)
const scenePanelScreens = new Set<Screen>([
  "kharif",
  "savings",
  "scheme",
  "crisis",
  "otp",
]);

// Screens that show the wallet bar
const walletBarScreens = new Set<Screen>([
  "kharif",
  "savings",
  "scheme",
  "crisis",
  "otp",
  "report",
]);

export default function App() {
  const screen = useGameStore((s) => s.screen);

  const ScreenComponent = screenComponents[screen];
  const showScene = scenePanelScreens.has(screen);
  const showWallet = walletBarScreens.has(screen);

  return (
    <ErrorBoundary>
      <main className="app-shell">
        <section className="phone-frame">
          {screen !== "splash" && screen !== "setup" && <GameHeader />}

          {showWallet && <WalletBar />}

          {showScene && <ScenePanel />}

          <AchievementPopup />

          <div className="screen-content">
            <AnimatePresence mode="wait">
              <motion.div
                key={screen}
                className="page-transition"
                initial={{ opacity: 0, y: 16, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -16, scale: 0.98 }}
                transition={{ type: "spring", stiffness: 280, damping: 24 }}
              >
                {ScreenComponent && <ScreenComponent />}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Floating voice narration button — plays local AI MP3 */}
          <VoiceButton screenKey={screen} />
        </section>
      </main>
    </ErrorBoundary>
  );
}
