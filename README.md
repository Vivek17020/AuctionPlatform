#  Auction Platform

A decentralized auction platform built on the blockchain to ensure transparency, immutability, and fairness in online auctions. The system integrates an AI-powered Telegram bot to provide users with auction details and a Crossmint wallet for seamless bidding.

## Features

- **Decentralized System**: Eliminates the need for intermediaries, providing trustless auctions. 
- **Smart Contracts**: Automatic execution of auction rules and transaction settlements. 
- **Real-time Bidding**: Users can place bids and view the auction status in real-time. 
- **Transparent Auction History**: All bids are stored on the blockchain, ensuring transparency. 
- **Secure Payments**: Payment processing is automated via smart contracts to ensure fast and secure transactions. 
- **AI-Powered Telegram Bot**: Allows users to interact with the platform, retrieve auction details, and access bidding links directly from Telegram. 
- **Use of Crossmint Wallet**: Ensures seamless, secure, and fast bidding. Users can place bids using the Crossmint wallet, providing an intuitive and integrated payment solution for all auctions.

## Tech Stack

- **Solidity**: Used for developing smart contracts on the Ethereum blockchain. 
- **ReactJS**: Front-end framework for building a dynamic and responsive user interface. 
- **Web3.js**: JavaScript library to interact with the Ethereum blockchain from the front-end. 
- **Ganache**: Personal blockchain for Ethereum development to simulate a real blockchain environment. 
- **MetaMask**: Ethereum wallet extension to interact with the blockchain from the browser. 
- **Node.js**: Backend runtime environment for handling the Telegram bot and server logic. 
- **Node Telegram Bot API**: Used to develop and manage the Telegram bot. 
- **Crossmint SDK React UI API**: Provides seamless integration for managing payments and bidding functionality within the platform.

## Project Structure

- **backend/**: Contains `bot.js`, which runs the Telegram bot for auction details. 
- **frontend/**: ReactJS-based user interface for interacting with the decentralized auction system.

## Installation and Setup

### Prerequisites

- Node.js (v12 or higher)
- npm (Node Package Manager)
- Truffle Suite
- MetaMask (for interacting with the Ethereum blockchain)
- Telegram account.

### 1. Clone the Repository

```bash
[git clone https://github.com/Vivek17020/AuctionPlatform.git]
cd AuctionPlatform
```

### Backend Setup (Telegram Bot)

1. Navigate to the Backend Folder: `cd backend`. 
2. Install Dependencies: `npm install && npm install node-telegram-bot-api`. 
3. Configure Environment Variables: Create a `.env` file in the `backend` directory and add your bot token: `BOT_TOKEN=<YOUR_TELEGRAM_BOT_TOKEN>`. 
4. Run the Bot: Start the bot with `node bot.js`. Once running, the bot will provide users with auction details and bidding links.

### Frontend Setup

1. Navigate to the Frontend Folder: `cd frontend`. 
2. Install Dependencies: `npm install`. 
3. Run the Frontend: Start the development server with `npm start`. 
4. Connect MetaMask: Ensure MetaMask is installed in your browser. Set MetaMask to the same network used by your Truffle project (e.g., Ganache or a testnet). Connect your MetaMask wallet to the DApp for placing bids and interacting with the blockchain.

## How to Use the Platform

1. **Create an Auction**: List items with a starting price, bid duration, and other auction details. 
2. **Place a Bid**: View ongoing auctions and place bids in real-time. 
3. **End Auction**: Auctions automatically end after the specified time or when a valid bid is placed. 
4. **Payment and Settlement**: Payments are processed and settled via smart contracts upon auction completion.

## AI-Powered Telegram Bot

The Telegram bot serves as a backend agent, offering users: 
1. **Auction Details**: Retrieve ongoing, upcoming, and recently closed auction details. 
2. **Bidding Link**: Access the Crossmint wallet link for seamless bidding.


### Bot Commands

- `/start`: Displays a welcome message with menu options. 
- `/ongoing`: Lists ongoing auctions. 
- `/upcoming`: Displays upcoming auctions. 
- `/closed`: Shows recently closed auctions. 
- `/bidding`: Provides the Crossmint wallet link for bidding.

## Bidding with Crossmint Wallet

The Crossmint wallet facilitates secure bidding within the auction platform. Users can retrieve the bidding link from the Telegram bot (`/bidding`) to complete transactions.

## Troubleshooting

1. **Bot not responding**: Verify the bot token in `.env`. Ensure the bot is running without errors. 
2. **MetaMask connection issues**: Confirm MetaMask is set to the correct network. Ensure sufficient ETH or test tokens are in your wallet. 
