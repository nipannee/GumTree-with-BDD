/** Generated from: tests\features\addToCart.feature */
import { test } from "../../../tests/fixtures/fixture.ts";

test.describe("Shopping Cart Functionality", () => {

  test.describe("Add multiple products to the cart and verify", () => {

    test("Example #1", async ({ Given, page, shoppingPage, When, And, Then, cartPage }) => {
      await Given("I navigate to the shopping page", null, { page, shoppingPage });
      await When("I add \"Sauce Labs Backpack\" to the cart", null, { page, shoppingPage });
      await And("I click on the cart button", null, { page, shoppingPage });
      await Then("verify it navigates to the cart page", null, { page });
      await And("I verify that all \"Sauce Labs Backpack\" in the cart exist", null, { page, cartPage });
    });

    test("Example #2", async ({ Given, page, shoppingPage, When, And, Then, cartPage }) => {
      await Given("I navigate to the shopping page", null, { page, shoppingPage });
      await When("I add \"Sauce Labs Bike Light\" to the cart", null, { page, shoppingPage });
      await And("I click on the cart button", null, { page, shoppingPage });
      await Then("verify it navigates to the cart page", null, { page });
      await And("I verify that all \"Sauce Labs Bike Light\" in the cart exist", null, { page, cartPage });
    });

    test("Example #3", async ({ Given, page, shoppingPage, When, And, Then, cartPage }) => {
      await Given("I navigate to the shopping page", null, { page, shoppingPage });
      await When("I add \"Sauce Labs Bolt T-Shirt\" to the cart", null, { page, shoppingPage });
      await And("I click on the cart button", null, { page, shoppingPage });
      await Then("verify it navigates to the cart page", null, { page });
      await And("I verify that all \"Sauce Labs Bolt T-Shirt\" in the cart exist", null, { page, cartPage });
    });

    test("Example #4", async ({ Given, page, shoppingPage, When, And, Then, cartPage }) => {
      await Given("I navigate to the shopping page", null, { page, shoppingPage });
      await When("I add \"Sauce Labs Fleece Jacket\" to the cart", null, { page, shoppingPage });
      await And("I click on the cart button", null, { page, shoppingPage });
      await Then("verify it navigates to the cart page", null, { page });
      await And("I verify that all \"Sauce Labs Fleece Jacket\" in the cart exist", null, { page, cartPage });
    });

    test("Example #5", async ({ Given, page, shoppingPage, When, And, Then, cartPage }) => {
      await Given("I navigate to the shopping page", null, { page, shoppingPage });
      await When("I add \"Sauce Labs Onesie\" to the cart", null, { page, shoppingPage });
      await And("I click on the cart button", null, { page, shoppingPage });
      await Then("verify it navigates to the cart page", null, { page });
      await And("I verify that all \"Sauce Labs Onesie\" in the cart exist", null, { page, cartPage });
    });

    test("Example #6", async ({ Given, page, shoppingPage, When, And, Then, cartPage }) => {
      await Given("I navigate to the shopping page", null, { page, shoppingPage });
      await When("I add \"Test.allTheThings() T-Shirt (Red)\" to the cart", null, { page, shoppingPage });
      await And("I click on the cart button", null, { page, shoppingPage });
      await Then("verify it navigates to the cart page", null, { page });
      await And("I verify that all \"Test.allTheThings() T-Shirt (Red)\" in the cart exist", null, { page, cartPage });
    });

  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("tests\\features\\addToCart.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "Add multiple products to the cart and verify|Example #1": {"pickleLocation":"11:5"},
  "Add multiple products to the cart and verify|Example #2": {"pickleLocation":"12:5"},
  "Add multiple products to the cart and verify|Example #3": {"pickleLocation":"13:5"},
  "Add multiple products to the cart and verify|Example #4": {"pickleLocation":"14:5"},
  "Add multiple products to the cart and verify|Example #5": {"pickleLocation":"15:5"},
  "Add multiple products to the cart and verify|Example #6": {"pickleLocation":"16:5"},
};