import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="sign-block border">
          <div className="sign-block__button ">
            <button>Sign up</button>
          </div>
          <div className="sign-block__button ">
            <button>Log in</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
