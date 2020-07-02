import React, { Component } from "react";
import { Link } from "react-router-dom";
import LoginService from "../services/LoginService";
import Message from "../elements/Message";
import Error from "../elements/Error";
import { Redirect } from "react-router";
import {
  COMMON_FIELDS,
  REGISTRATION_FIELDS,
  LOGIN_FIELDS,
  LOGIN_MESSAGE,
  ERROR_IN_LOGIN,
} from "../MessageBundle";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      error: false,
      loginSuccess: false,
    };
  }

  handleOnChangeUserName = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  handleOnChangePassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  onSubmit = async (e) => {
    const data = {
      email: this.state.email,
      password: this.state.password,
    };
    const loginResult = await LoginService(data);
    if (loginResult !== 200) {
      this.setState({
        error: true,
        loginSuccess: false,
      });
    } else
      this.setState({
        loginSuccess: true,
        error: false,
      });
    localStorage.setItem("login", "true");
  };

  renderDashboard = () => {
    if (this.state.loginSuccess) {
      return <Redirect to="/Dashboard" />;
    }
  };

  render() {
    const { loginSuccess, error } = this.state;

    return (
      <div class="">
        {this.renderDashboard()}
        <div class="card border-0">
          <div class="row d-flex">
            <div class="col-lg-4 py-5">
              <div class="card2 card border-0  px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto ">
                <div class="signup-v2-form-wrapper">
                  <div class="row mb-5 px-3 text-center">
                    <h1 class="my-4 mt-lg-0 text-dark signup-title m-auto">
                      Sign in to Hubstaff
                    </h1>
                  </div>
                  <div class="row px-3">
                    {" "}
                    <label class="mb-1">
                      <h6 class="mb-0 text-sm">Email Address</h6>
                    </label>
                    <input
                      type="text"
                      name="email"
                      onChange={this.handleOnChangeUserName}
                      autoComplete="email"
                      required
                    />
                  </div>
                  <div class="row px-3">
                    {" "}
                    <label class="mb-1">
                      <h6 class="mb-0 text-sm">Password</h6>
                    </label>
                    <input
                      type="password"
                      name="Password"
                      onChange={this.handleOnChangePassword}
                      autoComplete="Password"
                      required
                    />
                  </div>
                  <div class="row px-3 mb-4">
                    <div class="custom-control custom-checkbox custom-control-inline">
                      {/* <input id="chk1" type="checkbox" name="chk" class="custom-control-input">  */}
                    </div>
                  </div>
                  <div class="row mb-5 px-3">
                    {" "}
                    <button
                      type="button"
                      onClick={this.onSubmit}
                      className="btn btn-primary"
                    >
                      {" "}
                      {LOGIN_FIELDS.LOGIN}{" "}
                    </button>{" "}
                    {loginSuccess && <Message message={LOGIN_MESSAGE} />}{" "}
                    {error && <Error message={ERROR_IN_LOGIN} />}{" "}
                  </div>
                </div>

                <div class="row mb-4 px-3 text-center">
                  <small class="font-weight-bold m-auto">
                    Need an account?
                    <Link to="/register">Join Hubstaff for free </Link>
                  </small>{" "}
                </div>
                <a
                  title="Hubstaff online time tracking"
                  class="mb-5 text-center"
                  href="/"
                >
                  <img
                    alt="Hubstaff online time tracking"
                    width="130"
                    src="https://d3kdj0p3ajn4xa.cloudfront.net/assets/hubstaff/logos/HS_text_logo_black-18504e00c286dca13b2c503b94d1eabdf6e1c45257ca558b78095c4e184a020c.svg"
                    class="m-auto"
                  />
                </a>
              </div>
            </div>

            <div class="col-lg-8 signup-v2-illustration-wrapper ">
              <div class="px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
                <div class=" mb-2 px-3">
                  <h1 class="my-4 mt-lg-0 text-gray signup-title">
                    Have you heard about Hubstaff Tasks?
                  </h1>
                  <div class="strong mb-5 text-white">
                    The Agile, visual project management tool is changing the
                    way teams work. Collaborate better and get more done with
                    focused sprints and detailed project boards.
                  </div>
                  <div class="row mb-5 px-3">
                    {" "}
                    <button
                      type="submit"
                      class="btn btn-blue text-center try_btn"
                    >
                      Try it out
                    </button>{" "}
                  </div>
                </div>
                <img
                  src="https://d3kdj0p3ajn4xa.cloudfront.net/assets/illustrations/agile@2x-bddd9f3e015f1792601b39b0f81c882e17e115805d7319d3679f9cba9d58ff29.png"
                  width="500"
                  class="singup_img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
