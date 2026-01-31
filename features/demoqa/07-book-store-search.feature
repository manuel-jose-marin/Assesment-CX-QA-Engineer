Feature: Book Store Application - Search
  To validate the book search field
  As a DemoQA user
  I want to search for a term and see related results

  Scenario: Search books by term
    Given the user opens the DemoQA home page
    When the user opens the "Book Store Application" section from the main menu
    And searches for the term "Git" in the Book Store
    Then related results containing "Git" should be displayed
