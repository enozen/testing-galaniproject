import { test, expect } from '@playwright/test';


test.describe('testing "Our Clients" section', () =>{

    test.beforeEach('going to the "Our Clients" section of the website "galaniprojects.com"', async({page}) =>{
        await page.goto('http://new.galaniprojects.com/');
        await page.getByRole('link', { name: 'Our Clients' }).click();
    });

    test('testing "Our" header in the section "Our Clients"', async({page}) =>{
        const ourHeader = page.locator('#our-clients').getByRole('heading', { name: 'Our' });
        await expect(ourHeader).toHaveCSS('color', 'rgb(54, 52, 52)');
        await expect(ourHeader).toHaveCSS('font-size', '48px');
        await expect(ourHeader).toHaveCSS('font-weight', '700');

    });

    test('testing "Clients" header', async({page}) =>{
        const clientsHeader = page.getByRole('heading', { name: 'Clients' });
          await expect(clientsHeader).toHaveCSS('color', 'rgb(255, 102, 0)');
          await expect(clientsHeader).toHaveCSS('font-size', '48px');
    });

    test('testing the name of Client in the card', async({page}) =>{
        const clientname = page.getByText('Hubert Burda Media');
        await expect(clientname).toHaveCSS('color', 'rgb(51, 51, 51)');
        await expect(clientname).toHaveCSS('text-align', 'center');
        await expect(clientname).toHaveCSS('font-size', '18px');
    });

    test('testing the title of Client in the card', async({page}) =>{
        const clientTitle = page.getByText('Context Datenbank, CMS').first();
        await expect(clientTitle).toHaveCSS('color', 'rgb(255, 102, 0)');
        await expect(clientTitle).toHaveCSS('font-size', '14px');
    });

    test('testing the test management of Client in the card', async({page}) =>{
        const testManagement = page.getByText('Waterfall & Scrum').first();
        await expect(testManagement).toHaveCSS('color', 'rgb(51, 51, 51)');
        await expect(testManagement).toHaveCSS('font-size', '15px');
    });

});