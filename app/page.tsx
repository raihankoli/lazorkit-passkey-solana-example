export default function Home() {
  return (
    <main style={{ padding: 40 }}>
      <h1>Lazorkit Passkey + Solana Example</h1>

      <p>
        Minimal starter UI demonstrating passkey authentication
        and gasless transactions using Lazorkit SDK.
      </p>

      <button>Login with Passkey</button>
      <br /><br />
      <button>Send Gasless Transaction</button>
    </main>
  );
}
