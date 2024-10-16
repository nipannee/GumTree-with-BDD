import { Locator, Page } from "@playwright/test";

export class CartPage {
    private page: Page; // Use the correct type

    constructor(page: Page) {
        this.page = page;
    }

   productTitle(): Locator{ return this.page.locator('a div[class="inventory_item_name"]')}
   removeButtton():Locator{ return this.page.locator('//button[starts-with(text(), "Remove")]')}

   async  removeFromCartIfProductMatches(productName) {

        const titleText = await this.productTitle().textContent();
        
        // Check if the title matches the provided product name
        if (titleText === productName) {
            // Click the corresponding "Add to Cart" button
            await this.removeButtton().click();
            console.log(`removed "${titleText}" from cart.`);
            return; // Exit after adding the matching product   
        }
        else{
        console.log(`No matching product title found for "${productName}".`);
        }
    
}

}