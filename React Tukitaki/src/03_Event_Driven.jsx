//We should avoid any traditional DOM manipulation on DOM Node created by React-

export default function App() {
    return <button onClick={handleClick}>Click Me</button>;
}
//keep the function outside, because as the component re-renders or creates new instances the handleClick creates new copies
const handleClick = (event) => {
    console.log("clicked");
    console.log(event); //synthetic event
    console.log(event.native); // native event
};
