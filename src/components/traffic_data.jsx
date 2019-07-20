import React, { Component } from 'react';

import { Card, ListGroup } from 'react-bootstrap';
import axios from 'axios'

class Devices extends Component {
    state = {
        devices: [],
        people: []
    }

    componentDidMount() {
        axios.get('http://localhost:3001/devices/').then(res => {
            console.log("****OUTPUT****", res)
            this.setState({ devices: res.data })
        })
    }
    render() {
        return <div>
            <h1>Traffic Data Page</h1>
            <p>Below you can see a list of all registered devices on our service.</p>
            <hr></hr>
            {this.state.devices.map(device =>
                <div>
                    <Card style={{ textAlign: "center", margin: "auto", width: "18vw" }}>
                        <Card.Header>{device.device_name_type}</Card.Header>
                        <ListGroup variant="flush">

                            <ListGroup.Item>Device ID: {device.device_id}.</ListGroup.Item>
                            <ListGroup.Item>Device owner: {device.device_owner}.</ListGroup.Item>
                            <ListGroup.Item>Owner's Email: {device.device_owner_email ? device.device_owner_email : "N/A"}.</ListGroup.Item>
                        </ListGroup>
                    </Card>
                    <br></br>
                </div>
            )}
        </div>
    }
}
export default Devices;