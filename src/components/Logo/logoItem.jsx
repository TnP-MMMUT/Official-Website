import { LogoData } from "../../data/logoData";
import "./logo.css";

import Slider from "react-slick";

function LogoItem() {
  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 7,
    dots: true,
    mobileFirst: true,
    slidesToScroll: 7,
    initialSlide: 0,
    pauseOnHover: true,
    cssEase: "linear",
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {LogoData.map((data) => {
        return (
          <div className="slide">
            <img
              className="image"
              src={data.imgLink}
              alt={data.altText}
              key={data.id}
            />
          </div>
        );
      })}
    </Slider>
  );
}

export default LogoItem;
