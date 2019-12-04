const puppet = require('puppeteer');

let config = {
    launchOptions: {
        headless: false
    }
}

puppet.launch(config.launchOptions).then(async browser => {
    const page = await browser.newPage();
    await page.goto('https://www.pentesterlab.com/');
    await browser.close();
});