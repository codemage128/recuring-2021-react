import PropTypes from 'prop-types'
import React, { Component } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"

import {
   changeLayout,
   changeTopbarTheme,
   changeLayoutWidth,
} from "../../store/actions"

import Navbar from "./Navbar/Navbar"
import Section from "./HeroSection/Section"
import Footer from "./Footer/footer"

class JobsLayout extends Component {
   constructor(props) {
      super(props)
      this.state = {
         isMenuOpened: false,
         imglight: true,
         navClass: ""
      }
   }
   componentDidMount() {
      if (this.props.isPreloader === true) {
         document.getElementById("preloader").style.display = "block"
         document.getElementById("status").style.display = "block"
         setTimeout(function () {
            document.getElementById("preloader").style.display = "none"
            document.getElementById("status").style.display = "none"
         }, 2500)
      } else {
         document.getElementById("preloader").style.display = "none"
         document.getElementById("status").style.display = "none"
      }
      // Scrollto 0,0
      window.scrollTo(0, 0)
      window.addEventListener("scroll", this.scrollNavigation.bind(this), true)
      const title = this.props.location.pathname
      let currentage = title.charAt(1).toUpperCase() + title.slice(2)
      this.props.changeLayout("horizontal")
      if (this.props.topbarTheme) {
         // this.props.changeTopbarTheme(this.props.topbarTheme)
      }
      if (this.props.layoutWidth) {
         this.props.changeLayoutWidth(this.props.layoutWidth)
      }
   }

   scrollNavigation() {
      var scrollup = document.documentElement.scrollTop
      if (scrollup > 80) {
         this.setState({imglight: false, navClass: "nav-sticky"});
      } else {
         this.setState({imglight: true, navClass: ""});
      }
   }
   /**
    * Opens the menu - mobile
    */
   openMenu = () => {
      this.setState({ isMenuOpened: !this.state.isMenuOpened })
   }
   render() {
      return (
         <React.Fragment>
            <div id="preloader">
               <div id="status">
                  <div className="spinner-chase">
                     <div className="chase-dot" />
                     <div className="chase-dot" />
                     <div className="chase-dot" />
                     <div className="chase-dot" />
                     <div className="chase-dot" />
                     <div className="chase-dot" />
                  </div>
               </div>
            </div>
            <Navbar navClass={this.state.navClass} imglight={this.state.imglight} />
            <Section />
            <div className="main-content">{this.props.children}</div>
            <Footer />
         </React.Fragment>
      )
   }
}

JobsLayout.propTypes = {
   // topbarTheme: PropTypes.any
}

const mapStatetoProps = state => {
   return {
      ...state.JobsLayout,
   }
}

export default connect(mapStatetoProps, {
   // changeTopbarTheme,
   changeLayout,
   changeLayoutWidth,
})(withRouter(JobsLayout))