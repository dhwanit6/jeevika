

# Web App. No question. Here's why.

---

## The Strategic Calculation

```
                    WEB APP              APK (Godot/Flutter)
                    
Build Speed         2-3 days solo        7-10 days solo
Judge Experience    Click link → play    Download → install → 
                    instantly            trust unknown APK → play
GitHub              Push code, deploy    Push code, judges can't
                    on Vercel, LIVE      run it without building
Demo Video          Screen record the    Same, but if APK crashes
                    live site            during recording you're done
Offline Story       Add PWA manifest     Native offline ✅
                    → works offline ✅    
AI Assistance       AI is INCREDIBLE     AI is decent at Godot
                    at React/HTML/JS     but slower, more bugs
Risk                Low — you know web   High — solo, new engine,
                                         build errors eat time
```

**The deciding factor:** Judges will receive 50+ submissions. They will NOT install 50 APKs on their phones. They WILL click 50 links. A live, playable web prototype that opens instantly in a browser beats a downloadable APK every single time.

---

## The Tech Stack (Revised for Web)

```
┌──────────────────────────────────────────────────┐
│           JEEVIKA WEB PROTOTYPE STACK             │
├──────────────────────────────────────────────────┤
│                                                  │
│  FRAMEWORK:    Next.js 14 (React)                │
│                OR plain React + Vite              │
│                                                  │
│  STYLING:      Tailwind CSS                      │
│                (fast, responsive, utility-first)  │
│                                                  │
│  ANIMATIONS:   Framer Motion                     │
│                (smooth transitions, drag-drop,    │
│                 split-screen, card animations)    │
│                                                  │
│  AUDIO:        Howler.js                         │
│                (audio playback, voice narration)  │
│                                                  │
│  STATE:        Zustand or React Context          │
│                (wallet balances, decisions,       │
│                 tree/snake/photo state)           │
│                                                  │
│  DATABASE:     localStorage                      │
│                (save progress, PIN system)        │
│                                                  │
│  DEPLOY:       Vercel (free tier)                │
│                (instant deploy from GitHub)       │
│                                                  │
│  PWA:          next-pwa or vite-pwa plugin       │
│                (offline capability + installable  │
│                 on Android home screen)           │
│                                                  │
│  ASSETS:       AI-generated illustrations        │
│                (Midjourney/DALL-E for characters, │
│                 backgrounds, icons)               │
│                                                  │
│  VOICE:        Pre-recorded or ElevenLabs TTS    │
│                (for prototype, TTS is acceptable) │
│                                                  │
└──────────────────────────────────────────────────┘

WHAT JUDGES SEE:
→ Live link on Vercel (jeevika.vercel.app)
→ GitHub repo with clean README
→ Works on their phone browser AND laptop
→ Installable as PWA on Android
→ Works offline after first load
```

---

## The "But You Said Godot" Objection

In the PPT we say Godot is the **production** tech stack. In the prototype submission we say:

> *"The prototype is built as a Progressive Web App for maximum accessibility during evaluation. The production version will be ported to Godot 4.x for native Android deployment with optimized APK size (<50MB) and full offline capability. The PWA prototype already demonstrates offline functionality via Service Workers, validating the architecture."*

**Judges understand prototypes are not production.** They want to see the IDEA working, not the final shipping product. A polished web prototype demonstrates more competence than a half-broken APK.

---

## What to Build (Scoped for Solo Dev + AI, 3-5 Days)

### MUST BUILD (Core Demo):

