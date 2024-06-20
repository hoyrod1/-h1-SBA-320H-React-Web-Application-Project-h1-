import { useState, useRef, useEffect } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { SlEnvolope } from "react-icons/sl";

//======================= REGULAR EXPRESSION =======================//
// EMAIL REGEX
const email_validation = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
// USERNAME REGEX
const username_validation =
  /^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[^0-9A-Za-z]).{8,24}$/;
// PASSWORD REGEX
const password_validation = /^[a-zA-Z][A-Za-z0-9-_]{12,18}$/;
//====================================================================//

const LoginForm = () => {
  //=========================== LOGIN STATE ============================//
  // STATE FOR USERNAME INPUT
  const [loginUser, setLoginUser] = useState("");
  // STATE TO KEEP TRACK IF USERNAME VALIDATES OR NOT
  const [validuserLoginName, setValiduserLoginName] = useState(false);
  // STATE TO DETERMINE IF THE USERNAME FIELD HAS FOCUS
  const [LoginUserNameFocus, setLoginUserNameFocus] = useState(false);
  //==================== PASSWORD STATE =====================//
  // STATE FOR PASSWORD INPUT
  const [loginPassword, setLoginPassword] = useState("");
  // STATE TO KEEP TRACK IF PASSWORD VALIDATES OR NOT
  const [validLoginPwd, setValidLoginPwd] = useState(false);
  // STATE TO DETERMINE IF THE PASSWORD FIELD HAS FOCUS
  const [pwdLoginFocus, setLoginPwdFocus] = useState(false);
  //=====================================================================//

  //======================= ERR0R-SUCCESS STATE =========================//
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);
  //=====================================================================//
  //========================== FORM SUBMISSION ==========================//
  // login form
  const handleLoginSubmission = (e) => {
    e.preventDefault();

    setErrorMessage("");
    try {
      if (loginUser === "hoyrod1" && loginPassword === "april12") {
        setSuccess(true);
        setLoginUser("");
        setLoginPassword("");
      } else {
        throw Error;
      }
    } catch (error) {
      console.error("Login unsuccessful", success);
      setErrorMessage("Incorrect credintials");
      setLoginUser("");
      setLoginPassword("");
    }
    // console.log("Login successful", success);
  };
  // Registration Form
  const handleRegistrationSubmission = (e) => {
    e.preventDefault();
    console.log("Registration Form Submitted");
  };
  //=====================================================================//
  return (
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
        <div className="register-link">
          <p>
            Don't have an account? <a href="#">Register</a>
          </p>
        </div>
        <div className="error-message">
          <p>{errorMessage}</p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
