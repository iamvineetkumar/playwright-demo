


/*

- assert zoomcar url
- assert the city drop down value
- select the city 
- click on login/sign up
- login with email 
- verify url after login 
- verify if user is logged in 
*/

import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage';

test('zoomcar page', async ({ page },testInfo) => {
  console.log("title is :: zoom "+testInfo.title);
  console.log("title path is :: zoom "+testInfo.titlePath);
  console.log(`Running zoom ${testInfo.title}`);
  await page.goto('https://www.zoomcar.com/');
// Expect a title "to contain" a substring.
  await expect.soft(page).toHaveTitle("Best Car Rental with Zoomcar | Explore & Drive Hassle-Free");
  await expect.soft(await page.url()).toBe("https://www.zoomcar.com/");
  const homePage = new HomePage(page);
   await homePage.clickOnCloseModal();
  await homePage.verifyDropDownSelectText();
  await homePage.verifyLocationText();
  console.log(`Finished ${test.info().title} with status ${test.info().status}`);


});