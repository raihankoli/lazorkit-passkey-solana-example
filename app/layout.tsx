import type { ReactNode } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  title: "Lazorkit Passkey + Solana Example",
  description: "A minimal example of integrating Lazorkit SDK for passkey-based authentication and gasless transactions on Solana",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
