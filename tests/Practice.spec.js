const {test, expect} = require ('@playwright/test');
const {ExcelReader} = require('./Utils/ExcelReaderUtilClass');
const {ExcelWriter} = require('./Utils/ExcelWriteUtilClass');
require('dotenv').config({ override: true });

test('Login to Sherwin Account Git Upload and Jenkins Updated11121',async ({page}) =>
{
await page.goto("https://www.sherwin-williams.com/");
await page.getByLabel("Sign in Link").click();
    const ExpectedSherwinTitle = 'My Account - Sherwin-Williams';
    await page.getByRole('textbox', { name: 'Email' }).fill(process.env.TEST_USERNAME);
    await page.getByRole('textbox', { name: 'password' }).fill(process.env.TEST_PASSWORD);
    await page.getByRole('button', {name: 'Sign In', exact: true} ).click();
    const SherwinHomePageTitle = await page.title();
    expect(SherwinHomePageTitle).toBe.ExpectedSherwinTitle;
    await page.getByRole('button', { name: 'Log Out' }).click();
});

// test('Login to Sherwin Account',async ({page}) =>
// {
// const { chromium } = require('@playwright/test');
// const browser = await chromium.launch();
// const context = await browser.newContext(); // isolated session
// const page = await context.newPage();
// await page.goto("https://www.sherwin-williams.com/");

// await context.addCookies([{
//   name: 'auth_token',
//   value: 'xyz123',
//   domain: 'example.com',
//   path: '/',
//   httpOnly: true,
//   secure: true
// }]);

// const cookies = await context.cookies();
// console.log(cookies);

// await page.getByLabel("Sign in Link").click();
//     const ExpectedSherwinTitle = 'My Account - Sherwin-Williams';
//     await page.getByRole('textbox', { name: 'Email' }).fill(process.env.TEST_USERNAME);
//     await page.getByRole('textbox', { name: 'password' }).fill(process.env.TEST_PASSWORD);
//     await page.getByRole('button', {name: 'Sign In', exact: true} ).click();
//     const SherwinHomePageTitle = await page.title();
//     expect(SherwinHomePageTitle).toBe.ExpectedSherwinTitle;
//     await page.getByRole('button', { name: 'Log Out' }).click();
// });

test('String Comparison',async ({page}) =>
{
const String1 = 'Anilk#$%mar';
const String2 = 'Anilkumar';
const maxLength = Math.max(String1.length, String2.length)
console.log(maxLength);

for (let i=0; i<maxLength;i++)
{
    if(String1[i]!==String2[i])
    console.log(`String1 at index ${i} doestnt match with String2 at index ${i}: String1 has '${String1[i] || "-"}' vs String2 has '${String2[i] || "-"}'}`)
}
});

test('Array Comparison',async ({page}) =>
{
const String1 = ['Apple', 'Banana', 'Carrot'];
const String2 = ['apple', 'Banana', 'carrot'];
const maxLength = Math.max(String1.length, String2.length)
console.log(maxLength);

for (let i=0; i<maxLength;i++)
{
    if(String1[i]!==String2[i])
    console.log(`String1 at index ${i} doestnt match with String2 at index ${i}: String1 has '${String1[i] || "-"}' vs String2 has '${String2[i] || "-"}'}`)
}
});

test('Reverse a string git1',async ({page}) =>
{
const String = 'Anilkumar';
const reverseString = String.split("").reverse().join("");
console.log(`Reverse String of ${String} is: ${reverseString}`);
});

test('Check for palindrome',async ({page}) =>
{
const String1 = ['Anilkumar','DAD', 'MADAM'];
for(let i=0;i<String1.length;i++)
{
if  (String1[i] == String1[i].split("").reverse().join("")){
    console.log(`${String1[i]} is a palindrome`)}
    else {
    console.log(`${String1[i]} is NOT a palindrome`);  
  }
}
});

test('Check for Frequency for Char',async ({page}) =>
{
const String1 = "NAVYASHREE";
const Freq = {}
for (let char of String1) 
    Freq[char] = (Freq[char] || 0) + 1;
    console.log(Freq);
});

test('Check for Prime Number',async ({page}) =>
{
function isPrime(Number){
    if (Number<2) return false;
    for (let i=2;i<=Math.sqrt(Number);i++){
        if (Number%i==0) return false
    }
    return true;
}
    console.log(isPrime(18));
});

test('Check for Prime Number1 Array',async ({page}) =>
{
const PrimeArray = ['0','1','2','3','4','5','6','7','8','9'];
const numbers = PrimeArray.map(Number);

function isPrime(n){
    if (n<2) return false;
    for (let i=2;i<=Math.sqrt(n);i++){
        if (n%i==0) return false
    }
    return true;
}
for (let j=0;j<numbers.length;j++)
{
    console.log(`${numbers[j]} is a Prime Number or Not: ${isPrime(numbers[j])}`);
}
});

test('Check for cookies',async ({page, context}) =>
{
// Get cookies
const cookies = await context.cookies();
console.log(cookies);

// Add a cookie
  await context.addCookies([{
    name: 'session_id',
    value: 'abc123',
    domain: 'example.com',
    path: '/',
    httpOnly: true,
    secure: true
  }]);

const updatedCookies = await context.cookies();
console.log(updatedCookies);
});

// test('Check for cookies',async ({page, context}) =>
// {
// // Get cookies
// const cookies = await context.cookies();
// console.log(cookies);

// // Add a cookie
//   await context.addCookies([{
//     name: 'session_id',
//     value: 'abc123',
//     domain: 'example.com',
//     path: '/',
//     httpOnly: true,
//     secure: true
//   }]);

// const updatedCookies = await context.cookies();
// console.log(updatedCookies);
// });