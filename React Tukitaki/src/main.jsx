import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./08_imperativeReact";

createRoot(document.getElementById("root")).render(
    // <StrictMode>
    <App />,
    // </StrictMode>,
);
