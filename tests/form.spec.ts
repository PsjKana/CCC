import { test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  // await page.goto('http://localhost:3000/dashboard/form');
  // await page.getByLabel('Address *').fill('Poststr. 9');
  // await page.getByLabel('ZIP *').fill('12345');
  // await page.getByLabel('Location *').fill('HH');
  // await page.getByLabel('City *').fill('HH');
  // await page.getByLabel('Country *').fill('Germany');
  // await page.getByPlaceholder('test@example.com').fill('test@example.com');
  // await page.getByPlaceholder('Your password').first().fill('1234567890');
  // await page.getByPlaceholder('Repeat your password').first().fill('1234567890');
  // await page.getByRole('button', { name: 'Register' }).nth(1).click();
});

test('first', async ({ page }) => {
  // page is signed in.
  await page.goto('http://localhost:3000/dashboard');
});

test('second', async ({ page }) => {
  // page is signed in.
  await page.goto('http://localhost:3000/');
});
