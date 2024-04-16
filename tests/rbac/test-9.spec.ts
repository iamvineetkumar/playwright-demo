import { test, expect } from '@playwright/test';

test('test three', async ({ page },testInfo) => {
  console.log("title is test three :: "+testInfo.title);
  console.log("title path is test three :: "+testInfo.titlePath);
  console.log(`Running test three ${testInfo.title}`);

  await page.goto('https://www.zoomcar.com/');
  await page.goto('https://www.zoomcar.com/in/ranchi');
  await page.getByRole('img', { name: 'close-icon' }).click();
  await page.getByRole('link', { name: 'Login/Signup' }).click();
  await page.locator('.option').first().click();
  await page.getByText('Continue with Email ID').click();
  await page.getByPlaceholder('Email ID').fill('vkr5959@gmail.com');
  console.log("---- I am 3------");

  console.log(`Finished ${test.info().title} with status ${test.info().status}`);

});