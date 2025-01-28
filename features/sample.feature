@firstTest
Feature: Hello World Feature
    Feature Description: Run First BDD Test with Playwright

Scenario Outline: Say Hello
    Given Print Say Hello
    Then Say "<Text>"

    Examples:
        | Text          |
        |Hello World1   |
        |Hello World2   |