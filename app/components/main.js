
import $ from 'jquery'
import _ from 'lodash'

import React from 'react'
import {
  Table,
  Button,
  ButtonGroup,
  Grid,
  Row,
  Col,
  Panel,
  DropdownButton,
  MenuItem,
  Well,
  Navbar,
  Nav,
  NavItem,
  NavDropdown
} from 'react-bootstrap'
import {Footer} from 'react-materialize'

import Products from "./products"

let styles = {
  imageContainer: {
    maxHeight: 375,
    background: "rgba(255,255,255,0.85)",
    boxShadow: "0px 5px 16px 0px rgba(0,0,0,1)",
  },
  image: {
    height: "auto",
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
    borderTop: "1px solid black",
    //borderBottom: "1px solid black",
  },
  imageTransition: {
    overflow: "hidden",
    transform: "translateY(0)",
    transition: "transform 1.5s linear"
  },
  fade: {
    zIndex: "1",
    height: "100%",
    width: "100%",
    position: "absolute",
    background: "linear-gradient(to right, rgba(255,255,255,1) 5%, rgba(255,255,255,0) 15%, rgba(255,255,255,0) 85%, rgba(255,255,255,1) 95%)"
  },
  fade1: {
    zIndex: "1",
    height: "100%",
    width: "15%",
    position: "absolute",
    background: "linear-gradient(to right, rgba(255,255,255,1) 33%, rgba(255,255,255,0))"
  },
  fade2: {
    marginLeft: "85%",
    zIndex: "1",
    height: "100%",
    width: "15%",
    position: "absolute",
    background: "linear-gradient(to right, rgba(255,255,255,0), rgba(255,255,255,1) 67%)"
  },
  buttonStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  }
}

export default class Main extends React.Component {

  constructor(props, context){
    super(props, context);

    this.state = {
      introButtonPressed: false
    }
  }

  render () {
    let content
    if(this.state.introButtonPressed == true){
      content = this.intro();
    }
    else{
      content = this.introButton();
    }

    return (
      <div style={{position: "relative", width: "100%"}}>
        <div>
          <div style={{maxHeight: 65, height: 65, backgroundColor: "white", position: "relative", zIndex: "2"}}>
            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 offset-lg-1">
              <div style={{marginRight: 15, marginTop: 3, display: "inline-block", float: "left"}}>
                <p style={{fontFamily: "Century", fontSize: 35, position: "relative"}}>Printing For Less</p>
              </div>
              <div style={{width: 1, height: 65, borderLeft: "1px inset black", marginRight: 25, display: "inline-block", float: "left"}}></div>
              <a href="https://www.printingforless.com/"  target = "_blank" style={{fontSize: 16, marginTop: 23, marginRight: 25, display: "inline-block", float: "left"}}>Home</a>
              <a href="https://www.printingforless.com/Business-Printing-Services.html"  target = "_blank" style={{fontSize: 16, marginTop: 23, marginRight: 25, display: "inline-block", float: "left"}}>Business Services</a>
              <a href="https://www.printingforless.com/About-PFL.html"  target = "_blank" style={{fontSize: 16, marginTop: 23, marginRight: 25, display: "inline-block", float: "left"}}>About Us</a>
              <a href="https://mypfl.com/login.aspx?ReturnUrl=%2f"  target = "_blank" style={{fontSize: 16, marginTop: 23, marginRight: 25, display: "inline-block", float: "left"}}>MyPFL</a>
            </div>
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-2" style={{}}>
              <a style={{marginTop: 8, display: "inline-block", float: "right"}} href="http://www.bbb.org/eastern-washington/business-reviews/credit-card-processing-service/frontline-processing-corporation-in-bozeman-mt-64004904/#bbbonlineclick" target="_blank" rel="nofollow">
                <img style={{width: 130}} src="/assets/img/ab-seal-horizontal-black-large.jpg" alt="Frontline Processing Corporation BBB Business Review" />
              </a>
            </div>
          </div>
          <div style={styles.imageContainer}>
            <img src="/assets/img/vendor-pfl.png" style={styles.image} />
          </div>
          <FeeAuditCalc />
        </div>
        <div style={{backgroundColor: "#F8F8F8F8", position: "absolute", bottom: 0, width: "100%", zIndex: "2", borderTop: "1px solid rgba(0,0,0,0.8)"}}>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-3 offset-lg-2">
              <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
                <a title = "Payment Portal" href = "https://www.paymentportal.us" target = "_blank">
                  <img className="pp-logo-long" src="/assets/img/portal-alpha-longcopy.png" alt = "Payment Portal" />
                </a>
                <p style={{textAlign: "center"}}>© 2018 Frontline Processing</p>
              </div>
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <br />
                <a href="http://www.bbb.org/eastern-washington/business-reviews/credit-card-processing-service/frontline-processing-corporation-in-bozeman-mt-64004904/#bbbonlineclick" target="_blank" rel="nofollow">
                  <img style={{width: 140}} src="https://seal-spokane.bbb.org/seals/black-seal-187-130-bbb-64004904.png" alt="Frontline Processing Corporation BBB Business Review" />
                </a>
                <br />
                <br />
              </div>
            </div>
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-2">
              <br />
              <div className="row">
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 offset-xs-2 offset-sm-2 offset-md-2 offset-lg-2">
                  <a title="Twitter" href="https://twitter.com/FPC_Payments" target = "_blank">
                    <img alt="Twitter" src="https://s3-us-west-2.amazonaws.com/pp-logo/twitter-icon-32.png" />
                  </a>
                  <br />
                  <br />
                  <a title="Facebook" href="http://facebook.com/pages/Frontline-Processing/330283311741"  target = "_blank">
                    <img alt="Facebook" src="https://s3-us-west-2.amazonaws.com/pp-logo/facebook-icon-32.png"  />
                  </a>
                </div>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                  <a title ="Frontline Proessing on Instagram" href = "http://instagram.com/frontlineprocessing"  target = "_blank">
                    <img src="https://s3-us-west-2.amazonaws.com/pp-logo/instagram-icon-32.png" alt ="FLP on Instagram" />
                  </a>
                  <br />
                  <br />
                  <a title="Youtube" href="https://www.youtube.com/channel/UC6tEPWTqOzixKQpbE8b5YMg"  target = "_blank">
                    <img alt="Youtube" src="https://s3-us-west-2.amazonaws.com/pp-logo/youtube-icon-32.png"  />
                  </a>
                </div>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                  <a title = "Frontline Processing on LinkedIn" href = "https://www.linkedin.com/in/frontlineprocessing" target = "_blank">
                    <img src="https://s3-us-west-2.amazonaws.com/pp-logo/linkedin-icon-32.png" alt = "Frontline Processing on Linked in" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
              <br />
              <p>Contact Support</p>
              <p>Phone: (866) 651-3068</p>
              <p style={{wordWrap: "break-word"}}>Email: customerservice@frontlineprocessing.com</p>
            </div>
          </div>
      </div>
    )
  }
}
