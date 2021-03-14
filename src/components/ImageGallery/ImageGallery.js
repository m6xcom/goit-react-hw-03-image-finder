import React from "react";
import PropTypes from "prop-types";
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";
import style from "./ImageGallery.module.css";

const ImageGallery = ({ photos, openModal }) => {
  return (
    <ul className={style.ImageGallery}>
      {photos.map((el) => {
        return <ImageGalleryItem openModal={openModal} key={el.id} img={el} />;
      })}
    </ul>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.object),
  openModal: PropTypes.func,
};
