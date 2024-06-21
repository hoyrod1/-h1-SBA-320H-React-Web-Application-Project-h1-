import React from "react";
import { useState, useRef, useEffect } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { SlEnvolope } from "react-icons/sl";
// import "./loginRegister.css";

//======================== REGULAR EXPRESSION ========================//
// EMAIL REGEX
// const email_validation = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
// // USERNAME REGEX
// const username_validation =
//   /^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[^0-9A-Za-z]).{8,24}$/;
// // PASSWORD REGEX
// const password_validation = /^[a-zA-Z][A-Za-z0-9-_]{12,18}$/;
//====================================================================//

//=================== LOGIN-REGISTRATION COMPONENT ===================//
const LoginRegister = () => {
  // PLACES FOCUS ON THE INPUT WHEN THE COMPONENT LOADS
  // const usersRef = useRef();
  // // KEEPS TRACK OF ERRORS THAT OCCURS
  // const errorrRef = useRef();
  //====================================================================//

  //=========================== LOGIN STATE ============================//
  // STATE FOR USERNAME INPUT
  const [loginUser, setLoginUser] = useState("");
  // STATE TO KEEP TRACK IF USERNAME VALIDATES OR NOT
  // const [validuserLoginName, setValiduserLoginName] = useState(false);
  // // STATE TO DETERMINE IF THE USERNAME FIELD HAS FOCUS
  // const [LoginUserNameFocus, setLoginUserNameFocus] = useState(false);
  //==================== PASSWORD STATE =====================//
  // STATE FOR PASSWORD INPUT
  const [loginPassword, setLoginPassword] = useState("");
  // STATE TO KEEP TRACK IF PASSWORD VALIDATES OR NOT
  // const [validLoginPwd, setValidLoginPwd] = useState(false);
  // // STATE TO DETERMINE IF THE PASSWORD FIELD HAS FOCUS
  // const [pwdLoginFocus, setLoginPwdFocus] = useState(false);
  //====================================================================//

  //====================================================================//
  //======================== REGISTRATION STATE ========================//
  // STATE FOR EMAIL INPUT
  const [registerEmail, setRegisterEmail] = useState("");
  // STATE TO KEEP TRACK IF EMAIL VALIDATES OR NOT
  // const [registerValidEmail, setValidRegisterEmail] = useState(false);
  // // STATE TO DETERMINE IF THE EMAIL FIELD HAS FOCUS
  // const [registerEmailFocus, setRegisterEmailFocus] = useState(false);
  //=========================================================//
  // STATE FOR USERNAME INPUT
  const [registerUser, setRegisterUser] = useState("");
  // STATE TO KEEP TRACK IF USERNAME VALIDATES OR NOT
  // const [registerValiduserName, setValidRegisterUserName] = useState(false);
  // // STATE TO DETERMINE IF THE USERNAME FIELD HAS FOCUS
  // const [registerUserNameFocus, setRegisterUserNameFocus] = useState(false);
  //=========================================================//
  // STATE FOR PASSWORD INPUT
  const [registerPassword, setRegisterPassword] = useState("");
  // STATE TO KEEP TRACK IF PASSWORD VALIDATES OR NOT
  // const [registerValidPwd, setValidRegisterPwd] = useState(false);
  // // STATE TO DETERMINE IF THE PASSWORD FIELD HAS FOCUS
  // const [registerPwdFocus, setRegisterPwdFocus] = useState(false);
  //================ CONFIRM-PASSWORD STATE =================//
  // STATE FOR CONFIRM-PASSWORD INPUT
  const [matchRegisterPassword, setMatchRegisterPassword] = useState("");
  // STATE TO KEEP TRACK IF CONFIRM-PASSWORD MATCHES OR NOT
  // const [validMatchRegisterPwd, setValidMatchRegisterPwd] = useState(false);
  // // STATE TO DETERMINE IF THE CONFIRM-PASSWORD FIELD HAS FOCUS
  // const [registerPwdMatchFocus, setRegisterPwdMatchFocus] = useState(false);
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
        // setRegisterEmail("");
        // setRegisterUser("");
        // setRegisterPassword("");
        // setMatchRegisterPassword("");
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
