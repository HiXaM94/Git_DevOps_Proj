import fs from "fs";
import path from "path";
import url from "url";
import express from "express";
import cron from "node-cron";
import { scrapeSite } from "./scrapers.js";
import { sendTelegram, sendDiscord } from "./notifier.js";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 4000;

function loadConfig() {
  const cfgPath = path.join(__dirname, "config.json");
  if (!fs.existsSync(cfgPath)) {
    throw new Error(
      "config.json not found. Copy config.example.json to config.json and edit it."
    );
  }
  const raw = fs.readFileSync(cfgPath, "utf8");
  return JSON.parse(raw);
}

async function checkPricesOnce() {
  const cfg = loadConfig();
  const { productName, targetPrice, currency, sites } = cfg;

  const results = [];
  for (const site of sites) {
    try {
      const data = await scrapeSite(site);
      results.push({ ...data, ok: true });
    } catch (err) {
      results.push({
        site: site.name,
        url: site.url,
        ok: false,
        error: err.message
      });
    }
  }

  const hits = results.filter(r => r.ok && r.price <= targetPrice);
  if (hits.length > 0) {
    const lines = hits.map(
      h =>
        `${h.site}: ${h.price} ${currency} (<= ${targetPrice})\n${h.url}`
    );
    const message =
      `🔔 Price Drop Sniper\n` +
      `Product: ${productName}\n\n` +
      lines.join("\n\n");
    await Promise.all([
      sendTelegram(message, cfg.telegram),
      sendDiscord(message, cfg.discord)
    ]);
  }

  return { results, hits, targetPrice, currency, productName };
}

// HTTP API for the front-end
app.get("/api/prices", async (req, res) => {
  try {
    const data = await checkPricesOnce();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

// Home route for quick health check
app.get("/", (req, res) => {
  res.send("Price Drop Sniper backend is running.");
});

// Load config and schedule cron job
let cfg;
try {
  cfg = loadConfig();
  if (cfg.checkIntervalCron) {
    cron.schedule(cfg.checkIntervalCron, () => {
      console.log("Running scheduled price check...");
      checkPricesOnce().catch(err => console.error("Scheduled check failed", err));
    });
  }
} catch (err) {
  console.warn("Config not loaded yet:", err.message);
}

app.listen(PORT, () => {
  console.log(`Price Drop Sniper API listening on http://localhost:${PORT}`);
});

