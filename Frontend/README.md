# Decentralized Auction Management System

A decentralized auction platform built on the blockchain to ensure transparency, immutability, and fairness in online auctions. The system allows users to participate in auctions securely, with real-time bidding, transparent bidding history, and automatic settlement through smart contracts.

## Features

- **Decentralized System**: Eliminates the need for intermediaries, providing trustless auctions.
- **Smart Contracts**: Automatic execution of auction rules and transaction settlements.
- **Real-time Bidding**: Users can place bids and view the auction status in real-time.
- **Transparent Auction History**: All bids are stored on the blockchain, ensuring transparency.
- **Secure Payments**: Payment processing is automated via smart contracts to ensure fast and secure transactions.

## Tech Stack

- **Solidity**: Used for developing smart contracts on the Ethereum blockchain.
- **ReactJS**: Front-end framework for building a dynamic and responsive user interface.
- **Web3.js**: JavaScript library to interact with the Ethereum blockchain from the front-end.
- **Ganache**: Personal blockchain for Ethereum development to simulate a real blockchain environment.
- **MetaMask**: Ethereum wallet extension to interact with the blockchain from the browser.

## Installation

### Prerequisites

- Node.js (v12 or higher)
- npm (Node Package Manager)
- Truffle Suite
- MetaMask (for interacting with the Ethereum blockchain)

### 1. Clone the Repository

```bash
git clone https://github.com/Rajeshpandit55/Decentralized_Auction_Protal.git
cd Decentralized_Auction_Protal
```

### 2. Install Dependencies

Install the necessary dependencies for both the backend (smart contracts) and the front-end (ReactJS app):

```bash
npm install
```

 ### 3.Run the Front-End
Once the smart contracts are successfully deployed, you can run the front-end of the auction system.

Start the React development server:
```bash
 npm start
```


Connect MetaMask
Make sure MetaMask is installed in your browser. Set MetaMask to the same network used by your Truffle project (e.g., Ganache or a testnet). Connect your MetaMask wallet to the DApp to be able to interact with the blockchain and place bids.

### 4. Using the System
- **Create an Auction**: As an auction creator, you can list items with a starting price, bid duration, and other auction details.
- **Place a Bid**: Participants can view auctions and place bids.
- **End Auction**: The auction automatically ends after the specified time or when a valid bid is placed.
- **Payment and Settlement**: Payments are processed and settled via smart contracts once the auction ends.
