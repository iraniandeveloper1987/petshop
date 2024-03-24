import React from "react"
import "./MenuBurger.scss"
import { GiHamburgerMenu } from "react-icons/gi"
import MainMenuList from "../MainMenuList"
import { BsShop } from "react-icons/bs"
import { FaDog } from "react-icons/fa"
import { LiaCatSolid } from "react-icons/lia"
import { IoFish } from "react-icons/io5"
import { GiRabbit } from "react-icons/gi"
import { GiReptileTail } from "react-icons/gi"
import { PiBirdFill } from "react-icons/pi"

function MenuBurger() {
  const menu_items = [
    { title: "Shop", link: "./", icon: <BsShop /> },
    { title: "Dog", link: "./dog", icon: <FaDog /> },
    { title: "Cat", link: "./cat", icon: <LiaCatSolid /> },
    { title: "Fish", link: "./fish", icon: <IoFish /> },
    { title: "Rabbit", link: "./rabbit", icon: <GiRabbit /> },
    { title: "Reptile", link: "./reptile", icon: <GiReptileTail /> },
    { title: "Bird", link: "./bird", icon: <PiBirdFill /> },
  ]
  
  return (
    <div className="fs-1 menu-burger-main">
      <GiHamburgerMenu />
      <div class="menu-burger-container">
        <nav>
          <ul>
            <MainMenuList menu_items={menu_items} />
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default MenuBurger
