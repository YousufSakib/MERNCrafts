// Mount (initial render) --> update (re-render) --> unmount

//useEffect runs asynchronously, after the render and paint

import { useState, useEffect, useLayoutEffect } from "react";

export default function App() {
    const [isShown, setIsShown] = useState(true);
    const [tem, setTem] = useState(1);
    console.log("tem");
    useEffect(() => {
        delay();
        console.log("tem changed");
    }, [tem]);

    return (
        <>
            {console.log("App in return")}
            <button onClick={() => setIsShown(!isShown)}>
                {isShown ? "Hide Counter" : "Show Counter"}
            </button>
            <button onClick={() => setTem(tem + 1)}>Tem</button>
            <br />
            <br />
            {isShown ? <Counter /> : null}
        </>
    );
}

function Counter() {
    const [count, setCount] = useState(0);
    const [bool, setBool] = useState(false);

    useEffect(() => {
        delay();
        console.log("render");
    });

    useLayoutEffect(() => {
        delay();
        console.log("count changed");
        if (count === 3) {
            setCount(4);
        }

        return () => {
            delay();
            console.log("cleanup count changed");
        };
    }, [count]);

    useEffect(() => {
        delay();
        console.log("Mounted");

        return () => console.log("Unmounted");
    }, []);

    console.log("hi 1");
    // delay();
    console.log("hi 2");

    const handleClick = function () {
        setCount(count + 1);
    };
    return (
        <>
            {console.log("in Return")}
            <button onClick={() => setBool(!bool)}>Re-Render</button>
            <button onClick={handleClick}>Increment</button>
            <p>Count {count}</p>
        </>
    );
}

function delay() {
    const startTime = new Date();
    while (new Date() - startTime < 1000) {}
}
