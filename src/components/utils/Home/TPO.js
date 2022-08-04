import "../../../style/frontPage.css";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const TPO = () => {
  const { ref: refMessage, inView: inViewMessage } = useInView({
    threshold: 0.2,
  });
  const animationMessage = useAnimation();
  useEffect(() => {
    if (inViewMessage) {
      animationMessage.start({
        x: 0,
        transition: {
          type: "tween",
        },
      });
    } else {
      animationMessage.start({
        x: "-100vw",
      });
    }
  }, [inViewMessage, animationMessage]);
  return (
    <>
      <div ref={refMessage} className="container-sm">
        <motion.div animate={animationMessage}>
          <div className="row d-flex flex-row-reverse">
            <div className="col-12 col-md-4 col-lg-4">
              {/* <div className="f_object"> */}
              <div className="f_image text-center f-image">
                <img
                  src="https://res.cloudinary.com/daxilgrvn/image/upload/v1658460990/T_P%20Site/photo_2022-07-22_09-06-03_bd29u3.jpg"
                  alt="TPO sir"
                />
              </div>
              {/* </div> */}
              <div className="text-center">
                <h5 className="mx-auto">
                  <b>Prof. V.K. Dwivedi</b>
                </h5>
                <h6>Professor, T&P</h6>
                <h6>MMMUT, Gorakhpur</h6>
                {/* <h4>MMMUT Gorakhpur</h4> */}
              </div>
            </div>
            <div className="col-12 col-md-8 col-sm-12 col-lg-8">
              <p className="about-text">
                Madan Mohan Malaviya University of Technology, Gorakhpur is one
                of the established university of India. It is my pride and
                privilege to share few facts about placements as it has always
                been a vital ingredient for endorsing students potentiality.
                Also it's always an endeavour for entire academic fraternity to
                raise the placement bar year on year by imparting essential
                technical and non-technical techniques to students due to which
                they become competent to face the industry challenges. I am also
                proud to say that MMMUT has faced the challenges successfully.
                This is possible due to outstanding efforts of the faculty and
                of the bright students who are selected after a stringent
                process. Our alumni have achieved tremendous success in all
                sphere and this bears an eloquent testimony to our efforts. I
                take pride in cordially inviting you to participate in our
                endeavour and look forward to welcoming you for the recruitment
                program.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default TPO;
