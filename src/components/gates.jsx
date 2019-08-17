import React, { Component } from "react";

import { Card, ListGroup } from "react-bootstrap";
import axios from "axios";

class Gates extends Component {
  state = {
    gates: []
  };

  componentDidMount() {
    axios.get("http://localhost:3001/gates/").then(res => {
      console.log("****OUTPUT****", res);
      this.setState({ gates: res.data });
    });
  }
  render() {
    return (
      <div>
        <h1>Gate Registry</h1>
        <p>These are the registered gates.</p>
        <hr />
        {this.state.gates.map(gate => (
          <div>
            <Card
              style={{ textAlign: "center", margin: "auto", width: "18vw" }}
            >
              <Card.Header>{gate.gate_type}</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>Gate ID: {gate.gate_id}.</ListGroup.Item>
                <ListGroup.Item>
                  Description: {gate.gate_description_misc}.
                </ListGroup.Item>
              </ListGroup>
            </Card>
            <br />
          </div>
        ))}
      </div>
    );
  }
}
export default Gates;
