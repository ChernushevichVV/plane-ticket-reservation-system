import React, { Component } from "react";
import Header from "../pages/mainpage/Header";
import Section from "../pages/mainpage/Section";
import Footer from "../pages/mainpage/Footer";
import { Route, Switch } from "react-router-dom";
import User from "../pages/accounts/User";

export class MainPage extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Switch>
          <Route path="/user" component={User} />
          <Route path="/" component={Section} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default MainPage;
