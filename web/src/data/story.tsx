import { ReactNode } from "react";
import {
  Scissors,
  ChefHat,
  Store,
  BookOpen,
  Home,
  Settings,
  Banknote,
  ShoppingBag,
  ShieldCheck,
  ShieldAlert,
  CheckCircle2,
  Leaf,
  AlertOctagon,
  TrendingUp,
  AlertCircle,
  Smartphone,
  Star,
  Lock,
  Coins,
  Pill,
  Bus,
  Sparkles,
  Wrench
} from "lucide-react";

export type WalletTarget = "home" | "work";

export interface LivelihoodOption {
  id: string;
  icon: ReactNode;
  titleHindi: string;
  titleEnglish: string;
  descHindi: string;
}

export interface DreamOption {
  id: string;
  icon: ReactNode;
  titleHindi: string;
  titleEnglish: string;
  goal: number;
  frameIcon: ReactNode;
  frameLabel: string;
}

export interface EventCard {
  id: string;
  kind: "income" | "expense";
  icon: ReactNode;
  titleHindi: string;
  titleEnglish: string;
  detailHindi: string;
  amount: number;
  correct: WalletTarget;
}

/* ─── LIVELIHOODS ─── */
export const livelihoods: LivelihoodOption[] = [
  {
    id: "tailor",
    icon: <Scissors className="livelihood-icon" />,
    titleHindi: "सिलाई का काम",
    titleEnglish: "Tailoring",
    descHindi: "घर बैठे सुई-धागे से कमाई",
  },
  {
    id: "food",
    icon: <ChefHat className="livelihood-icon" />,
    titleHindi: "घर का खाना बेचना",
    titleEnglish: "Home Food",
    descHindi: "रोज़ बनाओ, रोज़ बेचो",
  },
  {
    id: "kirana",
    icon: <Store className="livelihood-icon" />,
    titleHindi: "छोटी दुकान",
    titleEnglish: "Shop",
    descHindi: "गाँव की अपनी दुकान",
  },
];

/* ─── DREAMS ─── */
export const dreams: DreamOption[] = [
  {
    id: "education",
    icon: <BookOpen className="dream-icon" />,
    titleHindi: "गुड़िया की पढ़ाई",
    titleEnglish: "Gudiya's School",
    goal: 10000,
    frameIcon: <BookOpen className="frame-icon" />,
    frameLabel: "गुड़िया",
  },
  {
    id: "home",
    icon: <Home className="dream-icon" />,
    titleHindi: "पक्का घर",
    titleEnglish: "Strong Home",
    goal: 15000,
    frameIcon: <Home className="frame-icon" />,
    frameLabel: "सपना",
  },
  {
    id: "business",
    icon: <Settings className="dream-icon" />,
    titleHindi: "नई मशीन",
    titleEnglish: "New Machine",
    goal: 12000,
    frameIcon: <Settings className="frame-icon" />,
    frameLabel: "मशीन",
  },
];

