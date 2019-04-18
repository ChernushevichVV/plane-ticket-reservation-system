import React, { Component } from "react";
import Header from "../pages/mainpage/Header";
import Section from "../pages/mainpage/Section";
import Footer from "../pages/mainpage/Footer";
import { Route, Switch } from "react-router-dom";
import User from "../pages/accounts/User";

export class MainPage extends Component {
  state = {
    showLogin: false,
    showSignUp: false
  };

  handleLogInClick = () => {
    this.setState(state => ({
      showLogin: !state.showLogin
    }));
  };

  handleSignUpClick = () => {
    this.setState(state => ({
      showSignUp: !state.showSignUp
    }));
  };

  render() {
    const { showLogin, showSignUp } = this.state;

    return (
      <div className="mainpage">
        <Header
          logInClick={this.handleLogInClick}
          signUpClick={this.handleSignUpClick}
        />
        <Switch>
          <Route path="/user" component={User} />
          <Route
            path="/"
            render={() => (
              <Section
                showLogin={showLogin}
                showSignUp={showSignUp}
                closeLogin={this.handleLogInClick}
                closeSignUp={this.handleSignUpClick}
              />
            )}
          />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default MainPage;
