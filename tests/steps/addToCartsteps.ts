import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/fixture';
import { expect } from '@playwright/test';
import { Utils } from '../utils/utils';

const { Before, After, Given, When, Then } = createBdd(test);


Given('I navigate to the shopping page', async ({ page, shoppingPage }) => {

    const  utils = new Utils(page);
    await utils.navigateWithCookies('https://www.saucedemo.com/inventory.html'); // Ensure this method is defined in your ShoppingPage class
});

When('I add {string} to the cart', async ({ page, shoppingPage }, productName) => {
    await shoppingPage.addToCartIfProductMatches(productName); // Ensure this method is defined
});

When('I click on the cart button', async ({ page, shoppingPage }) => {
    await shoppingPage.CartButton().click(); // Ensure this returns the button element correctly
    await page.waitForLoadState('networkidle'); // Wait for the page to load
});


Then('verify it navigates to the cart page', async ({ page }) => {
    await expect(page).toHaveURL('https://www.saucedemo.com/cart.html'); // Check the URL
    
});


Then('I verify that all {string} in the cart exist', async ({ page, cartPage }, productNames) => {
    await cartPage.removeFromCartIfProductMatches(productNames)
    
});
