import { test, expect } from '@playwright/test';

test.describe('testing "Our Expertise" section', () =>{

    test.beforeEach('going to the "Our Expertise" section of the website "galaniprojects.com"', async({page}) =>{
        await page.goto('http://new.galaniprojects.com/');
        await page.getByRole('link', { name: 'Our Expertise' }).click();
    });
    
    test('testing "Our" header', async({page}) =>{
        const ourHeader = page.locator('#our-expterise').getByRole('heading', { name: 'Our' });
        await expect(ourHeader).toHaveCSS('color', 'rgb(255, 255, 255)');
        await expect(ourHeader).toHaveCSS('font-size', '48px');
        await expect(ourHeader).toHaveCSS('font-weight', '700');

    });

    test('testing "Expertise" header', async({page}) =>{
        const expertiseHeader = page.getByRole('heading', { name: 'Expertise', exact: true });
          await expect(expertiseHeader).toHaveCSS('color', 'rgb(255, 102, 0)');
          await expect(expertiseHeader).toHaveCSS('font-size', '48px');
          await expect(expertiseHeader).toHaveCSS('text-shadow', 'none');
    });

    test('testing the test below the header', async({page}) =>{
        const textSummary = page.getByText('We provide a high level of');
        await expect(textSummary).toHaveCSS('color', 'rgb(242, 242, 242)');
        await expect(textSummary).toHaveCSS('text-shadow', 'rgb(51, 51, 51) 1px 1px 1px');
        await expect(textSummary).toHaveCSS('font-size', '18px');
    });

    test('testing the image in the card', async({page}) =>{
        const image = page.getByRole('img', { name: 'Icon Agile Consulting' });
        await expect(image).toHaveCSS('width', '128px');
        await expect(image).toHaveCSS('height', '128px');
    });

    test('testing the header in the card', async({page}) =>{
        const headerCard = page.getByText('Agile Consulting');
        await expect(headerCard).toHaveCSS('font-size', '26px');
        await expect(headerCard).toHaveCSS('color', 'rgb(246, 246, 246)');
    });

    test('testing the text in the card', async({page}) =>{
        const textCard = page.getByText('Our certified Scrum Masters');
        await expect(textCard).toHaveCSS('text-align', 'center');
        await expect(textCard).toHaveCSS('font-size', '15px');
    });


});