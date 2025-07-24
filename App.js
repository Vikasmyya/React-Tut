import React from "react";
import ReactDOM from "react-dom/client";

//JSX
const jsxHeading = <h1> React from JSX</h1>;

//Functional complonent
const HeadingComponent = () => {
  return <h1>Hellp from component1</h1>;
};

//short hand
const HeadingComponent3 = () => <h1>Hello from complonent3</h1>;

//component composition
const HeadingComponent2 = () => (
  <div>
    <HeadingComponent />
    <h1>Hello from component2</h1>
  </div>
);

//Adding react element
const HeadingComponent4 = () => (
  <div>
    <h2>{jsxHeading}</h2>
    <h1>Hello from complonent3</h1>
  </div>
);
console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent2 />);
