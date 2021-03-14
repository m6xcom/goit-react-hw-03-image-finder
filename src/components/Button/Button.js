import React from "react";
import PropTypes from "prop-types";
import style from "./Button.module.css";

const Button = ({ loadMore }) => {
  return (
    <button onClick={loadMore} className={style.Button}>
      Load more
    </button>
  );
};

export default Button;

Button.propTypes = {
  loadMore: PropTypes.func,
};
