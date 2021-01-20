import React, { useState } from "react"
import { Container, Row, Col, Card, CardBody } from "reactstrap"
import { Link } from "react-router-dom"

//Images
import client1 from "../../../assets/images/clients/1.png"
import client2 from "../../../assets/images/clients/2.png"
import client3 from "../../../assets/images/clients/3.png"
import client4 from "../../../assets/images/clients/4.png"
import client5 from "../../../assets/images/clients/5.png"
import client6 from "../../../assets/images/clients/6.png"
import feature2 from "../../../assets/images/crypto/features-img/img-2.png"

const AboutUs = () => {
  const [step1, setStep1] = useState(true)
  const [step2, setStep2] = useState(false)

  return (
    <React.Fragment>
      <section className="section pt-4 bg-white" id="about">
        <Container>
          <Row>
            <Col lg="12">
              <div className="text-center mb-5">
                <h1>What is Schabu?</h1>
              </div>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col lg="5">
              <div className="text-muted">
                <h5>
                  Schabu is an AI driven recruitment platform that utilises voice and speech analytics to predict behaviour and job fit. Shortlisting made easy.
                </h5>
                <Row className="mt-4">
                  <Col lg="4" xs="6">
                    <div className="mt-4">
                      <h4>1,500</h4>
                      <p>Jobs</p>
                    </div>
                  </Col>
                  <Col lg="4" xs="6">
                    <div className="mt-4">
                      <h4>16,245</h4>
                      <p>Companies</p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>

            <Col lg="6" className="ml-auto">
              <div className="mt-4 mt-lg-0">
                <Row>
                  <Col sm="12">
                    <div>
                      <img
                        src={feature2}
                        alt=""
                        className="img-fluid mx-auto d-block"
                      />
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>

        </Container>
      </section>
    </React.Fragment>
  )
}

export default AboutUs
