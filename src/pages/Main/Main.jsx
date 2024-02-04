import React from "react";
import { Container, Row, Col, Navbar } from "react-bootstrap";
import "./Main.scss";
import ResponsiveCarousel from "../../utility/responsive-carousel";
import TopProducts from "../../components/TopProducts";

function Main() {
  return (
    <main>
      <section>
        <ResponsiveCarousel />
      </section>
      <section>
        <TopProducts />
      </section>
    </main>
  );
}
export default Main;
