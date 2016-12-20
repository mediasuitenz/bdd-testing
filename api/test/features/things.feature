Feature: Retrieving Things's

Scenario: Should be able to get 'em all

   Given I make a request to /api/v1/things
   When I receive a success response
   Then there should be 1 things in the response