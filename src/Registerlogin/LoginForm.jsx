import { useReducer } from "react";
import { FaUser, FaLock } from "react-icons/fa";

const logInReducer = (state, action) => {
  switch (action.type) {
    case "inputField": {
      return {
        ...state,
        [action.fieldName]: action.payload,
      };
    }
    case "logIn": {
      return {
        ...state,
        errorMessage: "",
      };
    }
    case "success": {
      return {
        ...state,
        loginSuccess: true,
        loginPassword: "",
      };
    }
    case "error": {
      return {
        ...state,
        loginUser: "",
        loginPassword: "",
        loginSuccess: false,
        errorMessage: "Incorrect credintials",
      };
    }
    case "logOut": {
      return {
        ...state,
        loginSuccess: false,
      };
    }
    default:
      return state;
  }
};

const LoginForm = () => {
  const [state, dispatch] = useReducer(logInReducer, {
    loginUser: "",
    loginPassword: "",
    loginSuccess: false,
    errorMessage: "",
  });

  //========================== FORM SUBMISSION ==========================//
  // login form
  const handleLoginSubmission = (e) => {
    e.preventDefault();

    dispatch({ type: "login" });

    try {
      if (state.loginUser === "hoyrod1" && state.loginPassword === "april12") {
        dispatch({ type: "success" });
      } else {
        throw Error;
      }
    } catch (error) {
      console.error("Login unsuccessful", state.loginSuccess);
      dispatch({ type: "error" });
    }
  };
  //=====================================================================//
  //=====================================================================//
  return (
    <div>
      {state.loginSuccess ? (
        <>
          <div className="logged-container">
            <div>
              <h2>{state.loginUser} you are logged in</h2>
            </div>
            <br />
            <button type="submit" onClick={() => dispatch({ type: "logOut" })}>
              Log Out
            </button>
          </div>
        </>
      ) : (
        <div className="form-box login">
          <form action="" onSubmit={handleLoginSubmission}>
            <h2>Login</h2>
            <div className="input-box">
              <input
                type="text"
                name="username"
                value={state.loginUser}
                onChange={(e) =>
                  dispatch({
                    type: "inputField",
                    payload: e.target.value,
                    fieldName: "username",
                  })
                }
                placeholder="Username"
                required
              />
              <FaUser className="login-pic" />
            </div>
            <div className="input-box">
              <input
                type="password"
                name="password"
                value={state.loginPassword}
                onChange={(e) =>
                  dispatch({
                    type: "inputField",
                    payload: e.target.value,
                    fieldName: "password",
                  })
                }
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
            <div className={{ color: "red" }}>
              <p>{state.errorMessage}</p>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
