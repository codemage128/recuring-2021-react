import React from "react"
import { Container, Row, Col } from "reactstrap"
import { Link } from "react-router-dom"

//Import Components
import FooterLink from "./footer-link"

const Features = () => {
  const footerLinks = [
    {
      title: "OFFICES",
      links: [
        { icon: "", title: "Brisbane", link: "#" },
        { icon: "", title: "Sydney", link: "#" },
      ],
    },
    {
      title: "FOLLOW US",
      links: [
        { icon: "bx bxl-facebook", title: "Facebook", link: "https://www.linkedin.com/company/43228818/admin/" },
        { icon: "bx bxl-linkedin", title: "Linkedin", link: "https://www.facebook.com/theschabuconcept" },
      ],
    }
  ]

  return (
    <React.Fragment>
      <footer className="landing-footer">
        <Container>
          <Row>
            <Col lg="3" sm="6">
              <div className="mb-4 mr-3 mb-lg-0">
                <h5 className="mb-3 footer-list-title">ABOUT US</h5>
                <p>Schabu is an AI driven recruitment platform that utilises voice and speech analytics to predict behaviour and job fit. Shortlisting made easy.</p>
              </div>
            </Col>
            {footerLinks.map((footerLink, key) => (
              <Col lg="2" sm="6" key={key}>
                <div className="mb-4 mb-lg-0">
                  <h5 className="mb-3 footer-list-title">{footerLink.title}</h5>
                  <ul className="list-unstyled footer-list-menu">
                    {footerLink.links.map((Flink, key) => (
                      <li key={key}>
                        <a href={Flink.link} target="_blank" >
                          <i className={"font-size-22 " + Flink.icon}></i> {Flink.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>
            ))}
            <Col lg="2" sm="6">
              <div className="mb-4 mb-lg-0">
                <h5 className="mb-3 footer-list-title">GET IN TOUCH</h5>
                <div className="blog-post">
                  <Link to="#" className="post">
                    <p className="post-title">Lvl24,  International Tower3, 300</p>
                    <p className="post-title">Barangaroo Ave,  Sydney NSW 2000.</p>
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg="3" sm="6">
              <div className="mb-4 mb-lg-0">
                <h5 className="mb-3 footer-list-title text-center">CONTACT US</h5>
                <div className="blog-post">
                  <div className="form-group row">
                    <label
                      htmlFor="example-url-input"
                      className="col-md-3 col-form-label"
                    >
                      Name
                    </label>
                    <div className="col-md-9">
                      <input
                        className="form-control"
                        type="url"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      htmlFor="example-url-input"
                      className="col-md-3 col-form-label"
                    >
                      Email
                    </label>
                    <div className="col-md-9">
                      <input
                        className="form-control"
                        type="email"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      htmlFor="example-url-input"
                      className="col-md-3 col-form-label"
                    >
                      Message
                    </label>
                    <div className="col-md-9">
                      <textarea className="form-control" rows="5"></textarea>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      htmlFor="example-url-input"
                      className="col-md-2 col-form-label"
                    >
                    </label>
                    <div className="col-md-10 text-right">
                      <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <hr className="footer-border mb-5" />
          <FooterLink />
        </Container>
      </footer>
    </React.Fragment>
  )
}

export default Features
