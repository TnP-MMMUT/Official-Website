import React from "react";
import "../../style/alumni.css";
import { Link } from "react-router-dom";

const Alumnus = (data) => {
  return (
    <>
      <div className="col-12 col-sm-6 col-md-4 col-lg-4">
        <div className="our-team">
          <div className="picture">
            <img className="img-fluid" src={data.data.image} alt="Alumnus" />
          </div>
          <div className="team-content">
            <h4 className="name">{data.data.name}</h4>
            <h4 className="title">{data.data.post}</h4>
          </div>
          <ul className="social">
            <li>
              <Link
                to={data.data.fb}
                className="fa fa-facebook"
                aria-hidden="true"
              ></Link>
            </li>

            <li>
              <Link
                to={data.data.in}
                className="fa fa-linkedin"
                aria-hidden="true"
              ></Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Alumnus;
