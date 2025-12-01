const {test, expect} = require ('@playwright/test');
require('dotenv').config({ override: true });

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

test('Check for Prime Number in Array',async ({page}) =>
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


test('String Comparison for character to character Anil',async ({page}) =>
{
    const str1 = 'Anilkumar';
    const str2 = 'Anil';
    const maxLen = Math.max(str1.length, str2.length);
    for (let i=0;i<=maxLen;i++)
    {
    if(str1[i] == str2[i])
        console.log (`${str1[i] || '-'} matches with ${str2[i] || '-'}`);
    else {
        console.log(`${str1[i]|| '-'} does not match with ${str2[i]|| '-'}`)
    }
}
});

test('Whole String Comparison Anil',async ({page}) =>
{
 const str1 = 'Anilkumar';
    const str2 = 'Anil';
    if(str1 == str2)
        console.log (`${str1} matches with ${str2}`);
    else {
        console.log (`${str1} does not match with ${str2}`);
    }
});

test('Array Comparison Anil',async ({page}) =>
{
    const arra1 = ['Anil', 'Navya', 'Sou'];
    const arra2 = ['Anil', 'navya', 'sou'];
    const maxLen = Math.max(arra1.length, arra2.length);
    for (let i=0;i<maxLen;i++)
    {
        if(arra1[i]==arra2[i])
            console.log(`${arra1[i]} matches with ${arra2[i]}`)
        else {
            console.log(`${arra1[i]} does not match with ${arra2[i]}`)
        }
    }
});

test('Reverse a string Anil',async ({page}) =>
{
const str = 'Anilkumar'
const revStr = str.split('').reverse().join('')
console.log (revStr);
});

test('Check for palindrome Anil',async ({page}) =>
{
const str = 'Anil';
const revStr = str.split('').reverse().join('');
if (str == revStr)
    console.log(`${str} is a palindrome`);
else {console.log(`${str} is NOT a palindrome`);}
});

test('Check for Frequency of Char Anil',async ({page}) =>
{
const str = 'souhaard';
const freq = {}
for (let char of str)
{
    freq[char] = (freq[char]||0)+1;
}
console.log(freq);
});

test('Check for Prime Number Anil',async ({page}) =>
{
function isPrime(Number)
{
    if (Number<2) return false
    else{
        for(let i=0;i<=Math.sqrt(Number);i++)
        {
            if(Number%i==0) return false
        }
        return true
    }
}
console.log(isPrime(18))
});

// test('Check for Prime Number in Array',async ({page}) =>
// {

// });

test('Check for factorial Anil',async ({page, context}) =>
{
 function factorial(number){
    if(number ==0) return 1;
    else return number*factorial(number-1);
 }
 console.log(factorial(4));
});

test('Check for fibonacci Anil',async ({page, context}) =>
{
    const fibN = 6; let a=0; let b=1; const res =[];
        for (let i=0;i<fibN;i++){
        res.push(a);
        [a,b] = [b, a+b]
    }
    console.log(res);
});

test('Captitalize first letter of every word Anil',async ({page, context}) =>
{
const str = 'anilkumar loves his family';
const capStr = str.split(' ').map(word => word.charAt(0).toUpperCase()+word.slice(1)).join(' ');
console.log(capStr);
});

test('Captitalize every letter of every word Anil',async ({page, context}) =>
{
const str = 'anilkumar loves his family';
const capStr = str.split(' ').map(word => word.toUpperCase()).join(' ');
console.log(capStr);
});

test('Array Intersection and Not Intersection Anil',async ({page, context}) =>
{
    const arr1 = [1,2,3,4,5];
    const arr2 = [3,4,5,6,7];
    const intersection = arr1.filter(val => arr2.includes(val));
    console.log(intersection);
}); 