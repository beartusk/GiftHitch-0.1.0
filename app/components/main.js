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
  Well
} from 'react-bootstrap'

var buttonStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)"
}

export default class Begin extends React.Component {

  constructor(props, context){
    super(props, context);

    this.state = {
      introButtonPressed: false
    }
  }
  intro () {
    return(
      <Grid>
        <Row>
          <Col sm={12} md={6} offset={{ md:3 }}>
            <Panel bsStyle="primary" style={{height: 500}}>
              <Panel.Heading>
                  <Panel.Title componentClass="h3">New Beginnings</Panel.Title>
              </Panel.Heading>
              <Panel.Body style={{backgroundColor: "black"}}>This will be a website that displays the working portfolio of Kenneth Beartusk. Stay Tuned ;)</Panel.Body>
            </Panel>
          </Col>
        </Row>
      </Grid>
    )
  }

  introButtonPressed(){
    this.setState({introButtonPressed: true});
  }

  introButton(){
    return(
      <Button bsStyle="primary" bsSize="large" block onClick={this.introButtonPressed.bind(this)} style={buttonStyle}>
        What is GiftHitch?
      </Button>
    )
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
      <div style={{height: "100%"}}>
        <div style={{paddingTop: "100px", backgroundSize: "cover", backgroundImage: `url("/assets/img/gifthitch.jpg")`}}>
          {content}
        </div>
        <div style={{height: "200px", backgroundColor: "black"}}>
        </div>
      </div>
    )
  }
}
