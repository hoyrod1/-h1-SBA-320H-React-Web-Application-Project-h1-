import React from "react";
import { useState, useRef, useEffect } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { SlEnvolope } from "react-icons/sl";
import Dogs from "../dogs/Dogs";

//=================== LOGIN-REGISTRATION COMPONENT ===================//
const LoginRegister = () => {
  //=========================== LOGIN STATE ============================//
  // STATE FOR USERNAME INPUT
  const [loginUser, setLoginUser] = useState("");
  //==================== PASSWORD STATE =====================//
  // STATE FOR PASSWORD INPUT
  const [loginPassword, setLoginPassword] = useState("");
  //====================================================================//

  //====================================================================//
  //======================== REGISTRATION STATE ========================//
  // STATE FOR EMAIL INPUT
  const [registerEmail, setRegisterEmail] = useState("");
  //=========================================================//
  // STATE FOR USERNAME INPUT
  const [registerUser, setRegisterUser] = useState("");
  //=========================================================//
  // STATE FOR PASSWORD INPUT
  const [registerPassword, setRegisterPassword] = useState("");
  //================ CONFIRM-PASSWORD STATE =================//
  // STATE FOR CONFIRM-PASSWORD INPUT
  const [matchRegisterPassword, setMatchRegisterPassword] = useState("");
  //=========================================================//

  //================= ERR0R-SUCCESS STATE ===================//
  const [loginMessage, setLoginMessage] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  //=========================================================//

  //=============================== FORM SUBMISSION ===============================//
  // login form
  const handleLoginSubmission = (e) => {
    e.preventDefault();
    const storedPassword = localStorage.getItem("password");

    setLoginMessage("");
    try {
      if (loginPassword === storedPassword) {
        setLoginSuccess(true);
      } else {
        throw Error;
      }
    } catch (error) {
      setLoginMessage("Incorrect credintials");
      setLoginUser("");
      setLoginPassword("");
    }
    setLoginUser("");
    setLoginPassword("");
  };
  //------------------------------------------------------------------------------//
  // Registration Form
  const handleRegistrationSubmission = (e) => {
    e.preventDefault();
    //setRegistrationSuccess("");

    try {
      if (registerPassword === registerPassword) {
        // Storing the email to local storage
        localStorage.setItem("email", registerEmail);
        // Storing the username to local storage
        localStorage.setItem("username", registerUser);
        // Storing the password to local storage
        localStorage.setItem("password", registerPassword);
        setRegisterEmail("");
        setRegisterUser("");
        setRegisterPassword("");
        setMatchRegisterPassword("");
      } else {
        throw Error;
      }
    } catch (error) {
      setRegistrationSuccess("Registration unsuccessful");
      setRegisterEmail("");
      setRegisterUser("");
      setRegisterPassword("");
      setMatchRegisterPassword("");
    }
  };
  //===============================================================================//

  return (
    //--------------------------------- LOGIN FORM ---------------------------------//
    <div>
      {loginSuccess ? (
        <>
          <div className="logged-container">
            <div>
              <h3>{loginUser} you are logged in</h3>
            </div>
            <br />
            <button type="submit" onClick={() => setLoginSuccess(false)}>
              Log Out
            </button>
            <hr />
            <Dogs />
          </div>
        </>
      ) : (
        <div className="container">
          <div className="form-box login">
            <form action="" onSubmit={handleLoginSubmission}>
              <h2>Login</h2>
              <div className="input-box">
                <input
                  type="text"
                  value={loginUser}
                  onChange={(e) => setLoginUser(e.target.value)}
                  placeholder="Username"
                  required
                />
                <FaUser className="login-pic" />
              </div>
              <div className="input-box">
                <input
                  type="password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  placeholder="Password"
                  required
                />
                <FaLock className="login-lock-icon" />
              </div>
              <button type="submit">Login</button>
              <div className="error-message">
                <p>{loginMessage}</p>
              </div>
            </form>
          </div>
          {/* ------------------------------REGISTRATION FORM ------------------------------*/}
          <div className="form-box register">
            <form action="" onSubmit={handleRegistrationSubmission}>
              <h2>Register</h2>
              <div className="input-box">
                <input
                  type="email"
                  value={registerEmail}
                  onChange={(e) => setRegisterEmail(e.target.value)}
                  placeholder="Email"
                  required
                />
                <SlEnvolope className="email-icon" />
              </div>
              <div className="input-box">
                <input
                  type="text"
                  value={registerUser}
                  onChange={(e) => setRegisterUser(e.target.value)}
                  placeholder="Username"
                  required
                />
                <FaUser className="reg-user-icon" />
              </div>
              <div className="input-box">
                <input
                  type="password"
                  value={registerPassword}
                  onChange={(e) => setRegisterPassword(e.target.value)}
                  placeholder="Password"
                  required
                />
                <FaLock className="password-lock-icon" />
              </div>
              <div className="input-box">
                <input
                  type="password"
                  value={matchRegisterPassword}
                  onChange={(e) => setMatchRegisterPassword(e.target.value)}
                  placeholder="Confirm Password"
                  required
                />
                <FaLock className="password-lock-icon" />
              </div>
              <button type="submit">Register</button>
              <div className="error-message">
                <p>{registrationSuccess}</p>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginRegister;
