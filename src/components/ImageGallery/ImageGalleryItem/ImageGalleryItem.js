import React from "react";
import PropTypes from "prop-types";
import style from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ img, openModal }) => {
  return (
    <li className={style.ImageGalleryItem}>
      <img
        onClick={() => openModal(img)}
        src={img.webformatURL}
        alt=""
        className={style.ImageGalleryItemImage}
      />
    </li>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  img: PropTypes.object,
  openModal: PropTypes.func,
};
