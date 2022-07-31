import Navsm from "../Navbar/Navsm";
import Footer from "../utils/Footer";
import FacultyIndividual from "./FacultyIndividual";
import FData from "../../data/Fdata";

import "../../style/Faculty.css";


const Faculty = () => {
  return (
    <>
      <Navsm />
      <div className="container-fluid">
        <div className="about ms-3 ms-md-5 ms-lg-5">Faculty Coordinators</div>
        <div className="border1 border-faculty ms-3 ms-md-5 ms-lg-5"></div>

        <div className="row-container d-flex flex-row text-center mx-auto">
          <div className="row text-center mx-auto">
            {FData.map((element) => {
              return <FacultyIndividual key={element.id} data={element} />;
            })}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Faculty;
