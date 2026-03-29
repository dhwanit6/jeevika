# Jeevika: Financial Literacy Progressive Web Application

Jeevika is an offline-capable Progressive Web Application (PWA) designed to teach fundamental financial literacy concepts through a voice-first, interactive life simulation. It targets the 'intention-action gap' by using tactile gameplay mechanics to impart behavioral economics principles to low-literacy segments.

## Project Structure

The repository contains the following primary directory:
- `/web`: The source code for the Next.js/React frontend application.

## Technical Architecture & Tech Stack

This prototype is engineered for low-bandwidth, rural environments, prioritizing an architecture that functions entirely offline after the initial page load.

### Core Stack
- **Framework:** Next.js 14.x (React 18.x)
- **Styling:** Tailwind CSS 3.4
- **State Management:** Zustand 4.5
- **Animations:** Framer Motion 11.0
- **Audio Processing:** Howler.js 2.2
- **Offline Capabilities:** next-pwa (Service Worker API)

### State Control and Persistence
The application operates without a backend database to ensure zero disruptions during network timeouts. All user session data (wallet allocation, savings goals, current episode progress) is managed via Zustand and serialized securely into the browser's `localStorage` or `IndexedDB`. 

### Game Mechanics Design
The application logic is driven by 6 core behavioral mechanics:
1. The Split Wallet (Physical separation of Household vs. Business ledger)
2. Consequence Forecasting Engine
3. Visual Goal Anchoring (Photo Frame fidelity)
4. Reward & Penalty Visualizations (Savings Tree vs. Debt Snake)
5. SHG Accountability Feedback
6. Formal Sector "Power-Ups" (e.g., Bima Vistaar, Atal Pension Yojana)

## Local Installation & Deployment

To launch the prototype in a local development environment, ensure you have Node.js (v18 or higher) installed. 

1. Clone the repository:
   ```bash
   git clone https://github.com/dhwanit6/jeevika.git
   cd jeevika/web
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Initialize the development server:
   ```bash
   npm run dev
   ```

4. The application will be accessible at `http://localhost:5173`. 

## Testing Credentials & Access

No server-side authentication is enforced for this prototype. To facilitate seamless evaluation by the NCFE Hackathon judges:
- A local 4-digit PIN system protects the 'save state' on the client device. 
- For initial evaluation, bypass the login by selecting "New Game".
- All progress is entirely sandboxed to your browser's local cache.

## Additional Notes

The source code provided in the `/web` directory reflects the finalized state of the codebase ahead of the March 29, 2026, deadline. A `v1.0.0-ncfe-submission` tag designates the stable release for evaluation.
