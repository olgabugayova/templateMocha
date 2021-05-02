const playwright = require("playwright");

describe('Это демо сьюит', () => {
    it('Это демо тест', async() => {
        browser = await playwright.chromium.launch({
            //тут задаются настройки браузера
            headless: true,
            //задержка между командами, чтобы фронтэнд успел отработать
            slowMo: 1000,
        });
        //контекст браузера
        context = await browser.newContext();
        page = await context.newPage();

        await page.goto('https://try.vikunja.io/login');

        await page.close();
        await browser.close();

    })
})