import { create } from "zustand";
import { persist } from "zustand/middleware";
import { kharifEvents, type EventCard, type WalletTarget } from "../data/story";

export type Screen =
  | "splash"
  | "setup"
  | "kharif"
  | "savings"
  | "scheme"
  | "crisis"
  | "otp"
  | "report";

export type OtpOutcome = "safe" | "unsafe" | null;
export type CrisisOutcome = "protected" | "exposed" | null;

interface Allocation {
  eventId: string;
  selected: WalletTarget;
  correct: boolean;
}

interface GameState {
  screen: Screen;
  livelihoodId: string | null;
  dreamId: string | null;
  currentEventIndex: number;
  allocations: Allocation[];
  homeWallet: number;
  workWallet: number;
  savings: number;
  insurance: boolean | null;
  crisisOutcome: CrisisOutcome;
  otpOutcome: OtpOutcome;
  justAllocated: boolean;
  achievements: string[];
  newAchievement: string | null;
}

interface GameActions {
  setScreen: (screen: Screen) => void;
  setLivelihood: (id: string) => void;
  setDream: (id: string) => void;
  beginJourney: () => void;
  allocateEvent: (event: EventCard, target: WalletTarget) => void;
  setAsideSavings: () => void;
  skipSavings: () => void;
  chooseInsurance: (buy: boolean) => void;
  continueCrisis: () => void;
  handleOtpChoice: (outcome: OtpOutcome) => void;
  reset: () => void;
  clearJustAllocated: () => void;
  unlockAchievement: (id: string) => void;
  clearNewAchievement: () => void;
}

export type GameStore = GameState & GameActions;

const SAVINGS_AMOUNT = 2000;
const INSURANCE_PREMIUM = 1500;
const DEBT_WITHOUT_INSURANCE = 16875;
const DIGITAL_LOSS = 3000;

const initialState: GameState = {
  screen: "splash",
  livelihoodId: null,
  dreamId: null,
  currentEventIndex: 0,
  allocations: [],
  homeWallet: 0,
  workWallet: 0,
  savings: 0,
  insurance: null,
  crisisOutcome: null,
  otpOutcome: null,
  justAllocated: false,
  achievements: [],
  newAchievement: null,
};

export const useGameStore = create<GameStore>()(
  persist(
    (set, get) => ({
      ...initialState,

      setScreen: (screen) => set({ screen }),

      setLivelihood: (id) => set({ livelihoodId: id }),

      setDream: (id) => set({ dreamId: id }),

      beginJourney: () => {
        const { livelihoodId, dreamId } = get();
        if (!livelihoodId || !dreamId) return;
        set({ screen: "kharif" });
      },

      allocateEvent: (event, target) => {
        const correct = event.correct === target;
        const isIncome = event.kind === "income";

        set((s) => ({
          allocations: [...s.allocations, { eventId: event.id, selected: target, correct }],
          currentEventIndex: s.currentEventIndex + 1,
          homeWallet:
            s.homeWallet + (target === "home" ? (isIncome ? event.amount : -event.amount) : 0),
          workWallet:
            s.workWallet + (target === "work" ? (isIncome ? event.amount : -event.amount) : 0),
          justAllocated: true,
          screen:
            s.currentEventIndex + 1 >= kharifEvents.length ? "savings" : s.screen,
        }));
      },

      clearJustAllocated: () => set({ justAllocated: false }),

      unlockAchievement: (id) => {
        const { achievements } = get();
        if (!achievements.includes(id)) {
          set({
            achievements: [...achievements, id],
            newAchievement: id,
          });
        }
      },

      clearNewAchievement: () => set({ newAchievement: null }),

      setAsideSavings: () => {
        get().unlockAchievement("bachat_rani");
        set((s) => ({
          screen: "scheme",
          homeWallet: s.homeWallet - SAVINGS_AMOUNT,
          savings: s.savings + SAVINGS_AMOUNT,
        }));
      },

      skipSavings: () => set({ screen: "scheme" }),

      chooseInsurance: (buy) => {
        if (buy) get().unlockAchievement("satark_nagrik");
        set((s) => ({
          insurance: buy,
          screen: "crisis",
          homeWallet: buy ? s.homeWallet - INSURANCE_PREMIUM : s.homeWallet,
        }));
      },

      continueCrisis: () => {
        const { insurance } = get();
        set({
          crisisOutcome: insurance ? "protected" : "exposed",
          screen: "otp",
        });
      },

      handleOtpChoice: (outcome) => {
        if (outcome === "safe") get().unlockAchievement("himmat_wali");
        if (outcome === "unsafe") {
          set((s) => {
            const lossFromHome = Math.min(s.homeWallet, DIGITAL_LOSS);
            const remaining = DIGITAL_LOSS - lossFromHome;
            const lossFromSavings = Math.min(s.savings, remaining);
            return {
              otpOutcome: outcome,
              screen: "report",
              homeWallet: s.homeWallet - lossFromHome,
              savings: s.savings - lossFromSavings,
            };
          });
        } else {
          set({ otpOutcome: outcome, screen: "report" });
        }
      },

      reset: () => set(initialState),
    }),
    {
      name: "jeevika-game-state",
    }
  )
);

/* ─── Derived selectors ─── */
export const SAVINGS_DECISION_AMOUNT = SAVINGS_AMOUNT;
export const INSURANCE_COST = INSURANCE_PREMIUM;
export const DEBT_AMOUNT = DEBT_WITHOUT_INSURANCE;

export function useComputedState() {
  const state = useGameStore();
  const totalEvents = kharifEvents.length;

  const walletScore =
    totalEvents > 0
      ? Math.round(
          (state.allocations.filter((a) => a.correct).length / totalEvents) * 100
        )
      : 0;

  const mixingMistakes = state.allocations.filter((a) => !a.correct).length;

  const debt = state.crisisOutcome === "exposed" ? DEBT_WITHOUT_INSURANCE : 0;

  const digitalCourage =
    state.otpOutcome === "safe" ? 82 : state.otpOutcome === "unsafe" ? 28 : 48;

  const dreamGoal = getDreamGoal(state.dreamId);
  const effectiveSavings = clamp(state.savings - debt * 0.08, 0, dreamGoal);
  const photoClarity = clamp(Math.round((effectiveSavings / dreamGoal) * 100), 0, 100);
  const treeStage = clamp(Math.ceil((state.savings / dreamGoal) * 4), 0, 4);
  const snakeStage = debt > 0 ? clamp(Math.ceil(debt / 5000), 1, 4) : 0;

  const screenIndex: Record<Screen, number> = {
    splash: 0,
    setup: 1,
    kharif: 2,
    savings: 3,
    scheme: 4,
    crisis: 5,
    otp: 6,
    report: 7,
  };

  const progressIndex = screenIndex[state.screen];

  return {
    walletScore,
    mixingMistakes,
    debt,
    digitalCourage,
    dreamGoal,
    photoClarity,
    treeStage,
    snakeStage,
    progressIndex,
  };
}

function getDreamGoal(dreamId: string | null): number {
  switch (dreamId) {
    case "education":
      return 10000;
    case "home":
      return 15000;
    case "business":
      return 12000;
    default:
      return 10000;
  }
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}
 
