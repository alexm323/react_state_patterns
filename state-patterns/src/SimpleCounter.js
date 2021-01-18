import React, { useState } from "react";

function SimpleCounter() {
    const [num, setNum] = useState(0);
    const clickUp = () => {
        setNum(num + 1)
    }
    const clickUpBy2 = () => {
        setNum(n => n + 1)
        setNum(n => n + 1)
    }
    // const clickUpBy2 = () => setNum(num + 2)

    return (
        <div>
            <h3>Count: {num}</h3>
            <button onClick={clickUp}>Up</button>
            <button onClick={clickUpBy2}>Up by 2</button>
        </div>
    )
}

export default SimpleCounter;

