import React, { useEffect, useRef, useState } from "react";
import GeneralInput from "../formInputs/GeneralInput";
import errorUpdate from "../utils/errorUpdate";
import ViewDatas from "./ViewDatas";

const userInitialInfo = {
  firstName: "",
  lastName: "",
  username: "",
  email: "",
  contact: "",
  password: "",
  portfolio: "",
};
const userInitialnfoErrors = {
  firstNameError: "",
  lastNameError: "",
  usernameError: "",
  emailError: "",
  contactError: "",
  passwordError: "",
  portfolioError: "",
};

export default function Home() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const contactRef = useRef(null);
  const passwordRef = useRef(null);
  const portfolioRef = useRef(null);
  const [userInfo, setUserInfo] = useState(userInitialInfo);
  const [userInfoErrors, setUserInfoErrors] = useState(userInitialnfoErrors);
  const [formSubmitBtnActive, setFormSubmitBtnActive] = useState(false);
  const [isErrorShow, setErrorShow] = useState(null);
  const [viewShow, setViewShow] = useState(false);

  const handleChange = (e) => {
    if (document.activeElement === firstNameRef.current)
      setErrorShow({ firstNameErrorShow: true });
    if (document.activeElement === lastNameRef.current)
      setErrorShow({ lastNameErrorShow: true });
    if (document.activeElement === usernameRef.current)
      setErrorShow({ usernameErrorShow: true });
    if (document.activeElement === emailRef.current)
      setErrorShow({ emailErrorShow: true });
    if (document.activeElement === contactRef.current)
      setErrorShow({ contactErrorShow: true });
    if (document.activeElement === passwordRef.current)
      setErrorShow({ passwordErrorShow: true });
    if (document.activeElement === portfolioRef.current)
      setErrorShow({ portfolioErrorShow: true });

    const label = e.target.nextElementSibling.innerHTML;
    const key = e.target.name;
    const val = e.target.value;
    setUserInfo((prev) => {
      return {
        ...prev,
        [key]: val,
      };
    });
    if (key == "firstName")
      errorUpdate(setUserInfoErrors, "nameValidate", key, val, label);
    if (key == "lastName")
      errorUpdate(setUserInfoErrors, "nameValidate", key, val, label);
    if (key == "username")
      errorUpdate(setUserInfoErrors, "usernameValidate", key, val, label);
    if (key == "email")
      errorUpdate(setUserInfoErrors, "emailValidate", key, val, label);
    if (key == "contact")
      errorUpdate(setUserInfoErrors, "contactValidate", key, val, label);
    if (key == "password")
      errorUpdate(setUserInfoErrors, "passwordValidate", key, val, label);
    if (key == "portfolio")
      errorUpdate(setUserInfoErrors, "portfolioValidate", key, val, label);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setViewShow(true);
  };
  const resetBtn = (e) => {
    e.preventDefault();
    setViewShow(false);
    setUserInfo(userInitialInfo);
    setUserInfoErrors(userInitialnfoErrors);
    setFormSubmitBtnActive(false);
    setErrorShow(null);
  };

  const { firstName, lastName, username, email, contact, password, portfolio } =
    userInfo;
  const {
    firstNameError,
    lastNameError,
    usernameError,
    emailError,
    contactError,
    passwordError,
    portfolioError,
  } = userInfoErrors;

  useEffect(() => {
    let checkErrorsArr = [];
    Object.values(userInfoErrors).forEach((error) => {
      checkErrorsArr.push(
        Object.values(error).every((item) => item.type == "valid")
      );
    });
    const checkErrors = checkErrorsArr.every((val) => val == true);
    const checkValues = Object.values(userInfo).every((item) => item != "");
    if (checkErrors && checkValues) return setFormSubmitBtnActive(true);
    return setFormSubmitBtnActive(false);
  }, [userInfoErrors, userInfo]);

  return (
    <>
      {viewShow ? (
        <ViewDatas userInfo={userInfo} resetBtn={resetBtn} />
      ) : (
        <div className="container">
          <div className="row pt-5">
            <div className="col-12">
              <div className="card shadow">
                <div className="card-body">
                  <div className="p-5 text-center">
                    <h2 style={{ fontFamily: "'Lobster', cursive" }}>
                      Controlled Form Validations
                    </h2>
                  </div>
                  <form className="row g-3" onSubmit={handleSubmit}>
                    <div className="col-md-6 col-lg-4">
                      <GeneralInput
                        label="First Name"
                        reference={firstNameRef}
                        type="text"
                        name="firstName"
                        value={firstName}
                        func={handleChange}
                        errorVal={firstNameError}
                        isErrorShow={isErrorShow}
                        setErrorShow={setErrorShow}
                      />
                    </div>
                    <div className="col-md-6 col-lg-4">
                      <GeneralInput
                        label="Last Name"
                        reference={lastNameRef}
                        type="text"
                        name="lastName"
                        value={lastName}
                        func={handleChange}
                        errorVal={lastNameError}
                        isErrorShow={isErrorShow}
                        setErrorShow={setErrorShow}
                      />
                    </div>
                    <div className="col-md-6 col-lg-4">
                      <GeneralInput
                        label="Username"
                        reference={usernameRef}
                        type="text"
                        name="username"
                        value={username}
                        func={handleChange}
                        errorVal={usernameError}
                        isErrorShow={isErrorShow}
                        setErrorShow={setErrorShow}
                      />
                    </div>
                    <div className="col-md-6 col-lg-4">
                      <GeneralInput
                        label="Email ID"
                        reference={emailRef}
                        type="text"
                        name="email"
                        value={email}
                        func={handleChange}
                        errorVal={emailError}
                        isErrorShow={isErrorShow}
                        setErrorShow={setErrorShow}
                      />
                    </div>
                    <div className="col-md-6 col-lg-4">
                      <GeneralInput
                        label="Contact Number"
                        reference={contactRef}
                        type="text"
                        name="contact"
                        value={contact}
                        func={handleChange}
                        errorVal={contactError}
                        isErrorShow={isErrorShow}
                        setErrorShow={setErrorShow}
                      />
                    </div>
                    <div className="col-md-6 col-lg-4">
                      <GeneralInput
                        label="Password"
                        reference={passwordRef}
                        type="text"
                        name="password"
                        value={password}
                        func={handleChange}
                        errorVal={passwordError}
                        isErrorShow={isErrorShow}
                        setErrorShow={setErrorShow}
                      />
                    </div>
                    <div className="col-12">
                      <GeneralInput
                        label="Portfolio"
                        reference={portfolioRef}
                        type="text"
                        name="portfolio"
                        value={portfolio}
                        func={handleChange}
                        errorVal={portfolioError}
                        isErrorShow={isErrorShow}
                        setErrorShow={setErrorShow}
                      />
                    </div>
                    <div className="col-12 d-flex justify-content-center">
                      <button
                        type="submit"
                        className={`btn btn-success btn-lg ${
                          !formSubmitBtnActive ? "disabled-button" : ""
                        }`}
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
