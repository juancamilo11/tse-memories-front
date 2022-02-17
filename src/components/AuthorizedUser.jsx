import React from "react";

const AuthorizedUser = ({ authorizedEmail, setAuthorizedEmailList }) => {
  const handleDeleteEmail = (e) => {
    e.preventDefault();
    setAuthorizedEmailList((authorizedEmailList) =>
      authorizedEmailList.filter((theEmail) => theEmail !== authorizedEmail)
    );
  };

  return (
    <div className="memory-form__tag-container auth-list__tag-container">
      <span className="memory-form__tag-name">{authorizedEmail}</span>
      <button
        className="btn btn-danger btn-delete-tag"
        onClick={handleDeleteEmail}
      >
        <i className="fas fa-trash-alt"></i>
      </button>
    </div>
  );
};

export default AuthorizedUser;
