const {test, expect} = require ('@playwright/test');
const LoginPage = require('./POM/Login');
const {ExcelReader} = require('./Utils/ExcelReaderUtilClass');
const {ExcelWriter} = require('./Utils/ExcelWriteUtilClass');
require('dotenv').config({ override: true });

test('Login to Sherwin Account',async ({page}) =>
{
    await page.goto("https://www.sherwin-williams.com/");
    await page.getByLabel("Sign in Link").click();

    const loginPage = new LoginPage(page);
    await loginPage.login(process.env.TEST_USERNAME,process.env.TEST_PASSWORD)

    const ExpectedSherwinTitle = 'My Account - Sherwin-Williams';
    const SherwinHomePageTitle = await page.title();
    console.log(SherwinHomePageTitle);
    expect(SherwinHomePageTitle).toBe.ExpectedSherwinTitle;
    await page.getByRole('button', { name: 'Log Out' }).click();
});