import "./App.css";

module.exports.App1 = function () {
    const error = false;
    return error ? <h1>Error</h1> : <h1>Success</h1>;
};

module.exports.App2 = function () {
    const error = false;
    return (
        <>
            {error && <h1>Success</h1>}
            {!error && <h1>Error</h1>}
        </>
    );
};
module.exports.App3 = function () {
    const error = false;
    return (
        <>
            {error && <h1>Success</h1>}
            {error && <h1>Error</h1>}
        </>
    );
};
