/*
A component that renders welcome text with given username 
*/

import { render, screen } from "@testing-library/react"
import Demo1 from "."

const user = 'Jhon'

// describe is a global method provided by jest to group your tests together and it takes two arguments
// 1) Group Name
// 2) Test Callback function (LOGIC for test )
// 3) We can also define nested describe blocks

describe.only('User Component', () => {

    test('Component Rendered Correctly', () => {
        render(<Demo1 name={'Random Prop'} />)
    })

    // Below is the example of assertion 
    // Here expect is your code generated input 
    // and .toBeInTheDocument() function is the matcher which will check if value exists or not (check condition)
    // More matchers 
    // https://jestjs.io/docs/using-matchers
    // https://github.com/testing-library/jest-dom

    test('Username rendered', () => {
        render(<Demo1 name={user} />)
        const element = screen.getByText(user)
        expect(element).toBeInTheDocument()
    })
})