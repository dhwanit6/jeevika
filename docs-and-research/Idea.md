

# JEEVIKA — Complete Product Specification Document
## For AI-Assisted Prototype Development

---

# SECTION 1: WHAT IS JEEVIKA?

Jeevika (जीविका — meaning "livelihood") is a mobile life-simulation game designed to teach financial literacy to rural Indian women through lived experience rather than instruction. The player becomes Kavita, a rural woman running a home-based tailoring business while managing her household. She makes financial decisions each season and watches consequences unfold through visual metaphors — savings as a growing tree, debt as a snake, her daughter's photo becoming clear or blurry based on savings progress.

**Core Philosophy:** "You don't learn fire is hot by reading about it. You learn by getting close to it." Jeevika lets users experience financial consequences safely inside a game so they don't make those mistakes in real life.

**One-Line Pitch:** A voice-first, offline-capable life simulator that teaches rural Indian women to manage money — not through quizzes or lectures, but by letting them live a financial life and feel the consequences of every decision.

**Target User:** Rural and semi-urban Indian women aged 25-50 who run micro-businesses (tailoring, food, small shops) from home, have a Jan Dhan bank account they barely use, share their smartphone with family, prefer voice over text, and have limited or no internet connectivity.

**Target Device:** Entry-level Android phone (₹6,000), Android 6.0+, 512MB RAM, 2G/no connectivity. APK must be under 50MB.

---

# SECTION 2: THE 6 CORE GAME MECHANICS

Every mechanic is backed by behavioral science research. These are not decorative features — they ARE the learning.

---

## MECHANIC 1: THE SPLIT WALLET (दो बटुए)

**What it is:** The screen permanently shows two wallet bars at the top — "🏠 Ghar Ka Paisa" (Home Money) and "🧵 Kaam Ka Paisa" (Work Money). Every time income arrives or an expense occurs, the player must drag the money into the correct wallet.

**How it works:**
- Income events appear as cards: "Customer paid ₹800 for blouse stitching" → Player drags to WORK wallet. "Husband's harvest payment ₹5,000" → Player drags to HOME wallet.
- Expense events appear: "Buy fabric for orders ₹1,200" → Should come from WORK. "School fees ₹600" → Should come from HOME.
- If player keeps mixing (using work money for home expenses or vice versa), the two wallet bars start visually MERGING — colors bleed, boundaries blur, numbers get confused.
- If player maintains separation, the wallets stay clean, distinct, and organized.
- At the end of each season, the SEASON REPORT reveals the truth: "You thought your business made ₹15,000. After separating home spending, your actual business profit was ₹3,200."

**Why it matters:** Research (Drexler, Fischer, Schoar — Dominican Republic RCT) proved that teaching micro-entrepreneurs to physically separate business and personal money into two drawers increased revenue by 19% during bad weeks. Standard accounting training had ZERO effect on low-skilled entrepreneurs. The Split Wallet is the single most impactful financial skill for this demographic.

---

## MECHANIC 2: THE CONSEQUENCE ENGINE (अगर-तो / If-Then)

**What it is:** At critical decision points, the screen splits into two panels showing BOTH possible futures side by side before the player chooses.

**How it works:**
- A decision card appears: "Cousin's wedding invitation. Gift will cost ₹2,000."
- Screen splits:
  - LEFT PANEL: "IF YOU SPEND ₹2,000" → Fast forward animation showing: 3 months later, child gets sick, no savings, borrows from moneylender, debt snake appears, daughter's photo blurs.
  - RIGHT PANEL: "IF YOU SAVE ₹2,000" → Fast forward showing: 3 months later, child gets sick, savings cover it, no debt, daughter's photo stays clear.
- Player sees BOTH futures, then taps to choose.
- CRITICAL: The game does NOT prevent bad choices. If the player wants to spend on the wedding, she can. The game then plays out that timeline. She will feel the consequences over the next 2-3 episodes. That IS the learning.

**Why it matters:** Kenya Future Self RCT proved that helping people visualize their future increased savings by 41% over 3 years. The mechanism isn't teaching patience — it's improving "utility forecasting," the ability to mentally simulate future consequences.

---

## MECHANIC 3: THE PHOTO FRAME (तस्वीर)

**What it is:** At game start, the player sets a savings GOAL. This goal is represented as a photo of her daughter in a school uniform (or a pucca house, or a bigger shop — player chooses). The photo's CLARITY is tied to savings progress.

**How it works:**
- Savings at 0%: Photo is completely pixelated/blurred — unrecognizable.
- Savings at 25%: Shapes start becoming visible but still blurry.
- Savings at 50%: You can make out the daughter's face and uniform.
- Savings at 75%: Photo is mostly clear, details emerging.
- Savings at 100%: Photo is crystal clear, vibrant, beautiful.
- If savings DROP (player withdraws from savings), the photo BLURS BACK. This is emotionally painful by design.

**Why it matters:** Soman and Cheema (2011) proved that printing a photo of children on a savings envelope increased savings by 15%. The photo transforms abstract numbers into emotional stakes.

**Implementation note:** The photo should be a warm, illustrated image (not a real photograph) — showing a young girl in a school uniform with books, smiling. The blur effect should be a gaussian blur that gradually lifts. The frame should look like a simple wooden photo frame sitting in the corner of the game screen at all times.

