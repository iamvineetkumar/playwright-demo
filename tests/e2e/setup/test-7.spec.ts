import { test, expect } from '@playwright/test';

test('test seven', async ({ page },testInfo) => {
  console.log("title is test seven :: "+testInfo.title);
  console.log("title path is test seven :: "+testInfo.titlePath);
  console.log(`Running test seven ${testInfo.title}`);
  await page.goto('https://www.zoomcar.com/');
  await page.getByText('Select Location').click();
  await page.getByText('Kolkata', { exact: true }).click();
  await page.getByRole('img', { name: 'close-icon' }).click();
  await page.getByText('GET CAR').click();
  await page.getByText('Ratings - High to Low').click();
  await page.getByText('Within 2 km').click();
  await page.getByText('Within 5 km').click();
  await page.getByText('menu').click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Become a Host' }).nth(1).click();
  console.log("---- I am 7------");

  console.log(`Finished ${test.info().title} with status ${test.info().status}`);

});