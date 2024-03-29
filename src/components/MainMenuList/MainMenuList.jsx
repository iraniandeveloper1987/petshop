import React from "react"
import "./MainMenuList.scss"


function MainMenuList(props) {
  return (
    <>
      {props.menu_items.map((item) => {
        return (
          <li href={item.link} className="mx-1 px-2">
            {item.icon}
            <span className="px-2">{item.title}</span>
          </li>
        )
      })}
    </>
  )
}

export default MainMenuList
