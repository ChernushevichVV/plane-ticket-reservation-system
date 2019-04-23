import React, { Component } from "react";
import classNames from "classnames";
import CloseButton from "../../misc/CloseButton";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../../action/authentication";
import { resetErrors } from "../../../action/index";
import { withRouter } from "react-router-dom";
import classnames from "classnames";

class LogIn extends Component {
  state = {
    name: "",
    password: "",
    errors: {}
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    if (this.state.errors) {
      this.props.resetErrors();
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    const user = {
      name: this.state.name,
      password: this.state.password
    };
    this.props.loginUser(user, this.props.history);
  };

  handleClose = () => {
    this.setState({
      name: "",
      password: ""
    });
    this.props.onClick();
    this.props.resetErrors();
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
    const { name, password, errors } = this.state;

    const style = classNames({
      "display-none": !show,
      modal: show
    });

    return (
      <div className={style}>
        <form className="modal-content animation" noValidate>
          <CloseButton onClick={this.handleClose} />
          <div className="inputs">
            <b>Log into your account </b>
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
              onChange={this.handleInputChange}
              required
            />
            {errors.name && (
              <div className="modal-content__error">{errors.name}</div>
            )}
            <input
              className={classnames("modal-content__input", {
                "input--invalid": errors.password
              })}
              type="password"
              value={password}
              placeholder="Password"
              //pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
              name="password"
              onChange={this.handleInputChange}
              required
            />
            {errors.password && (
              <div className="modal-content__error">{errors.password}</div>
            )}
            <button
              onClick={this.handleSubmit}
              className="button modal-content__button"
              type="submit"
            >
              Log in
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

LogIn.propTypes = {
  show: PropTypes.bool,
  onClick: PropTypes.func,
  loginUser: PropTypes.func.isRequired,
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
  { loginUser, resetErrors }
)(withRouter(LogIn));
