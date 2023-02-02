import Navbar from "./Navbar";
import imageCenterNavBar from "../../images/NavCenter.png";

const Navsm = () => {
  return (
    <>
      <div className="pages_nav">
        <Navbar />

        <div className="image-nav-div-container mt-3">
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
