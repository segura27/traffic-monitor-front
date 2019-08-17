import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Devices from "./components/devices.jsx";
import DeviceRegistration from "./components/devices_register";
import Gates from "./components/gates";
import TrafficData from "./components/traffic_data.jsx";
import BadRequest from "./components/bad_request.jsx";
import "bootstrap/dist/css/bootstrap.css";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* Routes */}
          <Route path="/devices" exact component={Devices} />
          <Route
            path="/devices/register"
            exact
            component={DeviceRegistration}
          />
          <Route path="/traffic_data" exact component={TrafficData} />
          <Route path="/gates" exact component={Gates} />
          <Route component={BadRequest} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
