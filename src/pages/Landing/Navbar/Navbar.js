import PropTypes from 'prop-types'
import React, { useState , useEffect} from "react"
import {
  Navbar,
  Nav,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  Container,
  Collapse,
} from "reactstrap"
import { Link } from "react-router-dom"
import ScrollspyNav from "./scrollSpy"

//Import Images
import logodark from "../../../assets/images/logo-dark.png"
import logolight from "../../../assets/images/logo-light.png"

const navItems = [
  { id: 1, idnm: "home", navheading: "Home" },
  { id: 2, idnm: "about", navheading: "About Us" },
]

const Navbar_Page = props => {
  const [isOpenMenu, setisOpenMenu] = useState(false)
  const [isLoggedin, setisLoggedin] = useState(false)
  //Store all NavigationbaFr Id into TargetID variable(Used for Scrollspy)
  let TargetId = navItems.map(item => {
    return item.idnm
  })
  useEffect(() => {
    if(window.localStorage.getItem('authUser')){
      setisLoggedin(true);
    }
  });
  return (
    <React.Fragment>
      <Navbar
        expand="lg"
        fixed="top"
        className={"navigation sticky " + props.navClass}
      >
        <Container>
          <NavbarBrand className="navbar-logo" href="/">
            {props.imglight !== true ? (
              <img
                src={logodark}
                alt=""
                height="38"
                className="logo logo-dark"
              />
            ) : (
                <img
                  src={logolight}
                  alt=""
                  height="38"
                  className="logo logo-light"
                />
              )}
          </NavbarBrand>

          <NavbarToggler
            className="p-0"
            onClick={() => {
              setisOpenMenu()
            }}
          >
            <i className="fa fa-fw fa-bars" />
          </NavbarToggler>

          <Collapse id="topnav-menu-content" isOpen={isOpenMenu} navbar>
            <ScrollspyNav
              scrollTargetIds={TargetId}
              scrollDuration="1500"
              headerBackground="true"
              activeNavClass="active"
              className="navbar-collapse"
            >
              <Nav className="ml-auto navbar-nav" id="topnav-menu">
                {navItems.map((item, key) => (
                  <NavItem
                    key={key}
                    className={item.navheading === "Home" ? "active" : ""}
                  >
                    <NavLink href={"#" + item.idnm}> {item.navheading}</NavLink>
                  </NavItem>
                ))}
              </Nav>
            </ScrollspyNav>
            <div className="ml-lg-2">
              {isLoggedin === false ? (
                <>
                  <Link to="/register" className="btn btn-outline-primary w-xs mr-2">
                    Sign Up
              </Link>
                  <Link to="/login" className="btn btn-primary w-xs">
                    Log In
              </Link>
                </>
              ) : (
                  <Link to="/dashboard" className="btn btn-outline-primary w-xs">
                    Dashboard
                  </Link>
                )}

            </div>
          </Collapse>
        </Container>
      </Navbar>
    </React.Fragment>
  )
}

Navbar_Page.propTypes = {
  imglight: PropTypes.any,
  navClass: PropTypes.string
}

export default Navbar_Page
