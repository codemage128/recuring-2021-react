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
      <section className="section hero-section bg-ico-jobs" id="home">
        <div className="bg-overlay bg-secondary" />
        <Container>
          <Row className="align-items-center">
            <Col lg="12 text-center">
              <div className="text-white-50">
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  )
}

export default Section