```
SCREEN 1: SPLASH + LANGUAGE SELECT
├── Jeevika logo animation
├── Language buttons (Hindi selected by default)
└── "Shuru Karein" (Start) button

SCREEN 2: AVATAR + DREAM SELECT  
├── 4 avatar cards (Tailor/Farmer wife/Shop/Food)
├── Tap to select → brief voice intro of each
├── 3 dream cards (Daughter education/House/Business)
├── Selected dream becomes the Photo Frame image
└── "Aage Badho" (Continue) button

SCREEN 3: GAME SCREEN — EPISODE 1 (KHARIF)
├── Top: Split Wallet bar (Home | Work)
├── Middle: Scene illustration (Kavita at home)
├── Bottom: Decision cards area
├── Corner: Photo Frame (blurred) + Tree (seed)
│
├── SCENE 1: Harvest income ₹12,000
│   └── Drag/tap to allocate into wallets
│
├── SCENE 2: Bima Vistaar power-up
│   └── Buy (₹1,500) or Skip
│
├── SCENE 3: Tailoring income ₹900
│   └── Allocate + expense allocation
│
└── SCENE END: Mini report card

SCREEN 4: CONSEQUENCE ENGINE — THE CRISIS
├── Skip to Episode 3 crisis for demo impact
├── "Ramu ka pair toota" (Ramu's leg broke)
├── SPLIT SCREEN:
│   ├── LEFT: "With Bima Vistaar" path
│   │   └── Shield absorbs, family safe
│   └── RIGHT: "Without Insurance" path
│       └── Seth Ji loan, snake appears,
│           photo blurs, daughter pulled
│           from school
└── Player sees BOTH → chooses

SCREEN 5: OTP TRAP MINI-GAME
├── Phone ring animation
├── Scam voice dialogue
├── [Share OTP] vs [Hang Up] buttons
├── Consequence plays out
└── 1930 helpline information

SCREEN 6: SEASON REPORT CARD
├── Savings Tree (visual stage)
├── Debt Snake (if applicable)
├── Photo Frame clarity %
├── Wallet Separation Score
├── Digital Courage %
├── Power-ups status
└── [Share on WhatsApp] [Play Next Season]
```

### NICE TO HAVE (If Time Permits):

```
□ SHG Meeting screen after report card
□ Episode 2 (Festival spending pressure)
□ APY/Sukanya power-up cards
□ Full Episode 4 with business growth decision
□ Annual Life Score
□ Sound effects and background music
□ Multiple language toggle working
```

### SHOW AS WIREFRAMES IN PPT (Don't Build):

```
□ Full Year 2 with harder decisions
□ Multiplayer SHG leaderboard
□ WhatsApp sharing integration
□ Real scheme enrollment deep-links
□ Content management system for new seasons
```

---

## Project Structure (Web)

```
jeevika/
├── public/
│   ├── audio/
│   │   ├── narrator/
│   │   │   ├── intro.mp3
│   │   │   ├── harvest_income.mp3
│   │   │   ├── bima_vistaar.mp3
│   │   │   ├── crisis_insured.mp3
│   │   │   ├── crisis_uninsured.mp3
│   │   │   ├── otp_scam.mp3
│   │   │   ├── otp_safe.mp3
│   │   │   └── season_report.mp3
│   │   └── sfx/
│   │       ├── coin_drop.mp3
│   │       ├── shield_activate.mp3
│   │       ├── snake_hiss.mp3
│   │       ├── tree_grow.mp3
│   │       ├── phone_ring.mp3
│   │       └── alert.mp3
│   ├── images/
│   │   ├── characters/
│   │   │   ├── kavita.png
│   │   │   ├── ramu.png
│   │   │   ├── gudiya.png
│   │   │   ├── seth_ji.png
│   │   │   ├── sunita.png
│   │   │   ├── meera.png
│   │   │   └── priya.png
│   │   ├── backgrounds/
│   │   │   ├── home.png
│   │   │   ├── field.png
│   │   │   ├── bank.png
│   │   │   └── market.png
│   │   ├── ui/
│   │   │   ├── wallet_home.png
│   │   │   ├── wallet_work.png
│   │   │   ├── tree_stages/ (5 PNGs)
│   │   │   ├── snake_stages/ (5 PNGs)
│   │   │   ├── photo_frame.png
│   │   │   └── shield.png
│   │   └── powerups/
│   │       ├── bima_vistaar.png
│   │       ├── apy.png
│   │       └── sukanya.png
│   └── manifest.json (PWA)
│
├── src/
│   ├── app/
│   │   ├── page.tsx (splash/menu)
│   │   ├── play/
│   │   │   └── page.tsx (main game)
│   │   └── layout.tsx
│   │
│   ├── components/
│   │   ├── SplitWallet.tsx
│   │   ├── DecisionCard.tsx
│   │   ├── ConsequenceEngine.tsx
│   │   ├── PhotoFrame.tsx
│   │   ├── SavingsTree.tsx
│   │   ├── DebtSnake.tsx
│   │   ├── PowerUpCard.tsx
│   │   ├── OTPTrap.tsx
│   │   ├── SeasonReport.tsx
│   │   ├── VoiceNarrator.tsx
│   │   └── SceneRenderer.tsx
│   │
│   ├── store/
│   │   └── gameStore.ts (Zustand)
│   │       // All game state:
│   │       // homeWallet, workWallet, savings,
│   │       // debt, insurance, pension, 
│   │       // digitalCourage, photoClarity,
│   │       // treeStage, snakeStage,
│   │       // currentSeason, currentScene,
│   │       // decisions[]
│   │
│   ├── data/
│   │   ├── story.ts 
│   │   │   // All narrative content,
│   │   │   // decision trees, dialogue
│   │   ├── schemes.ts
│   │   │   // Power-up data
│   │   └── financial.ts
│   │       // Interest calculations,
│   │       // consequence formulas
│   │
│   └── utils/
│       ├── audio.ts (Howler wrapper)
│       ├── save.ts (localStorage)
│       └── calculations.ts
│
├── tailwind.config.ts
├── next.config.js
├── package.json
└── README.md
```

