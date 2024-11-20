import React from "react";
import "./authentication.styles.scss";
import SignUp from "../../components/signup/signup";
import SignIn from "../../components/signin/signin";
const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Authentication;
