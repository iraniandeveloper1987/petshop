import React from "react";
import { Link } from "react-router-dom";
import { IoMail } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { IoMdArrowDropdown } from "react-icons/io";

function InfoList() {
  return (
    <div className="d-flex">
      <Link
        to={{ pathname: "mailto:info@petshop.com" }}
        target="_blank"
        className="p-3"
      >
        <IoMail />
        <span className="px-2"> info@petshop.com</span>
      </Link>
      <Link
        to={{ pathname: "mailto:info@petshop.com" }}
        target="_blank"
        className="p-3"
      >
        <BsFillTelephoneFill />
        <span className="px-2">+123 488 9652</span>
      </Link>
      <Link
        to={{ pathname: "mailto:info@petshop.com" }}
        target="_blank"
        className="p-3"
      >
        <CiLocationOn />
        <span className="px-2">25 West 21th Street, Miami FL, USA</span>
      </Link>
      <div className="p-3">
        English
        <IoMdArrowDropdown />
        <div className="d-none ">
          <ul>
            <li>English</li>
            <li>Germany</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default InfoList;
