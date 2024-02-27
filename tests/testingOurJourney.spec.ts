import { test, expect } from '@playwright/test';


test.describe('testing "Our Journey" section', () =>{

    test.beforeEach('going to the "Our Journey" section of the website "galaniprojects.com"', async({page}) =>{
        await page.goto('http://new.galaniprojects.com/');
        await page.getByRole('link', { name: 'Our Journey' }).click();
    });

    test('testing "Our Journey to" header in the section "Our Journey"', async({page}) =>{
        const ourJuourneyTo = page.getByText('Our Journey to');
        await expect(ourJuourneyTo).toHaveCSS('color', 'rgb(255, 255, 255)');
        await expect(ourJuourneyTo).toHaveCSS('font-size', '48px');
        await expect(ourJuourneyTo).toHaveCSS('font-weight', '700');
    });

    test('testing "Success" header', async({page}) =>{
        const successHeader = page.getByText('Success', { exact: true });
          await expect(successHeader).toHaveCSS('color', 'rgb(255, 102, 0)');
          await expect(successHeader).toHaveCSS('font-size', '48px');
    });

    test('testing the title-text in "Our Journey" section', async({page}) =>{
        const titleText = page.getByText('From the beginning over the');
        await expect(titleText).toHaveCSS('color', 'rgb(242, 242, 242)');
        await expect(titleText).toHaveCSS('line-height', '28px');
        await expect(titleText).toHaveCSS('font-size', '18px');
    });

    test('testing the Waterfall image', async({page}) =>{
        const waterfallImg = page.getByRole('img', { name: 'Owner Anastasia' });
        await expect(waterfallImg).toHaveCSS('max-width', '100%');
        await expect(waterfallImg).toHaveCSS('box-sizing', 'border-box');
    });

    test('testing the year in the card', async({page}) =>{
        const year = page.getByText('- 2010');
        await expect(year).toHaveCSS('color', 'rgb(255, 102, 0)');
        await expect(year).toHaveCSS('font-size', '14px');
    });

    test('testing the title in the card', async({page}) =>{
        const cardTitle = page.getByText('It starts with Project');
        await expect(cardTitle).toHaveCSS('color', 'rgb(246, 246, 246)');
        await expect(cardTitle).toHaveCSS('font-size', '26px');
        await expect(cardTitle).toHaveCSS('font-weight', '700');
    });

    test('testing the text in the card', async({page}) =>{
        const cardText = page.getByText('Our journey began with a');
        await expect(cardText).toHaveCSS('color', 'rgb(242, 242, 242)');
        await expect(cardText).toHaveCSS('font-size', '15px');
        await expect(cardText).toHaveCSS('text-align', 'left');
    });

});