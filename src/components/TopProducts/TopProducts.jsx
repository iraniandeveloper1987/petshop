import React from "react";
import "./TopProducts.scss";
import { Container, Row } from "react-bootstrap";
import p1 from "../../assets/images/Product-1.jpg";
import AliceCarousel from "react-alice-carousel";

function TopProducts() {
  return (
    <Container fluid>
      <Row>
        <h2 className=" d-flex align-content-center justify-content-center  fs-3 m-4">
          Top Products
        </h2>
      </Row>
      <Row>
        <AliceCarousel
          mouseTracking
          // items={items}
          responsive={{
            0: { items: 1 },
            1024: {
              items: 4,
              itemsFit: "contain",
            },
          }}
          disableButtonsControls
          autoPlay={false}
          autoPlayInterval={4000}
          infinite={false}
          touchMoveDefaultEvents={false}
        >
          {/* <div className="card col-sm-12 col-md-6 col-lg-3 mt-3"> */}
          <div className="card  mt-3">
            <img src={p1} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          {/* <div className="card col-sm-12 col-md-6 col-lg-3 mt-3"> */}
          <div className="card  mt-3">
            <img src={p1} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          {/* <div className="card col-sm-12 col-md-6 col-lg-3 mt-3"> */}
          <div className="card  mt-3">
            <img src={p1} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          {/* <div className="card col-sm-12 col-md-6 col-lg-3 mt-3"> */}
          <div className="card  mt-3">
            <img src={p1} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>{" "}
        </AliceCarousel>
      </Row>
    </Container>
  );
}

export default TopProducts;
