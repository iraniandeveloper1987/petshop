import React from "react"
import { IoIosArrowForward } from "react-icons/io"

function MenuBurgerList(props) {
  return (
    <>
      {props.menu_items.map((item) => {
        return (
          <li href={item.link} className="mx-1 px-2">
            {item.icon}
            <span className="px-2">{item.title}</span>
            <IoIosArrowForward class="d-lg-none" />
          </li>
        )
      })}
    </>
  )
}

export default MenuBurgerList
