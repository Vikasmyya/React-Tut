import React from "react";
import ReactDOM from "react-dom/client"

const parent = React.createElement(
    "div", {
        id: "parent"
    },
    React.createElement(
        "div", {
            id: "child"
        },
        React.createElement(
            "h1", {
                id: "heading1"
            },
            "H1 tag"
        )
    )
)

console.log(parent)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent)