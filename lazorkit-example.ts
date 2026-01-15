// Lazorkit integration pseudo-code example

import { Lazorkit } from "@lazorkit/sdk";

const lazorkit = new Lazorkit({
  network: "devnet",
});

export async function loginWithPasskey() {
  await lazorkit.auth.registerWithPasskey();
}

export async function sendGaslessTransaction() {
  const wallet = await lazorkit.wallet.getSmartWallet();

  await wallet.sendTransaction({
    to: "RECIPIENT_ADDRESS",
    token: "USDC",
    amount: 1,
    gasless: true,
  });
}
