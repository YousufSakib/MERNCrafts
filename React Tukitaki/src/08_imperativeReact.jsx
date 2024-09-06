import {
    useEffect,
    useState,
    forwardRef,
    useRef,
    useImperativeHandle,
} from "react";

const CustomInput = forwardRef(function CustomInput(props, ref) {
    const [value, setValue] = useState("");

    useImperativeHandle(ref, () => {
        return {
            reset: () => setValue(""),
        };
    });

    useEffect(() => {
        console.log("Custom Input");
    });

    return (
        <input
            ref={ref}
            value={value}
            onChange={(event) => setValue(event.target.value)}
            style={{ color: "red" }}
        />
    );
});

const Counter = forwardRef(function Counter(props, ref) {
    const [count, setCount] = useState(0);

    useImperativeHandle(ref, () => {
        return {
            reset: () => setCount(0),
        };
    });

    useEffect(() => {
        console.log("Counter");
    });

    return (
        <>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <p ref={ref}>Count: {count}</p>
        </>
    );
});

export default function App() {
    const customInputRef = useRef();
    const counterRef = useRef();

    useEffect(() => {
        console.log("App");
    });

    return (
        <>
            <Counter ref={counterRef} />
            <CustomInput ref={customInputRef} placeholder="Type something..." />
            <button
                onClick={() => {
                    counterRef.current.reset();
                    customInputRef.current.reset();
                }}
            >
                Reset
            </button>
        </>
    );
}
