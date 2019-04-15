import React, { Component } from "react";
import classNames from "classnames";
import CloseButton from "../../misc/CloseButton";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../../action/authentication";
import { withRouter } from "react-router-dom";

class SignWindow extends Component {
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
    console.log(this.props.history.location);
  };

  componentDidMount() {
    console.log("did mount");

    console.log(this.props.auth);
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/user");
    }
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
    const { show, onClick, title, buttonLabel, nickPlaceholder } = this.props;
    // const { isAuthenticated, user } = this.props.auth;

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
              name="name"
              // autoComplete="off"
              onChange={this.handleInputChange}
              required
            />

            <input
              className="modal-content__input"
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
              {buttonLabel}
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
  onClick: PropTypes.func,
  loginUser: PropTypes.func.isRequired,
  // logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { loginUser }
)(withRouter(SignWindow));
//export default SignWindow;
