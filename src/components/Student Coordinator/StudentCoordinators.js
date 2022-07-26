import Navsm from "../Navbar/Navsm";
import StudentCoordinator from "./StudentCoordinator";
import "../../style/Student.css";
import SData from "../../data/SData";
import Footer from "../utils/Footer";

const StudentCoordinators = () => {
  return (
    <>
      <Navsm />
      <div className="container-fluid">
        <div className="about ms-3 ms-md-5 ms-lg-5">Our Team</div>
        <div className="border1 border-student ms-3 ms-md-5 ms-lg-5"></div>

        <div className="row-container d-flex flex-row text-center mx-auto">
          <div className="row text-center mx-auto">
            {SData.map((element) => {
              return (
                <>
                  <StudentCoordinator key={element.id} data={element} />
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

export default StudentCoordinators;
