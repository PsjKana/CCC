import { test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  // Runs before each test and signs in each page.
  // await page.goto('http://localhost:3000/login');
  // await page.getByLabel('Username or email address').fill('username');
  // await page.getByLabel('Password').fill('password');
  // await page.getByRole('button', { name: 'Sign in' }).click();

  await page.goto('http://localhost:3000/login');
  await page.getByPlaceholder('test@example.com').fill('test@example.com');
  await page.getByPlaceholder('Your password').fill('123456');
  await page.locator('div').filter({ hasText: /^Password \*$/ }).locator('button').click();
  await page.getByLabel('Remember me').check();
  await page.getByRole('button', { name: 'Sign In' }).click();
});

test('first', async ({ page }) => {
  // page is signed in.
  await page.goto('http://localhost:3000/dashboard');
});

test('second', async ({ page }) => {
  // page is signed in.
  await page.goto('http://localhost:3000/');
});
