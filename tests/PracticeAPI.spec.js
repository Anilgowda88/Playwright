const {test, expect} = require ('@playwright/test');
const { brotliDecompress } = require('zlib');
require('dotenv').config({ override: true });

test('Test API Get Posts',async ({request}) =>
{
    const response = await request.get('https://jsonplaceholder.typicode.com/posts')
    expect(response.status()).toBe(200);
    // console.log(response);
    const body = await response.json();
    console.log(body);
    // expect(body.id).toBe(1);
});

test('Test API Get Users',async ({request}) =>
{
    const response = await request.get('https://jsonplaceholder.typicode.com/users')
    expect(response.status()).toBe(200);
    // console.log(response);
    const body = await response.json();
    console.log(body);
    // expect(body.id).toBe(1);
});