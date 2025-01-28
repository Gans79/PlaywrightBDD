@demo
Feature: Nsw Gov media releases 
    Media releases form

Scenario Outline: Run the filter test cases  
    Given Navigate to media releases via '<url>'
    Then On the left panel I see '<Accordion>' and click it 
    When I click on '<Minister>' check box
    When I click on '<Filter>' button
    Then User is landed on the results page with '<Results>' results


    Examples:
        | url                                          | Accordion | Minister           | Filter             | Results  | 
        | https://www.nsw.gov.au/ministerial-releases  | Ministers | The Premier        | Apply filters      | 422      |
        | https://www.nsw.gov.au/ministerial-releases  | Ministers | Deputy Premier     | Apply filters      | 118      |
        | https://www.nsw.gov.au/ministerial-releases  | Ministers | Treasurer          | Clear all filters  | 2908     |

