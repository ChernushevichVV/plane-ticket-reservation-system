import React, { Component } from "react";
import classNames from "classnames";
import CloseButton from "../../misc/CloseButton";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../../action/authentication";
import { resetErrors } from "../../../action/index";
import { withRouter } from "react-router-dom";
import classnames from "classnames";

class SignUp extends Component {
  state = {
    name: "",
    password: "",
    password_confirm: "",
    errors: {}
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
      errors: {}
    });
    if (this.state.errors) {
      this.props.resetErrors();
    }
  };

  handleClose = () => {
    this.setState({
      name: "",
      password: "",
      password_confirm: ""
    });
    this.props.onClick();
    this.props.resetErrors();
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.password !== this.state.password_confirm) {
      //temporary decision
      alert("passwords is not equal!");
      return;
    }
    const user = {
      name: this.state.name,
      password: this.state.password,
      password_confirm: this.state.password_confirm
    };
    this.props.registerUser(user);
  };

  static getDerivedStateFromProps(props) {
    return {
      errors: props.errors
    };
  }

  componentWillUnmount() {
    if (this.props.show) {
      this.props.onClick(); //in order to close the modal
    }
  }

  render() {
    const { show } = this.props;
    const { name, password, password_confirm, errors } = this.state;

    const style = classNames({
      "display-none": !show,
      modal: show
    });

    return (
      <div className={style}>
        <form className="modal-content animation">
          <CloseButton onClick={this.handleClose} />
          <div className="inputs">
            <b>Create your account</b>
            <br />
            <br />
            <input
              className={classnames("modal-content__input", {
                "input--invalid": errors.name
              })}
              type="text"
              placeholder="Email or username"
              name="name"
              value={name}
              autoComplete="off"
              onChange={this.handleInputChange}
              required
              minLength="4"
            />
            {errors.name && (
              <div className="modal-content__error">{errors.name}</div>
            )}
            <input
              value={password}
              className="modal-content__input"
              type="password"
              placeholder="Password"
              //pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
              name="password"
              onChange={this.handleInputChange}
              required
            />
            <input
              value={password_confirm}
              className="modal-content__input"
              type="password"
              placeholder="Repear password"
              //pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
              name="password_confirm"
              onChange={this.handleInputChange}
              required
            />
            <button
              onClick={this.handleSubmit}
              className="button modal-content__button"
              type="submit"
            >
              Sign up
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

SignUp.propTypes = {
  show: PropTypes.bool,
  onClick: PropTypes.func,
  registerUser: PropTypes.func.isRequired,
  resetErrors: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  history: PropTypes.object
};

const mapStateToProps = state => {
  return {
    auth: state.auth,
    errors: state.errors
  };
};

export default connect(
  mapStateToProps,
  { registerUser, resetErrors }
)(withRouter(SignUp));
