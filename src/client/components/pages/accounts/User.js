import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import OrderContainer from "./OrderContainer";
import LinkContainer from "../../misc/LinkContainer";

export default class User extends Component {
  render() {
    return (
      <div className="user">
        <div className="user__navbar">
          <ul className="user__navbar-list">
            <li className="user__navbar-list-item">
              <LinkContainer link="/user/profile" label="Profile" />
            </li>
            <li className="user__navbar-list-item">
              <LinkContainer link="/user/orders" label="Orders" />
            </li>
            <li className="user__navbar-list-item">
              <LinkContainer link="/user/payments" label="Payments" />
            </li>
          </ul>
        </div>
        <div className="user__content">
          <Switch>
            <Route path="/user/orders" component={OrderContainer} />
          </Switch>
        </div>
      </div>
    );
  }
}

/*
button link
width 100
height 100
*/
