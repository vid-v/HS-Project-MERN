import React, { Component } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import mainimg from "../img/signup-b53b4017b385089eb2e577a32c20e1a77e88e8ebfcb05437a75f25a3913981a8.svg";
import logo from "../img/HS_text_logo_black-18504e00c286dca13b2c503b94d1eabdf6e1c45257ca558b78095c4e184a020c.svg";

import {
  UserRegistration,
  UsernameValidation,
} from "../services/RegistrationService";
import Message from "../elements/Message";

import Error from "../elements/Error";

import {
  REGISTRATION_FIELDS,
  REGISTRATION_MESSAGE,
  COMMON_FIELDS,
  ERROR_IN_REGISTRATION,
} from "../MessageBundle";

export default class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      full_name: "",
      email: "",
      user_name: "",
      password: "",
      register: false,
      error: false,
    };
  }

  handleOnChangeFullName = (e) => {
    this.setState({
      full_name: e.target.value,
    });
  };

  handleOnChangeEmail = (e) => {
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
    e.preventDefault();

    const data = {
      full_name: this.state.full_name,
      email: this.state.email,
      password: this.state.password,
    };
    console.log(data);

    const registerStatus = await UserRegistration(data);
    if (registerStatus === 200) {
      this.setState({
        full_name: "",
        email: "",
        password: "",
        register: true,
        error: false,
      });
    } else
      this.setState({
        error: true,
        register: false,
      });
  };

  render() {
    const { register, error, user_name_taken } = this.state;

    return (
      <div class="">
        <form onSubmit={this.onSubmit}>
          <div class="card border-0">
            <div class="row d-flex">
              <div class="col-lg-6">
                <div class="card2 card border-0  px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto ">
                  {/* <a title="Hubstaff online time tracking" class="mb-5 mr-auto" href="/"> */}
                  {/* <img alt="Hubstaff online time tracking" width="130" src="https://d3kdj0p3ajn4xa.cloudfront.net/assets/hubstaff/logos/HS_text_logo_black-18504e00c286dca13b2c503b94d1eabdf6e1c45257ca558b78095c4e184a020c.svg"></a>  */}
                  <img width="130" src={logo} alt="Logo" />
                  <div class="signup-v2-form-wrapper">
                    <div class="row mb-2 px-3">
                      <h1 class="my-4 mt-lg-0 ">
                        Welcome to your productivity origin story
                      </h1>
                      <div class="strong mb-5">
                        Reach your goals sooner with Hubstaff’s
                        efficiency-boosting power.
                      </div>
                    </div>
                    <div class="row px-3">
                      {" "}
                      <label class="mb-1">
                        <h6 class="mb-0 text-sm">Full Name </h6>
                      </label>
                      <input
                        type="text"
                        value={this.state.full_name}
                        name="full_name"
                        onChange={this.handleOnChangeFullName}
                      />
                    </div>
                    <div class="row px-3">
                      {" "}
                      <label class="mb-1">
                        <h6 class="mb-0 text-sm">Email Address</h6>
                      </label>
                      <input
                        type="text"
                        value={this.state.email}
                        name="email"
                        onChange={this.handleOnChangeEmail}
                      />
                    </div>
                    <div class="row px-3">
                      {" "}
                      <label class="mb-1">
                        <h6 class="mb-0 text-sm">Password</h6>
                      </label>
                      <input
                        type="password"
                        value={this.state.password}
                        name="Password"
                        onChange={this.handleOnChangePassword}
                        autoComplete="password"
                        required
                      />
                    </div>
                    <div class="row px-3 mb-4"></div>
                    <div class="row mb-3 px-3">
                      {" "}
                      <button type="submit" class="btn btn-blue text-center">
                        Create my account{" "}
                      </button>{" "}
                    </div>
                    {error && <Error message={ERROR_IN_REGISTRATION} />}{" "}
                    {register && <Message message={REGISTRATION_MESSAGE} />}
                  </div>
                </div>
                <div class="row mb-4 px-3 text-center">
                  <small class="font-weight-bold m-auto">
                    Need an account?
                    <Link to="/login">Join Hubstaff for free </Link>
                  </small>{" "}
                </div>
              </div>

              <div class="col-lg-6 signup-v2-illustration-wrapper ">
                <div class="px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
                  <div class="card1 pb-5">
                    <div class="row"></div>
                    <div class="row px-3 justify-content-center mt-4 mb-5 border-line">
                      <img src={mainimg} alt="Logo" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
