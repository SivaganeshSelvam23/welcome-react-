import React from "react";
import ReactDOM from "react-dom/client";

const jsxHeading = <h1 id="heading">Welcome to React using JSX 🚀</h1>;

const TilteComponent = () => {
  return <h1 className="head">Welcome React JS ❤️</h1>;
};

const sample = () => {
  return 1000;
};

const HeadingComponent = () => {
  return (
    <div id="container">
      {sample()}
      <TilteComponent />
      <h1 className="heading">Welcome To React Functional Component 🚀</h1>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
