import Navbar from "./Navbar";
import imageCenterNavBar from "../../images/Group 32.png";

const Navsm = () => {
  return (
    <>
      <div className="pages_nav">
        <Navbar />

        <div className="image-nav-div-container mt-5">
          <img
            className="mx-auto text-center mt-5"
            src={imageCenterNavBar}
            alt="logo"
          />
        </div>
      </div>
    </>
  );
};

export default Navsm;
