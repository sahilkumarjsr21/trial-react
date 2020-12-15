import React, { useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import * as ActionTypes from '../redux/actions/ActionTypes'
import {
  makeStyles,
  CssBaseline,
  Container,
  Typography,
  TextField,
  Button,
  InputAdornment,
  Avatar,
} from "@material-ui/core";
import { RemoveRedEye, EnhancedEncryptionRounded } from "@material-ui/icons";
import SnackbarComponent from "./SnackBar";
const useStyles = makeStyles((theme) => ({
  paperRoot: {
    marginTop: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  icon: {
    margin: theme.spacing(1),
    backgroundColor: "#1de9b6",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submitBtn: {
    margin: theme.spacing(2, 0, 2),
    backgroundColor: "#0277bd",
  },
  eye: {
    cursor: "pointer",
  },
}));

export default function LoginComponent() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const emailRegex = RegExp(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  const passwordRegex = RegExp(
    "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|]).{8,32}$"
  );

  const [passwordType, setPasswordType] = useState("password");
  const [formErrors, setFormErrors] = useState({
    emailError: false,
    passwordError: false,
    emailErrorMessage: "",
    passwordErrorMessage: "",
  });
  const [formData, setFormData] = useState({ email: "", password: "" });
 

  const togglePasswordMask = () => {
    setPasswordType((prevstate) =>
      prevstate === "text" ? "password" : "text"
    );
  };

  const formValid = (formData, formErrors) => {
    var valid = true;
    if (formData.email === "" ) {
        setEmailErrorType(`Can't be Empty`)
      valid=false
    } 
    if(formData.password === ""){
        setPasswordErrorType(`Can't Be Empty`)
        valid =false
    }
    else if (
      formErrors.emailError !== false ||
      formErrors.passwordError !== false
    ) {
      valid=false
    }
    return valid;
  };
  
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (formValid(formData, formErrors)) {
      dispatch({type: ActionTypes.LOGIN_USER_PROGRESS , payload: formData });
    }
  };

  const setEmailErrorType = (message) => {
    setFormErrors((prevstate)=>({
      ...prevstate,
      emailError: true,
      emailErrorMessage: message,
    }));
  };

  const setPasswordErrorType = (message) => {
    setFormErrors((prevstate)=>({
      ...prevstate,
      passwordError: true,
      passwordErrorMessage: message,
    }));
  };
  const handleOnChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    switch (name) {
      case "email":
        setFormData({ ...formData, email: value });
        if (value === "") {
          setEmailErrorType("Email is Empty");
        } else if (!emailRegex.test(value) === true) {
          setEmailErrorType("Invalid Email");
        } else {
          setFormErrors({
            ...formErrors,
            emailError: false,
            emailErrorMessage: "",
          });
        }
        break;
      case "password":
        setFormData({ ...formData, password: value });
        if (value === "") {
          setPasswordErrorType("Password is Empty");
        } else {
          setFormErrors({
            ...formErrors,
            passwordError: false,
            passwordErrorMessage: "",
          });
        }
        break;
      default:
        break;
    }
  };
  const selector = useSelector((state)=>state.loginReducer.token)
  return (
    <React.Fragment>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paperRoot}>
        <Avatar className={classes.icon}>
          <EnhancedEncryptionRounded />
        </Avatar>
        <Typography variant="h5"> Sign In</Typography>
        <form className={classes.form} noValidate onSubmit={handleOnSubmit}>
          <TextField
            variant="outlined"
            fullWidth
            margin="normal"
            required={true}
            name="email"
            label="Email Address"
            type="email"
            id="email"
            error={formErrors.emailError}
            onChange={handleOnChange}
            helperText={formErrors.emailErrorMessage}
          />
          <TextField
            variant="outlined"
            fullWidth
            margin="normal"
            error={formErrors.passwordError}
            required={true}
            helperText={formErrors.passwordErrorMessage}
            name="password"
            label="Password"
            type={passwordType}
            id="password"
            onChange={handleOnChange}
            autoComplete="current-password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <RemoveRedEye
                    className={classes.eye}
                    onClick={togglePasswordMask}
                  />
                </InputAdornment>
              ),
            }}
          />
          <Button
            variant="contained"
            color="primary"
            className={classes.submitBtn}
            fullWidth={true}
            size="large"
            onClick={handleOnSubmit}
          >
            sign in
          </Button>
        </form>
      </div>
    </Container>
    {selector ==='fail'?<SnackbarComponent open ={true} severity = 'error' text = "Invalid credentials"/>:null}
    </React.Fragment>
  );
}
