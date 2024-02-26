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

test.describe('Contact Us Form Submission Validation', () => {

  test('Navigate to the Galani Projects website and click on the "Contact Us" link in the header menu.', async({page}) => {
  await page.goto('http://new.galaniprojects.com/#contact-us');
  await expect(page.getByText('Contact', { exact: true })).toBeVisible();
  })
  
  test('Leave the "Name" input field empty, fill in the "Email" field with a correctly formatted email, fill in the "Message" field, and click the "Send message" button.', async({page}) => {
  await page.goto('http://new.galaniprojects.com/#contact-us');
  await page.getByPlaceholder('me@company.com').click();
  await page.getByPlaceholder('me@company.com').fill('test');
  await page.getByPlaceholder('Your message...').click();
  await page.getByPlaceholder('Your message...').fill('testmessage');
  await page.getByRole('button', { name: 'Send message' }).click();
  const errorMessage = page.getByText('Fülle dieses Feld aus');
  await expect(errorMessage).toBeVisible();
  })

  test('While in the "Contact Us" section, fill in the "Name" input field, fill in the "Email" field with an incorrect email format (missing the "@" symbol), fill in the "Message" field, and click the "Send message" button.', async({page}) => {
  await page.goto('http://new.galaniprojects.com/#contact-us');
  await page.getByPlaceholder('Your full name').click();
  await page.getByPlaceholder('Your full name').fill('test name');
  await page.getByPlaceholder('me@company.com').click();
  await page.getByPlaceholder('me@company.com').fill('testemail');
  await page.getByPlaceholder('Your message...').click();
  await page.getByPlaceholder('Your message...').fill('testmessage');
  await page.getByRole('button', { name: 'Send message' }).click();
  const errorMessage = page.getByText('Die E-Mail-Adresse muss ein @-Zeichen enthalten. In der Angabe "testemail fehlt ein @-Zeichen');
  await expect(errorMessage).toBeVisible();
  })

  test('While in the "Contact Us" section, fill in the "Name" input field, fill in the "Email" field with a correctly formatted email, fill in the "Message" field, and click the "Send message" button.', async({page}) => {
  await page.goto('http://new.galaniprojects.com/#contact-us');
  await page.getByPlaceholder('Your full name').click();
  await page.getByPlaceholder('Your full name').fill('test name');
  await page.getByPlaceholder('me@company.com').click();
  await page.getByPlaceholder('me@company.com').fill('test@email.com');
  await page.getByPlaceholder('Your message...').click();
  await page.getByPlaceholder('Your message...').fill('testmessage');
  await page.getByRole('button', { name: 'Send message' }).click();
  const successMessage = page.getByText('Vielen Dank! Ihre Nachricht');
  await expect(successMessage).toBeVisible();
  })

})