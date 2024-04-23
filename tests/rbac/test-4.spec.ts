import { test, expect } from '@playwright/test';

test('test four', async ({ page },testInfo) => {
  console.log("title is :: test four "+testInfo.title);
  console.log("title path is :: test four "+testInfo.titlePath);
  console.log(`Running test four ${testInfo.title}`);
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
  console.log("---- I am 4------");

  console.log(`Finished ${test.info().title} with status ${test.info().status}`);

});