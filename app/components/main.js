import React from 'react'
import {Panel, Col} from 'react-bootstrap'
function Begin () {
  return (
    <div style={{paddingTop: "100px", backgroundSize: "cover", backgroundImage: `url("/assets/img/gifthitch.jpg")`}}>
      <div className="row">
        <Col sm={12} md={6} offset={{md:3}}>
          <Panel bsStyle="primary" style={{height: 500}}>
          	<Panel.Heading>
            	  <Panel.Title componentClass="h3">New Beginnings</Panel.Title>
          	</Panel.Heading>
           	<Panel.Body style={{backgroundColor: "black"}}>This will be a website that displays the working portfolio of Kenneth Beartusk. Stay Tuned ;)</Panel.Body>
          </Panel>
        </Col>
      </div>
    </div>
  )
}
export default Begin
/*
  <Panel bsStyle="primary" style={{height: 500}}>
    <Panel.Heading>
        <Panel.Title componentClass="h3">New Beginnings</Panel.Title>
    </Panel.Heading>
    <Panel.Body style={{backgroundColor: "black"}}>This will be a website that displays the working portfolio of Kenneth Beartusk. Stay Tuned ;)</Panel.Body>
  </Panel>*/
