const puppet = require('puppeteer');

(async () => {
  const programURL =
    'https://hackerone.com/directory?order_direction=DESC&order_field=started_accepting_at';
  const browser = await puppet.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto(programURL, { waitUntil: 'networkidle2' });
  await page.waitForSelector('table[class="daisy-table"]');

  const data = await page.evaluate(() => {
    const programs = document.querySelector('table[class="daisy-table"]')
      .innerText;

    return programs;
  });

  console.log(data);

  //debugger;

  await browser.close();
})();
