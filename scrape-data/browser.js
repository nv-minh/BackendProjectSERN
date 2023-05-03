const puppeteer = require("puppeteer");

const startBrowser = async () => {
  let browser;
  try {
    browser = await puppeteer.launch({
      headless: true, // UI when crawl don't screen
      args: ["--disable-setuid-sandbox"], // Chrome use multiple layers of sandbox to avoid web content unreliable => reliable
      ignoreHTTPSErrors: true, // connect website ignore related issues error http secure
    });
  } catch (error) {
    console.log("don't create browser instance", error);
  }
  return browser;
};

module.exports = startBrowser;
