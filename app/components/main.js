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
  Container
} from 'react-bootstrap'

export default class Begin extends React.Component {

  constructor(props, context){
    super(props, context);

    this.state = {
      button: false
    }
  }

  intro () {
    return(
      <Col sm={12} md={6} offset={{ md:3 }}>
        <Panel bsStyle="primary" style={{height: 500}}>
          <Panel.Heading>
              <Panel.Title componentClass="h3">New Beginnings</Panel.Title>
          </Panel.Heading>
          <Panel.Body style={{backgroundColor: "black"}}>This will be a website that displays the working portfolio of Kenneth Beartusk. Stay Tuned ;)</Panel.Body>
        </Panel>
      </Col>
    )
  }

  return (
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
      <br />
      <br />
      <br />
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xs-offset-3 col-sm-offset-3 col-md-offset-3 col-lg-offset-3">
        <Panel style={{marginTop: "100", paddingTop: "100"}}>
          <Panel.Heading>
            <Panel.Title componentClass="h3">Free Payment Processing Fee Audit</Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            <form className="smart-form">
              <fieldset>
                <div className="row">
                  <section className="col col-12">
                    <div>
                      <label className="label">Business Type</label>
                      <label className="radio"><input type='radio' name="Business Type" id="RR"/><i/>Retail or Restaurant</label>
                      <label className="radio"><input type='radio' name="Business Type" id="NP"/><i/>Non-Profit</label>
                      <label className="radio"><input type='radio' name="Business Type" id="PMO"/><i/>Phone / Mail Orders</label>
                      <label className="radio"><input type='radio' name="Business Type" id="eCom"/><i/>eCommerce</label>
                    </div>
                  </section>
                </div>
                <div className="row">
                  <section className='col col-4'>
                    <label className="label">Monthly Credit Card Sales</label>
                    <label className="input">
                      <input ref="CCSales" type="number" min="0.01" step="0.01" id="CCSales"/>
                    </label>
                  </section>
                </div>
                <div className="row">
                  <section className='col col-4'>
                    <label className="label">Average Ticket</label>
                    <label className="input">
                      <input ref="AT" type="number" min="0.01" step="0.01" id="AT"/>
                    </label>
                  </section>
                  <section className='col col-4'>
                    <label className="label">Monthly Transaction Count</label>
                    <label className="input">
                      <input ref="MTC" type="text" id="MTC"/>
                    </label>
                  </section>
                </div>
                <div className="row">
                  <section className='col col-4'>
                    <label className="label">Current Processing Fees</label>
                    <label className="input">
                      <input ref="CPF" type="number" min="0.01" step="0.01" id="CPF"/>
                    </label>
                  </section>
                </div>
                <br/>
                <div className="row">
                  <section className="col col-3">
                    <Button bsStyle="primary" bsSize="large" block>
                      Calculate Rates
                    </Button>
                  </section>
                </div>
                <br/>
              </fieldset>
            </form>
          </Panel.Body>
        </Panel>
      </div>;
    </div>
  )
}
}
/*
  <Panel bsStyle="primary" style={{height: 500}}>
    <Panel.Heading>
        <Panel.Title componentClass="h3">New Beginnings</Panel.Title>
    </Panel.Heading>
    <Panel.Body style={{backgroundColor: "black"}}>This will be a website that displays the working portfolio of Kenneth Beartusk. Stay Tuned ;)</Panel.Body>
  </Panel>*/

  /*
  render () {
    return (
      <div>
        <div style={{paddingTop: "100px", backgroundSize: "cover", backgroundImage: `url("/assets/img/gifthitch.jpg")`}}>
          <div className="row">
            <Container>
              <Col sm={12} md={6} offset={{md:3}}>
                <Panel bsStyle="primary" style={{height: 500}}>
                  <Panel.Heading>
                      <Panel.Title componentClass="h3">New Beginnings</Panel.Title>
                  </Panel.Heading>
                  <Panel.Body style={{backgroundColor: "black"}}>This will be a website that displays the working portfolio of Kenneth Beartusk. Stay Tuned ;)</Panel.Body>
                </Panel>
              </Col>
            </Container>
          </div>
        </div>
        <div style={{height: "200px", backgroundColor: "black"}}>
        </div>
      </div>
    )
  }*/
