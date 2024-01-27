import React from "react";
import { Container, Row, Col, Navbar } from "react-bootstrap";
import "./Main.scss";
import ResponsiveCarousel from "../../utility/responsive-carousel";

function Main() {
  return (
    <main>
      <section>
        <ResponsiveCarousel />
      </section>
    </main>
  );
}
export default Main;
