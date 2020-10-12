import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import React from "react";
import "./Login.css";

function Login() {
  const signIn = (event) => {
    // do clever google login
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/sco/thumb/9/98/Discord_logo.svg/1200px-Discord_logo.svg.png"
          alt=""
        />
      </div>
      <Button onClick={signIn}>SignIn</Button>
    </div>
  );
}

export default Login;
