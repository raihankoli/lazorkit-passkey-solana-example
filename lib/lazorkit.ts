// Lazorkit client initialization (Devnet)
// Note: @lazorkit/sdk should be installed from the package registry
// For now, this is a placeholder implementation

let lazorkit: any;

try {
  const { Lazorkit } = require("@lazorkit/sdk");
  lazorkit = new Lazorkit({
    network: "devnet",
    rpcUrl: process.env.NEXT_PUBLIC_SOLANA_RPC,
  });
} catch (error) {
  // Fallback if @lazorkit/sdk is not installed
  lazorkit = {
    auth: {
      registerWithPasskey: async () => {
        console.warn("Lazorkit SDK not installed. Please install @lazorkit/sdk");
        throw new Error("Lazorkit SDK not installed");
      },
    },
    wallet: {
      getSmartWallet: async () => {
        console.warn("Lazorkit SDK not installed. Please install @lazorkit/sdk");
        throw new Error("Lazorkit SDK not installed");
      },
    },
  };
}

export { lazorkit };

