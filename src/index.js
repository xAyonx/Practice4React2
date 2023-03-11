import React from "react";
import ReactDom from "react-dom";

const name = "Ayon";

var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();

today = dd + "/" + mm + "/" + yyyy;
document.write(today);

ReactDom.render(
  <div>
    <p>created by {name}</p>
    <p>Copyright 2023</p>
    <p>created by {name}</p>
    <p>{today}</p>
  </div>,
  document.getElementById("root")
);
