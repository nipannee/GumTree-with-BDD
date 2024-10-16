Feature: Shopping Cart Functionality
  
  Scenario Outline: Add multiple products to the cart and verify
    Given I navigate to the shopping page
    When I add <product> to the cart
    And I click on the cart button
    Then verify it navigates to the cart page
    And I verify that all <product> in the cart exist
  Examples:
    | product                                      |
    | "Sauce Labs Backpack"                        |
    | "Sauce Labs Bike Light"                      |
    | "Sauce Labs Bolt T-Shirt"                    |
    | "Sauce Labs Fleece Jacket"                   |
    | "Sauce Labs Onesie"                          |
    | "Test.allTheThings() T-Shirt (Red)"          |
