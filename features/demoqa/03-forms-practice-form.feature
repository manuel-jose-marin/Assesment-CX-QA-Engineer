Feature: Forms - Practice Form
  To validate the practice form
  As a DemoQA user
  I want to submit valid data and see confirmation

  Scenario: Submit the Practice Form with full data
    Given the user opens the DemoQA home page
    When the user opens the "Forms" section from the main menu
    And selects "Practice Form" in the side menu
    And completes the Practice Form with valid data
    Then a successful submission confirmation should be displayed
