Feature: Elements - Text Box
  To validate the text form in Elements
  As a DemoQA user
  I want to submit full name and email and see them reflected

  Scenario: Complete the Text Box form
    Given the user opens the DemoQA home page
    When the user opens the "Elements" section from the main menu
    And selects "Text Box" in the side menu
    And completes the Text Box form with name "Juan Perez" and email "juan.perez@example.com"
    Then the name and email should be reflected in the output section
