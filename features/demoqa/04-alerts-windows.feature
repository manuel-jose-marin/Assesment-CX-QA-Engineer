Feature: Alerts, Frame & Windows
  To validate alerts and new windows
  As a DemoQA user
  I want to accept a simple alert and open a new tab

  Scenario: Handle alerts and new tabs
    Given the user opens the DemoQA home page
    When the user opens the "Alerts, Frame & Windows" section from the main menu
    And selects "Alerts" in the side menu
    And triggers and accepts a simple alert
    And selects "Browser Windows" in the side menu
    And opens a new tab from Browser Windows
    Then the alert is accepted and the new tab opens correctly
