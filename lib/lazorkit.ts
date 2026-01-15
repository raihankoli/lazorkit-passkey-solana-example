// Lazorkit client initialization (Devnet)
import { Lazorkit } from "@lazorkit/sdk";

export const lazorkit = new Lazorkit({
  network: "devnet",
  rpcUrl: process.env.NEXT_PUBLIC_SOLANA_RPC,
});
