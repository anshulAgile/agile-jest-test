import { render, screen } from '@testing-library/react';
import App from './App';

/* 
Test function is provided by jest under the hood 
test(<unique name of the test> , <callback function> , <timeout>)
1) name of test 
2) A callback function that will have your testing logic and the expectations to fullfil
3) Optional argument to how long to wait before aborting the test the default is 5 second 
*/


test('renders learn react link', () => {

  // Here We're creating a virtual dom for react
  render(<App />);

  // Here we're fetching html nodes from virtual dom generated above
  const linkElement = screen.getByText(/learn react/i);

  // expect is provided by jest globally
  // except (Argument that your code produces)
  // toBeInTheDocument ( Matcher argument  you can use string , regex )
  expect(linkElement).toBeInTheDocument();
});
