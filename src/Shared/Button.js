import React from "react";
import PropTypes from "prop-types";

function Button({ className, onClick, disabled, type, textButton }) {
  return (
    <button
      className={className}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {textButton}
    </button>
  );
}

export default Button;

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  textButton: PropTypes.string.isRequired,
};

Button.defaultProps = {
  className: "",
  onClick: () => {},
  disabled: false,
  type: "button",
};
