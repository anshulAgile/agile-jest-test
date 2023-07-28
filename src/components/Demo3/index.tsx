import { useState } from "react"

const Demo3 = () => {
    const [count, setcount] = useState(0)

    const increment = () => { setcount(prev => prev + 1) }

    return (<>
        <h1>User Info</h1>
        <div>
            <h1 data-testid="counter">{count}</h1>
            <button onClick={increment} data-testid="plus">
                inc
            </button>
        </div>
    </>)
}

export default Demo3