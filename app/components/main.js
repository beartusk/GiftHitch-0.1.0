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
import {Footer} from 'react-materialize'

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
            <Panel bsStyle="primary" style={{height: 500, backgroundColor: "black", borderColor: "white", fontColor: "white"}}>
              <Panel.Heading style={{backgroundColor: "black", borderColor: "white", fontColor: "white"}}>
                  <Panel.Title componentClass="h3">Gift Hitch Biatch!!!!</Panel.Title>
              </Panel.Heading>
              <Panel.Body style={{backgroundColor: "black", borderColor: "white", fontColor: "white"}}>
                <h3 style={{ fontColor: "white"}}>This will be the website that displays Anything and everything GiftHitch!!!</h3>
                <h3 style={{ fontColor: "white"}}>We can put whatever the fuck you want here bro. And, this is mostly HTML with some modern Javascript Framework stuff. It is called React JS and it is what Facebook and a bunch of other sites use.</h3>
                <h3 style={{ fontColor: "white"}}>With your html background you could catch on to this pretty quickly</h3>
              </Panel.Body>
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
            <Button bsStyle="primary" bsSize="large" block onClick={this.introButtonPressed.bind(this)} style={{backgroundColor: "black", borderColor: "white", fontColor: "white"}}>
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
        <div style={{paddingTop: "100px", height: 1000, backgroundSize: "cover", backgroundImage: `url("/assets/img/gifthitch.jpg")`}}>
          {content}
        </div>
        <Footer copyrights="copy 2015 Copyright Text"
          moreLinks={
            <a className="white-text text-lighten-4 right" href="#!">More Links</a>
          }
          links={
            <ul>
              <li><a className="white-text text-lighten-3" href="#!">Facebook Link</a></li>
              <li><a className="white-text text-lighten-3" href="#!">Twitter Link</a></li>
              <li><a className="white-text text-lighten-3" href="#!">Youtube Link</a></li>
              <li><a className="white-text text-lighten-3" href="#!">Link 4</a></li>
            </ul>
          }
          style={{
            backgroundColor: "black"
          }}
        >
            <h5 className="white-text">Footer Content</h5>
            <p className="white-text">GiftHitch blahblahblah.</p>
        </Footer>
      </div>
    )
  }
}
