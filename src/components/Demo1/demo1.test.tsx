/*
A component that renders welcome text with given username 
*/

import { render, screen } from "@testing-library/react"
import Demo1 from "."

const user = 'Jhon'

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