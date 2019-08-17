import React, { Component } from "react";

import { Card, ListGroup } from "react-bootstrap";
import axios from "axios";

class Devices extends Component {
  state = {
    devices: [],
    people: []
  };

  componentDidMount() {
    axios.get("http://traffic-back-end.herokuapp.com/traffic/").then(res => {
      console.log("****OUTPUT****", res);
      this.setState({ devices: res.data });
    });
  }
  render() {
    return (
      <div>
        <h1>Traffic Data Page</h1>
        <p>
          Below you can see a list of all registered devices on our service.
        </p>
        <hr />
        {this.state.devices.map(device => (
          <div>
            <Card
              style={{ textAlign: "center", margin: "auto", width: "18vw" }}
            >
              <Card.Header>{device.device_name_type}</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>Device ID: {device.device_id}.</ListGroup.Item>
                <ListGroup.Item>
                  Device Name: {device.device_name}.
                </ListGroup.Item>
                <ListGroup.Item>Reading: {device.reading}.</ListGroup.Item>
                <ListGroup.Item>Time: {device.timestamp}.</ListGroup.Item>
              </ListGroup>
            </Card>
            <br />
          </div>
        ))}
      </div>
    );
  }
}
export default Devices;
