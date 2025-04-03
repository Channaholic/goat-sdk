// generate-wallet.js
const { generatePrivateKey, privateKeyToAccount } = require("viem/accounts");

(async () => {
    const privateKey = generatePrivateKey();
    const account = privateKeyToAccount(privateKey);

    console.log("✅ Wallet generated:");
    console.log("Address:              ", account.address);
    console.log("Private Key (KEEP SAFE):", privateKey);
})();
