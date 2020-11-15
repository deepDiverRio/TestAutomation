# Test for Computer DB website 
UI and Functionla test on top of NodeJS and Selenuim WebDriver

## Task Overview
Please explore the below test website
http://computer-database.herokuapp.com/computers

1. Write in a document, as many manual test cases as you can think of
2. Create a UI automation framework using Selenium and your preferred language
3. From the scenarios listed in point 1, automate 2-3 tests which you think are the most important,
using the framework in point 2
### Documentation
* Automation Test Plan
* Functional Requirement
* Test Suite

### Test cases
* Initial state
* Filter by name
* Add a new computer
* Edit a new computer
* Delete a computer
* Navigation through different pages 


### Prerequisites
1. Install Node.js
2. Download/clone this repository and `cd` into it
3. Install all the dependencies    
 ```bash
 npm install
 ```

### Usage
The following steps will help you run tests:
1. Run the test for one or for all test cases
 ```bash
  mocha --timeout 20000 test/add_computer.js
 ```
 ```bash
  mocha --timeout 20000
 ```
