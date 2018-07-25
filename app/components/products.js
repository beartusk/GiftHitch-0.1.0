import $ from 'jquery'
import _ from 'lodash'
let base64 = require('base-64');

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
  Popover,
  OverlayTrigger
} from 'react-bootstrap'



const headers = {
  //'Access-Control-Allow-Origin': '*',
  'Authorization': 'Basic ' + base64.encode("miniproject:Pr!nt123"),
  'Content-Type': 'application/json',
};
const tokenPayload = {
  headers: headers,
  method: "GET",
  mode: "no-cors"
};

export default class Products extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      hover1: false,
      hover2: false,
      hover3: false,
      hover4: false,
      mainHeight: 1100,
    };

  }


  componentDidMount(){
    if(screen.width < 600){
      this.setState({mainHeight: screen.height*2.4})
    }

    console.log(base64.encode("miniproject:Pr!nt123"))
    fetch("https://testapi.pfl.com/products?apikey=136085", tokenPayload).then(response => {
      if (response.ok) {
        response.json().then(json => {
          console.log(JSON.stringify(json))
        });
      }
    }).catch(response => {
        console.log("There was an error in fetch with response: \n"+response);
    });
  }

  _setVal(idVal, val1)
  {
    document.getElementById(idVal).value = val1;
    document.getElementById(idVal+'Val').innerHTML = val1;
  }

  toggleHover1(){
    this.setState({hover1: !this.state.hover1})
  }

  toggleHover2(){
    this.setState({hover2: !this.state.hover2})
  }

  toggleHover3(){
    this.setState({hover3: !this.state.hover3})
  }

  toggleHover4(){
    this.setState({hover4: !this.state.hover4})
  }

  componentDidUpdate(prevProps, prevState){
  }


  render() {

    let mainStyle = {
      minHeight: this.state.mainHeight,
      background: "rgba(255,255,255,0.85)",
      paddingBottom: 50,
      //zIndex: "0"
    };
    let headerLabel ={
       fontSize: "38px",
       textAlign: "center",
       fontFamily: "Abel"
    }
    let secondaryLabel = {
      fontFamily: "Abel",
      fontSize: 18,
      marginBottom: 14
    }
    let wellStyle = {
      fontFamily: "Abel",
      fontSize: 20,
      marginBottom: 15,
      marginTop: 15,
      marginLeft: 15,
      marginRight: 15
    }


    let ratesBoxStyle = {zIndex: 2, paddingBottom: 20, backgroundColor: "rgba(255,255,255,0)"};
    let descriptionBoxStyle = {
      paddingTop: null,
      paddingBottom: null,
      paddingLeft: null,
      paddingRight: null,
      boxShadow: null,
    };
    let calcStyle  = {
      paddingLeft: null,
      boxShadow: null,
      paddingTop: null,
    };
    let adBoxStyle = {
      boxShadow: null
    };

    if(this.state.hover2 == true){
      descriptionBoxStyle = {
        paddingTop: 1,
        paddingBottom: 30,
        paddingLeft: 60,
        paddingRight: 60,
        boxShadow: "0px -15px 16px -15px rgba(0,0,0,0.8), 0px 15px 16px -15px rgba(0,0,0,0.8)"
      }
      calcStyle = {
        boxShadow: "6px 6px 16px -5px rgba(0,0,0,0.4)",
        paddingTop: 15
      }
      adBoxStyle.boxShadow = ""
    }
    else{
      descriptionBoxStyle = {
        paddingTop: 1,
        paddingBottom: 30,
        paddingLeft: 60,
        paddingRight: 60,
        boxShadow: "0px -10px 16px -10px rgba(0,0,0,0.4)"
      }
      calcStyle.boxShadow = "6px -6px 16px -5px rgba(0,0,0,0.4)"
      adBoxStyle.boxShadow = "0px -6px 16px -5px rgba(0,0,0,0.4)"

      if(this.state.hover3 == true){
        calcStyle = {
          boxShadow: "6px -6px 16px -5px rgba(0,0,0,0.8)",
          paddingTop: 15
        }
      }
      else{
        calcStyle = {
          boxShadow: "6px -6px 16px -5px rgba(0,0,0,0.4)",
          paddingTop: 15
        }
      }
      if(this.state.hover4 == true){
        adBoxStyle = {
          boxShadow: "-6px -6px 16px -5px rgba(0,0,0,0.8)"
        }
      }
      else{
        adBoxStyle = {
          boxShadow: "-4px -10px 16px -10px rgba(0,0,0,0.4)"
        }
      }
    }

    let welcomeString =
      "What most people don't know is that up to half of their fees each month are to pay sales commissions and other expenses that do not add value to your processing experiences.";



    return (
      <div style={mainStyle}>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{
          marginTop: 5,
          marginBottom: 20,
        }}>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-10 col-lg-offset-1">
            <div style={{margin: "0 auto", width: 1250}}>
              <h1 style={headerLabel}>
                Compare your rates to ours and see how much you can save!
              </h1>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={ratesBoxStyle}>
          <div className="row" style={{marginBottom: 100}}>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-10 col-lg-offset-1">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={descriptionBoxStyle}  onMouseEnter={this.toggleHover2.bind(this)} onMouseLeave={this.toggleHover2.bind(this)}>
                  <div>
                    <h1 style={{fontFamily: "Abel", fontSize: 18, fontWeight: "bold", textAlign: "center"}}>Welcome Letter</h1>
                    <br />
                    <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10 col-md-offset-1 col-lg-offset-1" style={{fontFamily: "Song Myung"}}>
                      <p style={{fontSize: 16}}>
                        Hi and welcome to Feeaudit.com a highly intuitive credit card processing rate calculator, my name is Chris Kittler and I am 35-year veteran of the card payment industry.
                      </p>
                      <p style={{fontSize: 16}}>
                        While looking into mortgage costs I noticed that there are over 4.7 million loan calculators on the internet… and not one was
                        a credit card processing rate calculator able to help me figure out what I am actually paying to take a credit-card payments…
                        like the cost of a loan.  So, we decided to put one together that kept it simple.
                      </p>
                      <p style={{fontSize: 16}}>
                        We took the four main issues that make up your rate; the type of business, the amount of volume, the average sale and the total
                        fees you are charged.  Then we compare it to the best pricing we can offer through our service to give you a clear price comparison.
                        Furthermore, without a sales-person we would pass those savings along to you.
                      </p>
                      <p style={{fontSize: 16}}>
                        {welcomeString}
                      </p>
                      <p style={{fontSize: 16}}>
                        By using FeeAudit you should see significant savings, but please take note, there are those that already have great rates will not see any change. Let’s make it clear, the point
                        to FeeAudit is to give you, the user an easy to use tool to compare what you are paying to what you could be paying.
                      </p>
                      <p style={{fontSize: 16}}>
                        In regard to promises, prior to any final calculations you will need to provide your processing statements that were used to complete the
                        calculation. We want to assure that you put in the right data so you are guaranteed to get the rate that calculated.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-8" style={calcStyle} onMouseEnter={this.toggleHover3.bind(this)} onMouseLeave={this.toggleHover3.bind(this)}>
                  <h1 style={{fontFamily: "Abel", fontSize: 32, fontWeight: "bold", textAlign: "center", marginBottom: 15}}>Rate Calculator</h1>

                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-4" style={adBoxStyle} onMouseEnter={this.toggleHover4.bind(this)} onMouseLeave={this.toggleHover4.bind(this)}>
                  <h1 style={{fontFamily: "Abel", fontSize: 18, fontWeight: "bold", textAlign: "center"}}>Recommended</h1>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
