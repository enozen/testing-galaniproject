import { test, expect } from '@playwright/test';

test('testig scroll down button', async({page}) =>{
    await page.goto('http://new.galaniprojects.com/');
    await page.getByRole('link', { name: 'scroll icon' }).click();
    await page.waitForTimeout(2000);
    await expect(page.getByRole('heading', { name: 'Expertise', exact: true })).toBeVisible();
})
