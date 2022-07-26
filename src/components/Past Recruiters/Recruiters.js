import Navsm from "../Navbar/Navsm";
import List from "../utils/List";
import "../../style/Recruiters.css";
import OrgCarousel from "../utils/OrgCarousel";

const Recruiters = () => {
  return (
    <>
      <Navsm />
      <div className="about ms-4 ms-lg-5 PastROHeading">
        Past Recruiting Organizations
      </div>
      <div className="borderpromalumni ms-4 ms-lg-5 PastROUnderline"></div>
      <List />
      <OrgCarousel />
    </>
  );
};

export default Recruiters;
