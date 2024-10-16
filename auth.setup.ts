import { test as setup, expect } from '@playwright/test';

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page })=>{
    await page.goto(process.env.URL as string);
    await page.locator('[data-test="username"]').fill(process.env.MYUSER as string);
    await page.locator('[data-test="password"]').fill(process.env.PASSWORD as string);
    await page.locator('[data-test="login-button"]').click();
    expect(await page.locator('span[class="title"]')).toBeVisible(); 
    

    await page.context().storageState({ path: authFile });
});

