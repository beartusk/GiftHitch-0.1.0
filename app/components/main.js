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
          <Col sm={10} md={6} mdOffset={3} smOffset={1}>
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
      <Grid>
        <Row>
          <Col sm={10} md={2} smOffset={1} mdOffset={5}>
            <Button bsStyle="primary" bsSize="large" block onClick={this.introButtonPressed.bind(this)} style={buttonStyle}>
              What is GiftHitch?
            </Button>
          </Col>
        </Row>
      </Grid>
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
      <div>
        <div style={{padding: "100px 100px", height: 1000, backgroundSize: "cover", backgroundImage: `url("/assets/img/gifthitch.jpg")`}}>
          {content}
          <div style={{height: "50px", backgroundColor: "black", bottom: 0, align: "center"}}>
          </div>
        </div>
      </div>
    )
  }
}
