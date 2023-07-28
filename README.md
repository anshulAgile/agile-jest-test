================================
Why do we need testing in react 
================================

- Manual testing is redundant once you develop a feature and have tested it once you add some extra feature you might need to again recheck whether old logic is still working or not 
- once your app grows larger it's hard to test every details of your app
- Upgrade your coding standards
- Make code predictable
- Quality Code
- Less debugging more coding: With more test, fewer errors you will have and you can focus on the more complicated tasks.
- TDD ( Test Driven Development ) : Write test cases before you develop anything.


================
Types of test
================

- E2E test - To test from start to finish 
- Integration Test - When you combine more than one component or functions together to test 
- Unit Test - To test small chunks of code ex:- component , complex functions 

=================
JEST 
=================

- jest is a js framework 
- It's a test runner that finds test files in your app and runs and determine whether test is passes or not and returns it in human readable form 

- CRA gives jest and testing tools out of the box 
- jest is available as a react-scripts dependency
- CRA also provides sample app.test.tsx 
- yarn test command start the jest in a watch mode 

=========================
Structure of Test
=========================

-> See the example of App.test.tsx
-> what is assertion 
   - Assertion means the condition that decides whether test is passes or failed  

===============================
Watch mode and Filters for test 
===============================
-> run yarn run test to see those filters 
-> .only and .skip

==============================
File name convention
==============================

- .test.ts/js/tsx
- .spec.ts/js/tsx
- Best practice to add test file next to your component file 

===========================
DEMO 1
===========================

============================
Code Coverage
============================

- A metric to tell you how much of your code is tested 
1) statement coverage 
2) branches coverage
3) function coverage
4) line coverage 

- To get code coverage need to perform below command 
   - yarn run test --coverage --watchAll

   - watchAll :- gives whole apps report
   - collectCoverageFrom :- to ask jest to include only selected files or folders ( Optional )   

=========================================
For any test 3 things are required
=========================================

1) Render component
2) Find an element rendered by component 
3) To check whether that element fullfil the required condition or not 

================================
Demo 2
================================

- All about query 
- DOcumentation : https://testing-library.com/docs/queries/about

===============================
Test PlayGround Extension
===============================

================================
Demo 3
================================

- Learn about the user interaction click events



NOTE: WHAT NOT TO TEST IN REACT 
   - Any 3rd party library since they have already tested it (MUI , ant d)
   - Not a critical function 
