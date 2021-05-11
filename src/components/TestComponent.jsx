import { useState } from "react";

const standardWallets = {
  trezor: 2,
  ledger: 1,
  coldcard: 4,
};

// ES7 Object spread example
const allWallets = {
  ...standardWallets,
  wasabi: 1,
  exodus: 1,
};

const TestComponent = () => {
  const [wallet, setWallet] = useState(standardWallets);

  return (
    <div>
      <h3>Current Wallets:</h3>
      <button onClick={() => setWallet(standardWallets)}>Standard Wallets</button>
      <button onClick={() => setWallet(allWallets)}>
        All Wallets
      </button>

      <ul>
        {Object.keys(wallet).map((material) => (
          <li key={material}>
            {material}: {wallet[material]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TestComponent;