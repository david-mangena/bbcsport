Feature: Record teams playing today
  As a business user,
  I would like to make a record of all teams which are playing today.

  Scenario: Output all team names with a match today
    Given today is a match day
    When I request the list of teams playing today
    Then I should see record of teams playing today
    Then If there are no matches today,I should see a message "No matches today."