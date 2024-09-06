import { forwardRef, useEffect, useRef, useState } from "react";

function App2() {
    const [seconds, setSeconds] = useState(0);
    const timerId = useRef(null);

    const startTimer = () => {
        timerId.current = setInterval(() => {
            setSeconds((currSeconds) => currSeconds + 1);
        }, 1000);
    };

    const stopTimer = () => {
        console.log(timerId.current);
        clearInterval(timerId.current);
    };
    useEffect(() => {
        console.log("rendering");
    });
    return (
        <>
            <button onClick={startTimer}>Start</button>
            <button onClick={stopTimer}>Stop</button>
            <p>Seconds: {seconds}</p>
        </>
    );
}

export default function App() {
    console.log("body App");
    const [shown, setShown] = useState(true);
    useEffect(() => {
        console.log("App mounted");
        return () => {
            console.log("App unmounted");
        };
    }, []);
    useEffect(() => {
        console.log("App rerender");
    });
    const handleClick = () => {
        setShown(!shown);
    };
    return (
        <>
            <button onClick={handleClick}>{shown ? "hide" : "hide"}</button>
            {shown ? <App1 /> : null}
        </>
    );
}

function App1() {
    console.log("body App1");

    function handleRef(domNode) {
        console.log(domNode, "a");
    }
    const inputRef = useRef(null);
    const [bool, setBool] = useState(true);

    useEffect(() => {
        console.log("App1 mounted");
        return () => {
            console.log("App1 unmounted");
        };
    }, []);
    useEffect(() => {
        console.log("App1 rerender");
    });
    const focusInput = () => {
        inputRef.current.focus();
    };
    return (
        <>
            <input ref={handleRef} type="text" />
            <MyInput ref={inputRef} />
            <button onClick={focusInput}>Focus</button>
            <button
                onClick={() => {
                    setBool(!bool);
                }}
            >
                rerender
            </button>
        </>
    );
}

const MyInput = forwardRef(function (props, ref) {
    function handleRef(domNode) {
        console.log(domNode, "b");
    }

    console.log("body myInput");
    useEffect(() => {
        console.log("MyInput mounted");
        return () => {
            console.log("MyInput unmounted");
        };
    }, []);
    useEffect(() => {
        console.log("MyInput rerender");
    });
    return (
        <>
            <input ref={ref} {...props} style={{ color: "red" }} />
            <h1 ref={handleRef}>S</h1>
        </>
    );
});
