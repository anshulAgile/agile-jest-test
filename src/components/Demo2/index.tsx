import { useEffect, useState } from "react"

const Demo2 = () => {

    const [loadButton, setloadButton] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setloadButton(true)
        }, 500);
    }, [])

    return (<>
        <h2>User Info</h2>
        <div>
            <div>
                <label htmlFor='email' placeholder="Email" >Email</label>
                <input type='email' id="email" name="email" aria-label="Email" />
            </div>
            <div>
                <label htmlFor='password' >Password</label>
                <input type='password' id="password" />
            </div>
            {loadButton && <button data-testid="async-button">
                async button
            </button>}

            <button type='submit' data-testid="login-submit">
                Submit
            </button>
        </div>
    </>)
}

export default Demo2