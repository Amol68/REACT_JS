import React from "react";
import ReactDOM  from "react-dom/client";
/* const heading = React.createElement("h1" , 
{id:"heading"}, 
"Who's Gonna Carry The Boats and The Loads!!!");
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); */

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am Head"),
    React.createElement("h2", {}, "I am Sub-Head"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
