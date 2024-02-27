import { test, expect } from '@playwright/test';


test.describe('testing "Contact Us" section', () =>{

    test.beforeEach('going to the "Contact Us" section of the website "galaniprojects.com"', async({page}) =>{
        await page.goto('http://new.galaniprojects.com/');
        await page.getByRole('link', { name: 'Contact Us' }).click();
    });

    test('testing "Contact" header in the section "Contact Us"', async({page}) =>{
        const contactHeader = page.getByText('Contact', { exact: true });
        await expect(contactHeader).toHaveCSS('color', 'rgb(255, 102, 0)');
        await expect(contactHeader).toHaveCSS('font-size', '48px');
    });

    test('testing title-text in the Section "Contact Us"', async({page}) =>{
        const teamHeader = page.getByText('Simply use our contact form');
          await expect(teamHeader).toHaveCSS('color', 'rgb(51, 51, 51)');
          await expect(teamHeader).toHaveCSS('font-size', '18px');
    });

    test('testing the address informations', async({page}) =>{
       // Define the expected contact information
       const expectedAddress = 'Keithstraße 2-4';
       const expectedCity = 'Berlin';
       const expectedPhone = '+49 (0) 30 2123 2827';
       const expectedEmail = 'info@galaniprojects.de';

       // Use locators to find the elements containing the contact information
       const contactInfo =  await page.locator('.text-block-contact').textContent();
       const contactLabels =  await page.locator('.text-block-contact-2').textContent();

       // Verify that the contact information is correct
        expect(contactInfo).toContain(expectedAddress);
        expect(contactInfo).toContain(expectedCity);
        expect(contactInfo).toContain(expectedPhone);
        expect(contactInfo).toContain(expectedEmail);

       // Check if labels are correct (if necessary)
        expect(contactLabels).toContain('Adress:');
        expect(contactLabels).toContain('City:');
        expect(contactLabels).toContain('Phone:');
        expect(contactLabels).toContain('E-Mail:');
        
    });

});