@skip
Feature: verify logging with different environment

  @skip
  Scenario: Verify user can able to login with dev, qa, prod environment
    When I navigate to homepage
    And I enter username and password 
    When I click on the login button
        
    