---

## MECHANIC 4: DEBT SNAKE & SAVINGS TREE (🐍 vs 🌳)

**What it is:** Two persistent visual indicators on the game screen that show the player's financial health at a glance.

**SAVINGS TREE:**
- Starts as a tiny seed (🌱) when savings are zero.
- Grows into a sapling, then a small tree, then a large banyan tree as savings accumulate.
- Tree should pulse with a gentle green glow when savings increase.
- If savings are withdrawn, leaves fall and the tree shrinks.

**DEBT SNAKE:**
- Does not appear at all when debt is zero.
- When the player borrows money, a small snake appears near the house.
- As debt grows (especially with compound interest from moneylenders), the snake grows longer and starts coiling around the house illustration.
- The snake should have a menacing but not scary appearance — more "cautionary" than "horror."
- When debt is repaid, the snake shrinks and eventually disappears.
- If interest compounds (player doesn't repay), the snake grows a second head (hydra-like) to show interest-on-interest.

**Why it matters:** Kahneman's Prospect Theory — people feel losses 2x more intensely than gains. The snake makes debt viscerally threatening. The tree makes savings tangibly rewarding. Neither requires numbers or financial jargon.

---

## MECHANIC 5: SHG CIRCLE (बचत समूह)

**What it is:** A simulated Self-Help Group with 3-4 AI-driven characters who meet at the end of each season. They share tips, set group savings targets, and create social accountability.

**How it works:**
- After the Season Report, a "Weekly SHG Meeting" screen appears.
- AI characters (Sunita, Meera, Priya) show their savings progress.
- Characters react to the player's performance:
  - Good savings: "Wah Kavita! Tum toh hum sab se aage ho!" (Wow Kavita, you're ahead of all of us!)
  - Poor savings: "Koi baat nahi, agli baar hum saath mein karenge" (No worries, next time we'll do it together) — supportive, not judgmental.
- Characters share contextual tips: "Maine post office mein ₹50 har hafta daalna shuru kiya. Ek saal mein ₹2,600 ho gaye!" (I started putting ₹50/week in the post office. In one year it became ₹2,600!)
- Group sets a collective savings target for the next season.

**Why it matters:** Chile and India RCTs proved that public savings announcements (peer monitoring) are more effective than private savings. The social accountability of the SHG is the most powerful commitment device in collectivist Indian culture.

---

## MECHANIC 6: SCHEME POWER-UPS (योजना शक्ति)

**What it is:** Real government schemes appear during gameplay as discoverable "power-ups" that change the player's outcomes. They are not information screens — they are functional game items.

**How it works:**
- During relevant story moments, a POWER-UP notification appears with a distinctive sound and golden glow.
- Example: Kavita's husband worries about old age → "⚡ POWER-UP DISCOVERED: Atal Pension Yojana!"
- The power-up card shows:
  - Scheme name and icon
  - Simple one-line benefit: "Pay ₹42/month now. Get ₹1,000/month after age 60."
  - [ACTIVATE] button → Applies the power-up to the game simulation. Future seasons now reflect the benefit.
  - [ⓘ REAL LIFE] button → Opens a step-by-step guide on how to actually enroll in the real scheme. Includes: documents needed, where to go, what to say.

**Schemes included as power-ups:**

| Scheme | Power-Up Name | When It Appears | In-Game Effect |
|--------|--------------|-----------------|----------------|
| Bima Vistaar | 🛡️ Suraksha Kavach | Before a crisis event | Absorbs financial shock from illness/accident/crop loss |
| PMSBY | 🛡️ Durghatna Raksha | Early in game | Accident protection shield |
| PMJJBY | 🛡️ Jeevan Raksha | When family discussion happens | Life insurance — family protected if breadwinner dies |
| APY | 🌱 Budhapa Sahara | When old age scenario appears | Pension income in Year 15-20 of simulation |
| NPS Vatsalya | 🌱 Kal Ka Beej | When daughter's education discussed | Long-term compounding tree for daughter |
| Sukanya Samriddhi | 👧 Gudiya Ka Khata | When daughter is born in story | Savings account for daughter's future |
| PM-Kisan | 🌾 Kisan Samman | During farming season | Direct income support boost |
| MUDRA Loan | 💼 Udyam Shakti | When business expansion opportunity comes | Low-interest formal loan vs moneylender |

**Why it matters:** The gap between scheme awareness and enrollment is massive (APY: awareness exists but enrollment is only 10-15%). The power-up mechanic bridges intent-to-action by letting players EXPERIENCE the benefit before enrolling. The "Real Life Activation" button creates a direct bridge from game to real-world action.

---

# SECTION 3: THE GAME WORLD

## Setting
Rural India. A small village. Kavita's home is a modest house with a small tailoring area in the front room. The visual style should feel warm, earthy, and familiar — not polished or corporate.

## Color Palette
- Primary: Terracotta/burnt orange (#C84B31)
- Secondary: Warm saffron/yellow (#F5A623)
- Accent: Earthy green (#4A7C59) for savings/growth
- Danger: Muted red (#C0392B) for debt/risk
- Background: Warm cream/off-white (#FFF8F0)
- Text: Dark brown (#3E2723)
- The overall feel should be rangoli-inspired — colorful but earthy, not neon or corporate blue.

## Art Style
- 2D illustrated characters — warm, expressive, slightly stylized (think Indian children's book illustrations, not anime or western cartoon).
- Kavita should look strong, thoughtful, and capable — NOT helpless or victimized. She is the HERO of this story.
- Backgrounds are simple, layered parallax illustrations of rural India — fields, modest homes, a small market, a bank building in the distance.
- UI elements are card-based with rounded corners, soft shadows, and icon-heavy design.

## Characters

**Kavita (Player Character):**
- Age: ~30
- Appearance: Simple salwar-kameez, dupatta, bindi, determined expression
- Occupation: Home-based tailor, also helps with farming
- Family: Husband (farmer, 2 acres), daughter Gudiya (age 8), elderly mother-in-law

**Husband (Ramu):**
- Supportive but traditional. Works the farm. Gets injured in the crisis scenario.

**Gudiya (Daughter):**
- Age 8. Bright, loves school. Her future IS Kavita's motivation. She appears in the Photo Frame.

**SHG Members:**
- Sunita: Slightly older, experienced, gives good advice. The "wise one."
- Meera: Same age as Kavita, struggles financially, sometimes borrows from the group. The "relatable one."
- Priya: Younger, enthusiastic about digital payments, teaches Kavita UPI. The "tech-forward one."

**Seth Ji (Moneylender):**
- Appears when Kavita needs emergency money and has no savings. Offers loans at 5% per month (60% annual). Visually associated with the debt snake.

**Postman / Bank Sakhi:**
- Friendly character who brings news of government schemes (triggers power-up discoveries).

---

# SECTION 4: COMPLETE STORY FLOW — SEASON 1 (PROTOTYPE SCOPE)

The prototype covers ONE YEAR (4 seasons/episodes). Each episode is 12-15 minutes of gameplay.

---

## EPISODE 1: KHARIF SEASON (July-October) — "The Harvest"

### Opening Narration (Voice-over):
*"Yeh hai Kavita. Darbhanga, Bihar ki. Uske ghar ke saamne chhota sa silai ka kaam chalti hai. Pati Ramu do bigha khet mein dhan ugaate hain. Beti Gudiya class 3 mein padhti hai. Aaj dhan ki fasal ka paisa aaya hai. ₹12,000. Ab Kavita ko sochna hai — is paise ka kya karein?"*

(This is Kavita. From Darbhanga, Bihar. She runs a small tailoring business from the front of her house. Husband Ramu grows rice on 2 acres. Daughter Gudiya studies in class 3. Today the rice harvest payment has arrived. ₹12,000. Now Kavita must decide — what to do with this money?)

### SCENE 1: Harvest Income Arrives
**Screen:** Kavita at home. A bundle of cash (₹12,000) appears with a warm glow.
**Voice:** "Dhan ki fasal ka paisa aaya — ₹12,000!"
**Action:** The money card appears. Player must DRAG portions into the Split Wallet:
- 🏠 Ghar Ka Paisa (Home)
- 🧵 Kaam Ka Paisa (Work)

**Guidance prompt (first time only):**
Voice: *"Kavita, ek baat yaad rakhna. Ghar ka kharcha alag. Kaam ka kharcha alag. Dono ko alag rakhogi toh pata chalega ki kaam mein kitna paisa bana."*
(Remember — home expenses are separate. Work expenses are separate. Keep them apart and you'll know how much your business actually makes.)

**Player allocates freely.** No "right answer" is forced. But the season report will show the consequence.

**Suggested allocation cards:**
- "Ramu ka medical check-up — ₹800" → HOME
- "Gudiya ki school fees — ₹1,500" → HOME
- "Naya kapda khareedna silai ke liye — ₹2,000" → WORK
- "Ghar ka rashan — ₹3,000" → HOME
- "Silai machine ki repair — ₹500" → WORK

Remaining money (whatever is left) → Player chooses: Save? Spend? Which wallet?

### SCENE 2: The Insurance Decision
**Voice:** *"Baarish ka mausam aa raha hai. Postman ne bataya ki sarkar ki ek nayi yojana hai — Bima Vistaar. Poori family ki suraksha — bimari, hadsa, fasal, sab ek mein. Saal ka ₹1,500."*

(Monsoon is coming. The postman told Kavita about a new government scheme — Bima Vistaar. Complete family protection — illness, accident, crop, all in one. ₹1,500 per year.)

**⚡ POWER-UP CARD APPEARS:**
```
🛡️ SURAKSHA KAVACH (Protection Armor)
Bima Vistaar — IRDAI

Life + Health + Accident + Property
₹1,500/year

[🛡️ BUY SHIELD — ₹1,500]
[❌ SKIP FOR NOW]

ⓘ Tap for Real Life enrollment steps
```

**If player BUYS:** Shield icon appears on screen permanently. ₹1,500 deducted from savings.
**If player SKIPS:** No shield. Consequence will hit in Episode 3.

### SCENE 3: Savings Goal Setting (Photo Frame Introduction)
**Voice:** *"Kavita ka ek sapna hai. Gudiya ko achhi school mein padhaana. Us sapne ke liye paisa bachana hoga. Kitna bachana chahogi?"*

(Kavita has a dream. To send Gudiya to a good school. She needs to save for that dream. How much do you want to save?)

**Screen:** Photo Frame appears — blurred image of Gudiya in school uniform.
**Slider:** Player sets a savings target (₹5,000 / ₹10,000 / ₹20,000)
**Voice:** *"Jitna bachaogi, Gudiya ki tasveer utni saaf hoti jayegi."*
(The more you save, the clearer Gudiya's photo will become.)

### SCENE 4: Tailoring Orders
**Voice:** *"Is hafte 3 customer aaye. Blouse silai — ₹300 each. Total ₹900."*
**Income card:** ₹900 → Player drags to WORK wallet.

**Expense card:** "Thread aur buttons — ₹150" → Should go from WORK wallet.
**Test:** If player takes thread expense from HOME wallet — the wallets start slightly blending at the edges. Subtle visual warning.

### SEASON 1 REPORT CARD:
**Screen:** Full-screen report with visual indicators.
```
📊 KHARIF SEASON REPORT

🌳 Savings Tree: [Seed/Sapling based on savings]
🐍 Debt Snake: [Not present if no debt]
🖼️ Photo Frame: [Clarity % based on savings vs goal]
📱 Digital Courage: 0% (not yet started)

👛 Wallet Separation Score:
   [GOOD: "Tumne kaam aur ghar ka paisa alag rakha. 
    Tumhara asli munafa ₹X hai."]
   [BAD: "Tumne sab paisa mila diya. Tumhe lagta hai 
    munafa ₹15,000 tha. Asli munafa sirf ₹3,200 hai."]

⚡ Power-ups: Bima Vistaar [Active/Skipped]

👩‍👩‍👧 SHG Meeting:
   Sunita: "Maine is baar ₹500 bachaaye!"
   Meera: "Mujhe kapde ke liye karz lena pada..."
   Priya: "Phone pe paisa bhejne mein bahut aasaan hai!"
```

---

## EPISODE 2: FESTIVAL SEASON (October-December) — "The Pressure"

### Opening Narration:
*"Diwali aa rahi hai. Ghar mein khushi hai, lekin jeb mein pressure bhi. Rishtedaar ki shaadi ka nimantran aaya hai. Aur Gudiya naye kapde maang rahi hai."*

(Diwali is coming. There's joy at home, but pressure on the wallet. A relative's wedding invitation has arrived. And Gudiya is asking for new clothes.)

### SCENE 1: Festival Spending Pressure
**Decision Card 1: Relative's Wedding Gift**
**Voice:** *"Chaachi ki beti ki shaadi hai. Tohfa dena zaroori hai. ₹2,000 ka tohfa ya ₹500 ka?"*

**CONSEQUENCE ENGINE FIRES:**
Split screen appears:

**LEFT — IF YOU GIVE ₹2,000 GIFT:**
*"Rishtedaar khush. Lekin 2 mahine baad, Gudiya ki fees ka paisa nahi bachega. Karz lena padega."*
(Relatives happy. But 2 months later, no money for Gudiya's fees. Will need to borrow.)
→ Shows: Debt snake appears small. Photo frame slightly blurs.

**RIGHT — IF YOU GIVE ₹500 GIFT:**
*"Chaachi thoda naraz. Lekin Gudiya ki fees ka paisa safe. Karz nahi lena padega."*
(Aunt slightly upset. But Gudiya's fee money is safe. No borrowing needed.)
→ Shows: No snake. Photo stays same.

**Player chooses.** Game continues down that path.

### SCENE 2: Diwali Expenses
**Multiple small expense cards rapid-fire:**
- "Diwali sweets for neighbors — ₹400" → HOME
- "New clothes for Gudiya — ₹800" → HOME
- "Puja supplies — ₹300" → HOME
- "Diwali sale! 5 extra blouse orders — earn ₹1,500" → WORK income
- "Extra fabric needed for orders — ₹600" → WORK expense

Player must allocate each one correctly under time pressure (cards come faster during festival season — representing the real chaos of festival spending).

### SCENE 3: The Scam Call (Digital Dojo Mini-Game)
**Voice:** *"Ek anjaana number se phone aaya..."*
(A call from an unknown number...)

**📱 Phone rings on screen.**

**Scam Voice:** *"Namaste! Main SBI se bol raha hoon. Aapka account block ho jayega. Abhi apna OTP batayein."*
(Hello! I'm from SBI. Your account will be blocked. Tell me your OTP now.)

**Decision:**
- [📞 OTP BATA DO] (Share OTP)
- [❌ PHONE KAAT DO] (Hang up)

**IF SHARES OTP:**
- 💸 ₹3,000 disappears from account
- 🕸️ Spider web covers screen
- Voice: *"Koi bhi bank kabhi phone pe OTP nahi maangta. KABHI NAHI. Yeh chor tha. Ab kya karein?"*
  - [📞 1930 Helpline pe call karo] ✅ CORRECT
  - [🏦 Bank jao]
  - [😢 Kuch mat karo]
- Voice explains 1930 helpline, how to report fraud within 24 hours.
- Digital Courage meter: +0% (failed, but learned)

**IF HANGS UP:**
- ✅ Safe!
- 🦸‍♀️ "Savdhan Sakhi" badge earned
- Voice: *"Shaabash Kavita! OTP apne ghar ki chaabi jaisi hai. Chaabi kisi anjaan ko nahi dete."*
  (Well done! OTP is like your house key. You don't give your key to strangers.)
- Digital Courage meter: +20%

### SEASON 2 REPORT CARD:
Same format as Season 1, but now reflects cumulative decisions. The tree and snake reflect TWO seasons of behavior. Photo Frame has shifted based on total savings.

---

## EPISODE 3: LEAN SEASON (January-March) — "The Storm"

### Opening Narration:
*"Sardi ka mausam. Khet khaali hain. Silai ke order bhi kam. Lekin kharche toh roz hain. Yeh woh waqt hai jab Kavita ki asli paraaksha hoti hai."*

(Winter. The fields are empty. Tailoring orders are also slow. But expenses happen daily. This is when Kavita faces her real test.)

### SCENE 1: The Crisis Event
**Voice:** *"Ramu khet mein kaam kar raha tha. Tractor fisla. Uska pair toot gaya. 3 mahine kaam nahi kar payega."*

(Ramu was working in the field. The tractor slipped. His leg is broken. He won't be able to work for 3 months.)

**CONSEQUENCE ENGINE — BASED ON PREVIOUS CHOICES:**

**PATH A — If player bought Bima Vistaar in Episode 1:**
```
🛡️ SURAKSHA KAVACH ACTIVATED!

Hospital bill: ₹15,000 — COVERED by insurance ✅
Lost wages compensation: ₹20,000 — COVERED ✅
Kavita's savings: UNTOUCHED
Debt Snake: Does NOT appear

Voice: "Tumne Bima Vistaar liya tha. Aaj uska fayda 
dikh raha hai. ₹1,500 ka investment ne ₹35,000 
bachaya."
(You bought Bima Vistaar. Today you see its value. 
₹1,500 investment saved ₹35,000.)
```

**PATH B — If player skipped Bima Vistaar:**
```
❌ NO SHIELD!

Hospital bill: ₹15,000
Kavita's savings: DRAINED (if she had any)
If savings insufficient → Seth Ji appears:

Seth Ji: "Kavita beti, pareshaan mat ho. Main de 
dunga paisa. ₹15,000. Bas 5% mahine ka byaaj."

(Don't worry Kavita. I'll give you the money. 
₹15,000. Just 5% monthly interest.)

[SETH JI SE KARZ LO] → Debt Snake appears immediately
[KUCH AUR SOCHO] → Shows other options (sell goat, 
borrow from SHG at lower rate)

If takes Seth Ji's loan:
Voice: "₹15,000 ka karz. 5% har mahine. 
6 mahine mein yeh ₹15,000 ban jayega ₹20,000. 
1 saal mein ₹26,000."

🐍 Debt Snake appears and starts growing.
The snake coils around the house illustration.
Photo Frame BLURS significantly.
Gudiya's school fees card appears: 
"School ne fees maangi. Paise nahi hain. 
Gudiya ko ghar pe rakhein?"
```

**This is the emotional peak of the game.** The player who skipped insurance in Episode 1 now FEELS the full weight of that decision. This is behavioral inoculation — experiencing the pain safely in a game so she makes a different choice in real life.

### SCENE 2: The Moneylender's Trap (If applicable)
If player took Seth Ji's loan, show the compound interest growing:

**Visual: Debt Snake Growth Animation**
```
Month 1: ₹15,000 — 🐍 (small)
Month 3: ₹17,250 — 🐍🐍 (medium, coiling)
Month 6: ₹20,000 — 🐍🐍🐍 (large, around house)
Month 12: ₹26,000 — 🐍🐍🐍🐍 (massive, second head)

Voice: "Dekho karz kaise badhta hai. 
Seth Ji ka 5% har mahine ka matlab hai 
60% saal ka. ₹15,000 ek saal mein 
₹26,000 ban gaya. Yeh hai karz ka jaal."
(See how debt grows. Seth Ji's 5% monthly 
means 60% annually. ₹15,000 became ₹26,000 
in one year. This is the debt trap.)
```

### SCENE 3: Digital Dojo — UPI Practice
**Voice:** *"Priya ne bataya ki phone se paisa bhej sakte hain. Aao seekhte hain."*

**Mini-game: Simulated UPI Payment**
- Step 1: Open UPI app (simulated interface)
- Step 2: Enter amount: ₹200
- Step 3: Select recipient: "Kapda Dukaan" (Fabric Shop)
- Step 4: Enter PIN (simulated 4-digit)
- Step 5: See confirmation ✅

**Then — the trust test:**
Voice: *"Payment ho gaya. Lekin paise kata ki nahi? Kaise check karein?"*
(Payment done. But did the money actually go? How to check?)
- Show: Check transaction history
- Show: Missed call balance check (*99# USSD for basic phones)
- Digital Courage: +20%

### SEASON 3 REPORT CARD:
The most dramatic report card. This is where divergent paths become starkly visible.

---

## EPISODE 4: RABI SEASON (April-June) — "The Rebuild"

### Opening Narration:
*"Garmi aa gayi. Ramu dheere-dheere theek ho raha hai. Rabi ki fasal ka waqt hai. Aur Kavita ke liye ek naya mauka."*

(Summer is here. Ramu is slowly recovering. It's Rabi crop season. And a new opportunity for Kavita.)

### SCENE 1: Second Income Cycle
**Income cards:**
- "Rabi fasal (gehun) — ₹8,000" → HOME
- "Summer wedding season — extra tailoring orders ₹3,000" → WORK

### SCENE 2: Scheme Power-Up Discovery
**The Postman/Bank Sakhi visits:**

**⚡ POWER-UP 1: Atal Pension Yojana**
```
🌱 BUDHAPA SAHARA (Old Age Support)

Atal Pension Yojana — PFRDA

Har mahine ₹42 jama karo.
60 saal ki umar mein ₹1,000 har mahine milega.
Zindagi bhar.

(Deposit ₹42 monthly. 
Get ₹1,000/month after age 60. For life.)

[🌱 ACTIVATE] [❌ SKIP]
ⓘ Real Life: Nearest bank mein jaake form bharo. 
   Aadhaar aur bank passbook lekar jaana.
```

**If activated:** Show the NPS Vatsalya / APY tree growing over simulated decades with a fast-forward animation. A tiny sapling planted now becomes a massive tree by "Year 20." Voice: *"Yeh chhota sa beej aaj boya. 30 saal mein yeh ped ban jayega."* (This tiny seed planted today. In 30 years it becomes a tree.)

**⚡ POWER-UP 2: Sukanya Samriddhi Yojana**
```
👧 GUDIYA KA KHATA (Gudiya's Account)

Sukanya Samriddhi Yojana

Gudiya ke naam ₹250/mahina dalo.
21 saal mein bahut bada amount milega.
Tax free. Sabse zyada byaaj.

(Put ₹250/month in Gudiya's name.
After 21 years, a huge amount. 
Tax free. Highest interest rate.)

[👧 ACTIVATE] [❌ SKIP]
ⓘ Real Life: Post office ya bank mein Gudiya ka 
   birth certificate aur apna Aadhaar lekar jaana.
```

### SCENE 3: Business Growth Decision
**Voice:** *"Kavita ke paas ek mauka hai. Ek aur silai machine leni hai — ₹4,000 ki. Isse double order le sakti hai."*

(Kavita has an opportunity. Buy a second sewing machine for ₹4,000. She can take double orders.)

**Decision:**
- [💰 APNE PAISE SE KHARIDO] → Uses savings (tree shrinks a bit but business income doubles next year)
- [🏦 MUDRA LOAN LO] → Power-up: MUDRA loan at low interest from bank (better than Seth Ji)
- [❌ ABHI NAHI] → Skip, income stays same

**CONSEQUENCE ENGINE shows:**
- If buys machine → Year 2 income projection: ₹2.4 lakh (vs ₹1.8 lakh)
- If skips → Year 2 income stays: ₹1.8 lakh

### SCENE 4: Debt Repayment (If applicable)
If player has Seth Ji debt, show option to repay:
- Full repayment: Snake disappears 🎉
- Partial: Snake shrinks
- Ignore: Snake grows more, third head appears

---

## YEAR-END: ANNUAL LIFE SCORE

**Full screen celebration/reflection moment.**

```
╔══════════════════════════════════════════╗
║          📊 KAVITA'S YEAR 1              ║
║                                          ║
║  🌳 SAVINGS TREE: [Seed/Sapling/Tree]    ║
║     Total saved: ₹____                   ║
║                                          ║
║  🐍 DEBT SNAKE: [None/Small/Large]       ║
║     Total owed: ₹____                    ║
║                                          ║
║  🖼️ GUDIYA'S PHOTO: [__% Clear]          ║
║     Savings goal progress: ___%          ║
║                                          ║
║  📱 DIGITAL COURAGE: ____%               ║
║     Skills learned: UPI / Scam / Balance ║
║                                          ║
║  ⚡ POWER-UPS ACTIVATED: __/6            ║
║     Bima Vistaar: ✅/❌                   ║
║     APY: ✅/❌                            ║
║     Sukanya: ✅/❌                        ║
║                                          ║
║  👛 WALLET SEPARATION: ____%             ║
║     "Tumhara asli business munafa:       ║
║      ₹____ tha"                          ║
║                                          ║
║  📤 [WHATSAPP PE SHARE KARO]             ║
║  🔄 [SAAL 2 KHELO — AUR MUSHKIL!]       ║
║  📋 [ASLI ZINDAGI MEIN KYA KAREIN]      ║
║                                          ║
╚══════════════════════════════════════════╝
```

**The "Real Life Actions" List:**
When player taps the last button, show a checklist:
```
📋 ASLI ZINDAGI MEIN KYA KAREIN:
(What to do in real life)

Based on your game, here's your action plan:

□ Ghar mein do alag jagah banao — ek ghar ke 
  paise ki, ek kaam ke paise ki
  (Make two separate places at home — one for 
  home money, one for work money)

□ Bank jao aur Bima Vistaar ke baare mein pucho
  (Go to bank and ask about Bima Vistaar)

□ Post office mein Sukanya Samriddhi khata kholo
  (Open Sukanya Samriddhi account at post office)

□ UPI try karo — pehle ₹10 bhejo kisi jaanne 
  waale ko
  (Try UPI — first send ₹10 to someone you know)

□ Yaad raho: OTP kabhi kisi ko mat batao!
  (Remember: Never share OTP with anyone!)
```

---

# SECTION 5: UI/UX SPECIFICATIONS

## Main Game Screen Layout

```
┌─────────────────────────────────────────┐
│ 🏠 Ghar: ₹2,400  │  🧵 Kaam: ₹3,100   │  ← Split Wallet (always visible)
├─────────────────────────────────────────┤
│                                         │
│                                         │
│     [MAIN ILLUSTRATION AREA]            │
│     Kavita's home / current scene       │
│     Characters appear here              │
│                                         │
│  🌳                              🖼️     │  ← Tree (left) & Photo Frame (right)
│  (tree)                    (daughter)    │
│                                         │
│  🐍 (snake appears here if debt)        │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  [DECISION CARD / DIALOGUE AREA]        │
│                                         │
│  Voice text appears here as subtitles   │
│  Decision cards appear here as          │
│  tappable buttons                       │
│                                         │
├─────────────────────────────────────────┤
│ 🔊 │ 📱 Digital: 40% │ Season: 🪔 2/4  │  ← Status bar
└─────────────────────────────────────────┘
```

## Interaction Patterns

**All interactions are TAP-based. No typing. No scrolling. No forms.**

- **Income/Expense allocation:** DRAG the money card to the correct wallet (left = home, right = work). Or tap the card and then tap the destination wallet.
- **Decisions:** Two or three large tappable cards with icons and short text. Voice reads each option aloud.
- **Consequence Engine:** Split screen auto-plays two short animations (3-5 seconds each). Then two buttons appear at bottom.
- **Power-ups:** Glowing card slides up from bottom. Two buttons: Activate / Skip.
- **Season Report:** Auto-scrolling visual report. One "Next" button to proceed.

## Voice/Audio Specifications

- Every screen has voice narration. Text is supplementary (subtitles), not primary.
- Narrator voice: Warm, female, mature (like a trusted older sister or aunt). Not formal. Not robotic. Conversational Hindi with regional flavor.
- Character voices: Each character (Kavita's thoughts, Sunita, Seth Ji, Scam Caller) has a distinct voice.
- Sound effects: Gentle chimes for income, warning tone for expenses, triumphant sound for power-ups, ominous hiss for debt snake growing, birdsong for savings tree growing.
- Background music: Soft, ambient, Indian folk-inspired. Different for each season (rain sounds for Kharif, festive drums for Festival, quiet wind for Lean, birdsong for Rabi).

## Screen Transitions

- Between scenes: Soft fade (0.5 seconds)
- Season change: Calendar page flip animation with season name in Hindi
- Consequence Engine: Screen physically "splits" with a vertical dividing line
- Power-up discovery: Golden glow emanates from bottom of screen, card slides up with sparkle effect
- Debt Snake appearance: Slow slither animation from off-screen with subtle hiss sound
- Tree growth: Time-lapse growth animation (2 seconds) with leaf particles

---

# SECTION 6: TECH IMPLEMENTATION NOTES

## Engine: Godot 4.x
- Use GDScript for all logic
- 2D scenes only — no 3D
- Target export: Android APK
- Minimum API level: Android 6.0 (API 23)
- Target APK size: Under 50MB (base, one language)

## Project Structure
```
jeevika/
├── scenes/
│   ├── main_menu.tscn
│   ├── avatar_select.tscn
│   ├── dream_select.tscn
│   ├── game_screen.tscn
│   ├── split_wallet.tscn
│   ├── consequence_engine.tscn
│   ├── digital_dojo/
│   │   ├── upi_sim.tscn
│   │   ├── otp_trap.tscn
│   │   └── atm_sim.tscn
│   ├── shg_meeting.tscn
│   ├── season_report.tscn
│   ├── annual_report.tscn
│   └── power_up_card.tscn
├── scripts/
│   ├── game_manager.gd (state management)
│   ├── wallet_manager.gd (split wallet logic)
│   ├── consequence_calc.gd (financial calculations)
│   ├── story_manager.gd (narrative flow)
│   ├── save_manager.gd (SQLite save/load)
│   └── analytics.gd (decision tracking)
├── narrative/
│   ├── season1_kharif.json
│   ├── season2_festival.json
│   ├── season3_lean.json
│   └── season4_rabi.json
├── audio/
│   ├── hindi/
│   │   ├── narrator/
│   │   ├── characters/
│   │   └── sfx/
│   └── bhojpuri/ (etc.)
├── art/
│   ├── characters/
│   ├── backgrounds/
│   ├── ui/
│   ├── icons/
│   └── animations/
└── data/
    ├── schemes.json
    ├── financial_model.json
    └── config.json
```

## Financial Model (consequence_calc.gd)
```
Variables tracked:
- home_wallet: int (current home balance)
- work_wallet: int (current work balance)
- savings: int (money explicitly saved)
- debt: int (outstanding loans)
- debt_interest_rate: float (monthly, e.g., 0.05 for Seth Ji)
- insurance_active: bool
- pension_active: bool
- sukanya_active: bool
- digital_courage: int (0-100)
- wallet_separation_score: float (0-1)
- photo_clarity: float (0-1, based on savings/goal)
- tree_size: int (0-5 stages)
- snake_size: int (0-5 stages)

Each season end:
- debt = debt * (1 + debt_interest_rate * months)
- savings = savings * 1.005 (bank interest, small)
- photo_clarity = min(savings / savings_goal, 1.0)
- tree_size = map savings to 0-5 scale
- snake_size = map debt to 0-5 scale
- wallet_separation_score = correct_allocations / total_allocations
```

## Save System (SQLite)
```
Table: player_progress
- pin: TEXT (4 digits)
- avatar: TEXT
- dream: TEXT
- current_season: INT
- home_wallet: INT
- work_wallet: INT
- savings: INT
- debt: INT
- insurance: BOOL
- pension: BOOL
- sukanya: BOOL
- digital_courage: INT
- decisions_json: TEXT (serialized decision history)
- created_at: TIMESTAMP
- updated_at: TIMESTAMP
```

---

# SECTION 7: KEY COPY/DIALOGUE LINES

These are the most important lines in the game. They should be voice-acted with care and emotion.

## Kavita's Introduction:
*"Main Kavita. Main silai karti hoon. Mera pati kheti karta hai. Meri beti Gudiya school jaati hai. Humari zindagi badi saadhi hai — lekin har din ek naya faisla hota hai. Aur har faisley ka ek nateeja."*
(I am Kavita. I do tailoring. My husband farms. My daughter Gudiya goes to school. Our life is simple — but every day brings a new decision. And every decision has a consequence.)

## The Split Wallet Lesson:
*"Ek baat samajh lo — ghar ka paisa alag, kaam ka paisa alag. Jab tak yeh dono ek jagah rahenge, tumhe kabhi pata nahi chalega ki tumhara kaam mein fayda ho raha hai ya nuksaan."*
(Understand one thing — home money is separate, work money is separate. Until you separate them, you'll never know if your business is making profit or loss.)

## The Insurance Moment (After Crisis):
*"Sirf ₹1,500. Saal ka ₹1,500. Aur aaj ₹35,000 bachh gaye. Yeh hai suraksha ki takat."*
(Just ₹1,500. ₹1,500 per year. And today ₹35,000 was saved. This is the power of protection.)

## The Debt Visualization:
*"Dekho karz kaise badhta hai. Seth Ji ke 5% mahine ka matlab hai — 1 saal mein tumhara ₹15,000 ban gaya ₹26,000. Tumne kuch nahi khareeda. Kuch nahi kamaya. Sirf byaaj badha."*
(See how debt grows. Seth Ji's 5% monthly means — in 1 year your ₹15,000 became ₹26,000. You didn't buy anything. You didn't earn anything. Only interest grew.)

## The Photo Frame Moment:
*"Gudiya ki tasveer dhundhli ho rahi hai. Matlab — uske sapne door ja rahe hain. Kya tum use wapas la sakti ho?"*
(Gudiya's photo is getting blurry. It means — her dreams are getting farther away. Can you bring them back?)

## The OTP Lesson:
*"OTP tumhare ghar ki chaabi hai. Chaabi kisi anjaan ko nahi dete. Bank kabhi phone pe OTP nahi maangta. KABHI NAHI."*
(OTP is your house key. You don't give your key to strangers. Banks NEVER ask for OTP on a phone call. NEVER.)

## The Closing:
*"Yeh khel nahi hai. Yeh tumhari zindagi ka aaina hai. Har faisla tumhara hai. Har nateeja tumhara hai. Lekin yaad rakhna — yahan galti karne se kuch nahi jaata. Asli zindagi mein mauka dobara nahi milta."*
(This is not just a game. This is a mirror of your life. Every decision is yours. Every consequence is yours. But remember — here, mistakes cost nothing. In real life, you don't always get a second chance.)

---

# SECTION 8: WHAT THE PROTOTYPE MUST DEMONSTRATE

For the hackathon prototype, build AT MINIMUM:

1. ✅ Avatar and Dream selection screen
2. ✅ Episode 1 (Kharif) with working Split Wallet — drag money to correct wallet
3. ✅ The Bima Vistaar power-up card (buy or skip)
4. ✅ Episode 3 Crisis Event — showing BOTH paths (insured vs uninsured) via Consequence Engine
5. ✅ The OTP Trap mini-game
6. ✅ One Season Report Card with tree, snake, photo frame, and wallet score
7. ✅ Voice narration for at least Hindi
8. ✅ Works fully offline
9. ✅ Under 50MB APK

**Everything else (Episode 2, Episode 4, SHG meetings, annual report, WhatsApp sharing) can be shown as wireframes/mockups in the presentation with a "Coming in Phase 2" label.**

---

**This document contains everything needed to build the Jeevika prototype. Hand it to any AI coding assistant, game developer, or design tool — and they have the complete vision, flow, mechanics, copy, and technical specifications to start building immediately.**