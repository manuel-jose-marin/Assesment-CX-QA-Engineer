Feature: Widgets - Accordion
  To validate accordion expansion and collapse
  As a DemoQA user
  I want to expand panels and see their content

  Scenario: Expand accordion panels
    Given the user opens the DemoQA home page
    When the user opens the "Widgets" section from the main menu
    And selects "Accordian" in the side menu
    And expands the accordion panels
    Then the content of each panel should be visible
