import React from "react";
import "./Login.scss";
import { Button } from "@material-ui/core";

import { auth, provider } from "../../firebase";
import { useStateValue } from "../../context/StateProvider";
import { setAccessToken, setUser } from "../../context/reducer";

const Login = () => {
  const { dispatch } = useStateValue();
  const signIn = async () => {
    const data = await auth.signInWithPopup(provider);
    if (data) {
      dispatch(setUser(data.user));
      // dispatch(setAccessToken(data.credential?.acessToken));
    }
  };

  return (
    <div className="login">
      <div className="login__text">
        <h2>For sending requests you have to be authorized!</h2>
      </div>
      <Button onClick={signIn} variant="contained" color="primary">
        Sign In
      </Button>
    </div>
  );
};

export default Login;
