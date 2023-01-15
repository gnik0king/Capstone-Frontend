import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Itemcard from './Itemcard';
import axios from 'axios';

class Itemgrid extends Component {

  constructor() {
    super();
    this.state = { data: [], list: [] };
  }

  getdata() {
    axios.get('/getdata').then(res => {
      if (this.state.data.length !== res.data[0].length) {
        this.setState({ data: res.data[0] }, () => {
          console.log(this.state);
          var x=this.state.data.map((val) => {
              return <Col><Itemcard data={val} key={"item"+val.itid} /></Col>
            })
          this.setState({
            list: (x)
          }, () => {
            console.log(this.state);
          })
        })
      }
    })
  }

  render() {
    this.getdata();
    return (<Container>
      <Row style={{gap:"1em"}} justify-content="space-evenly">
        {this.state.list}
      </Row>
    </Container>)
  };
}


export default Itemgrid;