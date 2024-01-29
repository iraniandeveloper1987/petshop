import React from "react";
import { NavLink } from "react-bootstrap";
import { IoHome } from "react-icons/io5";
import { FaShopify } from "react-icons/fa6";
import { FaBlog } from "react-icons/fa";

function AltNavList() {
  return (
    <>
      <li className="p-3">
        <NavLink exact={true} end to={`/`}>
          <IoHome />
          <span className="px-2"> Home</span>
        </NavLink>
      </li>
      <li className="p-3">
        <NavLink exact={true} end to={`/shop`}>
          <FaShopify />

          <span className="px-2">Shop</span>
        </NavLink>
      </li>
      <li className="p-3">
        <NavLink exact={true} end to={`/blog`}>
          <FaBlog />
          <span className="px-2">Blog</span>
        </NavLink>
      </li>
    </>
  );
}

export default AltNavList;
