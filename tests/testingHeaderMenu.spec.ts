import { test, expect } from '@playwright/test';

test.describe('Header Menu Navigation Functionality Verification', () => {

test('Click on the "Our Expertise" link in the header menu.', async ({ page }) => {
  await page.goto('http://new.galaniprojects.com/');
  await page.getByRole('link', { name: 'Our Expertise' }).click();
  await expect(page.locator('#our-expterise').getByText('Our Expertise')).toBeVisible()
});

test('Click on the "Our Journey" link in the header menu.', async ({ page }) => {
  await page.goto('http://new.galaniprojects.com/#our-expterise');
  await page.getByRole('link', { name: 'Our Journey' }).click();
  await expect(page.getByText('Our Journey to')).toBeVisible();
});

test('Click on the "Our Customers" link in the header menu.', async ({ page }) => {
  await page.goto('http://new.galaniprojects.com/#about-us');
  await page.getByRole('link', { name: 'Our Customers' }).click();
  await expect(page.getByRole('heading', { name: 'Clients' })).toBeVisible();
});

test('Click on the "Our Team" link in the header menu.', async ({ page }) => {
  await page.goto('http://new.galaniprojects.com/#our-coustumers');
  await page.getByRole('link', { name: 'Our Team' }).click();
  await expect(page.getByText('Team', { exact: true })).toBeVisible();
});

test('Click on the "Contact Us" link in the header menu.', async ({ page }) => {
  await page.goto('http://new.galaniprojects.com/#our-team');
  await page.getByRole('link', { name: 'Contact Us' }).click();
  await expect(page.getByText('Contact', { exact: true })).toBeVisible();
});

test('Click on the Galani Projects logo at any point after navigating to a section.', async ({ page }) => {
  await page.goto('http://new.galaniprojects.com/#contact-us');
  await page.getByRole('link', { name: 'galaniprojects Logo' }).click();
  await expect(page.getByRole('heading', { name: '16 Years of Expertise for' })).toBeVisible();
});

});

