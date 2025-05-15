"use client"

import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    const somar = () => { 
        setCount(count + 1); 
        console.log(count);
    };

    return (
        <div className="counter">
            <p><strong>valor:</strong> {count}</p>
            <button onClick={somar}>Incrementar</button>
        </div>
    )
}