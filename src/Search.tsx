import React from "react";
import { NavLink } from "react-router";

export const Search = () => {
  return (
    <>
      <div>Search</div>
      <NavLink to="/">
        <button>Go to main page</button>
      </NavLink>
    </>
  );
};
