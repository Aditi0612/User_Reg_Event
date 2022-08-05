import React from "react";
import "./LogReg.css";
import "./tagsinput.css";
import { useState } from "react";
import validate from "./validate";

const Register = () => {
  const [userRegistration, setUserRegistration] = useState({
    username: "",
    email: "",
    phone: "",
    aphone: "",
    ad1: "",
    ad2: "",
    state: "",
    pin: "",
    student: "",
    working: "",
    edq: "",
    cllg: "",
    course: "",
    yop: "",
    cemail: "",
    cgpa: "",
    cname: "",
    cadd: "",
    ccemail: "",
    desg: "",
    yoe: "",
    pass: "",
    cpass: "",
    govt: "",
    pvt: "",
  });

  const [records, SetRecords] = useState([]);
  const [errors, SetErrors] = useState({});

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);

    setUserRegistration({ ...userRegistration, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // setFormErrors(validate(userRegistration));
    // setIsSubmit(true);
    SetErrors(validate(userRegistration));
    const newRecord = {
      ...userRegistration,
      id: new Date().getTime().toString(),
    };
    console.log(records);
    SetRecords([...records, newRecord]);
  };

  // useEffect(() => {
  //   console.log(formErrors);
  //   if (Object.keys(formErrors).length === 0 && isSubmit) {
  //     console.log();
  //   }
  // }, [formErrors]);
  // const validate = (values) => {
  //   const errors = {};
  //   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  //   if (!values.username) {
  //     errors.username = "Name is required!";
  //   }
  //   if (!values.email) {
  //     errors.email = "Email is required!";
  //   } else if (!regex.test(values.email)) {
  //     errors.email = "This is not a valid email format!";
  //   }
  //   if (!values.password) {
  //     errors.password = "Password is required";
  //   } else if (values.password.length < 4) {
  //     errors.password = "Password must be more than 4 characters";
  //   } else if (values.password.length > 10) {
  //     errors.password = "Password cannot exceed more than 10 characters";
  //   }
  //   return errors;
  // };

  return (
    <>
      <section className="gradient-custom">
        <div className="container py-4 h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-10 col-lg-6 col-xl-7">
              <div
                className="card shadow-2-strong card-registration"
                style={{ borderRadius: "15px" }}
              >
                <div className="card-body p-4 p-md-5">
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5" align="center">
                    User Registration Form
                  </h3>

                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <label className="form-label" for="fullname">
                        Full Name
                        <font color="red">*</font>
                      </label>
                      <div className="col-md-12 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="username"
                            className="form-control"
                            placeholder="Enter your full name"
                            value={userRegistration.username}
                            onChange={handleInput}
                            name="username"
                          />
                          {errors.username && (
                            <p className="error">{errors.username}</p>
                          )}
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
                            className="form-control"
                            placeholder="Enter your email"
                            value={userRegistration.email}
                            onChange={handleInput}
                            name="email"
                            id="email"
                          />
                          {errors.email && (
                            <p className="error">{errors.email}</p>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4 pb-2">
                        <label className="form-label" for="password">
                          Mobile No.
                          <font color="red">*</font>
                        </label>
                        <div className="form-outline">
                          <input
                            type="phoneNumber"
                            // id="phoneNumber"
                            className="form-control"
                            placeholder="XXX XXX XXXX"
                            value={userRegistration.phone}
                            onChange={handleInput}
                            name="phone"
                            id="phone"
                          />
                          {errors.phone && (
                            <p className="error">{errors.phone}</p>
                          )}
                        </div>
                      </div>

                      <div className="col-md-6 mb-4 pb-2">
                        <label className="form-label" for="cpassword">
                          Alternate Mobile No.
                          <font color="red">*</font>
                        </label>
                        <div className="form-outline">
                          <input
                            type="phoneNumber"
                            className="form-control"
                            placeholder="XXX XXX XXXX"
                            value={userRegistration.aphone}
                            onChange={handleInput}
                            name="aphone"
                            id="aphone"
                          />
                          {errors.aphone && (
                            <p className="error">{errors.aphone}</p>
                          )}
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
                            className="form-control"
                            value={userRegistration.ad1}
                            onChange={handleInput}
                            name="ad1"
                            id="ad1"
                          />
                          {errors.ad1 && <p className="error">{errors.ad1}</p>}
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
                            className="form-control"
                            value={userRegistration.ad2}
                            onChange={handleInput}
                            name="ad2"
                            id="ad2"
                          />
                          {errors.ad2 && <p className="error">{errors.ad2}</p>}
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4 pb-2">
                        <label className="form-label" for="password">
                          State
                          <font color="red">*</font>
                        </label>
                        <div className="form-outline">
                          <input
                            type="text"
                            // id="state"
                            className="form-control"
                            value={userRegistration.state}
                            onChange={handleInput}
                            name="state"
                            id="state"
                          />
                          {errors.state && (
                            <p className="error">{errors.state}</p>
                          )}
                        </div>
                      </div>

                      <div className="col-md-6 mb-4 pb-2">
                        <label className="form-label" for="cpassword">
                          Pin Code
                          <font color="red">*</font>
                        </label>
                        <div className="form-outline">
                          <input
                            type="text"
                            // id="pincode"
                            className="form-control"
                            placeholder="XXXXXX"
                            value={userRegistration.pin}
                            onChange={handleInput}
                            name="pin"
                            id="pin"
                          />
                          {errors.pin && <p className="error">{errors.pin}</p>}
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-12 mb-4 d-flex align-items-center">
                        <input
                          type="checkbox"
                          name="student"
                          id="student"
                          value="Student"
                          style={{ margin: "5px" }}
                          onChange={handleInput}
                        />
                        Student <br />
                        <input
                          type="checkbox"
                          name="working"
                          id="working"
                          value="Working"
                          style={{ margin: "5px" }}
                          onChange={handleInput}
                        />
                        Working Professional <br />
                      </div>
                    </div>

                    <div className="row">
                      <label className="form-label" for="fullname">
                        Educational Qualification
                        <font color="red">*</font>
                      </label>
                      <div className="col-md-12 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            className="form-control"
                            value={userRegistration.edq}
                            onChange={handleInput}
                            id="edq"
                            name="edq"
                          />
                          {errors.edq && <p className="error">{errors.edq}</p>}
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <label for="email" className="form-label">
                        College Name
                        <font color="red">*</font>
                      </label>
                      <div className="col-md-12 mb-4 d-flex align-items-center">
                        <div className="form-outline datepicker w-100">
                          <input
                            type="text"
                            className="form-control"
                            value={userRegistration.cllg}
                            onChange={handleInput}
                            id="cllg"
                            name="cllg"
                          />
                          {errors.cllg && (
                            <p className="error">{errors.cllg}</p>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <label for="phone number" className="form-label">
                        Course Enrolled
                        <font color="red">*</font>
                      </label>
                      <div className="col-md-12 mb-4 d-flex align-items-center">
                        <div className="form-outline datepicker w-100">
                          <input
                            type="text"
                            className="form-control"
                            value={userRegistration.course}
                            onChange={handleInput}
                            id="course"
                            name="course"
                          />
                          {errors.course && (
                            <p className="error">{errors.course}</p>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <label for="year of passing" className="form-label">
                        Year of Passing
                        <font color="red">*</font>
                      </label>
                      <div className="col-md-12 mb-4 d-flex align-items-center">
                        <div className="form-outline datepicker w-100">
                          <input
                            type="date"
                            className="form-control"
                            placeholder="YYYY"
                            value={userRegistration.yop}
                            onChange={handleInput}
                            id="yop"
                            name="yop"
                          />
                          {errors.yop && <p className="error">{errors.yop}</p>}
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <label for="email" className="form-label">
                        College email id
                      </label>
                      <div className="col-md-12 mb-4 d-flex align-items-center">
                        <div className="form-outline datepicker w-100">
                          <input
                            type="email"
                            className="form-control"
                            value={userRegistration.cemail}
                            onChange={handleInput}
                            id="cemail"
                            name="cemail"
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
                            type="decimal"
                            className="form-control"
                            value={userRegistration.cgpa}
                            onChange={handleInput}
                            id="cgpa"
                            name="cgpa"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-12 mb-4 d-flex align-items-center">
                        <input
                          type="checkbox"
                          name="govt"
                          id="govt"
                          value="Govt"
                          onChange={handleInput}
                          style={{ margin: "5px" }}
                        />
                        Government Company <br />
                        <input
                          type="checkbox"
                          name="pvt"
                          id="pvt"
                          value="Pvt"
                          style={{ margin: "5px" }}
                          onChange={handleInput}
                        />
                        Private Company <br />
                      </div>
                    </div>

                    <div className="row">
                      <label className="form-label" for="fullname">
                        Company Name
                      </label>
                      <div className="col-md-12 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="cname"
                            className="form-control"
                            value={userRegistration.cname}
                            onChange={handleInput}
                            name="cname"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <label for="email" className="form-label">
                        Company email
                      </label>
                      <div className="col-md-12 mb-4 d-flex align-items-center">
                        <div className="form-outline datepicker w-100">
                          <input
                            type="text"
                            className="form-control"
                            id="ccemail"
                            value={userRegistration.ccemail}
                            onChange={handleInput}
                            name="ccemail"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <label for="phone number" className="form-label">
                        Company Address
                      </label>
                      <div className="col-md-12 mb-4 d-flex align-items-center">
                        <div className="form-outline datepicker w-100">
                          <input
                            type="phoneNumber"
                            className="form-control"
                            value={userRegistration.cadd}
                            onChange={handleInput}
                            id="cadd"
                            name="cadd"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <label for="giturl" className="form-label">
                        Designation/ Job Profile
                      </label>
                      <div className="col-md-12 mb-4 d-flex align-items-center">
                        <div className="form-outline datepicker w-100">
                          <input
                            type="text"
                            className="form-control"
                            value={userRegistration.desg}
                            onChange={handleInput}
                            id="desg"
                            name="desg"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <label for="giturl" className="form-label">
                        Years of Experience
                      </label>
                      <div className="col-md-12 mb-4 d-flex align-items-center">
                        <div className="form-outline datepicker w-100">
                          <input
                            type="Number"
                            className="form-control"
                            value={userRegistration.yoe}
                            onChange={handleInput}
                            id="yoe"
                            name="yoe"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4 pb-2">
                        <label className="form-label" for="password">
                          Password
                          <font color="red">*</font>
                        </label>
                        <div className="form-outline">
                          <input
                            type="password"
                            id="pass"
                            className="form-control"
                            placeholder="********"
                            value={userRegistration.pass}
                            onChange={handleInput}
                            name="pass"
                          />
                          {errors.pass && (
                            <p className="error">{errors.pass}</p>
                          )}
                        </div>
                      </div>

                      <div className="col-md-6 mb-4 pb-2">
                        <label className="form-label" for="cpassword">
                          Confirm Password
                          <font color="red">*</font>
                        </label>
                        <div className="form-outline">
                          <input
                            type="password"
                            id="cpass"
                            className="form-control"
                            placeholder="********"
                            value={userRegistration.cpass}
                            onChange={handleInput}
                            name="cpass"
                          />
                          {errors.cpass && (
                            <p className="error">{errors.cpass}</p>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Already having an Account */}

                    <div className="text-center fs-6">
                      {" "}
                      <a href="/Login">Already Have an Account</a> ?{" "}
                      <a href="/Login">Login</a>{" "}
                    </div>

                    {/* Button Part */}

                    {/* <div className="col-md-6 mb-4 pb-2"> */}
                    <div className="mt-4 pt-2 ml-2" align="center">
                      <a
                        class="btn btn-primary"
                        href="#"
                        role="button"
                        onClick={handleSubmit}
                      >
                        Submit
                      </a>{" "}
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

export default Register;
