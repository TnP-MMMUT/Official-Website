import React from "react";
import "../../style/alumni.css";
import Navsm from "../Navbar/Navsm";
import AlumniData from "../../data/alumniData";
import Alumnus from "./Alumnus";
import Footer from "../utils/Footer";

const Alumni = () => {
  return (
    <>
      <Navsm />
      <div className="about ms-3 ms-md-5 ms-lg-5" id="alumn_title">
        Prominent Alumni
      </div>
      <div className="borderpromalumni border1 ms-3 ms-md-5 ms-lg-5"></div>

      <div>
        <div className="container">
          <div className="row">
            {AlumniData.map((element) => {
              return (
                <>
                  <Alumnus key={element.id} data={element} />
                </>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Alumni;
