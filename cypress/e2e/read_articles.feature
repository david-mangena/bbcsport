Feature: Read articles related to sports
  As a sports user,
  I would like to read about all articles related to sports.

  Scenario: Use the search option to find all articles related to ‘sports’
    Given I am on the searchpage
    When I search for articles with keyword "sports"
    Then I should see multiple articles on the page
    And I note down the first heading and the last heading
