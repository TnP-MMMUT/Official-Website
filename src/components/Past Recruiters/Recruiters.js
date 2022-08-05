import Navsm from "../Navbar/Navsm";
import List from "../utils/List";
import "../../style/Recruiters.css";
import OrgCarousel from "../utils/OrgCarousel";

const Recruiters = () => {
  return (
    <>
      <Navsm />
      <div className="container-fluid">
        <div className="about ms-3 ms-md-4 ms-lg-5">
          Past Recruiting Organizations
        </div>
        <div className="border-bottom ms-3 ms-md-4 ms-lg-5"></div>
        <List />
        <OrgCarousel />
      </div>
    </>
  );
};

export default Recruiters;
