"use client";

import { loginWithPasskey, sendGaslessTransaction } from "../lib/actions";

export default function Home() {
  const handleLogin = async () => {
    try {
      await loginWithPasskey();
      alert("Passkey login successful!");
    } catch (err) {
      alert("Login failed: " + err);
    }
  };

  const handleGasless = async () => {
    try {
      await sendGaslessTransaction();
      alert("Gasless transaction sent!");
    } catch (err) {
      alert("Transaction failed: " + err);
    }
  };

  return (
    <main style={{ padding: 40 }}>
      <h1>Lazorkit Passkey + Solana Example</h1>
      <p>Click buttons below to test passkey login & gasless transactions.</p>

      <button onClick={handleLogin} style={{ marginTop: 20 }}>
        Login with Passkey
      </button>
      <br /><br />
      <button onClick={handleGasless}>
        Send Gasless Transaction
      </button>
    </main>
  );
}