/* ─── KHARIF EVENTS (full pool — 10 events, game picks 6) ─── */
const _allKharifEvents: EventCard[] = [
  {
    id: "harvest-income",
    kind: "income",
    icon: <img src="/images/asset_harvest.png" className="event-img" alt="Harvest" />,
    titleHindi: "फ़सल बिकी — ₹12,000 आए",
    titleEnglish: "Harvest income",
    detailHindi: "रामू की धान बिकी। ये घर चलाने का पैसा है, बेटी।",
    amount: 12000,
    correct: "home",
  },
  {
    id: "orders-advance",
    kind: "income",
    icon: <img src="/images/asset_tailor.png" className="event-img" alt="Tailor" />,
    titleHindi: "सिलाई का एडवांस — ₹2,500",
    titleEnglish: "Tailoring advance",
    detailHindi: "दो औरतों ने ब्लाउज़ के पैसे दिए। ये काम की कमाई है।",
    amount: 2500,
    correct: "work",
  },
  {
    id: "school-fee",
    kind: "expense",
    icon: <img src="/images/asset_school.png" className="event-img" alt="School" />,
    titleHindi: "गुड़िया की फ़ीस — ₹1,500",
    titleEnglish: "School fee",
    detailHindi: "बेटी को पढ़ाना है तो फ़ीस भरनी पड़ेगी। घर का ख़र्चा।",
    amount: 1500,
    correct: "home",
  },
  {
    id: "fabric",
    kind: "expense",
    icon: <Scissors className="event-icon" />,
    titleHindi: "कपड़ा-धागा — ₹1,800",
    titleEnglish: "Fabric & thread",
    detailHindi: "ऑर्डर पूरा करना है तो सामान लाना पड़ेगा। काम का ख़र्चा।",
    amount: 1800,
    correct: "work",
  },
  {
    id: "ration",
    kind: "expense",
    icon: <ShoppingBag className="event-icon" />,
    titleHindi: "राशन — ₹3,000",
    titleEnglish: "Monthly ration",
    detailHindi: "घर में चावल-दाल लानी है। ये घर का ख़र्चा है, बेटी।",
    amount: 3000,
    correct: "home",
  },
  {
    id: "final-payment",
    kind: "income",
    icon: <Banknote className="event-icon" />,
    titleHindi: "सिलाई की बाकी कमाई — ₹900",
    titleEnglish: "Final payment",
    detailHindi: "ब्लाउज़ बनाकर दिए, बाकी पैसे मिले। काम का पैसा।",
    amount: 900,
    correct: "work",
  },
  /* ─── NEW: expanded pool for replayability ─── */
  {
    id: "medicine",
    kind: "expense",
    icon: <Pill className="event-icon" />,
    titleHindi: "दवाई — ₹800",
    titleEnglish: "Medicine",
    detailHindi: "रामू को बुख़ार है। दवाई घर का ख़र्चा है।",
    amount: 800,
    correct: "home",
  },
  {
    id: "travel",
    kind: "expense",
    icon: <Bus className="event-icon" />,
    titleHindi: "बस का किराया — ₹400",
    titleEnglish: "Bus fare for work",
    detailHindi: "शहर जाकर कपड़ा लाना है। ये काम का ख़र्चा है।",
    amount: 400,
    correct: "work",
  },
  {
    id: "diwali-bonus",
    kind: "income",
    icon: <Sparkles className="event-icon" />,
    titleHindi: "दिवाली बोनस — ₹1,500",
    titleEnglish: "Diwali bonus orders",
    detailHindi: "दिवाली पर ज़्यादा ऑर्डर आए। ये काम की कमाई है।",
    amount: 1500,
    correct: "work",
  },
  {
    id: "machine-repair",
    kind: "expense",
    icon: <Wrench className="event-icon" />,
    titleHindi: "मशीन की मरम्मत — ₹1,200",
    titleEnglish: "Sewing machine repair",
    detailHindi: "सिलाई मशीन खराब हो गई। ठीक करवाना ज़रूरी है। काम का ख़र्चा।",
    amount: 1200,
    correct: "work",
  },
];

/** Shuffle array using Fisher-Yates and pick `count` items */
function shufflePick<T>(arr: T[], count: number): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, count);
}

/** 6 randomly selected events per game — ensures replayability */
export const kharifEvents: EventCard[] = shufflePick(_allKharifEvents, 6);

/* ─── CRISIS PATHS ─── */
export const crisisPaths = {
  protected: {
    icon: <ShieldCheck className="crisis-icon" />,
    titleHindi: "सुरक्षा थी — सब सँभल गया",
    titleEnglish: "Protected",
    bodyHindi:
      "रामू गिरा, पैर टूटा। पर तूने सुरक्षा ली थी ना? अस्पताल का बिल बीमा से भरा। बचत सुरक्षित!",
    outcomes: [
      { icon: <CheckCircle2 size={16} />, text: "कोई कर्ज़ नहीं" },
      { icon: <BookOpen size={16} />, text: "गुड़िया का स्कूल जारी" },
      { icon: <Leaf size={16} />, text: "बचत सुरक्षित रही" },
    ],
  },
  exposed: {
    icon: <ShieldAlert className="crisis-icon" />,
    titleHindi: "सुरक्षा नहीं — सेठ जी आ गए",
    titleEnglish: "Unprotected",
    bodyHindi:
      "वही हादसा। पर इस बार कोई सुरक्षा नहीं। अस्पताल में ₹15,000 लगे। बचत ख़त्म। सेठ जी से उधार — 5% ब्याज हर महीने।",
    outcomes: [
      { icon: <AlertOctagon size={16} />, text: "₹15,000 कर्ज़" },
      { icon: <TrendingUp size={16} />, text: "ब्याज बढ़ता जाएगा" },
      { icon: <AlertCircle size={16} />, text: "गुड़िया की पढ़ाई ख़तरे में" },
    ],
  },
};

