
import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/fixture';
import { expect } from '@playwright/test';


const { Before, After, Given, When, Then } = createBdd(test);

When('I navigate to homepage', async ({registerAccountPage, page}) => {
  await console.log(process.env.URL as string)  
  await registerAccountPage.navigateToUrl(process.env.URL as string)
});

Then('I enter username and password', async ({registerAccountPage, page}) => {
    await console.log(process.env.USER as string)
   await registerAccountPage.UserName().fill(process.env.MYUSER as string)
   await page.pause()
   await registerAccountPage.Password().fill(process.env.PASSWORD as string)
});