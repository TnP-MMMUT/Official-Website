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
      <div className="border1 underline-head ms-4 ms-md-5 ms-lg-5"></div>
      <div className="about-text ms-4 ms-md-5 ms-lg-5 mt-2">Coming Soon!</div>
      {/* <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={testimonialImage}
              className="d-block w-100"
              alt="caraousel item"
            />
          </div>
          <div className="carousel-item">
            <img
              src={testimonialImage}
              className="d-block w-100"
              alt="caraousel item"
            />
          </div>
          <div className="carousel-item">
            <img
              src={testimonialImage}
              className="d-block w-100"
              alt="caraousel item"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div> */}
      <div className="about ms-4 ms-md-5 ms-lg-5">Past Recruiters</div>
      <div className="border1 underline-head2 ms-4 ms-md-5 ms-lg-5"></div>

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
                <strong>Placement Brochure</strong>
              </a>
            </span>
          </button>
        </div>
        <div className="btn-invitation">
          <button className="mail-button">
            <a href="mailto:tnp@mmmut.ac.in">
              <strong>Mail To: tnp@mmmut.ac.in</strong>
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
