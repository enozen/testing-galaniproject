import { test, expect } from '@playwright/test';

test('testing Privacy link in footer', async({page}) => {
     await page.goto('http://new.galaniprojects.com/');
     await page.evaluate(() => {
        window.scrollTo(0, document.body.scrollHeight);
      });

      const [newPage] = await Promise.all([
        page.waitForEvent('popup'),
      await page.getByRole('link', { name: 'Imprint & Privacy Policy' }).click(),
      ]);

      await expect(newPage).toHaveURL('http://new.galaniprojects.com/terms-conditions.html');
      await expect(newPage).toHaveTitle('Terms & Conditions');
      
});