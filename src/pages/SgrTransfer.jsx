import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  Sgr,
  Benefits,
  VehiclesType
} from "../Components/SubpageData/LogisticData";

function SgrTransfer() {
  return (
    <>
    {/*hero */}
    <div className="position-relative w-100 hero">
        {Sgr.map((item, index) => (
          <div key={index}>
            <img
              src={item.imgSrc}
              alt="about image"
              className="img-fluid w-100 heroimg"
            />
            <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
              <h1>{item.title}</h1>
            </div>
          </div>
        ))}
      </div>

      {/*why choose us*/}
      <h4 className="text-center mt-3 mt-lg-5">Why Choose Us?</h4>
      <hr className="w-25 my-3 mx-auto border-3" />
      <Container className="mb-5">
        <Row>
          {Benefits.map((item, index) => (
            <Col md={6} lg={3} key={index}>
              <div className="card text-center mb-4">
                <div className="Icons">{item.Icon}</div>
                <div className="card-body">
                  <h6 className="card-title">{item.title}</h6>
                  <p className="card-text">{item.text}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      {/*why choose us*/}
      <h4 className="text-center mt-3 mt-lg-5">Why Choose Us?</h4>
      <hr className="w-25 my-3 mx-auto border-3" />
      <Container className="mb-5">
        <Row>
          {VehiclesType.map((item, index) => (
            <Col md={6} lg={3} key={index}>
              <div className="card text-center mb-4">
                <img
                  className="card-img-top p-1 img-fluid rounded img-width"
                  src={item.imgSrc}
                  alt="card image"
                />
                <div className="card-body text-start">
                  <h6 className="card-title">{item.carTyppe}</h6>
                  <ul>
                    {item.List.map((list, index) => (
                      <li key={index}>{list}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    
    </>
  )
}

export default SgrTransfer