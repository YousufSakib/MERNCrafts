import { useReducer } from "react";

function reducer(state, action) {
    switch (action.type) {
        case "increment":
            return { count: state.count + action.num };
        case "decrement":
            return { count: state.count - action.num };
        default:
            throw new Error("Unknown action type");
    }
}

export default function App() {
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    return (
        <>
            <Counter
                count={state.count}
                onClick={() =>
                    dispatch({
                        type: "increment",
                        num: 1,
                    })
                }
            />
            <Counter
                count={state.count}
                onClick={() =>
                    dispatch({
                        type: "decrement",
                        num: 10,
                    })
                }
            />
        </>
    );
}

function Counter({ count, onClick }) {
    return (
        <>
            <button onClick={onClick}>Increment</button>
            <p>Count: {count}</p>
        </>
    );
}
