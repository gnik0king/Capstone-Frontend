import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Itemcard from './Itemcard';
import axios from 'axios';
import AllData from './Data';

class Itemgrid extends Component {
  _isMounted = false;

  constructor() {
    super();
    this.state = { data: [], list: [] };
  }

  createItemCard = () => {
    var _list = AllData.item().map((val) => {
      return <Col key={val.itid}><Itemcard data={val} key={val.itid} /></Col>
    })
    this.setState({list:_list,data:AllData.item()});
  }

  componentDidMount() {
    this._isMounted = true;
    AllData.addhook(this.createItemCard);
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (<Container>
      <Row style={{ gap: "1em" }} justify-content="space-evenly">
        {this.state.list}
      </Row>
    </Container>)
  };
}


export default Itemgrid;