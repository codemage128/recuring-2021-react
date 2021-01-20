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
        { icon: "", title: "Sydney AI studio", link: "#" },
      ],
    },
    {
      title: "FOLLOW US",
      links: [
        { icon: "bx bxl-facebook", title: "Facebook", link: "#" },
        { icon: "bx bxl-twitter", title: "Twitter", link: "#" },
        { icon: "bx bxl-google-plus ", title: "Google plus", link: "#" },
        { icon: "bx bxl-linkedin", title: "Linkedin", link: "#" },
        { icon: "bx bxl-dribbble", title: "Dribbble", link: "#" },
      ],
    }
  ]

  return (
    <React.Fragment>
      <footer className="landing-footer">
        <Container>
          <Row>
            <Col lg="5" sm="6">
              <div className="mb-4 mr-3 mb-lg-0">
                <h5 className="mb-3 footer-list-title">ABOUT US</h5>
                <p>Schabu is an AI-based recruitment platfomr that reduces hiring constsby at least 50% and reduces pre-interview screening of the hiringprocess, indetifying candidates switch the desired characteristics in the potential market where the number of job advertised and applications increase each year.</p>
              </div>
            </Col>
            {footerLinks.map((footerLink, key) => (
              <Col lg="2" sm="6" key={key}>
                <div className="mb-4 mb-lg-0">
                  <h5 className="mb-3 footer-list-title">{footerLink.title}</h5>
                  <ul className="list-unstyled footer-list-menu">
                    {footerLink.links.map((Flink, key) => (
                      <li key={key}>
                        <Link to={Flink.link}>
                          <i className={"font-size-22 " + Flink.icon}></i> {Flink.title}
                        </Link>
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
                    <p className="post-title">Contact US Careers</p>
                  </Link>
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
