import React from "react"
import "./TopProducts.scss"
import { Container, Row } from "react-bootstrap"
import AliceCarousel from "react-alice-carousel"
import ProductItem from "../ProductItem"
// This is needed !!!!!!!!!!!!!
import "react-alice-carousel/lib/alice-carousel.css"
import p1 from "../../assets/images/Product-1.jpg"

const Gallery = () => {
  return (
    <AliceCarousel
      mouseTracking
      // items={items}
      responsive={{
        0: { items: 1 },
        768: {
          items: 3,
          itemsFit: "contain",
        },
        1024: {
          items: 4,
          itemsFit: "contain",
        },
      }}
      disableButtonsControls
      autoPlay={true}
      autoPlayInterval={4000}
      infinite={true}
      touchMoveDefaultEvents={false}
    >
      <ProductItem image={p1} title={"valid, navigable address "} desc={"valid, navigable address "} linkContent={"Ultimate HealthCare"}></ProductItem>
      <ProductItem image={p1} title={"valid, navigable address "} desc={"valid, navigable address "} linkContent={"Ultimate HealthCare"}></ProductItem>
      <ProductItem image={p1} title={"valid, navigable address "} desc={"valid, navigable address "} linkContent={"Ultimate HealthCare"}></ProductItem>
      <ProductItem image={p1} title={"valid, navigable address "} desc={"valid, navigable address "} linkContent={"Ultimate HealthCare"}></ProductItem>
    </AliceCarousel>
  )
}

function TopProducts() {
  return (
    <Container fluid>
      <Row>
        <h2 className=" d-flex align-content-center justify-content-center  fs-3 p-4">Top Products</h2>
      </Row>
      <Row>{Gallery()}</Row>
    </Container>
  )
}

export default TopProducts
