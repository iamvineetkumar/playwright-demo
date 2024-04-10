import { test, expect } from '@playwright/test';

test('test two', async ({ page }) => {
  await page.goto('https://www.zoomcar.com/');
  await page.goto('https://www.zoomcar.com/in/ranchi');
  await page.getByRole('img', { name: 'close-icon' }).click();
  await page.getByRole('banner').getByText('menu').click();
  await page.locator('a').filter({ hasText: 'Change City Ranchi' }).click();
  await page.getByText('Select Location').click();
  await page.getByText('Pune', { exact: true }).click();
  await page.getByText('GET CAR').click();
  await page.getByText('Within 2 km').click();
  await page.getByText('GET CAR').click();
});