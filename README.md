# # Lazorkit Passkey + Solana Starter Example

This repository provides a minimal, easy-to-follow example of integrating
Lazorkit SDK to enable passkey-based authentication and gasless transactions
on Solana.

## Goal
To help Solana developers get started quickly with Lazorkit by showcasing
real-world usage of passkey login and smart wallet transactions.

## Tech Stack
- Next.js (React)
- Lazorkit SDK
- Solana Devnet

## Features
- Passkey-based wallet authentication (no seed phrase)
- Gasless smart wallet transactions
- Simple starter template for developers

## Installation
```bash
npm install @lazorkit/sdk

## Environment Setup

Create a `.env.local` file in the root of the project and add the following:

NEXT_PUBLIC_LAZORKIT_NETWORK=devnet
NEXT_PUBLIC_SOLANA_RPC=https://api.devnet.solana.com

These variables configure Lazorkit to run on Solana Devnet.

## Tutorial 1: Creating a Passkey Wallet
1. Install Lazorkit SDK in a React or Next.js project
2. Configure Lazorkit for Solana Devnet
3. Trigger passkey-based authentication
4. A smart wallet is created without seed phrases

## Tutorial 2: Sending a Gasless Transaction
1. Authenticate user using passkey
2. Initialize the Lazorkit smart wallet
3. Create a transaction request
4. Submit the transaction gaslessly via Lazorkit

## Example Use Cases
- Passkey login flow with smart wallet
- Gasless USDC transfer on Solana
- Web onboarding without wallet installation

## Notes
This repository is created as a starter example for the
Superteam Vietnam Lazorkit integration bounty.
