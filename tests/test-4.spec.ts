import { test, expect } from '@playwright/test';

test('test four', async ({ page },testInfo) => {
  console.log("title is :: 4 "+testInfo.title);
  console.log("title path is :: 4 "+testInfo.titlePath);
  console.log(`Running 4 ${testInfo.title}`);
  await page.goto('https://www.zoomcar.com/');
  await page.getByText('Select Location').click();
  await page.getByText('Bangalore', { exact: true }).click();
  await page.getByRole('img', { name: 'close-icon' }).click();
  await page.getByRole('banner').getByText('menu').click();
  await page.locator('a').filter({ hasText: 'Change Language English' }).click();
  await page.locator('a').filter({ hasText: 'Change City Bangalore' }).click();
  await page.getByText('Select Location').click();
  await page.getByText('Pune', { exact: true }).click();
  await page.getByRole('button', { name: 'Company Profile ' }).click();
  await page.getByRole('link', { name: 'Login/Signup' }).click();
  await page.getByText('Enter details to login/sign-up').click({
    clickCount: 3
  });
});