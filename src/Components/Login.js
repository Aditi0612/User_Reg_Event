import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";

import "./LogReg.css";
import "./tagsinput.css";

const Login = () => {
  const [verified, setVerified] = useState(false);

  //recaptcha function
  function onChange(value) {
    console.log("Captcha value:", value);
    setVerified(true);
  }
  return (
    <>
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-6 col-lg-6 col-xl-5">
              <div
                className="card shadow-2-strong card-registration"
                style={{ borderRadius: "15px" }}
              >
                <div className="card-body p-4 p-md-5">
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5" align="center">
                    User Login
                  </h3>
                  <form>
                    <label className="form-label" for="emailAddress">
                      Email Id
                      <font color="red">*</font>
                    </label>
                    <div className="row">
                      <div className="col-md-12 mb-4 pb-2">
                        <div className="form-outline">
                          <input
                            type="email"
                            id="email"
                            className="form-control"
                            // onChange={handleChangeEmail}
                          />
                        </div>
                      </div>
                      <label className="form-label" for="password">
                        Password
                        <font color="red">*</font>
                      </label>
                      <div className="row">
                        <div className="col-md-12 mb-4 pb-2">
                          <div className="form-outline">
                            <input
                              type="password"
                              id="password"
                              className="form-control"
                              //   onChange={handleChangepassword}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <ReCAPTCHA
                      sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                      onChange={onChange}
                    />

                    <div className="text-center fs-6 mt-3">
                      {" "}
                      <a href="#">Forgot Password?</a>{" "}
                    </div>

                    <div className="text-center fs-6">
                      {" "}
                      <a href="/Register">Don't Have an Account?</a> or{" "}
                      <a href="/Register">Sign up</a>{" "}
                    </div>
                    <div className="mt-4 pt-2" align="center">
                      <input
                        className="btn btn-primary"
                        disabled={!verified}
                        type="submit"
                        value="Login"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