---

## GitHub README Template

```markdown
# 🌱 JEEVIKA (जीविका) — Life & Livelihood Simulator

> "Apni Zindagi, Apne Faislay" (Your Life, Your Decisions)

A voice-first, offline-capable life simulation game that 
teaches financial literacy to rural Indian women — not 
through quizzes or lectures, but by letting them live a 
financial life and feel the consequences of every decision.

## 🎮 Play Now
🔗 [jeevika.vercel.app](https://jeevika.vercel.app)

## 📸 Screenshots
[Add 4-5 screenshots of key screens]

## 🧠 The Problem
- 35% of Indian bank accounts are dormant (World Bank)
- 93% of women micro-businesses mix personal & business 
  funds (IWWAGE/IFC)
- Only 14% of women pass complex financial literacy 
  thresholds (NSFE MTE 2025)
- Standard financial education has 0.09 SD effect on 
  behavior (Kaiser & Menkhoff meta-analysis, 126 RCTs)

## 💡 The Solution
Jeevika puts you inside Kavita's life — a rural tailor 
managing her household and business across four seasons. 
Every decision has consequences you SEE and FEEL through 
visual metaphors:

- 👛 **Split Wallet** — Separate home & business money
- 🔮 **Consequence Engine** — See both futures before choosing
- 🖼️ **Photo Frame** — Daughter's clarity tied to savings
- 🐍🌳 **Debt Snake vs Savings Tree** — Visual financial health
- 👩‍👩‍👧 **SHG Circle** — Peer accountability
- ⚡ **Scheme Power-Ups** — Real govt schemes as game items

## 🔬 Evidence Base
Every mechanic is backed by behavioral science RCTs:
- Split Wallet: +19% revenue (Drexler et al.)
- Future Self Visualization: +41% savings (Kenya RCT)
- Photo Commitment: +15% savings (Soman & Cheema)
- Narrative Edutainment: 400M viewers shifted norms (MKBKSH)

## 🛠️ Tech Stack
- **Framework:** Next.js 14 / React
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Audio:** Howler.js
- **State:** Zustand
- **Storage:** localStorage (offline-first)
- **Deploy:** Vercel (PWA-enabled)

## 📱 Features
- ✅ Works offline (PWA)
- ✅ Voice-first design
- ✅ Mobile-responsive
- ✅ No login required
- ✅ Privacy-safe for shared devices
- ✅ Covers 8/8 NCFE financial themes

## 🏗️ Run Locally
\`\`\`bash
git clone https://github.com/[you]/jeevika.git
cd jeevika
npm install
npm run dev
\`\`\`

## 📊 Financial Themes Covered (8/8)
1. ✅ Budgeting & Planning
2. ✅ Savings
3. ✅ Investment
4. ✅ Insurance
5. ✅ Retirement Planning
6. ✅ Digital Financial Services
7. ✅ Consumer Protection
8. ✅ Government Schemes

## 🎯 Track
**Track 2: Women — Financial Empowerment**

## 👤 Team
[Your Name] — Solo Developer
Built for NCFE Innovate4FinLit Hackathon 2025

## 📄 License
MIT
```

---

## Demo Video Script (2-3 Minutes)

