import { useState } from "react";

const standardWallets = {
  Trezor: 2,
  Ledger: 5,
  Coldcard: 4,
};

// ES7 Object spread example
const allWallets = {
  ...standardWallets,
  Wasabi: 1,
  Exodus: 1,
};

const TestComponent = () => {
  const [wallet, setWallet] = useState(standardWallets);

  return (
    <div>
      <button onClick={() => setWallet(standardWallets)}>Standard Wallets</button>
      <button onClick={() => setWallet(allWallets)}>
        All My Wallets
      </button>

      <ul>
        {Object.keys(wallet).map((material) => (
          <li key={material}>
            {material}: <b>{wallet[material]}</b>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TestComponent;