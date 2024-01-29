import React from "react";
import "./Logo.scss";
import BrandName from "../../assets/images/logo.png";

function Logo() {
  return (
    <div>
      <img src={BrandName} alt="Logo" />
    </div>
  );
}

export default Logo;
