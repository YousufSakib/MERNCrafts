import { useState } from "react";

export default function App() {
    const [count, setCount] = useState(0);
    const [value, setValue] = useState("");

    return (
        <>
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <Counter count={count} setCount={setCount} />
            <Counter count={count} setCount={setCount} />
        </>
    );
}

function Counter({ count, setCount }) {
    return (
        <>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <p>Count: {count}</p>
        </>
    );
}
