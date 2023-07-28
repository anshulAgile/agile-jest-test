import React from 'react'

const Demo4 = () => {

    const onSubmit = () => { alert('api called') }

    return (
        <>
            <h1>Login</h1>
            <div>
                <div>
                    <label htmlFor='email'>email</label>
                    <input type='email' id='email' />
                </div>
                <div>
                    <label htmlFor='password'>password</label>
                    <input type='password' id='password' />
                </div>
                <div>
                    <button data-testid="submit" onClick={onSubmit}>Submit</button>
                </div>
            </div>
        </>)
}

export default Demo4