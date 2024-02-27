import { test, expect } from '@playwright/test';


test.describe('testing "Our Team" section', () =>{

    test.beforeEach('going to the "Our Team" section of the website "galaniprojects.com"', async({page}) =>{
        await page.goto('http://new.galaniprojects.com/');
        await page.getByRole('link', { name: 'Our Team' }).click();
    });

    test('testing "Our" header in the section "Our Team"', async({page}) =>{
        const ourHeader = page.locator('#our-team').getByText('Our', { exact: true });
        await expect(ourHeader).toHaveCSS('color', 'rgb(54, 52, 52)');
        await expect(ourHeader).toHaveCSS('font-size', '48px');
    });

    test('testing "Team" header', async({page}) =>{
        const teamHeader = page.getByText('Team', { exact: true });
          await expect(teamHeader).toHaveCSS('color', 'rgb(255, 102, 0)');
          await expect(teamHeader).toHaveCSS('font-size', '48px');
    });

    test('testing the title-text in "Our Journey" section', async({page}) =>{
        const titleText = page.getByText('From the beginning over the');
        await expect(titleText).toHaveCSS('color', 'rgb(242, 242, 242)');
        await expect(titleText).toHaveCSS('font-size', '18px');
    });

    test('testing the description-text in the "Our Team" section', async({page}) =>{
        const descriptionText = page.getByText('Galaniprojects is an');
        await expect(descriptionText).toHaveCSS('text-align', 'center');
        await expect(descriptionText).toHaveCSS('font-size', '18px');
    });

    test('testing the base-text in the "Our Team" section', async({page}) =>{
        const baseText = page.getByText('All our employees are experts');
        await expect(baseText).toHaveCSS('margin-bottom', '10px');
        await expect(baseText).toHaveCSS('font-size', '16px');
    });

    test('testing the header-text', async({page}) =>{
        const headreText = page.getByRole('heading', { name: 'Our Values' });
        await expect(headreText).toHaveCSS('color', 'rgb(255, 102, 0)');
        await expect(headreText).toHaveCSS('font-size', '24px');
        await expect(headreText).toHaveCSS('margin-bottom', '0px');
    });


});