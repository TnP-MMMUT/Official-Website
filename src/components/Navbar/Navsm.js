import Navbar from "./Navbar";
import imageCenterNavBar from "../../images/Group 32.png";

const Navsm = () => {
  return (
    <>
      <div className="pages_nav">
        <Navbar />
        <div className="image-nav-div-container">
          <img
            className="image-center mx-auto my-auto text-center"
            src={imageCenterNavBar}
            alt="logo"
          />
        </div>
      </div>
    </>
  );
};

export default Navsm;
