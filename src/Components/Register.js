import React from "react";
import "./LogReg.css";
import "./tagsinput.css";

export default function Register() {
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
                    Personal Details
                  </h3>
                  <form>
                    <div className="row">
                      <label className="form-label" for="fullname">
                        Full Name
                        <font color="red">*</font>
                      </label>
                      <div className="col-md-12 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="fullname"
                            className="form-control form-control-lg"
                            //onChange={handleChangeName}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <label for="email" className="form-label">
                        Personal Email
                        <font color="red">*</font>
                      </label>
                      <div className="col-md-12 mb-4 d-flex align-items-center">
                        <div className="form-outline datepicker w-100">
                          <input
                            type="email"
                            className="form-control form-control-lg"
                            id="email"
                            //onChange={handleChangeEmail}
                          />
                        </div>
                      </div>
                    </div>

                    {/* <div className="row">
                      <label for="phone number" className="form-label">
                        Mobile Number *
                      </label>
                      <div className="col-md-12 mb-4 d-flex align-items-center">
                        <div className="form-outline datepicker w-100">
                          <input
                            type="phoneNumber"
                            className="form-control form-control-lg"
                            id="phoneNumber"
                            //onChange={handleChangeEmail}
                          />
                        </div>
                      </div>
                    </div> */}

                    <div className="row">
                      <div className="col-md-6 mb-4 pb-2">
                        <label className="form-label" for="password">
                          Mobile No.
                          <font color="red">*</font>
                        </label>
                        <div className="form-outline">
                          <input
                            type="password"
                            id="password"
                            className="form-control form-control-lg"
                            //onChange={handleChangePassword}
                          />
                        </div>
                      </div>

                      <div className="col-md-6 mb-4 pb-2">
                        <label className="form-label" for="cpassword">
                          Alternate Mobile No.
                          <font color="red">*</font>
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
                    </div>

                    <div className="row">
                      <label for="address" className="form-label">
                        House No./Lane No.
                        <font color="red">*</font>
                      </label>
                      <div className="col-md-12 mb-4 d-flex align-items-center">
                        <div className="form-outline datepicker w-100">
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            id="address1"
                            //onChange={handleChangeEmail}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <label for="address" className="form-label">
                        City/Town
                        <font color="red">*</font>
                      </label>
                      <div className="col-md-12 mb-4 d-flex align-items-center">
                        <div className="form-outline datepicker w-100">
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            id="address2"
                            //onChange={handleChangeEmail}
                          />
                        </div>
                      </div>
                    </div>

                    {/* <div className="row">
                      <label for="address" className="form-label">
                        State *
                      </label>
                      <div className="col-md-12 mb-4 d-flex align-items-center">
                        <div className="form-outline datepicker w-100">
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            id="address3"
                            //onChange={handleChangeEmail}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <label for="phone number" className="form-label">
                        Pin Code *
                      </label>
                      <div className="col-md-12 mb-4 d-flex align-items-center">
                        <div className="form-outline datepicker w-100">
                          <input
                            type="phoneNumber"
                            className="form-control form-control-lg"
                            id="phoneNumber"
                            //onChange={handleChangeEmail}
                          />
                        </div>
                      </div>
                    </div> */}

                    <div className="row">
                      <div className="col-md-6 mb-4 pb-2">
                        <label className="form-label" for="password">
                          State
                          <font color="red">*</font>
                        </label>
                        <div className="form-outline">
                          <input
                            type="password"
                            id="password"
                            className="form-control form-control-lg"
                            //onChange={handleChangePassword}
                          />
                        </div>
                      </div>

                      <div className="col-md-6 mb-4 pb-2">
                        <label className="form-label" for="cpassword">
                          Pin Code
                          <font color="red">*</font>
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
                    </div>

                    <div className="row">
                      <div className="col-md-12 mb-4 d-flex align-items-center">
                        <input
                          type="checkbox"
                          name="C/C++"
                          value="C/C++"
                          /*
                          onChange={(e) => {
                            setTechStack1(e.target.value);
                          }}
                          */
                          style={{ margin: "5px" }}
                        />
                        Student <br />
                        <input
                          type="checkbox"
                          name="Java"
                          value="Java"
                          style={{ margin: "5px" }}
                          /*
                          onChange={(e) => {
                            setTechStack2(e.target.value);
                          }}*/
                        />{" "}
                        Working Professional <br />
                      </div>
                    </div>

                    {/* Already having an Account */}

                    <div className="text-center fs-6">
                      {" "}
                      <a href="#">Already Have an Account</a> ?{" "}
                      <a href="#">Login</a>{" "}
                    </div>

                    {/* Button Part */}

                    <div className="row">
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="mt-4 pt-2 ml-2" align="center">
                          <input
                            className="btn btn-primary"
                            disabled
                            type="submit"
                            value="<-Back"
                            align="center"
                          />
                        </div>
                      </div>

                      <div className="col-md-6 mb-4 pb-2">
                        <div className="mt-4 pt-2 ml-2" align="center">
                          <a class="btn btn-primary" href="/Reg2" role="button">
                            Next
                          </a>{" "}
                        </div>
                      </div>
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
