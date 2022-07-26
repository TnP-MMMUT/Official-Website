import "../../style/Faculty.css";

import { motion, useScroll } from "framer-motion";

const FacultyIndividual = ({ data }) => {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      ></motion.div>
      <div id="our-team">
        <div className="picture">
          <img className="img-fluid img-thumbnail" src={data.image} alt="" />
        </div>
        <div className="team-content">
          <h5 className="name">
            <b>{data.name}</b>
          </h5>
          <h4 className="title">{data.post},</h4>
          <h4 className="title">Training & Placement Cell</h4>
          <h4 className="title display-3">{data.designation},</h4>
          <h4 className="title display-3">{data.department}</h4>
        </div>
      </div>
    </>
  );
};

export default FacultyIndividual;
