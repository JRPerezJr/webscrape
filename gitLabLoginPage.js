const puppet = require('puppeteer');

let config = {
    launchOptions: {
        headless: true
    }
}

const loginPage = {
    email: 'input[id="user_login"]',
    password: 'input[id="user_password"]',
    loginButton: 'input[class="btn btn-success"]',
    projectPage: 'a[class="text-plain"]',
    dropDownMenu: 'a[class="header-user-dropdown-toggle"]',
    logOutButton: 'a[class="sign-out-link"]',

}

puppet.launch(config.launchOptions).then(async browser => {
    const page = await browser.newPage();
    await page.setViewport({ width: 224, height: 140 });
    await page.goto('https://gitlab.com/users/sign_in');
    await page.waitFor(loginPage.email);
    // await page.type(loginPage.email, "");
    // await page.type(loginPage.password, "");
    // await page.click(loginPage.loginButton);
    // await page.waitFor(loginPage.projectPage);
    // await page.click(loginPage.projectPage);
    await page.screenshot({ path: 'projectPage.jpg' });
    // await page.click(loginPage.dropDownMenu);
    // await page.waitFor(loginPage.logOutButton);
    // await page.click(loginPage.logOutButton);
    await page.waitFor(loginPage.email);
    await browser.close();


});