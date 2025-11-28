const {test, expect} = require ('@playwright/test');
const {ExcelReader} = require('./Utils/ExcelReaderUtilClass');
const {ExcelWriter} = require('./Utils/ExcelWriteUtilClass');
require('dotenv').config({ override: true });

// import ExcelReader from './Utils/ExcelReaderUtilClass';

test('Login to Sherwin Account',async ({page}) =>
{
const reader = new ExcelReader();
const ExcelRows = reader.read('tests/data/TestDataInput.xlsx', 'UserDetails');
console.log(ExcelRows[0]);
console.log('Excel Rows Length: ',ExcelRows.length);

await page.goto("https://www.sherwin-williams.com/");
await page.getByLabel("Sign in Link").click();

for (let i=0;i<ExcelRows.length;i++)
    {
    const ExpectedSherwinTitle = 'My Account - Sherwin-Williams';
    console.log('USERNAME from .env:', process.env.TEST_USERNAME);

    await page.getByRole('textbox', { name: 'Email' }).fill(process.env.TEST_USERNAME);
    await page.getByRole('textbox', { name: 'password' }).fill(process.env.TEST_PASSWORD);
    
    // await page.getByRole('textbox', { name: 'password' }).fill(process.env.password);
    await page.getByRole('button', {name: 'Sign In', exact: true} ).click();
    // await page.locator('#SimpleSearchForm_SearchTerm').click();
    const SherwinHomePageTitle = await page.title();
    console.log(SherwinHomePageTitle);
    expect(SherwinHomePageTitle).toEqual.ExpectedSherwinTitle;
    page.on('dialog',dialog => dialog.accept());

    await page.getByRole('link', { name: 'Edit Profile' }).click();
    await page.getByRole('textbox', { name: 'First Name' }).fill(ExcelRows[i].FirstName);
    await page.getByRole('textbox', { name: 'Last Name' }).fill(ExcelRows[i].LastName);
    await page.getByRole('textbox', { name: 'Nickname' }).fill(ExcelRows[i].Nickname);
    await page.getByLabel('Age (optional)*').selectOption(ExcelRows[i].Age);
    await page.getByRole('textbox', { name: 'Street Address (optional)' }).fill(ExcelRows[i].StreetAddress1);
    await page.getByRole('textbox', { name: 'Street Address Line 2 (optional)' }).fill(ExcelRows[i].StreetAddressLine2);
    await page.getByRole('textbox', { name: 'City (optional)' }).fill(ExcelRows[i].City);
    await page.locator('#gigya-dropdown-78837619728578110').selectOption(ExcelRows[i].State);
    await page.getByRole('textbox', { name: 'Zip/Postal Code' }).fill(ExcelRows[i].ZIP);
    await page.getByRole('textbox', { name: 'Mobile Number' }).fill(ExcelRows[i].MobileNumber);
    await page.getByLabel('Home Anniversary Month (').selectOption(ExcelRows[i].HomeAnniversaryMonth);
    await page.getByRole('button', { name: 'Save' }).click();

    await page.getByRole('link', { name: 'Edit Profile' }).click();
    await page.getByRole('link', { name: 'Edit Profile' }).click();
    const appData = {
    AppFirstName: await page.getByRole('textbox', { name: 'First Name' }).inputValue(),
     AppLastName: await page.getByRole('textbox', { name: 'Last Name' }).inputValue(),
     AppNickname: await page.getByRole('textbox', { name: 'Nickname' }).inputValue(),
     AppAge: await page.getByLabel('Age (optional)*').inputValue(),
     AppStreetAddress1: await page.getByRole('textbox', { name: 'Street Address (optional)' }).inputValue(),
     AppStreetAddress2: await page.getByRole('textbox', { name: 'Street Address Line 2 (optional)' }).inputValue(),
     AppCity: await page.getByRole('textbox', { name: 'City (optional)' }).inputValue(),
     AppState: await page.locator('#gigya-dropdown-78837619728578110').inputValue(),
     AppZip: await page.getByRole('textbox', { name: 'Zip/Postal Code' }).inputValue(),
     AppMobile: await page.getByRole('textbox', { name: 'Mobile Number' }).inputValue(),
     AppAnniversaryMonth: await page.getByLabel('Home Anniversary Month (').inputValue(),
    }
    const AppResults = [];
    AppResults.push(appData);
    console.log(AppResults);

    const isEqual = JSON.stringify(ExcelRows[i]) === JSON.stringify(AppResults);
    console.log('Arrays equal?', isEqual);

    // const writer = new ExcelWriter();
    // writer.write('tests/data/TestDataOuput.xlsx', 'Output', AppResults);

    await page.getByRole('button', { name: 'Log Out' }).click();
    }
});