import React from "react";
import "./MainMenu.scss";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMailBulk,
  faPhone,
  faLocation,
  faLanguage,
  faCat,
  faSearch,
  faUser,
  faHeart,
  faCartShopping,
  faShop,
  faDog,
  faFish,
  faDeaf,
  faGauge,
  faTShirt,
} from "@fortawesome/free-solid-svg-icons";
function MainMenu() {
  return (
    <>
      <Navbar collapseOnSelect bg="primary" data-bs-theme="dark">
        <Container className="d-flex justify-content-around">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Navbar.Brand href="/home" className="fs-1 mr-5">
              <FontAwesomeIcon icon={faCat} className="mt-2 mx-2 fs-1" />
              Ricky
            </Navbar.Brand>
            <Nav>
              <Nav.Link href="/shop" className="text-white mx-1">
                <FontAwesomeIcon icon={faShop} className="mt-2 mx-2" /> Shop
              </Nav.Link>
              <Nav.Link href="/dogs" className="text-white mx-1">
                <FontAwesomeIcon icon={faDog} className="mt-2 mx-2" /> Dogs
              </Nav.Link>
              <Nav.Link href="/cats" className="text-white mx-1">
                <FontAwesomeIcon icon={faCat} className="mt-2 mx-2" /> Cats
              </Nav.Link>
              <Nav.Link href="/fish" className="text-white mx-1">
                <FontAwesomeIcon icon={faFish} className="mt-2 mx-2" /> Fish
              </Nav.Link>
              <Nav.Link href="/small-pets" className="text-white mx-1">
                <FontAwesomeIcon icon={faDeaf} className="mt-2 mx-2" /> Small
                Pets
              </Nav.Link>
              <Nav.Link href="/reptiles" className="text-white mx-1">
                <FontAwesomeIcon icon={faGauge} className="mt-2 mx-2" />
                Reptiles
              </Nav.Link>
              <Nav.Link href="/birds" className="text-white mx-1">
                <FontAwesomeIcon icon={faTShirt} className="mt-2 mx-2" /> Birds
              </Nav.Link>
            </Nav>

            <Nav>
              <Nav.Link href="/cart" className="text-white ">
                <FontAwesomeIcon icon={faSearch} className="mt-2 mx-2 fs-5" />
              </Nav.Link>
              <Nav.Link href="/search" className="text-white ">
                <FontAwesomeIcon icon={faUser} className="mt-2 mx-2 fs-5" />
              </Nav.Link>

              <Nav.Link href="#pricing" className="text-white ">
                <FontAwesomeIcon icon={faHeart} className="mt-2 mx-2 fs-5" />
              </Nav.Link>
              <Nav.Link href="#pricing" className="text-white ">
                <FontAwesomeIcon
                  icon={faCartShopping}
                  className="mt-2 mx-2 fs-5"
                />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default MainMenu;
