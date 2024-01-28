import React from "react"
import "./Header.scss"
import TopNav from "../TopNav"
// import MainMenu from "../MainMenu"
import MenuBurger from "../MenuBurger/MenuBurger"
import { Container, Row, Col } from "react-bootstrap"
import MainMenuList from "../MainMenuList"
import Logo from "../Logo"
import UserHub from "../UserHub"

function Header() {
  return (
    <header className="">
      <Container fluid>
        {/* xs sm md lg */}
        <Row className="d-none d-lg-block">
          <TopNav />
        </Row>
        <Row>
          <div className="d-flex flex-row align-items-center py-2 main-menu">
            <div className="d-lg-none px-3">
              <MenuBurger />
            </div>
            <Logo />
            <div className="d-none d-lg-block px-3">
              <nav>
                <ul>
                  <MainMenuList />
                </ul>
              </nav>
            </div>
            {/* ms-auto is instead of ml-auto in version 5, means gives it the start (right) of the element margin auto */}
            <div className="ms-auto">
              <nav>
                <ul className="d-flex flex-row">
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
