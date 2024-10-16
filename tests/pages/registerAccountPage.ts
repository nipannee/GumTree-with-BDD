import { Locator, Page } from "@playwright/test";

export class RegisterAccountPage {
    private page: Page; // Use the correct type

    constructor(page: Page) {
        this.page = page;
    }

    async navigateToUrl(url: string): Promise<void> {
        await this.page.goto(url);
    }

    SwagLabsTitle(): Locator {
        return this.page.locator('div[class="login_logo"]');
    }

    UserName(): Locator {
        return this.page.locator('[data-test="username"]');
    }

    Password(): Locator {
        return this.page.locator('[data-test="password"]');
    }

    LoginButton(): Locator {
        return this.page.locator('[data-test="login-button"]');
    }

    ProductTitle(): Locator {
        return this.page.locator('span[class="title"]');
    }

    LockedOutUserError(): Locator {
        return this.page.locator('h3[data-test="error"]');
    }

    ProductImageLocator(): Locator {
        return this.page.locator('a img'); // Corrected the locator
    }

    async checkAllImgSrcsSame(): Promise<boolean> {
        const imgLocator = this.ProductImageLocator();
        const count = await imgLocator.count();

        if (count === 0) {
            return false; // No <img> elements found
        }

        const firstSrc = await imgLocator.nth(0).getAttribute('src');

        for (let i = 1; i < count; i++) {
            const src = await imgLocator.nth(i).getAttribute('src');
            if (src !== firstSrc) {
                return false; // Found a different src
            }
        }

        return true; // All srcs are the same
    }
}
