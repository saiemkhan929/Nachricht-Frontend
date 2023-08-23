import React, { useState } from "react";
import "./signIn.scss";
import { connect } from "react-redux";
import constants from "./../../store/constants";
import { Redirect } from "react-router-dom";
import { register, login } from "./../../firebase/firebaseActions";

function SignIn(props) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isReg, setIsReg] = useState(true);
  const [msg, setmsg] = useState("");

  const submitRegister = (e) => {
    e.preventDefault();

    let res = props
      .reg({
        name,
        email,
        password,
      })
      .then((d) => {
        console.log(d.err);
        if (d.err == false) {
          setmsg(<span className="success-msg">Successfully registered</span>);
        } else {
          setmsg(<span className="err-msg">{d.err}</span>);
        }
      })
      .catch((e) => console.log(e));
  };

  const submitLogin = (e) => {
    e.preventDefault();

    props
      .log({
        email,
        password,
      })
      .then((d) =>
        setmsg(<span className="success-msg">Successfully logged in</span>)
      )
      .catch((err) => setmsg(<span className="err-msg">Login failed</span>));
  };

  const recorder = (e) => {
    switch (e.target.name) {
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;

      case "name":
        setName(e.target.value);
        break;
    }
  };

  if (props.auth.email) return <Redirect to="/chats" />;

  return (
    <div className="signup-wrapper">
      <div className="signup">
        <div className="signup-connect">
          <h1>Create your account</h1>
          <h6>(This feature under developement)</h6>
          <a href="#" className="btn btn-social btn-facebook">
            <i className="fa fa-facebook"></i> Sign in with Facebook
          </a>
          <a href="#" className="btn btn-social btn-twitter">
            <i className="fa fa-twitter"></i> Sign in with Twitter
          </a>
          <a href="#" className="btn btn-social btn-google">
            <i className="fa fa-google"></i> Sign in with Google
          </a>
          <a href="#" className="btn btn-social btn-linkedin">
            <i className="fa fa-linkedin"></i> Sign in with Linkedin
          </a>
        </div>
        <div className="signup-classic">
          <h2>
            Or{" "}
            {isReg ? (
              <span style={{ color: "#e08106" }}>Register</span>
            ) : (
              <span style={{ color: "#00a1db" }}>Login</span>
            )}
          </h2>

          {/* Register */}

          <form
            className="form"
            onSubmit={(e) => {
              isReg ? submitRegister(e) : submitLogin(e);
            }}
          >
            {isReg && (
              <fieldset className="username">
                <input
                  type="text"
                  placeholder="username"
                  name="name"
                  onChange={(e) => recorder(e)}
                />
              </fieldset>
            )}

            <fieldset className="email">
              <input
                value={email}
                type="email"
                placeholder="email"
                name="email"
                onChange={(e) => recorder(e)}
              />
            </fieldset>
            <fieldset className="password">
              <input
                value={password}
                type="password"
                placeholder="password"
                name="password"
                onChange={(e) => recorder(e)}
              />
            </fieldset>
            {isReg ? (
              <button type="submit" className="btn">
                Register
              </button>
            ) : (
              <button type="submit" className="btn">
                Login
              </button>
            )}
          </form>
          <div className="form_console">{msg}</div>

          <div className="form-switcher">
            <button
              className="register"
              onClick={() => {
                setIsReg(true);
              }}
            >
              Register
            </button>
            <button
              className="login"
              onClick={() => {
                setIsReg(false);
              }}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const MapStateToProps = (state, props) => {
  return state;
};

const MapActionToProps = (dispatch, props) => {
  return {
    reg: (data) => {
      return dispatch(register(data));
    },

    log: (data) => {
      return dispatch(login(data));
    },
  };
};

export default connect(MapStateToProps, MapActionToProps)(SignIn);
