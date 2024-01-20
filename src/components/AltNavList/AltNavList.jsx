import React from "react"
import { NavLink } from "react-bootstrap"

function AltNavList() {
  return (
    <>
      <li>
        <NavLink exact={true} end to={`/`}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink exact={true} end to={`/shop`}>
          Shop
        </NavLink>
      </li>
      <li>
        <NavLink exact={true} end to={`/blog`}>
          Blog
        </NavLink>
      </li>
    </>
  )
}

export default AltNavList
