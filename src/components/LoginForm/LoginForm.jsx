import { Label } from "@mui/icons-material";
import { Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();
  const history = useHistory()

  const login = (event) => {
    event.preventDefault();

    if (username && password) {
      dispatch({
        type: "LOGIN",
        payload: {
          username: username,
          password: password,
        },
      });
    } else {
      dispatch({ type: "LOGIN_INPUT_ERROR" });
    }
  }; // end login

  return (
    <form onSubmit={login}>
      <Typography variant="h5" component="h1" color="white">
        Login
      </Typography>
      {errors.loginMessage && (
        <h3 className="alert" role="alert">
          {errors.loginMessage}
        </h3>
      )}
      <div>
        <TextField
          type="text"
          name="username"
          label="username"
          size="small"
          required
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          sx={{ backgroundColor: "white", borderRadius: 3, my: 1 }}
        />
      </div>
      <div>
        <TextField
          type="password"
          name="password"
          label="password"
          size="small"
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          sx={{ backgroundColor: "white", borderRadius: 3, my: 1, mb: 2 }}
        />
      </div>
      <div>
        <Button
          type="button"
          color="info"
          onClick={() => {
            history.push("/registration");
          }}
          sx={{mr: 4}}
        >
          Register
        </Button>

        <Button type="submit" variant="contained">
          Login
        </Button>
      </div>
    </form>
  );
}

export default LoginForm;
