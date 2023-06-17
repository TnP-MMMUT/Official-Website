import "../../../style/frontPage.css";

import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { containerClasses } from "@mui/system";

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
                <div className="link-container mb-2 mt-3">
                  <img
                    className="img"
                    src="https://cdn-icons-png.flaticon.com/512/1150/1150626.png"
                    alt="Error loading "
                  />
                  <h2 className="text-center mt-2">Quick Links</h2>
                </div>

                <div className="rowQLbig mb-2 mt-4">
                  <div className="link-container">
                    <img
                      className="img"
                      style={{ height: "50px", width: "50px" }}
                      src="https://s3.ap-south-1.amazonaws.com/assets.ynos.in/startup-logos/YNOS336741.jpg"
                      alt="Error loading "
                    />
                    <motion.h4
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <a
                        style={{ textDecoration: "none", color: "#000" }}
                        href="https://app.joinsuperset.com/#/s/feed"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Login to Superset
                      </a>
                    </motion.h4>
                  </div>
                  <div className="link-container">
                    <img
                      className="img"
                      src="https://cdn-icons-png.flaticon.com/512/2343/2343694.png"
                      alt="Error loading "
                    />
                    <motion.h4
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Link className="link" to="/studentCoordinators">
                        Contact Us
                      </Link>
                    </motion.h4>
                  </div>

                  <Popup
                    trigger={
                      <div className="link-container">
                        <img
                          className="img"
                          alt="Error loading "
                          src="https://cdn-icons-png.flaticon.com/512/543/543931.png"
                        />
                        <motion.h4
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.9 }}
                          className="save-button"
                        >
                          Brochures
                        </motion.h4>
                      </div>
                    }
                    on={"hover"}
                    position="bottom center"
                  >
                    <div className="hid1">
                      <ul>
                        <li>
                          <a href="http://www.mmmut.ac.in/Pdf/T&P%20Placement%20Brochure%202022-23.pdf">
                            Placement Brochure 2022-2023
                          </a>
                        </li>
                        <li>
                          <a href="https://drive.google.com/uc?export=download&id=1xJfgmYiO3ZJZ2sUPRFfLT2J73Jic7tfd">
                            Placement Brochure 2021-2022
                          </a>
                        </li>
                        <li>
                          <a href="https://drive.google.com/uc?export=download&id=1jZvVRT4kjVOGYG6rNPCJzBC7T67jSK-U">
                            Placement Brochure 2020-2021
                          </a>
                        </li>
                      </ul>
                    </div>
                  </Popup>

                  <div className="link-container">
                    <img
                      className="img"
                      src="https://cdn-icons-png.flaticon.com/512/921/921591.png"
                      alt="Error loading "
                    />
                    <motion.h4
                      className="placementStats"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Link to="/placement_training" className="link">
                        Placement Statistics & Trainings
                      </Link>
                    </motion.h4>
                  </div>
                </div>
              </div>
            </div>

            <div className="row-quick">
              <div className="quicklinks">
                <div className="link-container mt-3">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3677/3677179.png"
                    className="img"
                    alt="Error loading"
                  />
                  <h2 className="text-center mt-2">Downloads</h2>
                </div>
                <div className="rowQLbig mb-2 mt-4">
                  <Popup
                    trigger={
                      <div className="link-container">
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/3534/3534066.png"
                          className="img"
                          alt="Error loading "
                        />
                        <motion.h4
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          Placement Reports
                        </motion.h4>
                      </div>
                    }
                    // modal="true"
                    on={"hover"}
                    position="bottom right"
                  >
                    <div className="hid1">
                      <ul>
                        <li>
                          <a href="https://res.cloudinary.com/daxilgrvn/image/upload/v1675362702/T_P%20Site/Placement_Report_2022-23_yh2hzh.pdf">
                            Placement Report 2022-2023
                          </a>
                        </li>
                        <li>
                          <a href="https://res.cloudinary.com/daxilgrvn/image/upload/v1660326012/T_P%20Site/Placement_Report_2021-22_bu8c97.pdf">
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
                      </ul>
                    </div>
                  </Popup>

                  <div className="link-container">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/4599/4599295.png"
                      className="img"
                      alt="Error loading"
                    />
                    <motion.h4
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <a
                        href="https://mmmutgkp-my.sharepoint.com/:b:/g/personal/tnpmmmut_info_mmmut_ac_in/EQb8PYFvZytIuywgT8FJWw4BzhgjNjNv73Jwyvnz7QKyqg?e=thNTgN"
                        className="link"
                      >
                        Placement Policy
                      </a>
                    </motion.h4>
                  </div>
                  <div className="link-container">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/893/893505.png"
                      className="img"
                      alt="Error loading"
                    />
                    <motion.h4
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <a className="link" href="https://bit.ly/3zhzNVy">
                        Resume Template
                      </a>
                    </motion.h4>
                  </div>

                  <div className="link-container">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/980/980240.png"
                      className="img"
                      alt="Error loading"
                    />
                    <motion.h4
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Link to="/invite" className="link">
                        Invitation
                      </Link>
                    </motion.h4>
                  </div>
                  <div className="link-container">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/3842/3842018.png"
                      className="img"
                      alt="Error loading"
                    />
                    <motion.h4
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <a className="link" href="https://tinyurl.com/y5vkask9">
                        Industrial Training Letter
                      </a>
                    </motion.h4>
                  </div>

                  <div className="link-container">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/7626/7626235.png"
                      className="img"
                      alt="Error loading"
                    />
                    <motion.h4
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <a
                        className="link"
                        href="http://www.mmmut.ac.in/pdf/T&P%20Contacts_List%202022-2023.pdf"
                      >
                        Contact List
                      </a>
                    </motion.h4>
                  </div>
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
