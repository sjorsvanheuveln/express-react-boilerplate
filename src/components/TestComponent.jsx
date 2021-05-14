import { useState } from 'react';
import { Link } from 'react-router-dom';

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

const TestComponent = (props) => {
  const [wallet, setWallet] = useState(standardWallets);
  const { text } = props;

  return (
    <div>
      <h1>Express React Boiler Plate</h1>
      <p>The lean MERN setup with Hot Module Reloading</p>

      <br />
      <div className="app-container">
        <h2>React Component</h2>
        <p>{text}</p>

        <button type="button" onClick={() => setWallet(standardWallets)}>Standard Wallets</button>
        <button type="button" onClick={() => setWallet(allWallets)}>
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
      <p>Go to <Link to="/profile">Profile</Link></p>
    </div>
  );
};

export default TestComponent;
