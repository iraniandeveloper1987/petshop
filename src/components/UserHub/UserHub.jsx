import React from "react"
import { FaSearch, FaHeart, FaUser, FaShoppingCart } from "react-icons/fa"
import { NavLink } from "react-bootstrap"
import "./UserHub.scss"

function UserHub() {
  return (
    <>
      <li className="px-2">
        <FaSearch />
      </li>
      <li className="px-2">
        <NavLink exact={true} end to={`/my-account`}>
          <FaUser />
        </NavLink>
      </li>
      <li className="px-2">
        <NavLink exact={true} end to={`/wishlist`}>
          <FaHeart />
        </NavLink>
      </li>
      <li className="px-2">
        <NavLink exact={true} end to={`/cart`}>
          <FaShoppingCart />
        </NavLink>
      </li>
    </>
  )
}

export default UserHub
