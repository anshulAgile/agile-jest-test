/*

*/

import { render, screen } from "@testing-library/react"
import Demo3 from "./index"
import user from "@testing-library/user-event";

describe.only('Counter Demo', () => {

    // To check if app has input field and submit button 
    // To get more info about role - https://testing-library.com/docs/queries/byrole/

    test("Component rendered properly!", async () => {
        render(<Demo3 />);

        const incButton = screen.getByRole('button', { name: 'inc' })
        const counter = screen.getByTestId('counter')

        expect(counter).toBeInTheDocument()
        expect(incButton).toBeInTheDocument()

    });

    test("After click", async () => {
        user.setup();
        render(<Demo3 />);

        const incButton = screen.getByRole('button', { name: 'inc' })
        const counter = screen.getByTestId('counter')
        let CounterValue = counter.innerHTML

        await user.click(incButton)

        console.log('CounterValue: ', CounterValue);
        expect(counter).toHaveTextContent(`${Number(CounterValue) + 1}`)

    })


})