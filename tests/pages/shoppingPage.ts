import { Locator, Page } from "@playwright/test";

export class ShoppingPage {
    private page: Page; // Use the correct type

    constructor(page: Page) {
        this.page = page;
    }

    async navigateToUrl(): Promise<void> {
        await this.page.goto('https://www.saucedemo.com/inventory.html');
    }

    CartButton(): Locator {
        return this.page.locator('a[class="shopping_cart_link"]'); // Corrected the locator
    }

    async  addToCartIfProductMatches(productName) {
        // XPath selectors for product titles and "Add to Cart" buttons
        
        // Get all product title elements
        const titleElements = await this.page.$$('div[class="inventory_item_label"] a');
        const buttonElements = await this.page.$$('div[class="pricebar"] button');
    
        // Iterate through the title elements
        for (let i = 0; i < titleElements.length; i++) {
            const titleText = await titleElements[i].textContent();
            
            // Check if the title matches the provided product name
            if (titleText === productName) {
                // Click the corresponding "Add to Cart" button
                await buttonElements[i].click();
                console.log(`Added "${titleText}" to cart.`);
                return; // Exit after adding the matching product
            }
        }
    
        console.log(`No matching product title found for "${productName}".`);
    }
    
}

