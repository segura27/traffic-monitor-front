import React, { Component } from "react";
import axios from "axios";

class test extends Component {
  state = {
    interviews: [
      {
        id: 1,
        candidate_name: "Dan",
        candidate_last_name: "ddd",
        creation_date: "2017-01-01"
      }
    ]
  };

  componentDidMount() {
    axios.get("http://localhost:3000/devices").then(res => {
      console.log(res.body);
    });
  }

  render() {
    return <div>Hiii</div>;
  }
}

export default test;
