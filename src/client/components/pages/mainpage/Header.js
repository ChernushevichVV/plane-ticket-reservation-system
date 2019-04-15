import React, { Component } from "react";
import LinkContainer from "../../misc/LinkContainer";
class Header extends Component {
  render() {
    const { logInClick } = this.props;

    return (
      <div className="header">
        <div className="header__text">
          <LinkContainer link="/" label="FlyInTheSky" />
        </div>
        <div className="sign-buttons-block">
          <button className="button sign-buttons-block__button">Sign up</button>

          <button
            className="button sign-buttons-block__button"
            onClick={logInClick}
          >
            Log in
          </button>
        </div>
      </div>
    );
  }
}

export default Header;