```
TIMESTAMP    WHAT TO SHOW              WHAT TO SAY
─────────    ────────────              ───────────

0:00-0:15    Jeevika logo +            "This is Jeevika — a life
             tagline animation         simulator that teaches 
                                       financial literacy by 
                                       letting you LIVE it."

0:15-0:30    Problem stats             "35% of bank accounts are
             (quick text overlay)      dormant. 93% of women mix
                                       business and home money.
                                       Quizzes don't fix this.
                                       Experience does."

0:30-0:45    Avatar + Dream select     "You become Kavita. You 
                                       choose your life, your
                                       dream. This dream becomes
                                       your savings goal."

0:45-1:15    Split Wallet in action    "Every rupee must go into
             (drag money to wallets)   the right wallet. Home or
                                       Work. Mix them up and the
                                       game shows you the truth —
                                       your 'profit' was an 
                                       illusion."

1:15-1:40    Bima Vistaar power-up     "Government schemes appear
             (buy or skip)             as power-ups. Not lectures.
                                       Game-changers. Bima Vistaar
                                       costs ₹1,500 in the game.
                                       Let's skip it and see 
                                       what happens..."

1:40-2:10    Crisis scene +            "Three months later, Ramu
             Consequence Engine        breaks his leg. No 
             (split screen showing     insurance. The moneylender
             both paths)               offers ₹15,000 at 5% per
                                       month. Watch the debt 
                                       snake grow. Watch Gudiya's
                                       photo blur. THIS is how
                                       you learn insurance — not
                                       by reading, by FEELING."

2:10-2:30    OTP Trap mini-game        "A scam call comes. Share
                                       OTP or hang up? Get it
                                       wrong and lose ₹3,000.
                                       Safely. In the game."

2:30-2:50    Season Report Card        "Every season, your life
             (tree, snake, photo,      score updates. Savings 
              wallet score)            tree, debt snake, photo
                                       clarity, digital courage.
                                       All visual. No jargon."

2:50-3:00    Closing + call to         "300 million Kavitas. 
             action                    One game. Jeevika.
                                       Built for Bharat."
```

---

## The 4 Submission Deliverables

```
┌─────────────────────────────────────────────────┐
│ 1. PROTOTYPE BRIEF                              │
│    → 1-2 page PDF summarizing idea,             │
│      problem, solution, tech stack              │
│    → Use content from our PPT slides 1-4        │
│                                                 │
│ 2. GITHUB REPOSITORY                            │
│    → Clean code with README (template above)    │
│    → Screenshots in /docs folder                │
│    → Clear folder structure                     │
│    → MIT License                                │
│                                                 │
│ 3. DEMO VIDEO (2-3 min)                         │
│    → Screen record the live web app             │
│    → Add voiceover using script above           │
│    → Upload to YouTube (unlisted)               │
│    → Tools: OBS Studio + CapCut/DaVinci         │
│                                                 │
│ 4. PROTOTYPE SUBMISSION PPT                     │
│    → The 11-slide PPT we already built          │
│    → Add live prototype link on Slide 4         │
│    → Add GitHub link on Slide 8                 │
│    → Add demo video link on Slide 11            │
└─────────────────────────────────────────────────┘
```

---

## Build Priority Order (Day by Day)

```
DAY 1: Foundation
├── Set up Next.js + Tailwind + Framer Motion
├── Build game state store (Zustand)
├── Create SplitWallet component
├── Create basic game screen layout
└── Get ONE scene working (harvest income → allocate)

DAY 2: Core Mechanics
├── Build Consequence Engine (split screen)
├── Build PowerUp card component
├── Build PhotoFrame with blur effect
├── Build SavingsTree + DebtSnake visuals
└── Connect Episode 1 → Crisis → Report

DAY 3: Polish + OTP Game
├── Build OTP Trap mini-game
├── Add Season Report Card
├── Add audio narration (even TTS is fine)
├── Add transitions and animations
└── Deploy to Vercel

DAY 4: Video + Docs
├── Screen record demo video
├── Add voiceover
├── Write README
├── Write Prototype Brief (PDF)
├── Finalize PPT with links
└── Submit everything
```

**Go build. You have everything. The research is airtight. The spec is complete. The strategy is locked. Now ship it. 🚀**