import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LogisticData from "../LogisticApi";
import "../../index.css";
import { useRef } from "react";
import Slider from "react-slick";

function Logistics() {
  let sliderRef = useRef(null);
  const play = () => {
    sliderRef.slickPlay();
  };
  const pause = () => {
    sliderRef.slickPause();
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <main>
        <h4 className="text-center mt-5">Travel Logistics</h4>
        <hr className="w-25 my-3 mx-auto border-3" />

        <Container>
          <Row>
            <Slider ref={(slider) => (sliderRef = slider)} {...settings}>
              {LogisticData.map((item, index) => (
                <Col key={index}>
                  <div className="card mt-5 mx-2 mx-lg-3 border-0 card1">
                    <img
                      className="card-img-top p-1 img-fluid rounded img-thumbnail img-width"
                      src={item.imgSource}
                      alt="card image"
                    />
                    <div className="card-body">
                      <h6 className="card-title">{item.title}</h6>
                      <p className="card-text">{item.descrip}</p>
                      {item.Btns}
                    </div>
                  </div>
                </Col>
              ))}
            </Slider>
          </Row>
        </Container>
      </main>
    </>
  );
}

export default Logistics;
