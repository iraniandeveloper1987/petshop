import React from "react"
import "./MainMenu.scss"
import MainMenuList from "../MainMenuList"
import UserHub from "../UserHub"
import Logo from "../Logo"

function MainMenu() {
  return (
    <div>
      <Logo />
      <nav>
        <ul>
          <MainMenuList />
        </ul>
      </nav>
      <nav>
        <ul>
          <UserHub />
        </ul>
      </nav>
    </div>
  )
}

export default MainMenu
