import chai from 'chai';
import { goto, run, stop } from './framework/lib/browser';
const {expect} = chai;

describe('Это демо сьюит', () => {
    let page;
    beforeEach(async () => {
        await run();
        page = await goto('https://planyway.com/app');
    })
    afterEach(async () => {
        await stop();
    })
    it('Это демо тест', async() => {
        // await page.fill('#username', 'demo');
        // await page.click('#password');
        // await page.fill('#password', 'demo');
        // await page.click('.is-primary');
        // // await page.waitForNavigation({waitUntil:'networkidle'});
        // const profileName = ('.user > .dropdown > .dropdown-trigger > .button > .username');
        // await page.waitForSelector(profileName);
        // const profileNameText = await page.textContent(profileName);
        // expect('demo').to.have.string(profileNameText);
        // // await page.click(profileName);


    })
})