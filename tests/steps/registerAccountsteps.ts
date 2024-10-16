import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/fixture';
import { expect } from '@playwright/test';



const { Before, After, Given, When, Then } = createBdd(test);

When('I goto homepage', async ({page, registerAccountPage}) => {
  await registerAccountPage.navigateToUrl(process.env.URL as string)
  await page.waitForLoadState('domcontentloaded')
});

Then('I should see Swag Labs title', async ({page, registerAccountPage}) => {
  expect(await registerAccountPage.SwagLabsTitle()).toBeVisible()
});

Then('I enter username {string}', async ({page, registerAccountPage}, arg) => {
  await registerAccountPage.UserName().fill(arg)
});

Then('I enter password {string}', async ({page, registerAccountPage}, arg) => {
  await registerAccountPage.Password().fill(arg)
});

When('I click on the login button', async ({page, registerAccountPage}) => {
  await registerAccountPage.LoginButton().click()
});

Then('I should see title product', async ({page, registerAccountPage}) => {
  expect(await registerAccountPage.ProductTitle()).toBeVisible()
  
});

Then('I should see error message {string}', async ({page, registerAccountPage}, arg: string) => {
   expect(await registerAccountPage.LockedOutUserError()).toBeVisible()

});

Then('all product image should be same', async ({page, registerAccountPage}) => {

  const allSrcsSame = await registerAccountPage.checkAllImgSrcsSame()
  expect(allSrcsSame).toBe(true); 

});