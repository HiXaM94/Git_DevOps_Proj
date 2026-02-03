import axios from "axios";
import * as cheerio from "cheerio";

const DEFAULT_HEADERS = {
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 " +
    "(KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36"
};

async function fetchHtml(url) {
  const res = await axios.get(url, {
    headers: DEFAULT_HEADERS,
    timeout: 15000
  });
  return res.data;
}

export async function scrapeSite(site) {
  const html = await fetchHtml(site.url);
  const $ = cheerio.load(html);

  // TODO: adapt per-site selectors once you have real product URLs.
  switch (site.type) {
    case "decathlon":
      return scrapeDecathlon($, site);
    case "lcwaikiki":
      return scrapeLcWaikiki($, site);
    case "flo":
      return scrapeFlo($, site);
    default:
      throw new Error(`Unknown site type: ${site.type}`);
  }
}

function normalizePrice(text) {
  if (!text) throw new Error("Empty price text");
  const cleaned = text.replace(/\s/g, "").replace(",", ".");
  const match = cleaned.match(/([\d.]+)/);
  if (!match) throw new Error(`Cannot parse price from "${text}"`);
  return parseFloat(match[1]);
}

function scrapeDecathlon($, site) {
  // Example selector, must be adapted to the product page structure.
  // Inspect the product page in your browser and update this.
  const priceText =
    $('[data-qa="product-price"], .product-price, .price').first().text();
  const price = normalizePrice(priceText);
  return { site: site.name, url: site.url, price, rawText: priceText.trim() };
}

function scrapeLcWaikiki($, site) {
  const priceText =
    $(".price, .product-price, .price-container").first().text();
  const price = normalizePrice(priceText);
  return { site: site.name, url: site.url, price, rawText: priceText.trim() };
}

function scrapeFlo($, site) {
  const priceText =
    $(".currentPrice, .product-price, .price").first().text();
  const price = normalizePrice(priceText);
  return { site: site.name, url: site.url, price, rawText: priceText.trim() };
}
