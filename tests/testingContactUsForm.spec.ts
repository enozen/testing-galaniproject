import { test, expect } from '@playwright/test';

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
     page.on('dialog', async dialog => {
        if (dialog.message() === "Fülle dieses Feld aus") {
          await dialog.dismiss(); 
        }
      });
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
    page.on('dialog', async dialog => {
        if (dialog.message() === 'Die E-Mail-Adresse muss ein @-Zeichen enthalten. In der Angabe "testemail" fehlt ein @-Zeichen') {
          await dialog.dismiss(); 
        }
      });
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
    });
  
  });