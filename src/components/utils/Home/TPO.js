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
      <div ref={refMessage}>
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
              <p className="ms-2 ms-md-5 about-text">
                Madan Mohan Malviya University of Technology (MMMUT), Gorakhpur
                has grown to become the national flagship of UP State
                Government, known for the excellence of it's teaching to the
                national and international communities. MMMUT has been
                strategically created (established in 2013) on the legacy of
                success presented by Madan Mohan Malviya Engineering College
                Gorakhpur (established in 1962 by Government of UP) towards
                providing cutting edge learning technology, internationally
                benchmarked education and critical research opportunities in
                frontier areas of contemporary concern. The confidence posed by
                the industries for our institute is indicated by the fact that
                maximum students are placed and are serving in various leading
                global industries
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default TPO;
