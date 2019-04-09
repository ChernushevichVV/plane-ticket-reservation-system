import React, { Component } from "react";
import SignWindow from "./SignWindow";
import LinkContainer from "../../misc/LinkContainer";
class Header extends Component {
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
      <div className="header">
        <div className="header__text">
          <LinkContainer link="/" label="FlyInTheSky" />
        </div>
        <div className="sign-buttons-block">
          <button
            className="button sign-buttons-block__button"
            onClick={this.handleClick}
          >
            Sign up
          </button>

          <button
            className="button sign-buttons-block__button"
            onClick={this.handleClick}
          >
            Log in
          </button>
        </div>
        <SignWindow
          show={this.state.showLogin}
          onClick={this.handleClick}
          title="Log into your account"
          buttonLabel="Log in"
          nickPlaceholder="Email or username"
        />
      </div>
    );
  }
}

export default Header;
