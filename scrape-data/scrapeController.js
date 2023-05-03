const scrapers = require("./scraper");
const fs = require("fs");
const scrapeController = async (browserInstance) => {
  const url = "https://phongtro123.com/";
  const indexs = [1, 2, 3, 4];
  try {
    let browser = await browserInstance; // call function crawl in file scraper
    const categories = await scrapers.scrapeCategory(browser, url);
    const selectedCategories = categories.filter((category, index) =>
      indexs.some((i) => i === index)
    );
    // let result1 = await scrapers.scraper(browser, selectedCategories[0].link);
    // await fs.writeFile(
    //   "chothuephongtro.json",
    //   JSON.stringify(result1),
    //   (error) => {
    //     if (error) console.log("error: " + error);
    //     console.log("successfully!!");
    //   }
    // );
    let result2 = await scrapers.scraper(browser, selectedCategories[1].link);
    fs.writeFile("nhachothue.json", JSON.stringify(result2), (error) => {
      if (error) console.log("error: " + error);
      console.log("successfully!!");
    });
    // let result3 = await scrapers.scraper(browser, selectedCategories[2].link);
    // fs.writeFile("chothuecanho.json", JSON.stringify(result3), (error) => {
    //   if (error) console.log("error: " + error);
    //   console.log("successfully!!");
    // });
    // let result4 = await scrapers.scraper(browser, selectedCategories[3].link);
    // fs.writeFile("chothuematbang.json", JSON.stringify(result4), (error) => {
    //   if (error) console.log("error: " + error);
    //   console.log("successfully!!");
    // });
  } catch (error) {
    console.log("error in scrape controller:", error);
  }
};

module.exports = scrapeController;
