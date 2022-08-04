import PhotoAlbum from "react-photo-album";
import { photos } from "../../../data/Photos";
import "../achievements.css";

const News = () => {
  return (
    <>
      <div className="news-container">
        <PhotoAlbum layout="masonry" photos={photos} />
      </div>
    </>
  );
};

export default News;
