const scrapeCategory = async (browser, url) =>
  new Promise(async (resolve, reject) => {
    try {
      let page = await browser.newPage();
      console.log(">> Open new tab...");
      await page.goto(url);
      console.log(">>> Connection ", url);
      await page.waitForSelector("#webpage"); // parameter is id instance of website
      console.log(">>> Website loading finished ...");

      let dataCategory = await page.$$eval("#navbar-menu > ul > li", (els) => {
        dataCategory = els.map((el) => {
          return {
            category: el.querySelector("a").innerText,
            link: el.querySelector("a").href,
          };
        });
        return dataCategory;
      });
      await page.close();
      console.log("tab closed");
      resolve(dataCategory);
    } catch (error) {
      console.log("error in scrape category: " + error);

      reject(error);
    }
  });

const scraper = async (browser, url) =>
  new Promise(async (resolve, reject) => {
    try {
      let newPage = await browser.newPage();
      console.log(">>> Open new tab...");
      await newPage.goto(url);
      console.log(">>> Connected to new tab...", url);
      await newPage.waitForSelector("#main");
      console.log(">>> finished loading tag main");

      const scrapeData = {};

      // crawl header information
      const headerData = await newPage.$eval("header", (el) => {
        return {
          title: el.querySelector("h1").innerText,
          description: el.querySelector("p").innerText,
        };
      });
      scrapeData.header = headerData;

      // crawl links detail item
      let detailLinks = await newPage.$$eval(
        "#left-col > section.section-post-listing > ul > li",
        (els) => {
          detailLinks = els.map(
            (el) => el.querySelector("div.post-meta > h3 > a").href
          );
          return detailLinks;
        }
      );

      const scraperDetail = async (link) =>
        new Promise(async (resolve, reject) => {
          try {
            let pageDetail = await browser.newPage();
            await pageDetail.goto(link);
            await pageDetail.waitForSelector("#main");
            const detailData = {};
            // start crawls
            // crawls images
            let images = await pageDetail.$$eval(
              "#left-col > article > div.post-images > div > div.swiper-wrapper > div.swiper-slide",
              (els) => {
                images = els.map(
                  (el) => el.querySelector("img,iframe,video").src
                );
                return images;
              }
            );
            detailData.images = images;
            //
            //     // crawls header detail
            const header = await pageDetail.$eval(
              "header.page-header",
              (el) => {
                return {
                  title: el.querySelector("h1 > a").innerText,
                  star: el
                    .querySelector("h1 > span")
                    ?.className?.replace(/^\D+/g, ""),
                  class: {
                    content: el.querySelector("p").innerText,
                    classType: el.querySelector("p > a > strong").innerText,
                  },
                  address: el.querySelector("address").innerText,
                  attributes: {
                    price: el.querySelector(
                      "div.post-attributes > .price > span"
                    ).innerText,
                    acreage: el.querySelector(
                      "div.post-attributes > .acreage > span"
                    ).innerText,
                    published: el.querySelector(
                      "div.post-attributes > .published > span"
                    ).innerText,
                    hashtag: el.querySelector(
                      "div.post-attributes > .hashtag > span"
                    ).innerText,
                  },
                };
              }
            );
            detailData.header = header;

            // information detail
            const mainContentHeader = await pageDetail.$eval(
              "#left-col > article.the-post > section.post-main-content",
              (el) => el.querySelector("div.section-header > h2").innerText
            );
            const mainContentContent = await pageDetail.$$eval(
              "#left-col > article.the-post > section.post-main-content > .section-content > p",
              (els) => els.map((el) => el.innerText)
            );

            detailData.mainContent = {
              header: mainContentHeader,
              content: mainContentContent,
            };
            // posting feature detail
            const overviewHeader = await pageDetail.$eval(
              "#left-col > article.the-post > section.post-overview",
              (el) => el.querySelector("div.section-header > h3").innerText
            );
            const overviewContent = await pageDetail.$$eval(
              "#left-col > article.the-post > section.post-overview > .section-content > table.table > tbody > tr",
              (els) =>
                els.map((el) => ({
                  name: el.querySelector("td:first-child").innerText,
                  content: el.querySelector("td:last-child").innerText,
                }))
            );

            detailData.overview = {
              header: overviewHeader,
              content: overviewContent,
            };
            // contact information
            const contactHeader = await pageDetail.$eval(
              "#left-col > article.the-post > section.post-contact",
              (el) => el.querySelector("div.section-header > h3").innerText
            );
            const contactContent = await pageDetail.$$eval(
              "#left-col > article.the-post > section.post-contact > .section-content > table.table > tbody > tr",
              (els) =>
                els.map((el) => ({
                  name: el.querySelector("td:first-child").innerText,
                  content: el.querySelector("td:last-child").innerText,
                }))
            );

            detailData.contact = {
              header: contactHeader,
              content: contactContent,
            };
            await pageDetail.close();
            console.log(">> Đã đóng tab " + link);
            resolve(detailData);
          } catch (error) {
            console.log("crawl data detail error: " + error);
            reject(error);
          }
        });
      const details = [];

      for (let link of detailLinks) {
        const detail = await scraperDetail(link);
        details.push(detail);
      }
      scrapeData.body = details;
      console.log("browser has closed");
      resolve(scrapeData);
    } catch (error) {
      reject(error);
    }
  });

module.exports = { scrapeCategory, scraper };
