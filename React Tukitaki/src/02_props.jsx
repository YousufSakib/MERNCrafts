export default function App() {
    return (
        <>
            <Hello name="Sakib" />
            <Hello />
            <Comment username="Rakib" time={new Date().toString()}>
                <h1>Hello World</h1>
                <p>This is a comment</p>
            </Comment>
        </>
    );
}
function Hello({ name = "User" }) {
    return <h1>Hello {name}</h1>;
}

function Comment({ username, time, children }) {
    return (
        <section>
            <p>
                {username} commented at {time}
            </p>
            {children}
        </section>
    );
}
