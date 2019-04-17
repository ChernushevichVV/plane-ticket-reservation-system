import React, { Component } from "react";
import classNames from "classnames";
import CloseButton from "../../misc/CloseButton";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../../action/authentication";
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
  };

  handleSubmit = e => {
    e.preventDefault();
    const user = {
      name: this.state.name,
      password: this.state.password
    };
    this.props.loginUser(user, this.props.history);
  };

  static getDerivedStateFromProps(props) {
    // console.log("gDSFP");
    // console.log(props);
    // console.log(state);
    return {
      errors: props.errors
    };
  }

  // shouldComponentUpdate() {
  //   console.log("should");
  //   return true;
  // }

  componentWillUnmount() {
    //maybe should close it on logout?
    this.props.onClick(); //in order to close the modal
    console.log("unmount");
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.auth.isAuthenticated) {
  //     console.log("props");
  //     this.props.history.push("/user");
  //     this.props.onClick();
  //   }
  //   // if (nextProps.errors) {
  //   //   this.setState({
  //   //     errors: nextProps.errors
  //   //   });
  //   //}
  // }

  render() {
    // console.log("render");

    const { show, onClick } = this.props;
    // const { isAuthenticated, user } = this.props.auth;
    const { errors } = this.state;
    // console.log(errors);

    const style = classNames({
      "display-none": !show,
      modal: show
    });

    return (
      <div className={style}>
        <form className="modal-content animation">
          <CloseButton onClick={onClick} />
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
              // autoComplete="off"
              onChange={this.handleInputChange}
              required
            />

            <input
              className={classnames("modal-content__input", {
                "input--invalid": errors.password
              })}
              type="password"
              placeholder="Password"
              //pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
              name="password"
              onChange={this.handleInputChange}
              required
            />
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
  // logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
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
  { loginUser }
)(withRouter(LogIn));
//export default LogIn;
