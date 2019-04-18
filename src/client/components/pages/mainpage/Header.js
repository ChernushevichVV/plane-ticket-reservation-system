import React, { Component } from "react";
import LinkContainer from "../../misc/LinkContainer";
import PropTypes from "prop-types";

class Header extends Component {
  render() {
    const { logInClick, signUpClick } = this.props;

    return (
      <div className="header">
        <div className="header__text">
          <LinkContainer link="/" label="FlyInTheSky" />
        </div>
        <div className="sign-buttons-block">
          <button
            className="button sign-buttons-block__button"
            onClick={signUpClick}
          >
            Sign up
          </button>

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

Header.propTypes = {
  logInClick: PropTypes.func.isRequired,
  signUpClick: PropTypes.func.isRequired
};

export default Header;
