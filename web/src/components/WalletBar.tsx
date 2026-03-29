import { useGameStore, useComputedState } from "../store/gameStore";
import { formatRupees } from "../data/story";
import { Home, Scissors } from "lucide-react";

export default function WalletBar() {
  const { homeWallet, workWallet } = useGameStore();
  const { mixingMistakes } = useComputedState();

  const hasMixing = mixingMistakes > 0;

  return (
    <section className={`wallet-bar ${hasMixing ? "mixing" : ""}`}>
      <div className="wallet-card wallet-home">
        <span className="wallet-label"><Home size={14} style={{display:'inline',verticalAlign:'middle'}} /> घर का पैसा</span>
        <span className="wallet-amount">{formatRupees(homeWallet)}</span>
      </div>
      <div className="wallet-card wallet-work">
        <span className="wallet-label"><Scissors size={14} style={{display:'inline',verticalAlign:'middle'}} /> काम का पैसा</span>
        <span className="wallet-amount">{formatRupees(workWallet)}</span>
      </div>
    </section>
  );
}
