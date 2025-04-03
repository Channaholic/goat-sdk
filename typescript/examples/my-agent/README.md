<div align="center">
<img src="https://github.com/user-attachments/assets/5fc7f121-259c-492c-8bca-f15fe7eb830c" alt="GOAT" width="100px" height="auto" style="object-fit: contain;">
</div>

# On-Chain AI Agent with Crossmint Smart Wallet
## 🧠 GPT + GOAT + Crossmint

This example shows how to build an interactive on-chain agent using:

- 🧠 `@ai-sdk/openai` via Vercel AI SDK (streaming + tool use)
- 🐐 GOAT SDK for on-chain tool integrations
- 👛 Crossmint smart wallets (externally controlled)
- 🪙 ERC20 & ETH support (via plugins)
- 🖥️ CLI interface using Node.js + readline

It uses **Base Sepolia** but works on any EVM chain supported by Crossmint.

---

## ✅ Setup Instructions

### 1. Clone and install dependencies

```bash
git clone https://github.com/goat-sdk/goat.git
cd goat/typescript
pnpm install
```

### 2. Navigate to your agent directory

```bash
cd examples/my-agent
```

### 3. Create and fill in your `.env`

```bash
cp .env.template .env
```

Fill in these values:

- `OPENAI_API_KEY` – from [OpenAI](https://platform.openai.com/account/api-keys)
- `CROSSMINT_STAGING_API_KEY` – from [Crossmint Staging Console](https://staging.crossmint.com)
- `RPC_PROVIDER_URL` – e.g. from [Alchemy](https://dashboard.alchemy.com/)
- `SIGNER_WALLET_SECRET_KEY` – generated using `generate-wallet.js` script
- `SIGNER_WALLET_ADDRESS` – the corresponding public address
- `SMART_WALLET_ADDRESS` – will be created next

### 4. Generate a new signer wallet (optional)

```bash
pnpm ts-node generate-wallet.js
```

Copy the private key and address into your `.env`.

### 5. Create the smart wallet on-chain

```bash
pnpm ts-node create-smart-wallet.ts
```

Copy the returned wallet address into:

```
SMART_WALLET_ADDRESS=<copied from script output>
```

---

## 🧪 Usage

Launch the agent:

```bash
pnpm ts-node index.ts
```

Then try prompts like:

- `Send 0.01 ETH to 0x...`
- `How much ETH do I have?`
- `Send 100 USDC to this address`
- `exit`

You’ll see live tool calls and AI streaming responses.

---

## 🧼 Notes

- This agent uses `evmSmartWallet` (not custodial or email-based).
- Your `.env` should never be committed (it's ignored via `.gitignore`).
- Peer dependency warnings can be ignored unless you're editing packages.

---

<footer>
<br/>
<br/>
<div>
  <img src="https://github.com/user-attachments/assets/59fa5ddc-9d47-4d41-a51a-64f6798f94bd" alt="GOAT" width="100%" height="auto" style="object-fit: contain; max-width: 800px;">
<div>
</footer>
