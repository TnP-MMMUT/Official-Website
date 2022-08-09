import React from "react";
import PhotoAlbum from "react-photo-album";
import { gallery } from "../../data/gallery";
import Navsm from "../Navbar/Navsm";
import Footer from "../utils/Footer";

function ImageGallery() {
  return (
    <>
      <Navsm />

      <div className="container">
        <div className="about">Image Gallery of T&P Cell</div>
        <div className="border-bottom mb-3"></div>
        <div className="news-container gallery-style container-fluid mt-3 text-center mx-auto">
          <PhotoAlbum layout="masonry" photos={gallery} />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ImageGallery;
