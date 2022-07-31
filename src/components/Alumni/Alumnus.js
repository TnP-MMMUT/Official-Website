import React from "react";
import { Link } from "react-router-dom";

import "../../style/alumni.css";

const Alumnus = ({ data }) => {
  return (
    <>
      <div id="our-team-alumni">
        <div className="picture">
          <img
            className="img-fluid img-thumbnail"
            src={data.image}
            alt="alumnusImage"
          />
        </div>
        <div className="team-content">
          <h5 className="name">
            <b>{data.name}</b>
          </h5>
          <h4 className="title">{data.post}</h4>
        </div>
        <ul className="social">
          <li>
            <Link
              to={data.in ? data.in : "/alumni"}
              className="fa fa-linkedin"
              aria-hidden="true"
            ></Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Alumnus;