/* ─── OTP TRAP ─── */
export const otpTrap = {
  callerHindi:
    "मैडम जी, आपका बैंक KYC ब्लॉक है। अभी OTP बताइए वरना अकाउंट बंद!",
  callerEnglish:
    "Your KYC is blocked. Share OTP now or account will freeze.",
  safeHindi:
    "शाबाश बेटी! फ़ोन काट दिया, ख़ुद बैंक को फ़ोन किया। पैसे बचे! यही तो असली हिम्मत है।",
  safeEnglish:
    "You hung up and called the bank. Money is safe!",
  unsafeHindi:
    "OTP बोल दिया... ₹3,000 उड़ गए। पर हिम्मत रखो — अभी 1930 पर फ़ोन करो!",
  unsafeEnglish:
    "₹3,000 stolen. Call 1930 helpline now!",
};

/* ─── NARRATOR LINES (Dadi's voice — warm, knowing) ─── */
export const narratorLines = {
  splash: {
    hindi: "आओ बेटी, एक कहानी सुनो... तुम्हारी अपनी कहानी।",
    english: "Come, listen to a story... your own story.",
  },
  kharifIntro: {
    hindi: "देखो बेटी, पैसा आया है। अब सोचो — किस थैले में रखोगी?",
    english: "Money has arrived. Think — which bag does it go in?",
  },
  savingsIntro: {
    hindi: "बेटी, ख़र्चे तो हो गए। अब कुछ बचाकर रखोगी सपने के लिए?",
    english: "Expenses are done. Will you save some for the dream?",
  },
  schemeIntro: {
    hindi: "बेटी, बारिश आने वाली है। पोस्टमैन अंकल एक ज़रूरी बात लाए हैं...",
    english: "Monsoon is coming. The postman brings important news...",
  },
  crisisIntro: {
    hindi: "तीन महीने बाद... रामू खेत में गिर गया। पैर टूट गया। अब देखो क्या होता है...",
    english: "Three months later... Ramu fell. His leg broke.",
  },
  otpIntro: {
    hindi: "अरे! मुसीबत में एक और झटका — अनजान नंबर से फ़ोन बज रहा है...",
    english: "Another shock — an unknown call is ringing...",
  },
  reportIntro: {
    hindi: "बेटी, मौसम पूरा हुआ। देखो कविता की ज़िंदगी कहाँ पहुँची।",
    english: "The season is over. See where Kavita stands now.",
  },
};

/* ─── ACTION LIST BUILDER ─── */
export function buildActionList(params: {
  insurance: boolean | null;
  walletScore: number;
  otpOutcome: "safe" | "unsafe" | null;
  savings: number;
}): { icon: ReactNode; hindi: string; english: string }[] {
  const actions: { icon: ReactNode; hindi: string; english: string }[] = [];

  if (params.walletScore < 100) {
    actions.push({
      icon: <Home size={18} />,
      hindi: "घर में एक डिब्बा \"घर\" का, एक \"काम\" का — पैसे अलग रखो।",
      english: "Keep two boxes at home — one for home money, one for work.",
    });
  } else {
    actions.push({
      icon: <Star size={18} />,
      hindi: "शाबाश! अलग रखना जारी रखो — मुनाफ़ा हमेशा दिखेगा!",
      english: "Keep separating money so profit stays visible!",
    });
  }

  if (!params.insurance) {
    actions.push({
      icon: <Banknote size={18} />,
      hindi: "बैंक जाओ, बीमा विस्तार (Bima Vistaar) की जानकारी लो — ₹1 प्रतिदिन में पूरी सुरक्षा!",
      english: "Visit bank, ask about Bima Vistaar — complete coverage for ₹1/day.",
    });
  } else {
    actions.push({
      icon: <CheckCircle2 size={18} />,
      hindi: "सुरक्षा ली — साल में एक बार चेक करो कि चालू है।",
      english: "Protection active — verify once a year.",
    });
  }

  if (params.otpOutcome !== "safe") {
    actions.push({
      icon: <Lock size={18} />,
      hindi: "OTP कभी किसी को मत बताओ! पैसे कटें तो 1930 पर फ़ोन करो।",
      english: "Never share OTP! Call 1930 if money is lost.",
    });
  } else {
    actions.push({
      icon: <Smartphone size={18} />,
      hindi: "हिम्मत दिखाई! अब ₹10 भेजकर UPI सीखो। PMJDY खाते से करो।",
      english: "Try UPI with ₹10 from your PMJDY account.",
    });
  }

  actions.push({
    icon: <Coins size={18} />,
    hindi: "हर हफ़्ते थोड़ा बचाओ — गुड़िया के नाम से। APY योजना भी देखो।",
    english: "Save weekly in Gudiya's name. Look into APY scheme.",
  });

  return actions;
}

/* ─── HELPER ─── */
export function formatRupees(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}
 
