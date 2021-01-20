import React, { useEffect, useState } from "react"

//Import Components
import Navbar from "./Navbar/Navbar"
import Section from "./HeroSection/Section"
import CardsMini from "./HeroSection/cards-mini"
import AboutUs from "./AboutUs/about-us"
import OurTeam from "./Team/our-team"
import Footer from "./Footer/footer"

const Landing = () => {
  const [imglight, setimglight] = useState(true)
  const [navClass, setnavClass] = useState("")

  // Use ComponentDidMount
  useEffect(() => {
    window.addEventListener("scroll", scrollNavigation, true)
  })

  function scrollNavigation() {
    var scrollup = document.documentElement.scrollTop
    if (scrollup > 80) {
      setimglight(false)
      setnavClass("nav-sticky")
    } else {
      setimglight(true)
      setnavClass("")
    }
  }
  return (
    <React.Fragment>
      {/* import navbar */}
      <Navbar navClass={navClass} imglight={imglight} />
      {/* Hero section */}
      <Section />
      {/* mini cards */}
      <CardsMini />
      {/* aboutus */}
      <AboutUs />
      {/* footer */}
      <Footer />
    </React.Fragment>
  )
}
export default Landing