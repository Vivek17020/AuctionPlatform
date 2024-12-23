const TelegramBot = require("node-telegram-bot-api");

// JSON data embedded in the script
const jsonData = {
  home: {
    welcome_message: "Welcome to the Auction Platform! Find art, music, crypto, and more.",
    featured_categories: [
      { name: "Art" },
      { name: "Photography" },
      { name: "Music" },
      { name: "Crypto" },
    ],
  },
  ongoing_auctions: [
    {
      id: 301,
      name: "Rare Crypto Art",
      current_bid: 1200,
      category: "Crypto",
      manager: "CryptoKing",
      end_date: "2024-01-05",
    },
    {
      id: 302,
      name: "Exclusive Music Track",
      current_bid: 800,
      category: "Music",
      manager: "MusicMaestro",
      end_date: "2024-01-07",
    },
  ],
  upcoming_auctions: [
    {
      id: 201,
      name: "Digital Artwork Collection",
      start_date: "2024-01-10",
      category: "Art",
      creator: "Artist123",
    },
    {
      id: 202,
      name: "Exclusive Photography",
      start_date: "2024-01-15",
      category: "Photography",
      creator: "PhotoPro",
    },
  ],
  recently_sold: [
    {
      id: 401,
      name: "Limited Edition Tweet",
      final_price: 500,
      category: "Tweet",
      buyer: "Bidder456",
    },
    {
      id: 402,
      name: "Abstract Painting",
      final_price: 2000,
      category: "Art",
      buyer: "Collector789",
    },
  ],
  bidding: {
    instructions: "Click the link below to place your bid:",
    url: "https://embed-crossmint.vercel.app/",
  },
};

// Replace with your bot token
const token = "7550085258:AAEOifuhTEfkYwO0MRw57FzsxFSPOPZv2ek";

// Initialize Telegram Bot
const bot = new TelegramBot(token, { polling: true });

// Helper function to format and send auction details
const sendAuctionDetails = (chatId, auctions, messagePrefix = "") => {
  auctions.forEach((auction) => {
    const auctionDetails = `${messagePrefix}🔹 ${auction.name}\n💰 Current/Final Bid: $${auction.current_bid || auction.final_price}\n📅 Date: ${
      auction.end_date || auction.start_date
    }\n📂 Category: ${auction.category}`;
    bot.sendMessage(chatId, auctionDetails);
  });
};

// Handle messages
bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text.toLowerCase();

  try {
    if (text === "/start") {
      // Welcome message with options
      bot.sendMessage(chatId, jsonData.home.welcome_message, {
        reply_markup: {
          keyboard: [
            [{ text: "/ongoing" }, { text: "/upcoming" }],
            [{ text: "/closed" }, { text: "/bidding" }],
          ],
          resize_keyboard: true,
          one_time_keyboard: false,
        },
      });
    } else if (text === "/ongoing") {
      // Ongoing auctions
      bot.sendMessage(chatId, "📢 Ongoing Auctions:");
      sendAuctionDetails(chatId, jsonData.ongoing_auctions, "🔴 ");
    } else if (text === "/upcoming") {
      // Upcoming auctions
      bot.sendMessage(chatId, "📅 Upcoming Auctions:");
      sendAuctionDetails(chatId, jsonData.upcoming_auctions, "🟢 ");
    } else if (text === "/closed") {
      // Recently closed auctions
      bot.sendMessage(chatId, "📜 Closed Auctions:");
      sendAuctionDetails(chatId, jsonData.recently_sold, "🟡 ");
    } else if (text === "/bidding") {
      // Bidding instructions with the link
      bot.sendMessage(chatId, `${jsonData.bidding.instructions} \n🔗 ${jsonData.bidding.url}`);
    } else {
      // Fallback for unrecognized commands
      bot.sendMessage(chatId, "❓ Command not recognized. Try /ongoing, /upcoming, /closed, or /bidding.");
    }
  } catch (error) {
    console.error("Error handling message:", error);
    bot.sendMessage(chatId, "⚠️ An error occurred. Please try again later.");
  }
});

console.log("Bot is running...");
