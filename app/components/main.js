import React from 'react'
import {Panel, Col} from 'react-bootstrap'

function intro () {
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

function Begin () {
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
}
export default Begin
/*
  <Panel bsStyle="primary" style={{height: 500}}>
    <Panel.Heading>
        <Panel.Title componentClass="h3">New Beginnings</Panel.Title>
    </Panel.Heading>
    <Panel.Body style={{backgroundColor: "black"}}>This will be a website that displays the working portfolio of Kenneth Beartusk. Stay Tuned ;)</Panel.Body>
  </Panel>*/
