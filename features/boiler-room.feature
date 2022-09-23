Feature: Search Boiler Room on Google

  Scenario: Search Boiler Room on Google
    Given I visit google homepage
    When  I search for Boiler Room
    Then I should see the result