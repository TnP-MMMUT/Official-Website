//Past Recruiting Organisations Caraousel
import React from "react";
import "./OrgCarousel.css";
import testimonialImage from "./Testimonial.png";
import Footer from "./Footer";
import Logos from "../Logo/Logos";

const OrgCarousel = () => {
  return (
    <>
      <div className="about ms-4 ms-md-5 ms-lg-5">
        Testimonials From Recruiters
      </div>
      <div className="border-bottom ms-4 ms-md-5 ms-lg-5"></div>
      <div className="about-text ms-4 ms-md-5 ms-lg-5 mt-2">Coming Soon!</div>

      <div className="about ms-4 ms-md-5 ms-lg-5">Past Recruiters</div>
      <div className="border-bottom ms-4 ms-md-5 ms-lg-5"></div>

      <div className="inner-carousel text-center mx-auto">
        <Logos />
      </div>

      <div className="btns-invitation">
        <div className="btn-invitation">
          <button className="downloadBrochure-button">
            <i className="fa fa-download" aria-hidden="true">
              {" "}
            </i>
            <span>
              {" "}
              &nbsp;{" "}
              <a
                href="https://drive.google.com/file/d/1H2UVnWmQmS-wATsCzgiXyqNX31WDKqw1/view?usp=drivesdk"
                target="_"
              >
                <b>Placement Brochure</b>
              </a>
            </span>
          </button>
        </div>
        <div className="btn-invitation">
          <button className="mail-button">
            <a href="mailto:tnp@mmmut.ac.in">
              <b>Mail To: tnp@mmmut.ac.in</b>
            </a>
          </button>
        </div>
      </div>
      <div className="mb-3"></div>
      <Footer />
    </>
  );
};

export default OrgCarousel;
