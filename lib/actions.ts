import { lazorkit } from "./lazorkit";

// Step 1: Passkey-based authentication
export async function loginWithPasskey() {
  await lazorkit.auth.registerWithPasskey();
}

// Step 2: Initialize smart wallet
export async function getSmartWallet() {
  return await lazorkit.wallet.getSmartWallet();
}

// Step 3: Send gasless transaction
export async function sendGaslessTransaction() {
  const wallet = await getSmartWallet();

  await wallet.sendTransaction({
    to: "RECIPIENT_ADDRESS",  // Replace with a devnet test address
    token: "USDC",
    amount: 1,
    gasless: true,
  });
}
