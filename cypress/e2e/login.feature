Feature: Verify negative scenarios for login
  As a QA,
  I would like to verify all negative scenarios for login.

  Background: Before Each
    Given I am on the login page

  Scenario: Wrong username and password
    When I enter wrong username and password
    Then error message should be displayed
    Then the error message should contain "username or password is wrong"
    
  Scenario: Enter blank username and password
    When I click submit button
    Then the error messages should be displayed
    Then the error message should contain "Something's missing"

  Scenario: Enter invalid password
    When I enter an invalid username
    Then the error message is displayed
    Then the error message should contain "Usernames"

    Scenario: Enter short password
    When I enter a short password
    Then error message is displayed
    Then the error message should contain "password is too short"

