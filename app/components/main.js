import React from 'react'
import {Panel, Col} from 'react-bootstrap'
function Begin () {
  return (
    <div style={{padding: "50px 50px 50px 50px"}>
      <div style={{height: 50, backgroundColor: "#FFFFFF"}><i}>;ljfg;ladf;ldkjas;flkj</i></div>
      <div className="row" style={{backgroundColor: "black"}}>
        <Col sm={12} md={6}>
          <Panel bsStyle="primary" style={{height: 500}}>
        	<Panel.Heading>
          	  <Panel.Title componentClass="h3">New Beginnings</Panel.Title>
        	</Panel.Heading>
           	<Panel.Body style={{backgroundColor: "black"}}>This will be a website that displays the working portfolio of Kenneth Beartusk. Stay Tuned ;)</Panel.Body>
          </Panel>
        </Col>
        <Col sm={12} md={6}>
          <Panel bsStyle="info" style={{height: 500}}>
            <Panel.Heading>
              <Panel.Title componentClass="h3">Future Content</Panel.Title>
            </Panel.Heading>
            <Panel.Body>Theres going to be some serious kick ass content here..... soon!!!</Panel.Body>
          </Panel>
        </Col>
      </div>
      <div className="row" style={{backgroundColor: "black"}}>
        <Col sm={12} md={6}>
          <Panel bsStyle="primary" style={{height: 500}}>
        	<Panel.Heading>
          	  <Panel.Title componentClass="h3">New Beginnings</Panel.Title>
        	</Panel.Heading>
           	<Panel.Body>This will be a website that displays the working portfolio of Kenneth Beartusk. Stay Tuned ;)</Panel.Body>
          </Panel>
        </Col>
        <Col sm={12} md={6}>
          <Panel bsStyle="info" style={{height: 500}}>
            <Panel.Heading>
              <Panel.Title componentClass="h3">Future Content</Panel.Title>
            </Panel.Heading>
            <Panel.Body>Theres going to be some serious kick ass content here..... soon!!!</Panel.Body>
          </Panel>
        </Col>
      </div>
    </div>
  )
}
export default Begin
