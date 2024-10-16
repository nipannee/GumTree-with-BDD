import { Page } from '@playwright/test'

export class Utils{
    private page : Page

    constructor(page: Page) {
        this.page = page;
    }
   

async navigateWithCookies(url: string): Promise<void> {
    // Add cookies to the page context
    const cookies = require('../../playwright/.auth/user.json');
    const cookiesArray = cookies.cookies;
    console.log(cookies)
    await this.page.context().addCookies(cookiesArray);
    
    // Navigate to the provided URL
    await this.page.goto(url);
}


}