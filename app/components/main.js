
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
    width: "100%",
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
  buttonStyle: {
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
    }
  }

  render () {

    return (
      <div style={{position: "relative", width: "100%"}}>
        <div>
          <div style={{maxHeight: 65, height: 65, backgroundColor: "white", position: "relative", zIndex: "2"}}>
            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 col-lg-offset-1">
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
            </div>
          </div>
          <div style={styles.imageContainer}>
            <img src="/assets/img/vendor-pfl.png" style={styles.image} />
          </div>
          <Products />
        </div>
        <div style={{height: 100, backgroundColor: "black", position: "absolute", bottom: 0, width: "100%", zIndex: "2", borderTop: "1px solid rgba(0,0,0,0.8)"}}>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-3 col-lg-offset-2">
              <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
                <p style={{textAlign: "center"}}>© 2018 Printing For Less</p>
              </div>
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
              </div>
            </div>
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-2">
              <br />
              <div className="row">
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xs-offset-2 col-sm-offset-2 col-md-offset-2 col-lg-offset-2">
                  <a title="Twitter" href="https://twitter.com/pflcom?lang=en" target = "_blank">
                    <img alt="Twitter" src="https://s3-us-west-2.amazonaws.com/pp-logo/twitter-icon-32.png" />
                  </a>
                  <br />
                  <br />
                  <a title="Facebook" href="https://www.facebook.com/PrintingForLess/"  target = "_blank">
                    <img alt="Facebook" src="https://s3-us-west-2.amazonaws.com/pp-logo/facebook-icon-32.png"  />
                  </a>
                </div>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                  <a title ="Frontline Proessing on Instagram" href = "https://www.instagram.com/printingforless/"  target = "_blank">
                    <img src="https://s3-us-west-2.amazonaws.com/pp-logo/instagram-icon-32.png" alt ="FLP on Instagram" />
                  </a>
                  <br />
                  <br />
                  <a title="Youtube" href="https://www.youtube.com/channel/UCzVPzPOOpLAJgfezl7SCf3g"  target = "_blank">
                    <img alt="Youtube" src="https://s3-us-west-2.amazonaws.com/pp-logo/youtube-icon-32.png"  />
                  </a>
                </div>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                  <a title = "Frontline Processing on LinkedIn" href = "https://www.linkedin.com/company/printingforless-com/" target = "_blank">
                    <img src="https://s3-us-west-2.amazonaws.com/pp-logo/linkedin-icon-32.png" alt = "Frontline Processing on Linked in" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
              <br />
              <p>Contact Support</p>
              <p>Phone: (406) 222-4890</p>
              <p style={{wordWrap: "break-word"}}>Email: customerservice@pfl.com</p>
            </div>
          </div>
      </div>
    )
  }
}
