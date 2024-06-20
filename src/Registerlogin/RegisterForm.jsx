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
const RegisterForm = () => {
  //======================== REGISTRATION STATE ========================//
  // STATE FOR EMAIL INPUT
  const [registerEmail, setRegisterEmail] = useState("");
  // STATE TO KEEP TRACK IF EMAIL VALIDATES OR NOT
  const [registerValidEmail, setValidRegisterEmail] = useState(false);
  // STATE TO DETERMINE IF THE EMAIL FIELD HAS FOCUS
  const [registerEmailFocus, setRegisterEmailFocus] = useState(false);
  //=========================================================//
  // STATE FOR USERNAME INPUT
  const [registerUser, setRegisterUser] = useState("");
  // STATE TO KEEP TRACK IF USERNAME VALIDATES OR NOT
  const [registerValiduserName, setValidRegisterUserName] = useState(false);
  // STATE TO DETERMINE IF THE USERNAME FIELD HAS FOCUS
  const [registerUserNameFocus, setRegisterUserNameFocus] = useState(false);
  //=========================================================//
  // STATE FOR PASSWORD INPUT
  const [registerPassword, setRegisterPassword] = useState("");
  // STATE TO KEEP TRACK IF PASSWORD VALIDATES OR NOT
  const [registerValidPwd, setValidRegisterPwd] = useState(false);
  // STATE TO DETERMINE IF THE PASSWORD FIELD HAS FOCUS
  const [registerPwdFocus, setRegisterPwdFocus] = useState(false);
  //================ CONFIRM-PASSWORD STATE =================//
  // STATE FOR CONFIRM-PASSWORD INPUT
  const [matchRegisterPassword, setMatchRegisterPassword] = useState("");
  // STATE TO KEEP TRACK IF CONFIRM-PASSWORD MATCHES OR NOT
  const [validMatchRegisterPwd, setValidMatchRegisterPwd] = useState(false);
  // STATE TO DETERMINE IF THE CONFIRM-PASSWORD FIELD HAS FOCUS
  const [registerPwdMatchFocus, setRegisterPwdMatchFocus] = useState(false);
  //=========================================================//

  return (
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
        <div className="login-link">
          <p>
            Already have an account? <a href="#">Login</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
