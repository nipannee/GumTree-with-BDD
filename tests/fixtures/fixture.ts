    import { test as base } from 'playwright-bdd';
    import * as Pages from './pages';

    const { RegisterAccountPage, CartPage, ShoppingPage } = Pages;

    const createTestFunction = (PageClass: new (page: any) => any) => 
        async ({ page }: { page: any }, use: (value: any) => Promise<void>) => {
            const instance = new PageClass(page);
            await use(instance);
        };

    export const test = base.extend<{
        registerAccountPage: InstanceType<typeof RegisterAccountPage>; // Ensure this is typed correctly
        cartPage: InstanceType<typeof CartPage>;
        shoppingPage: InstanceType<typeof ShoppingPage>;
    }>({
        registerAccountPage: createTestFunction(RegisterAccountPage),
        cartPage: createTestFunction(CartPage),
        shoppingPage: createTestFunction(ShoppingPage)
    });


