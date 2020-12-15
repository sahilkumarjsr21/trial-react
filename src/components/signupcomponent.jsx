import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as ActionTypes from "../redux/actions/ActionTypes";
import {
    makeStyles,
    CssBaseline,
    Container,
    Typography,
    TextField,
    Button,
    InputAdornment,
    Avatar,
    Grid,
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

export default function SignUpComponent() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const emailRegex = RegExp(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    const passwordRegex = RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})"
    );

    const [passwordType, setPasswordType] = useState("password");
    const [repasswordType, setRePasswordType] = useState("password");
    const [formErrors, setFormErrors] = useState({
        firstNameError: false,
        lastNameError: false,
        emailError: false,
        passwordError: false,
        reEnterPasswordError: false,
        firstNameMessage: "",
        lastNameMessage: "",
        emailMessage: "",
        passwordMessage: "",
        reEnterPasswordMessage: "",
    });
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        reEnterPassword: "",
    });

    const togglePasswordMask = () => {
        setPasswordType((prevstate) =>
            prevstate === "text" ? "password" : "text"
        );
    };
    const toggleRePasswordMask = () => {
        setRePasswordType((prevstate) =>
            prevstate === "text" ? "password" : "text"
        );
    };

    const setFirstNameErrorType = (message) => {
        setFormErrors((prevstate) => ({
            ...prevstate,
            firstNameError: true,
            firstNameMessage: message,
        }));
    };

    const setLastNameErrorType = (message) => {
        setFormErrors((prevstate) => ({
            ...prevstate,
            lastNameError: true,
            lastNameMessage: message,
        }));
    };
    const setEmailErrorType = (message) => {
        setFormErrors((prevstate) => ({
            ...prevstate,
            emailError: true,
            emailMessage: message,
        }));
    };
    const setPasswordErrorType = (message) => {
        setFormErrors((prevstate) => ({
            ...prevstate,
            passwordError: true,
            passwordMessage: message,
        }));
    };
    const setReEnterPasswordErrorType = (message) => {
        setFormErrors((prevstate) => ({
            ...prevstate,
            reEnterPasswordError: true,
            reEnterPasswordMessage: message,
        }));
    };
    const handleOnChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        switch (name) {
            case "firstName":
                setFormData({ ...formData, firstName: value });
                if (value === "") {
                    setFirstNameErrorType("First Name is Empty");
                } else if (value.length < 3) {
                    setFirstNameErrorType("Must be of length 3");
                } else {
                    setFormErrors({
                        ...formErrors,
                        firstNameError: false,
                        firstNameMessage: "",
                    });
                }
                break;
            case "lastName":
                setFormData({ ...formData, lastName: value });
                if (value === "") {
                    setLastNameErrorType("last Name is Empty");
                } else {
                    setFormErrors({
                        ...formErrors,
                        lastNameError: false,
                        lastNameMessage: "",
                    });
                }
                break;
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
                        emailMessage: "",
                    });
                }
                break;
            case "password":
                setFormData({ ...formData, password: value });
                if (value.length < 8) {
                    setPasswordErrorType("Password must be atleast 8 characters");
                } else if (!passwordRegex.test(value)) {
                    setPasswordErrorType(
                        `1) Your password must be between 8 and 30 characters.`
                    );
                } else {
                    setFormErrors({
                        ...formErrors,
                        passwordError: false,
                        passwordMessage: "",
                    });
                }
                break;
            case "reEnterPassword":
                setFormData({...formData,reEnterPassword:value})
                if (value === "") {
                    setReEnterPasswordErrorType(`Can't be Empty`);
                } else if (value !== formData.password) {
                    setReEnterPasswordErrorType(`Password must match`);
                } else {
                    setFormErrors({
                        ...formErrors,
                        reEnterPasswordError: false,
                        reEnterPasswordMessage: "",
                    });
                }
                break;
            default:
                break;
        }
    };

    const formValid = (formErrors, formData) => {
        var valid = true;
        if (formData.firstName === "") {
            setFormErrors((prevstate) => ({
                ...prevstate,
                firstNameError: true,
                firstNameMessage: `Can't Be Empty`,
            }));
            valid = false;
        }
        if (formData.lastName === "") {
            setFormErrors((prevstate) => ({
                ...prevstate,
                lastNameError: true,
                lastNameMessage: `Can't Be Empty`,
            }));
            valid = false;
        }
        if (formData.email === "") {
            setFormErrors((prevstate) => ({
                ...prevstate,
                emailError: true,
                emailMessage: `Can't Be Empty`,
            }));
            valid = false;
        }
        if (formData.password === "") {
            setFormErrors((prevstate) => ({
                ...prevstate,
                passwordError: true,
                passwordMessage: `Can't Be Empty`,
            }));
            valid = false;
        }
        if (formData.reEnterPassword === "") {
            setFormErrors((prevstate) => ({
                ...prevstate,
                reEnterPasswordError: true,
                reEnterPasswordMessage: `Can't Be Empty`,
            }));
            valid = false;
        } else if (
            formErrors.emailError === true ||
            formErrors.passwordError === true ||
            formErrors.firstNameError === true ||
            formErrors.lastNameError === true ||
            formErrors.passwordError === true ||
            formErrors.reEnterPassword === true
        ) {
            valid = false;
        }
        return valid;
    };
    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (formValid(formErrors, formData)) {
            dispatch({ type: ActionTypes.SIGN_UP_USER_PROGRESS,payload: formData });
        }
    };
    const selector = React.useSelector((state)=> state.signUpReducer.token)
    return (
        <React.Fragment>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paperRoot}>
                    <Avatar className={classes.icon}>
                        <EnhancedEncryptionRounded />
                    </Avatar>
                    <Typography variant="h5"> Sign Up</Typography>
                    <form className={classes.form} noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs>
                                <TextField
                                    autoComplete="fname"
                                    name="firstName"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                    error={formErrors.firstNameError}
                                    helperText={formErrors.firstNameMessage}
                                    onChange={handleOnChange}
                                />
                            </Grid>
                            <Grid item xs>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    error={formErrors.lastNameError}
                                    helperText={formErrors.lastNameMessage}
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="lname"
                                    onChange={handleOnChange}
                                />
                            </Grid>
                        </Grid>
                        <TextField
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            required={true}
                            error={formErrors.emailError}
                            helperText={formErrors.emailMessage}
                            name="email"
                            label="Email Address"
                            type="email"
                            id="email"
                            onChange={handleOnChange}
                        />
                        <TextField
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            required={true}
                            error={formErrors.passwordError}
                            helperText={formErrors.passwordMessage}
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
                        <TextField
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            required={true}
                            error={formErrors.reEnterPasswordError}
                            helperText={formErrors.reEnterPasswordMessage}
                            name="reEnterPassword"
                            label="Re-enter Password"
                            type={repasswordType}
                            id="reEnterPassword"
                            autoComplete="current-password"
                            onChange={handleOnChange}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <RemoveRedEye
                                            className={classes.eye}
                                            onClick={toggleRePasswordMask}
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
                            sign Up
                        </Button>
                    </form>
                </div>
            </Container>
            {selector ==='fail'?<SnackbarComponent open ={true} severity = 'error' text = "Sign Up Failed"/>:null}
        </React.Fragment>
    );
}
