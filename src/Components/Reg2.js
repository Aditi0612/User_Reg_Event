import React from "react";
import "./LogReg.css";
import "./tagsinput.css";

export default function Reg2() {
  return (
    <>
      <section className="gradient-custom">
        <div className="container py-4 h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-8 col-lg-6 col-xl-6">
              <div
                className="card shadow-2-strong card-registration"
                style={{ borderRadius: "15px" }}
              >
                <div className="card-body p-4 p-md-5">
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5" align="center">
                    Educational Details
                  </h3>
                  <form>
                    <div className="row">
                      <label className="form-label" for="fullname">
                        Educational Qualification *
                      </label>
                      <div className="col-md-12 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="degree"
                            className="form-control form-control-lg"
                            //onChange={handleChangeName}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <label for="email" className="form-label">
                        College Name *
                      </label>
                      <div className="col-md-12 mb-4 d-flex align-items-center">
                        <div className="form-outline datepicker w-100">
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            id="course"
                            //onChange={handleChangeEmail}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <label for="phone number" className="form-label">
                        Course Enrolled *
                      </label>
                      <div className="col-md-12 mb-4 d-flex align-items-center">
                        <div className="form-outline datepicker w-100">
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            id="cllg"
                            //onChange={handleChangeEmail}
                          />
                        </div>
                      </div>
                    </div>

                    {/* <div className="row">
                      <div className="col-md-6 mb-4 pb-2">
                        <label className="form-label" for="password">
                          Year of Passing *
                        </label>
                        <div className="form-outline">
                          <input
                            type="text"
                            id="yop"
                            className="form-control form-control-lg"
                            //onChange={handleChangePassword}
                          />
                        </div>
                      </div>

                      {/* <div className="col-md-6 mb-4 pb-2">
                        <label className="form-label" for="cpassword">
                          Confirm Password
                        </label>
                        <div className="form-outline">
                          <input
                            type="password"
                            id="cpassword"
                            className="form-control form-control-lg"
                            //onChange={handleChangeCpassword}
                          />
                        </div>
                      </div>
                    </div> */}

                    <div className="row">
                      <label for="giturl" className="form-label">
                        Year of Passing *
                      </label>
                      <div className="col-md-12 mb-4 d-flex align-items-center">
                        <div className="form-outline datepicker w-100">
                          <input
                            type="url"
                            className="form-control form-control-lg"
                            id="giturl"
                            //onChange={handleChangeURL}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <label for="giturl" className="form-label">
                        College email id
                      </label>
                      <div className="col-md-12 mb-4 d-flex align-items-center">
                        <div className="form-outline datepicker w-100">
                          <input
                            type="url"
                            className="form-control form-control-lg"
                            id="giturl"
                            //onChange={handleChangeURL}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <label for="giturl" className="form-label">
                        Current CGPA
                      </label>
                      <div className="col-md-12 mb-4 d-flex align-items-center">
                        <div className="form-outline datepicker w-100">
                          <input
                            type="url"
                            className="form-control form-control-lg"
                            id="giturl"
                            //onChange={handleChangeURL}
                          />
                        </div>
                      </div>
                    </div>

                    {/* <div className="text-center fs-6">
                      {" "}
                      <a href="./Login">Already Have an Account</a> ?{" "}
                      <a href="Login.js">Login</a>{" "}
                    </div> */}

                    <div className="mt-4 pt-2 ml-5" align="center">
                      <input
                        className="btn btn-primary btn-lg"
                        type="submit"
                        value="Next ->"
                        align="center"
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
}
