import React from "react";

const ErrorFlag = ({ message, color }) => {
  return (
    <div
      className="error-flag__container"
      style={{ backgroundColor: `${color}` }}
    >
      <span className="error-flag__message">{message}</span>
    </div>
  );
};

export default ErrorFlag;
