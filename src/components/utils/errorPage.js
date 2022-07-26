import React from "react";
import { NavLink } from "react-router-dom";

const Errorpage = () => {
  return (
    <>
      <div className="errpage">
        <h1 id="errpage_h1">404</h1>
        <p id="errpage_p">Page Not Found</p>
        <NavLink to="/" id="errpage_btn">
          {" "}
          Click for Home page
        </NavLink>
      </div>
    </>
  );
};

export default Errorpage;
