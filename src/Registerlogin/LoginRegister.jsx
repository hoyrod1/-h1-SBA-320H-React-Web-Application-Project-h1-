import React from "react";
import { FaUser, FaLock } from "react-icons/fa";
// import "./loginRegister.css";
const LoginRegister = () => {
  const style = {
    width: "500px",
    height: "500px",
    margin: "50% auto",
  };
  return (
    <div className="container">
      <div className="form-box login">
        <form action="">
          <h2>Login</h2>
          <div className="input-box">
            <label>
              <input type="text" placeholder="Username" required />
              <FaUser className="user-icon" />
            </label>
          </div>
          <div className="input-box">
            <label>
              <input type="password" placeholder="Password" required />
              <FaLock className="lock-icon" />
            </label>
          </div>
          <button type="submit">Login</button>
          <div className="register-link">
            <p>
              Don't have an account? <a href="#">Register</a>
            </p>
          </div>
        </form>
      </div>
      <div className="form-box register">
        <form action="">
          <h2>Register</h2>
          <div className="input-box">
            <label>
              <input type="email" placeholder="Email" required />
            </label>
          </div>
          <div className="input-box">
            <label>
              <input type="text" placeholder="Username" required />
            </label>
          </div>
          <div className="input-box">
            <label>
              <input type="password" placeholder="Password" required />
            </label>
          </div>
          <button type="submit">Register</button>
          <div className="login-link">
            <p>
              Already have an account? <a href="#">Login</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginRegister;
