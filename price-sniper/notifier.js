import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const envTelegramToken = process.env.TELEGRAM_BOT_TOKEN;
const envTelegramChatId = process.env.TELEGRAM_CHAT_ID;
const envDiscordWebhook = process.env.DISCORD_WEBHOOK_URL;

export async function sendTelegram(message, cfgTelegram = {}) {
  const botToken = cfgTelegram.botToken || envTelegramToken;
  const chatId = cfgTelegram.chatId || envTelegramChatId;
  if (!cfgTelegram.enabled || !botToken || !chatId) return;

  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
  await axios.post(url, {
    chat_id: chatId,
    text: message,
    parse_mode: "HTML"
  });
}

export async function sendDiscord(message, cfgDiscord = {}) {
  const webhookUrl = cfgDiscord.webhookUrl || envDiscordWebhook;
  if (!cfgDiscord.enabled || !webhookUrl) return;

  await axios.post(webhookUrl, {
    content: message
  });
}
