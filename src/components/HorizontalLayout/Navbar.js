import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import { Row, Col, Collapse } from "reactstrap"
import { Link, withRouter } from "react-router-dom"
import classname from "classnames"

//i18n
import { withTranslation } from "react-i18next"

import { connect } from "react-redux"

const Navbar = props => {
  const [dashboard, setdashboard] = useState(false)
  const [ui, setui] = useState(false)
  const [app, setapp] = useState(false)
  const [email, setemail] = useState(false)
  const [ecommerce, setecommerce] = useState(false)
  const [crypto, setcrypto] = useState(false)
  const [project, setproject] = useState(false)
  const [task, settask] = useState(false)
  const [contact, setcontact] = useState(false)
  const [blog, setBlog] = useState(false)
  const [component, setcomponent] = useState(false)
  const [form, setform] = useState(false)
  const [table, settable] = useState(false)
  const [chart, setchart] = useState(false)
  const [icon, seticon] = useState(false)
  const [map, setmap] = useState(false)
  const [extra, setextra] = useState(false)
  const [invoice, setinvoice] = useState(false)
  const [auth, setauth] = useState(false)
  const [utility, setutility] = useState(false)

  useEffect(() => {
    var matchingMenuItem = null
    var ul = document.getElementById("navigation")
    var items = ul.getElementsByTagName("a")
    for (var i = 0; i < items.length; ++i) {
      if (props.location.pathname === items[i].pathname) {
        matchingMenuItem = items[i]
        break
      }
    }
    if (matchingMenuItem) {
      activateParentDropdown(matchingMenuItem)
    }
  })
  function activateParentDropdown(item) {
    item.classList.add("active")
    const parent = item.parentElement
    if (parent) {
      parent.classList.add("active") // li
      const parent2 = parent.parentElement
      parent2.classList.add("active") // li
      const parent3 = parent2.parentElement
      if (parent3) {
        parent3.classList.add("active") // li
        const parent4 = parent3.parentElement
        if (parent4) {
          parent4.classList.add("active") // li
          const parent5 = parent4.parentElement
          if (parent5) {
            parent5.classList.add("active") // li
            const parent6 = parent5.parentElement
            if (parent6) {
              parent6.classList.add("active") // li
            }
          }
        }
      }
    }
    return false
  }

  return (
    <React.Fragment>
      <div className="topnav">
        <div className="container-fluid">
          <nav
            className="navbar navbar-light navbar-expand-lg topnav-menu"
            id="navigation"
          >
            <Collapse
              isOpen={props.leftMenu}
              className="navbar-collapse"
              id="topnav-menu-content"
            >
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle arrow-none"
                    // onClick={e => {
                    //   e.preventDefault()
                    //   setdashboard(!dashboard)
                    // }}
                    to="/dashboard"
                  >
                    <i className="bx bx-home-circle mr-2"></i>
                    {props.t("Dashboard")}
                  </Link>
                </li>

                <li className="nav-item dropdown">
                  <Link
                    to="/job-list"
                    // onClick={e => {
                    //   e.preventDefault()
                    //   setui(!ui)
                    // }}
                    className="nav-link dropdown-toggle arrow-none"
                  >
                    <i className="bx bx-tone mr-2"></i>
                    {props.t("Job List")} 
                  </Link>
                  {/* <div
                    className={classname(
                      "dropdown-menu mega-dropdown-menu dropdown-menu-left dropdown-mega-menu-xl",
                      { show: ui }
                    )}
                  >
                    <Row>
                      <Col lg={4}>
                        <div>
                          <Link to="ui-alerts" className="dropdown-item">
                            {props.t("Alerts")}
                          </Link>
                          <Link to="ui-buttons" className="dropdown-item">
                            {props.t("Buttons")}
                          </Link>
                          <Link to="ui-cards" className="dropdown-item">
                            {props.t("Cards")}
                          </Link>
                          <Link to="ui-carousel" className="dropdown-item">
                            {props.t("Carousel")}
                          </Link>
                          <Link to="ui-dropdowns" className="dropdown-item">
                            {props.t("Dropdowns")}
                          </Link>
                          <Link to="ui-grid" className="dropdown-item">
                            {props.t("Grid")}
                          </Link>
                          <Link to="ui-images" className="dropdown-item">
                            {props.t("Images")}
                          </Link>
                        </div>
                      </Col>
                      <Col lg={4}>
                        <div>
                          <Link to="ui-lightbox" className="dropdown-item">
                            {props.t("Lightbox")}
                          </Link>
                          <Link to="ui-modals" className="dropdown-item">
                            {props.t("Modals")}
                          </Link>
                          <Link to="ui-rangeslider" className="dropdown-item">
                            {props.t("Range Slider")}
                          </Link>
                          <Link
                            to="ui-session-timeout"
                            className="dropdown-item"
                          >
                            {props.t("Session Timeout")}
                          </Link>
                          <Link to="ui-progressbars" className="dropdown-item">
                            {props.t("Progress Bars")}
                          </Link>
                          <Link to="ui-sweet-alert" className="dropdown-item">
                            {props.t("Sweet-Alert")}
                          </Link>
                          <Link
                            to="ui-tabs-accordions"
                            className="dropdown-item"
                          >
                            {props.t("Tabs & Accordions")}
                          </Link>
                        </div>
                      </Col>
                      <Col lg={4}>
                        <div>
                          <Link to="ui-typography" className="dropdown-item">
                            {props.t("Typography")}
                          </Link>
                          <Link to="ui-video" className="dropdown-item">
                            {props.t("Video")}
                          </Link>
                          <Link to="ui-general" className="dropdown-item">
                            {props.t("General")}
                          </Link>
                          <Link to="ui-colors" className="dropdown-item">
                            {props.t("Colors")}
                          </Link>
                          <Link to="ui-rating" className="dropdown-item">
                            {props.t("Rating")}
                          </Link>
                          <Link to="ui-notifications" className="dropdown-item">
                            {props.t("Notifications")}
                          </Link>
                          <Link to="ui-image-cropper" className="dropdown-item">
                            {props.t("Image Cropper")}
                          </Link>
                        </div>
                      </Col>
                    </Row>
                  </div> */}
                </li>

                <li className="nav-item dropdown">
                  <Link
                    to="/profile"
                    className="nav-link dropdown-togglez arrow-none"
                  >
                    <i className="bx bx-customize mr-2"></i>
                    {props.t("Profile")}
                  </Link>
                </li>

                <li className="nav-item dropdown">
                  <Link
                    to="/membership"
                    className="nav-link dropdown-toggle arrow-none"
                  >
                    <i className="bx bx-collection mr-2"></i>
                    {props.t("Membership")} 
                  </Link>
                </li>

                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle arrow-none"
                    to="/chat"
                  >
                    <i className="bx bx-file mr-2"></i>
                    {props.t("Chat")}
                  </Link>
                </li>
              </ul>
            </Collapse>
          </nav>
        </div>
      </div>
    </React.Fragment>
  )
}

Navbar.propTypes = {
  leftMenu: PropTypes.any,
  location: PropTypes.any,
  menuOpen: PropTypes.any,
  t: PropTypes.any,
}

const mapStatetoProps = state => {
  const { leftMenu } = state.Layout
  return { leftMenu }
}

export default withRouter(
  connect(mapStatetoProps, {})(withTranslation()(Navbar))
)
