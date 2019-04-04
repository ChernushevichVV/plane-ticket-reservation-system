import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <ul className="footer__list">
          <li className="footer__list-item">
            <a href="#">Contacts</a>
          </li>
          <li className="footer__list-item">
            <a href="#">About</a>
          </li>
          <li className="footer__list-item">
            <a href="#">Help</a>
          </li>
          <li className="footer__list-item">
            <a href="#">Privacy policy</a>
          </li>
          <li className="footer__list-item">
            <a href="#">Terms of service</a>
          </li>
        </ul>
        <p className="footer__text">
          ©2019-2019 FlyInTheSky. All rights reserved.
        </p>
      </div>
    );
  }
}

export default Footer;
