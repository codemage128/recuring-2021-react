import React from "react"
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  Button,
} from "reactstrap"
import { Link } from "react-router-dom"

//Import Countdown
import Countdown from "react-countdown"

const Section = () => {
  return (
    <React.Fragment>
      <section className="section hero-section bg-ico-hero" id="home">
        <div className="bg-overlay bg-secondary" />
        <Container>
          <Row className="align-items-center">
            <Col lg="7">
            </Col>
            <Col lg="5">
              <div className="text-white-50">
                {/* <h1 className="text-white font-weight-semibold mb-3 hero-title">
                  Easy hire, Eash interview with Schabu
                </h1> */}
                <p className="font-size-20 text-white">
                  Schabu is an AI driven recruitment platform that utilises voice and speech analytics to predict behaviour and job fit. Shortlisting made easy.
                </p>
                <div className="button-items mt-5">
                  <Link to="/login" className="btn btn-lg btn-primary mr-1">
                    Free Trial
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg="7">
              <div className="button-items mt-4">
                <Link to="/login" className="btn btn-lg btn-primary mr-1" style={{ fontSize: "50px" }}>
                   Get Started, it’s Free
                  </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  )
}

export default Section
