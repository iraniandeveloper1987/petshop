import React from "react"
import { FaSearch, FaHeart, FaUser, FaShoppingCart } from "react-icons/fa"
import { NavLink } from "react-bootstrap"
import "./UserHub.scss"

function UserHub() {
  return (
    <>
      <li>
        <FaSearch />
      </li>
      <li>
        <NavLink exact={true} end to={`/my-account`}>
          <FaUser />
        </NavLink>
      </li>
      <li>
        <NavLink exact={true} end to={`/wishlist`}>
          <FaHeart />
        </NavLink>
      </li>
      <li>
        <NavLink exact={true} end to={`/cart`}>
          <FaShoppingCart />
        </NavLink>
      </li>
    </>
  )
}

export default UserHub
