import React from "react"
import "./Header.scss"
import TopNav from "../TopNav"
// import MainMenu from "../MainMenu"
import MenuBurger from "../MenuBurger/MenuBurger"
import { Container, Row, Col } from "react-bootstrap"
import MainMenuList from "../MainMenuList"
import Logo from "../Logo"
import UserHub from "../UserHub"
import { BsShop } from "react-icons/bs"
import { FaDog } from "react-icons/fa"
import { LiaCatSolid } from "react-icons/lia"
import { IoFish } from "react-icons/io5"
import { GiRabbit } from "react-icons/gi"
import { GiReptileTail } from "react-icons/gi"
import { PiBirdFill } from "react-icons/pi"

function Header() {
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
    <header className="">
      <Container fluid>
        {/* xs sm md lg */}
        <Row className="d-none d-lg-block">
          <TopNav />
        </Row>
        <Row>
          <div className="d-flex flex-row align-items-center  main-menu">
            <div className="d-lg-none px-3">
              <MenuBurger />
            </div>
            <div className="ms-g-xl-5 ms-sm-1 ">
              <Logo />
            </div>

            <div className="d-none d-lg-block px-3">
              <nav className="">
                <ul className="d-flex flex-row fw-bold fs-5 ">
                  <MainMenuList menu_items={menu_items} />
                </ul>
              </nav>
            </div>
            {/* ms-auto is instead of ml-auto in version 5, means gives it the start (right) of the element margin auto */}
            <div className="ms-auto me-xl-5 me-sm-2">
              <nav>
                <ul className="d-flex flex-row fs-5">
                  <UserHub />
                </ul>
              </nav>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  )
}

export default Header
