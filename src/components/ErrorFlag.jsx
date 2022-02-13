import React from "react";

const ErrorFlag = ({ message }) => {
  return (
    <div className="error-flag__container">
      <p className="error-flag__message">{message}</p>
    </div>
  );
};

export default ErrorFlag;
