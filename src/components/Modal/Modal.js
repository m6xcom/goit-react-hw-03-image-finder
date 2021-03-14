import React from "react";
import PropTypes from "prop-types";
import style from "./Modal.module.css";

const Modal = ({ img, closeModal }) => {
  return (
    <div
      onClick={(e) => {
        if (e.target.nodeName === "DIV") {
          closeModal();
        }
      }}
      className={style.Overlay}
    >
      <div className={style.Modal}>
        <img src={img.largeImageURL} alt="" />
      </div>
    </div>
  );
};

export default Modal;

Modal.propTypes = {
  img: PropTypes.object,
  closeModal: PropTypes.func,
};
