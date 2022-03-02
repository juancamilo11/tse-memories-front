import React from "react";
import AuthorizedUser from "./AuthorizedUser";

const AuthorizedUserList = ({
  authorizedEmailList,
  setAuthorizedEmailList,
}) => {
  return (
    <div className="auth-list__main-container">
      <h3 className="text-center">
        Lista de email de los usuarios autorizados para ver este recuerdo
      </h3>
      <div className="auth-list__list-container">
        {authorizedEmailList.map((authorizedEmail) => (
          <AuthorizedUser
            key={authorizedEmail}
            authorizedEmail={authorizedEmail}
            setAuthorizedEmailList={setAuthorizedEmailList}
          />
        ))}
      </div>
    </div>
  );
};

export default AuthorizedUserList;
