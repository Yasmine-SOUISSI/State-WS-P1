import React from "react";
import PropTypes from "prop-types";

function Input({ value, onChange, type }) {
  return <input type={type} value={value} onChange={onChange} />;
}

export default Input;

Input.propTypes = {
  value: PropTypes.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
};

Input.defaultProps = {
    type: "text",
    
};
