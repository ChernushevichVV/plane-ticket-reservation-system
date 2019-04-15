import React, { Component } from "react";
import Header from "../pages/mainpage/Header";
import Section from "../pages/mainpage/Section";
import Footer from "../pages/mainpage/Footer";
import { Route, Switch } from "react-router-dom";
import User from "../pages/accounts/User";
import SignWindow from "../pages/mainpage/SignWindow";
export class MainPage extends Component {
  state = {
    showLogin: false
  };

  handleClick = () => {
    this.setState(state => ({
      showLogin: !state.showLogin
    }));
  };

  render() {
    return (
      <div className="mainpage">
        <Header logInClick={this.handleClick} />
        <Switch>
          <Route path="/user" component={User} />
          <Route path="/" component={Section} />
        </Switch>
        <SignWindow
          show={this.state.showLogin}
          onClick={this.handleClick}
          title="Log into your account"
          buttonLabel="Log in"
          nickPlaceholder="Email or username"
        />
        <Footer />
      </div>
    );
  }
}

export default MainPage;
