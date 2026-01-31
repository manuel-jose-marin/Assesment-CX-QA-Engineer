Feature: Interactions - Droppable
  To validate drag and drop functionality
  As a DemoQA user
  I want to drag an element into the target area

  Scenario: Drag and drop an element
    Given the user opens the DemoQA home page
    When the user opens the "Interactions" section from the main menu
    And selects "Droppable" in the side menu
    And drags the element into the target area
    Then the target area should indicate the element was dropped
