@skip
Feature: logging with different credentials 
    @skip
    Scenario: User can able to login with standard_user
        When I goto homepage
        Then I should see Swag Labs title 
        And I enter username "standard_user"
        And I enter password "secret_sauce"
        When I click on the login button
        Then I should see title product
    @skip
    Scenario: User can not able to login with locked_out_user
        When I goto homepage
        Then I should see Swag Labs title 
        And I enter username "locked_out_user"
        And I enter password "secret_sauce"
        When I click on the login button
        Then I should see error message "Epic sadface: Sorry, this user has been locked out."
    @skip
    Scenario: User can able to login with problem_user
        When I goto homepage
        Then I should see Swag Labs title 
        And I enter username "problem_user"
        And I enter password "secret_sauce"
        When I click on the login button
        Then I should see title product
        And all product image should be same 