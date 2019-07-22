import React, { Component } from 'react';

import { Card, FormControl, InputGroup } from 'react-bootstrap';
import axios from 'axios'

class Devices extends Component {
    state = {
        devices: [],
    }

    componentDidMount() {
        axios.get('http://localhost:3001/devices/').then(res => {
            console.log("****OUTPUT****", res)
            this.setState({ devices: res.data })
        })
    }
    render() {
        return <div>
            <h1>Device Registration</h1>
            <p>Register a device.</p>
            <hr></hr>
            <div>
                <Card style={{ textAlign: "center", margin: "auto", width: "25vw" }}>
                    <Card.Header>Your Device</Card.Header>
                    <InputGroup className="m-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">Device Type</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl className="mr-4" placeholder="Arduino Uno Rev3" aria-label="Device Type" aria-describedby="basic-addon1" />
                    </InputGroup>
                </Card>
                <br></br>
            </div>
        </div>
    }
}
export default Devices;