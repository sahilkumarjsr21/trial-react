import React from "react";
import * as ActionTypes from '../redux/actions/ActionTypes'
import {
    makeStyles,
    CssBaseline,
    Container,
    Typography,
    TextField,
    Select,
    InputLabel,
    Grid,
    FormControl,
    Button,
    Box,
} from "@material-ui/core";
import { useState } from "react";
import { useDispatch } from 'react-redux'
import DisplayQuestion from "./displayQuestionComponent";
const useStyles = makeStyles((theme) => ({
    form: {
        width: "100%",
        marginTop: theme.spacing(2),
    },
    gender: {
        width: "100%",
    },
    grid: {
        marginBottom: theme.spacing(1),
    },
    header: {
        display: "flex",
        marginTop: theme.spacing(10)
    },
    title: {
        flexGrow: 1,
    },
    button: {
        marginRight: theme.spacing(2),
    },
}));

export default function CreateQuestion(props) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const emptyErrorMessage = `Can't be empty`;
    const phoneNumberRegexp = RegExp(
        /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/
    )
    
    const [onSaveButtonClicked, setSaveButtonClicked] = useState(false);
    const [cancelButtonClicked, setCancelButtonClicked] = useState(false);
    var questionFormData = {
        questionDescription: "",
        difficulty: "",
        questionScore: "",
        choices: [],
    };
    if (props.questionDetails !== null) {
        questionFormData = props.questionDetails;
    }

    const [formData, setFormData] = useState(
        props.questionDetails !== null ? props.questionDetails : questionFormData
    );
    const [formErrors, setFormErrors] = useState({
        questionDescriptionError: false,
        questionDifficultyError: false,
        questionScoreError: false,
        questionOptionsError: false,
        questionDescriptionMessage: "",
        questionDifficultyMessage: "",
        questionScoreMessage: "",
        
    });
    const difficultyList = ["", `HARD`, `EASY`, `MEDIUM`];
    const isCorrectList = ["", "true", "false"]
    
    const [disableEdit, setDisableEdit] = useState(true);
    React.useEffect(() => {
        return () => {
            setCancelButtonClicked(false)
        }
    }, [cancelButtonClicked])
   

    const setPatientNameErrorType = (message) => {
        setFormErrors((prevState) => ({
            ...prevState,
            patientNameError: true,
            patientNameMessage: message,
        }));
    };
    const setPatientPhoneErrorType = (message) => {
        setFormErrors((prevState) => ({
            ...prevState,
            phoneNumberError: true,
            phoneNumberMessage: message,
        }));
    };
    const setPatientGenderErrorType = (message) => {
        setFormErrors((prevState) => ({
            ...prevState,
            phoneNumberError: true,
            phoneNumberMessage: message,
        }));
    };
    
    
    const handleOnChange = (e) => {
        e.preventDefault();
        setDisableEdit(false);
        const { name, value } = e.target;
        switch (name) {
            case "patientname":
                setFormData({ ...formData, patientName: value });
                if (value === "") {
                    setPatientNameErrorType(emptyErrorMessage);
                } else if (value.length < 3) {
                    setPatientNameErrorType("Must be atleast of length 3");
                } else {
                    setFormErrors({
                        ...formErrors,
                        patientNameError: false,
                        patientNameMessage: "",
                    });
                }
                break;
            case "gender":
                setFormData({ ...formData, gender: value });
                if (value === "") {
                    setPatientGenderErrorType("Must be one of the option");
                }
                break;
            case "phonenumber":
                setFormData({ ...formData, phoneNumber: value });
                if (value === "") {
                    setPatientPhoneErrorType(emptyErrorMessage);
                } else {
                    setFormErrors({
                        ...formErrors,
                        phoneNumberError: false,
                        phoneNumberMessage: "",
                    });
                }
                break;
            case "patientaddress":
                setFormData({ ...formData, patientAddress: value });
                if (value === "") {
                    setFormErrors({
                        ...formErrors,
                        patientAddressError: true,
                        patientAddressMessage: emptyErrorMessage,
                    });
                } else {
                    setFormErrors({
                        ...formErrors,
                        patientAddressError: false,
                        patientAddressMessage: "",
                    });
                }
                break;
            case "choice1description":
                setFormData({...formData, })
                break;
            
            default:
                break;
        }
    };

    const formValid = (formData, formErrors) => {
        let valid = true;
        if (formData.patientName === "") {
            setPatientNameErrorType(emptyErrorMessage);
            valid = false;
        }
        if (formData.phoneNumber === "") {
            setPatientPhoneErrorType(emptyErrorMessage);
            valid = false;
        }
        if (formData.heartRate === "") {
            setFormErrors((prevState) => ({
                ...prevState,
                heartRateError: true,
                heartRateMessage: emptyErrorMessage,
            }));
            valid = false;
        }
        if (formData.patientAddress === "") {
            setFormErrors((prevState) => ({
                ...prevState,
                patientAddressError: true,
                patientAddressMessage: emptyErrorMessage,
            }));
            valid = false;
        }
        if (formData.accommodation === "" || formData.accommodation === null) {
            setFormErrors((prevState) => ({
                ...prevState,
                accommodationError: true,
                accommodationMessage: emptyErrorMessage,
            }));
            valid = false;
        }
        else {
            setFormErrors((prevState) => ({
                ...prevState,
                accommodationError: false,
                accommodationMessage: '',
            }));
            valid = true
        }
        if (formData.allergies === "") {
            setFormErrors((prevState) => ({
                ...prevState,
                allergiesError: true,
                allergiesMessage: emptyErrorMessage,
            }));
            valid = false;
        }
        if (formData.temperature === "") {
            setFormErrors((prevState) => ({
                ...prevState,
                temperatureError: true,
                temperatureMessage: emptyErrorMessage,
            }));
            valid = false;
        }
        if (formData.heartRate === "") {
            setFormErrors((prevState) => ({
                ...prevState,
                heartRateError: true,
                heartRateMessage: emptyErrorMessage,
            }));
            valid = false;
        }
        if (formData.bloodPressure === "") {
            setFormErrors((prevState) => ({
                ...prevState,
                bloodPressureError: true,
                bloodPressureMessage: emptyErrorMessage,
            }));
        }
        if (formData.physicianName === "") {
            setFormErrors((prevState) => ({
                ...prevState,
                physicianNameError: true,
                physicianNameMessage: emptyErrorMessage,
            }));
        }
        if (formData.physicianType === "" || formData.physicianType === null) {
            setFormErrors((prevState) => ({
                ...prevState,
                physicianTypeError: true,
                physicianTypeMessage: emptyErrorMessage,
            }));
            valid = false;
        }
        else {
            setFormErrors((prevState) => ({
                ...prevState,
                physicianTypeError: false,
                physicianTypeMessage: ``,
            }));
            valid = true
        }
        if (formData.physicianPhone === "") {
            setFormErrors((prevState) => ({
                ...prevState,
                physicianPhoneError: true,
                physicianPhoneMessage: emptyErrorMessage,
            }));
        }
        if (formData.hospitalVisited === "" || formData.hospitalVisited === null) {
            setFormErrors((prevState) => ({
                ...prevState,
                hospitalVisitedError: true,
                hospitalVisitedMessage: emptyErrorMessage,
            }));
            valid = false;
        }
        else {
            setFormErrors((prevState) => ({
                ...prevState,
                hospitalVisitedError: false,
                hospitalVisitedMessage: '',
            }));
        }
        if (formData.caseType === "" || formData.caseType === null) {
            setFormErrors((prevState) => ({
                ...prevState,
                caseTypeError: true,
                caseTypeMessage: emptyErrorMessage,
            }));
            valid = false;
        }
        else {
            setFormErrors((prevState) => ({
                ...prevState,
                caseTypeError: false,
                caseTypeMessage: ``,
            }));
            valid = true
        }
        if (
            formErrors.accommodationError ||
            formErrors.allergiesError ||
            formErrors.bloodPressureError ||
            formErrors.caseTypeError ||
            formErrors.heartRateError ||
            formErrors.patientAddressError ||
            formErrors.patientNameError ||
            formErrors.phoneNumberError ||
            formErrors.physicianNameError ||
            formErrors.physicianPhoneError ||
            formErrors.physicianTypeError ||
            formErrors.temperatureError ||
            formErrors.hospitalVisitedError ||
            formErrors.patientAddress
        ) {
            valid = false;
        }
        return valid;
    };

    const handlePatientAction = (e) => {
        e.preventDefault();
        if (formValid(formData, formErrors)) {
            setSaveButtonClicked({ onSaveButtonClicked: true })
            dispatch({ type: ActionTypes.SAVE_QUESTION_DETAILS_PROGRESS, payload: formData })
            dispatch({ type: ActionTypes.SET_CREATE_QUESTION_FALSE, payload: false })
        }
    };
    const handleDeletePatient = (e) => {
        e.preventDefault();
        setCancelButtonClicked(true);
        dispatch({ type: ActionTypes.DELETE_QUESTION_DETAILS_PROGRESS, payload: formData.id })
    };
    const handleCancel = (e) => {
        e.preventDefault();
        setSaveButtonClicked({ onSaveButtonClicked: true })
    }

    const handleEditPatient = (e) => {
        e.preventDefault();
        if (formValid(formData, formErrors)) {
            dispatch({ type: ActionTypes.UPDATE_QUESTION_DETAILS_PROGRESS, payload: formData })
            setDisableEdit(true);
        }

    };
    if (onSaveButtonClicked) {
        return (
            <React.Fragment>
                <DisplayQuestion />
            </React.Fragment>
        );
    } else {
        return (
            <Container component="main">
                <CssBaseline />
                <div className={classes.header}>
                    <Typography variant="h6" className={classes.title}>
                        Add Question Details
          </Typography>
                    <Box display={props.display ? "none" : "inline"}>
                        <Button
                            variant="outlined"
                            onClick={handlePatientAction}
                            className={classes.button}
                        >
                            Save
            </Button>

                    </Box>
                    <Box display={props.display ? "none" : "inline"}>
                        <Button
                            variant="outlined"
                            onClick={handleCancel}
                            className={classes.button}
                        >
                            Cancel
            </Button>

                    </Box>
                    <Box display={props.display ? props.display : "none"}>
                        <Button
                            variant="outlined"
                            onClick={handleEditPatient}
                            className={classes.button}
                            disabled={disableEdit}
                        >
                            Save
            </Button>
                        <Button
                            variant="outlined"
                            onClick={handleDeletePatient}
                            className={classes.button}
                        >
                            Delete
            </Button>
                    </Box>
                </div>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2} className={classes.grid}>
                        <Grid item xs={12}>
                            <TextField  // Question Description
                                autoComplete="patientname"
                                name="patientname"
                                variant="outlined"
                                required
                                fullWidth
                                multiline
                                id="patientname"
                                label="Question Description"
                                error={formErrors.patientNameError}
                                helperText={formErrors.patientNameMessage}
                                onChange={handleOnChange}
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} className={classes.grid}>
                        <Grid item>
                            <FormControl variant="outlined" className={classes.gender}>   
                                <InputLabel htmlFor="type-native-simple">Difficulty</InputLabel>
                                <Select             // difficulty
                                    native
                                    label="Difficulty"
                                    name="gender"
                                    id="gender"
                                    onChange={handleOnChange}
                                    inputProps={{
                                        name: "gender",
                                        id: "type-native-simple",
                                    }}
                                >
                                    {difficultyList.map((list) => (
                                        <option value={list}>{list}</option>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item>
                            <TextField                          // question score
                                autoComplete="questionScore"
                                name="phonenumber"
                                variant="outlined"
                                required
                                fullWidth
                                type="number"
                                id="phonenumber"
                                label="Question Score"
                                error={formErrors.phoneNumberError}
                                helperText={formErrors.phoneNumberMessage}
                                onChange={handleOnChange}
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} className={classes.grid}>
                        <Grid item>
                            <Typography>Enter the Choice Details</Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} className={classes.grid}>
                        <Grid item>
                            <TextField
                                label="Choice 1 Description"
                                variant="outlined"
                                multiline
                                error={formErrors.phoneNumberError}
                                helperText={formErrors.phoneNumberMessage}
                                onChange={handleOnChange}
                            />
                        </Grid>
                        <Grid item>
                            <FormControl variant="outlined" className={classes.gender}>
                                <InputLabel htmlFor="type-native-simple">is Correct</InputLabel>
                                <Select
                                    native
                                    label="Option is Correct"
                                    name="gender"
                                    id="gender"
                                    onChange={handleOnChange}
                                    inputProps={{
                                        name: "gender",
                                        id: "type-native-simple",
                                    }}
                                >
                                    {isCorrectList.map((list) => (
                                        <option value={list}>{list}</option>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} className={classes.grid}>
                        <Grid item>
                            <TextField
                                label="Choice 2 Description"
                                variant="outlined"
                                multiline
                                error={formErrors.phoneNumberError}
                                helperText={formErrors.phoneNumberMessage}
                                onChange={handleOnChange}
                            />
                        </Grid>
                        <Grid item>
                            <FormControl variant="outlined" className={classes.gender}>
                                <InputLabel htmlFor="type-native-simple">is Correct</InputLabel>
                                <Select
                                    native
                                    label="Option is Correct"
                                    name="gender"
                                    id="gender"
                                    onChange={handleOnChange}
                                    inputProps={{
                                        name: "gender",
                                        id: "type-native-simple",
                                    }}
                                >
                                    {isCorrectList.map((list) => (
                                        <option value={list}>{list}</option>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid container spacing={2} className={classes.grid}>
                            <Grid item>
                                <TextField
                                    label="Choice 3 Description"
                                    variant="outlined"
                                    multiline
                                    error={formErrors.phoneNumberError}
                                    helperText={formErrors.phoneNumberMessage}
                                    onChange={handleOnChange}
                                />
                            </Grid>
                            <Grid item>
                                <FormControl variant="outlined" className={classes.gender}>
                                    <InputLabel htmlFor="type-native-simple">is Correct</InputLabel>
                                    <Select
                                        native
                                        label="Option is Correct"
                                        name="gender"
                                        id="gender"
                                        onChange={handleOnChange}
                                        inputProps={{
                                            name: "gender",
                                            id: "type-native-simple",
                                        }}
                                    >
                                        {isCorrectList.map((list) => (
                                            <option value={list}>{list}</option>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid container spacing={2} className={classes.grid}>
                                <Grid item>
                                    <TextField
                                        label="Choice 4 Description"
                                        variant="outlined"
                                        multiline
                                        error={formErrors.phoneNumberError}
                                        helperText={formErrors.phoneNumberMessage}
                                        onChange={handleOnChange}
                                    />
                                </Grid>
                                <Grid item s={12}>
                                    <FormControl variant="outlined" className={classes.gender}>
                                        <InputLabel htmlFor="type-native-simple">is Correct</InputLabel>
                                        <Select
                                            native
                                            label="Option is Correct"
                                            name="gender"
                                            id="gender"
                                            onChange={handleOnChange}
                                            inputProps={{
                                                name: "gender",
                                                id: "type-native-simple",
                                            }}
                                        >
                                            {isCorrectList.map((list) => (
                                                <option value={list}>{list}</option>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </form>
            </Container>
        );
    }
}
