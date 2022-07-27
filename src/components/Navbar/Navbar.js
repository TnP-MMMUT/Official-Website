import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <>
      <div className="navbar">
        <div className="nav-sm">
          <motion.button
            layout
            className="hamburger"
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          >
            {isNavExpanded ? (
              <i className="fa fa-times"></i>
            ) : (
              <i className="fa fa-bars"></i>
            )}
          </motion.button>
        </div>
        <motion.ul layout className={isNavExpanded ? "menu expanded" : "menu"}>
          <li>
            <NavLink to="/" className="navbarlink">
              Home
            </NavLink>
          </li>
          <motion.li>
            Why Recruit@MMMUT <i className="fa fa-caret-down"></i>
            <div className="dropdown_menu mx-auto" id="whyRec">
              <motion.ul className="about-list">
                <motion.li>
                  <NavLink to="/about" className="dropdownnavlink">
                    About MMMUT
                  </NavLink>
                </motion.li>
                <li>
                  <NavLink to="/lifeatmmmut" className="dropdownnavlink">
                    Life@MMMUT
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/academics" className="dropdownnavlink">
                    Academics
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/graduates" className="dropdownnavlink">
                    Graduating Students
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/achievements" className="dropdownnavlink">
                    Achievements
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/alumni" className="dropdownnavlink">
                    Prominent Alumni
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/recruiters"
                    className="dropdownnavlink"
                    id="pastrecruit"
                  >
                    Past Recruiting Organizations
                  </NavLink>
                </li>
              </motion.ul>
            </div>
          </motion.li>
          <motion.li>
            For Companies <i className="fa fa-caret-down"></i>
            <div className="dropdown_menu navwidth2">
              <ul>
                <li>
                  <NavLink to="/invite" className="dropdownnavlink">
                    Invitation
                  </NavLink>
                </li>
                <li>
                  <a
                    style={{ textDecoration: "none", color: "#000" }}
                    href="http://www.mmmut.ac.in/Pdf/T&P%20Placement%20Brochure%202022-23.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Placement Brochure
                  </a>
                </li>
                <li>
                  <NavLink to="/procedure" className="dropdownnavlink">
                    Placement Procedure
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/reachingMMMUT" className="dropdownnavlink">
                    Reaching MMMUT
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/placement_training" className="dropdownnavlink">
                    Placement Statistics & Training
                  </NavLink>
                </li>
              </ul>
            </div>
          </motion.li>
          <motion.li>
            Student Utilities <i className="fa fa-caret-down"></i>
            <div className="dropdown_menu mx-auto navwidth1">
              <ul>
                <li className="navwidth">
                  <a
                    style={{ textDecoration: "none", color: "#000" }}
                    href="https://res.cloudinary.com/vaish1101/image/upload/v1658241167/gyan%20sir/T_P_Policy_2022_kf9g0e.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Placement Policy
                  </a>
                </li>
                <li className="navwidth">
                  <a
                    style={{ textDecoration: "none", color: "#000" }}
                    href="https://app.joinsuperset.com/#/s/feed"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Login to Superset
                  </a>
                </li>
                <li className="navwidth">
                  <a
                    style={{ textDecoration: "none", color: "#000" }}
                    href="https://tinyurl.com/y5vkask9"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Resume Template
                  </a>
                </li>
                <li className="navwidth">
                  <a
                    style={{ textDecoration: "none", color: "#000" }}
                    href="https://bit.ly/3zhzNVy"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Training Letter
                  </a>
                </li>
              </ul>
            </div>
          </motion.li>
          <motion.li>
            <NavLink to="/faqs" className="navbarlink">
              FAQs
            </NavLink>
          </motion.li>
          <motion.li>
            Contact Us <i className="fa fa-caret-down"></i>
            <div className="dropdown_menu mx-auto navwidth1">
              <ul>
                <li className="navwidth">
                  <NavLink to="/HeadTnP" className="dropdownnavlink">
                    Head of T&P, MMMUT
                  </NavLink>
                </li>
                <li className="navwidth">
                  <NavLink
                    to="/facultyCoordinators"
                    className="dropdownnavlink"
                  >
                    Faculty Coordinators
                  </NavLink>
                </li>
                <li className="navwidth">
                  <NavLink
                    to="/studentCoordinators"
                    className="dropdownnavlink"
                  >
                    Student Coordinators
                  </NavLink>
                </li>
              </ul>
            </div>{" "}
          </motion.li>
          <a href="https://in.linkedin.com/in/tnpmmm" target="blank">
            <li>
              <i className="fa fa-linkedin" aria-hidden="true"></i>
            </li>
          </a>
        </motion.ul>
      </div>
    </>
  );
};

export default Navbar;
