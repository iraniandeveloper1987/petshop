import React from "react"
import "./Header.scss"
import TopNav from "../TopNav"
import MainMenu from "../MainMenu"
import { Container, Row, Col } from "react-bootstrap"

function Header() {
  return (
    <header className="">
      <Container fluid>
        <Row>
          <TopNav />
        </Row>
        <Row>
          <MainMenu />
        </Row>
      </Container>
    </header>
  )
}

export default Header
