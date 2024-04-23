import { test, expect } from '@playwright/test';

test('test one', async ({ page },testInfo) => {
  console.log("title is test one :: "+testInfo.title);
  console.log("title path is test one :: "+testInfo.titlePath);
  console.log(`Running 1 ${testInfo.title}`);
  await page.goto('https://www.zoomcar.com/');
  await page.goto('https://www.zoomcar.com/in/ranchi');
  await page.getByRole('img', { name: 'close-icon' }).click();
  await page.getByRole('banner').getByText('menu').click();
  await page.locator('a').filter({ hasText: 'Change City Ranchi' }).click();
  await page.getByText('Select Location').click();
  await page.getByText('Bangalore', { exact: true }).click();
  await page.getByText('GET CAR').click();
  await page.getByText('Relevance').click();
  await page.getByText('Ratings - High to Low').click();
  await page.getByText('Price - Low to High').click();
  await page.getByText('Distance - Nearest').click();
  await page.locator('div:nth-child(5) > .list').first().click();
  await page.locator('div:nth-child(2) > .list-items > div > .list').first().click();
  await page.locator('div:nth-child(2) > .list-items > div:nth-child(2) > .list').click();
  await page.locator('div:nth-child(2) > .list-items > div:nth-child(3) > .list > .filter-items-icon').click();
  await page.getByText('Within 10 km').click();
  await page.getByText('Within 5 km').click();
  await page.getByText('Within 2 km').click();
  await page.locator('div').filter({ hasText: /^Manual$/ }).click();
  await page.getByText('Automatic').click();
  await page.locator('div:nth-child(8) > .list-items > div > .list').first().click();
  await page.locator('div:nth-child(9) > .list-items > .list-wrapper > .list').click();
  await page.getByText('Active FASTag').click();
  await page.getByText('Diesel').click();
  console.log("---- I am 1------");

  console.log(`Finished ${test.info().title} with status ${test.info().status}`);

});