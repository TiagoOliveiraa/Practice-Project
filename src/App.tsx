import React from "react";
import "./App.css";
import { NavLink } from "react-router";

function App() {
  return (
    <>
      <div>Main Page</div>
      <NavLink to="/search">
        <button>Go to search page</button>
      </NavLink>
    </>
  );
}

export default App;
