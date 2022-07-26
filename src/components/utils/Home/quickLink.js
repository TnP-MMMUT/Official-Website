import "../../../style/frontPage.css";

import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const QuickLinks = () => {
  const { ref, inView } = useInView();
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      });
    } else {
      animation.start({
        x: "-100vw",
      });
    }
  }, [inView, animation]);

  return (
    <>
      <div ref={ref}>
        <motion.div animate={animation}>
          {/* QuickLinks */}
          <div className="row-head">
            <div className="row-quick">
              <div className="quicklinks">
                <h2 className="text-center mt-2">
                  {" "}
                  <img
                    className="img"
                    src="https://res.cloudinary.com/dd6idpm2e/image/upload/v1655536300/link_1_dxwycj.png"
                    alt="Error loading "
                  />{" "}
                  Quick Links
                </h2>
                <div className="rowQLbig">
                  <motion.h4
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {" "}
                    <img
                      className="img"
                      style={{ height: "50px", width: "50px" }}
                      src="https://s3.ap-south-1.amazonaws.com/assets.ynos.in/startup-logos/YNOS336741.jpg"
                      alt="Error loading "
                    />{" "}
                    <a
                      style={{ textDecoration: "none", color: "#000" }}
                      href="https://app.joinsuperset.com/#/s/feed"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Login to Superset
                    </a>
                  </motion.h4>
                  <motion.h4
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {" "}
                    <img
                      className="img"
                      src="https://res.cloudinary.com/dd6idpm2e/image/upload/v1655536006/communicate_1_o8akqp.png"
                      alt="Error loading "
                    />{" "}
                    <Link className="link" to="/studentCoordinators">
                      {" "}
                      Contact Us
                    </Link>
                  </motion.h4>

                  <Popup
                    trigger={
                      <motion.h4
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="save-button"
                      >
                        {" "}
                        <img
                          className="img"
                          alt="Error loading "
                          src="https://res.cloudinary.com/dd6idpm2e/image/upload/v1655536006/brochure_1_gl6ekz.png"
                        />{" "}
                        Brochures
                      </motion.h4>
                    }
                    on={"hover"}
                    position="bottom left"
                  >
                    <div className="hid1">
                      <ul>
                        <li>
                          <a href="http://www.mmmut.ac.in/Pdf/T&P%20Placement%20Brochure%202022-23.pdf">
                            Placement Brochure 2021-2022
                          </a>
                        </li>
                        <li>
                          <a href="#">Placement Brochure 2020-2021</a>
                        </li>
                        <li>
                          <a href="#">Placement Brochure 2019-2020</a>
                        </li>
                        <li>
                          <a href="#">Placement Brochure 2018-2019</a>
                        </li>
                      </ul>
                    </div>
                  </Popup>

                  <motion.h4
                    className="placementStats"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {" "}
                    <img
                      className="img"
                      src="https://res.cloudinary.com/dd6idpm2e/image/upload/v1655536006/analytics_1_1_yusxhi.png"
                      alt="Error loading "
                    />{" "}
                    <Link to="/placement_training" className="link">
                      Placement Statistics & Trainings
                    </Link>
                  </motion.h4>
                </div>
              </div>
            </div>

            <div className="row-quick">
              <div className="quicklinks">
                <h2 className="text-center mt-2">
                  {" "}
                  <img
                    src="https://res.cloudinary.com/dltqjc99w/image/upload/v1658265845/cell/download_1_hs3qzf.png"
                    className="img"
                    alt="Error loading  "
                  />{" "}
                  Downloads
                </h2>
                <div className="rowQLbig">
                  <Popup
                    trigger={
                      <motion.h4
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        {" "}
                        <img
                          src="https://res.cloudinary.com/dd6idpm2e/image/upload/v1657597253/report_1_mlgglr.png"
                          className="img"
                          alt="Error loading "
                        />{" "}
                        Placement Reports
                      </motion.h4>
                    }
                    // modal="true"
                    on={"hover"}
                    position="bottom right"
                  >
                    <div className="hid1">
                      <ul>
                        <li>
                          <a href="http://www.mmmut.ac.in/pdf/TNP2021-22.pdf">
                            Placement Report 2021-2022
                          </a>
                        </li>
                        <li>
                          <a href="http://www.mmmut.ac.in/pdf/TNP2020-21a.pdf">
                            Placement Report 2020-2021
                          </a>
                        </li>
                        <li>
                          <a href="http://www.mmmut.ac.in/pdf/2019-20.pdf">
                            Placement Report 2019-2020
                          </a>
                        </li>
                        <li>
                          <a href="http://www.mmmut.ac.in/pdf/2018-19.pdf">
                            Placement Report 2018-2019
                          </a>
                        </li>
                        <li>
                          <a href="http://www.mmmut.ac.in/pdf/2017-18.pdf">
                            Placement Report 2017-2018
                          </a>
                        </li>
                      </ul>
                    </div>
                  </Popup>
                  <motion.h4
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {" "}
                    <img
                      src="https://res.cloudinary.com/dd6idpm2e/image/upload/v1657648277/insurance_1_ufp80u.png "
                      className="img"
                      alt="Error loading  "
                    />{" "}
                    <a
                      href="https://res.cloudinary.com/vaish1101/image/upload/v1658241167/gyan%20sir/T_P_Policy_2022_kf9g0e.pdf"
                      className="link"
                    >
                      Placement Policy
                    </a>
                  </motion.h4>
                  <motion.h4
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {" "}
                    <img
                      src="https://res.cloudinary.com/dd6idpm2e/image/upload/v1657597836/templates_1_xyrfpr.png"
                      className="img"
                      alt="Error loading  "
                    />{" "}
                    <a className="link" href="https://bit.ly/3zhzNVy">
                      Resume Template
                    </a>
                  </motion.h4>
                  <motion.h4
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {" "}
                    <img
                      src="https://res.cloudinary.com/dd6idpm2e/image/upload/v1657648352/invitation_1_t0whud.png"
                      className="img"
                      alt="Error loading  "
                    />{" "}
                    <Link to="/invite" className="link">
                      Invitation
                    </Link>
                  </motion.h4>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default QuickLinks;
