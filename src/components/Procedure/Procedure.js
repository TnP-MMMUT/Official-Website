import Navsm from "../Navbar/Navsm";
import Footer from "../utils/Footer";

import "../../style/procedure.css";
import ChronoComponent from "./ChronoComponent";

const Procedure = () => {
  return (
    <>
      <Navsm />
      <div className="container-sm">
        <div className="about ms-2 ms-md-5 ms-lg-5">Placement Procedure</div>
        <div
          className="border1 ms-2 ms-md-5 ms-lg-5"
          id="border-procedure"
        ></div>

        <div className="procedures ms-2 ms-md-5 ms-lg-5">
          <ChronoComponent />

          <div className="button-text mx-auto">
            <div className="mx-auto text-center">
              Interested in Recruitment?
            </div>
          </div>
          <div className="button-procedure text-center mx-auto">
            <button className="mail-procedure-button">
              <strong>Mail To:</strong> tnp@mmmut.ac.in
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Procedure;
