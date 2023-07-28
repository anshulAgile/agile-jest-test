import { render, screen } from "@testing-library/react"
import Demo4 from "."
import user from "@testing-library/user-event";

// Login Form Test
describe('Login Form', () => {

    // To check component render properly
    // To check form has proper email and password field 

    test('Input Elements are rendered properly', () => {
        render(<Demo4 />);
        const emailElement = screen.getByRole('textbox', { name: 'email' })
        const passwordElement = screen.getByLabelText('password')

        // 1) Email Input has to be in the document
        // 2) Input must have a type of email
        expect(emailElement).toBeInTheDocument();
        expect(emailElement).toHaveAttribute("type", "email");

        // 1) Password Input has to be in the document
        // 2) Input must have a type of password
        expect(passwordElement).toBeInTheDocument();
        expect(passwordElement).toHaveAttribute("type", "password");

    })


    const testEmail = 'anshu@lyopmail.com'

    test('After submit', async () => {
        render(<Demo4 />);
        const submitBtnElement = screen.getByRole('button', { name: /submit/i })

        user.setup();

        await user.click(submitBtnElement)

        expect(testEmail).toMatch(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)

    })
})