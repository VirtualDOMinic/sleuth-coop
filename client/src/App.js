import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import LandingPage from "./components/LandingPage";
import Info from "./components/Info";
import SignUp from "./components/SignUp";
import Profile from "./components/Profile";
import Add from "./components/Add";
import Discovery from "./components/Discovery";
import LogIn from "./components/LogIn";

class App extends Component {
  state = {
    response: "",
    isAuthenticated: true,
    loaded: true,
    authId: null
  };

  componentDidMount() {
    this.authenticate();
    fetch("/auth")
      .then(res => {
        if (res.ok) {
          console.log("profileId", res);
        } else {
          console.log("Not authenticated, setting state.");
          if (this.state.isAuthenticated)
            this.setState({ isAuthenticated: false });
        }
      })
      .catch(e => {
        console.log(e);
      });
  }

  authenticate() {
    fetch("/auth")
      .then(res => {
        this.setState({ loaded: true, isAuthenticated: true });
      })
      .catch(e => console.log(e));
  }

  render() {
    const { loaded, isAuthenticated } = this.state;
    if (!loaded) return null;
    return (
      <Router>
        <React.Fragment>
          <Route exact={true} path="/" component={LandingPage} />
          <Route exact={true} path="/info" component={Info} />
          <Route exact={true} path="/sign-up" component={SignUp} />
          <Route
            exact={true}
            path="/profile/:id"
            render={props => <Profile {...props} SME={false} />}
          />
          <Route
            exact={true}
            path="/profile/:id/sme"
            render={props => {
              return isAuthenticated ? (
                <Profile {...props} SME={true} />
              ) : (
                <Redirect
                  to={{ pathname: "/login", state: { from: props.location } }}
                />
              );
            }}
          />
          <Route
            exact={true}
            path="/profile/:id/add"
            render={props => <Add {...props} />}
          />
          <Route exact={true} path="/find" component={Discovery} />
          <Route exact={true} path="/login" component={LogIn} />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
