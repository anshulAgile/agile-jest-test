/*

*/

import { render, screen } from "@testing-library/react"
import Demo2 from "./index"

describe.only('Login Form', () => {

    // To check if app has input field and submit button 
    // To get more info about role - https://testing-library.com/docs/queries/byrole/
    test("Login Rendered Correctly", async () => {
        render(<Demo2 />);

        //Finding div , p and heading tags 
        const headingElement = screen.getByText('User Info')

        // getByDisplayValue used to get input , select and textarea containing that value 
        // getByAltText used to get img tag containing that alt text 
        // getByTitle used to any element with title="" property 

        const emailElement = screen.getByRole('textbox', { name: 'Email' })
        const btnElement = screen.getByTestId((content) => content.includes('login-submit'))

        const passwordElement = screen.getByLabelText('Password')

        const emailElement2 = screen.getByPlaceholderText('Email', { exact: false })

        // Async 
        // Default it will wait for 1000 ms 
        const asyncBtnElement = await screen.findByTestId('async-button')

        expect(asyncBtnElement).toBeInTheDocument()
        expect(headingElement).toBeInTheDocument()
        expect(emailElement).toBeInTheDocument()
        expect(emailElement2).toBeInTheDocument()
        expect(passwordElement).toBeInTheDocument()
        expect(btnElement).toBeInTheDocument()
    });

})