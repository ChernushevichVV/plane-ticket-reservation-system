import React, { Component } from "react";
import classNames from "classnames";
import CloseButton from "../../misc/CloseButton";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default class SignWindow extends Component {
  render() {
    const { show, onClick, title, buttonLabel, nickPlaceholder } = this.props;

    const style = classNames({
      "display-none": !show,
      modal: show
    });

    return (
      <div className={style}>
        <form className="modal-content animation">
          <CloseButton onClick={onClick} />
          <div className="inputs">
            <b>{title}</b>
            <br />
            <br />
            <input
              className="modal-content__input"
              type="text"
              placeholder={nickPlaceholder}
              name="uname"
              autoComplete="off"
              required
            />

            <input
              className="modal-content__input"
              type="password"
              placeholder="Password"
              //pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
              name="psw"
              required
            />
            <button
              onClick={onClick}
              className="button modal-content__button"
              type="submit"
            >
              <Link to="/user" className="button-link modal-content__link">
                {buttonLabel}
              </Link>
            </button>
            <label>
              <input type="checkbox" name="remember" /> Remember me
            </label>
          </div>
        </form>
      </div>
    );
  }
}

SignWindow.propTypes = {
  show: PropTypes.bool,
  onClick: PropTypes.func
};
