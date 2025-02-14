**Sol-Er: Multi-Blockchain Wallet Generator**

🚀 Overview

Sol-Er is a decentralized wallet generator supporting both Ethereum (ETH) and Solana (SOL) blockchains. This project allows users to securely generate wallet keys, retrieve balances, and manage multiple wallets using a mnemonic seed phrase.

🛠 Features

Generate Ethereum and Solana wallets using a mnemonic phrase.

Display public key, private key, and balance for each wallet.

Securely fetch balance using Alchemy API.

Supports BIP-44 derivation paths for both blockchains.

Clear wallets with a single click.

Simple and intuitive UI built with React & Tailwind CSS.

🏗 Tech Stack

React.js – Frontend framework

Tailwind CSS – UI styling

Ethers.js – Ethereum wallet & blockchain interactions

Solana/web3.js – Solana wallet & blockchain interactions

bip39 – Mnemonic phrase generation

ed25519-hd-key – HD key derivation for Solana

Alchemy API – Blockchain data retrieval

🔧 Installation & Setup

1️⃣ Clone the repository

git clone https://github.com/your-repo/Sol-Er.git
cd Sol-Er

2️⃣ Install dependencies

npm install

3️⃣ Create a .env file and add your Alchemy API keys

REACT_APP_ALCHEMY_ETH=https://eth-mainnet.g.alchemy.com/v2/YOUR_ETH_ALCHEMY_KEY
REACT_APP_ALCHEMY_SOL=https://solana-mainnet.g.alchemy.com/v2/YOUR_SOL_ALCHEMY_KEY

4️⃣ Start the development server

npm start

📝 Usage

Enter a mnemonic phrase or generate a new one.

Click Generate Wallet to create a new ETH or SOL wallet.

View your public key, private key, and balance.

Click Clear Wallets to reset.

🛡 Security Notes

Never share your private key.

Store your mnemonic phrase securely.

Use a hardware wallet for storing large amounts of cryptocurrency.

🤝 Contributing

Feel free to fork this repo and submit PRs with improvements!

⚖️ License

MIT License © 2025 Akshit Panchal

