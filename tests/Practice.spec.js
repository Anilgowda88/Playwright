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

test('String Comparison for character to character',async ({page}) =>
{
const String1 = 'Anilk#$%mar';
const String2 = 'Anilkumar';
const maxLength = Math.max(String1.length, String2.length)
for (let i=0; i<maxLength;i++)
{
    if(String1[i]!==String2[i])
    console.log(`String1 at index ${i} doestnt match with String2 at index ${i}: String1 has '${String1[i] || "-"}' vs String2 has '${String2[i] || "-"}'}`)
}
});

test('Whole String Comparison',async ({page}) =>
{
const String1 = 'Anil';
const String2 = 'Anilkumar';
    if(String1==String2)
    console.log("Strings are matching")
    else {
    console.log(`String1 doestnt match with String2: String1 is '${String1}' vs String2 is '${String2}'`)
}
});

test('Array Comparison',async ({page}) =>
{
const Array1 = ['Apple', 'Banana', 'Carrot'];
const Array2 = ['apple', 'Banana', 'carrot'];
const maxLength = Math.max(Array1.length, Array2.length)
for (let i=0; i<maxLength;i++)
{
    if(Array1[i]!==Array2[i])
    console.log(`Array1 at index ${i} doestnt match with Array2 at index ${i}: Array1 has '${Array1[i] || "-"}' vs Array2 has '${Array2[i] || "-"}'}`)
}
});

test('Reverse a string',async ({page}) =>
{
const String = 'Anilkumar';
const reverseString = String.split("").reverse().join("");
console.log(`Reverse String of ${String} is: ${reverseString}`);
});

test('Check for palindrome',async ({page}) =>
{
const String = 'MADAM';
if  (String == String.split("").reverse().join("")){
    console.log(`${String} is a palindrome`)}
    else {
    console.log(`${String} is NOT a palindrome`);  
    }
});

test('Check for Frequency of Char',async ({page}) =>
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
const PrimeArray = [0,1,2,3,4,5,6,7,8,9];
function isPrime(n){
    if (n<2) return false;
    for (let i=2;i<=Math.sqrt(n);i++){
        if (n%i==0) return false
    }
    return true;
}
    for (let j=0;j<PrimeArray.length;j++)
    {
        console.log(`${PrimeArray[j]} is a Prime Number or Not: ${isPrime(PrimeArray[j])}`);
    }
});

test('Check for factorial',async ({page, context}) =>
{
    function factorial(n){
        if (n===0) return 1;
        return n*factorial(n-1);
    }
    const FactorialArray = [1,2,3,4,5,6,7,8,9,10]
    for(let i=0;i<FactorialArray.length;i++)
    {
    console.log(`Factorial of ${FactorialArray[i]} is : ${factorial(i)}`);
    }
});

test('Check for fibonacci',async ({page, context}) =>
{
    function fibonacci(n){
        let a=0, b=1, result = [];
        for (let i=0;i<n;i++)
        { result.push(a);
        [a,b] = [b, a+b];
    }
    return result;
}
    console.log(`fibonacci is : ${fibonacci(6)}`);
});

test('Check for fibonacci2',async ({page, context}) =>
{
    const fibNum = 6;    let a=0;    let b=1;    const results = [];
        for (let i=0;i<fibNum;i++){ 
        results.push(a);
        [a,b] = [b, a+b];
        }
    console.log(results);
});

test('Captitalize first letter of every word',async ({page, context}) =>
{
    const string = 'anilkumar nagaraju loves his family';
    const Captitalize = string.split(' ').map(word => word.charAt(0).toUpperCase()+word.slice(1)).join(' ');
    console.log(`Captitalized sentence is : ${Captitalize}`);
});

test('Captitalize every letter of every word',async ({page, context}) =>
{
    const string = 'anilkumar nagaraju loves his family';
    const Captitalize = string.split(' ').map(word => word.toUpperCase()).join(' ');
    console.log(`Captitalized sentence is : ${Captitalize}`);
});

test('Array Intersection and Not Intersection',async ({page, context}) =>
{
    const arr1 = [1, 2, 3, 4];
    const arr2 = [2, 3, 4, 5];
    const intersection = arr1.filter(val => arr2.includes(val));
    const difference   = arr1.filter(val => !arr2.includes(val));
    console.log("Intersection:", intersection);
    console.log("Difference:", difference);
});  