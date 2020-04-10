import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Home } from "./Home/Home";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.appRef = React.createRef();
  }

  componentDidMount() {

  }

  render() {
    return (
      <div ref={this.appRef}>
        <Router>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/home" />} />

            <Route path="/home">
              <Home />
            </Route>

            <Route path="/console">
              <div>Console</div>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
