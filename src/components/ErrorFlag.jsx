import React from "react";

const ErrorFlag = ({ message }) => {
  return (
    <div className="error-flag__container">
      <span className="error-flag__message">{message}</span>
    </div>
  );
};

export default ErrorFlag;
