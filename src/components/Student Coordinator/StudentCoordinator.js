import { Link } from "react-router-dom";
import { motion, useScroll } from "framer-motion";

import "../../style/Student.css";

const StudentCoordinator = ({ data }) => {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      ></motion.div>

      <div id="our-team">
        <div className="picture">
          <img className="img-fluid" src={data.image} alt="Alumnus" />
        </div>
        <div className="team-content">
          <h4 className="name" style={{ fontWeight: 600, fontSize: "22px" }}>
            {data.post}
          </h4>
          <h4 className="title">{data.name}</h4>
          <h4 className="title">
            {data.branch}, {data.year} Year
          </h4>
        </div>
        <ul className="social">
          <li>
            <a href={data.in} className="fa fa-linkedin" aria-hidden="true"></a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default StudentCoordinator;
