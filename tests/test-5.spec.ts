import { test, expect } from '@playwright/test';

test('test five', async ({ page },testInfo) => {
  console.log("title is 5 :: "+testInfo.title);
  console.log("title path is 5 :: "+testInfo.titlePath);
  console.log(`Running 5 ${testInfo.title}`);
  await page.goto('https://www.zoomcar.com/');
  await page.getByText('Select Location').click();
  await page.getByText('Bangalore', { exact: true }).click();
  await page.getByRole('img', { name: 'close-icon' }).click();
  await page.getByText('GET CAR').click();
  await page.getByText('Ratings - High to Low').click();
  await page.getByText('Within 2 km').click();
  await page.getByText('Within 5 km').click();
  await page.getByText('menu').click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Become a Host' }).nth(1).click();
  const page1 = await page1Promise;
});