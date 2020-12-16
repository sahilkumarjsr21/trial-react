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
    choices: {
        width: '75%'
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
    const difficultyList = ["EASY", "HARD", "MEDIUM"];
    const isCorrectList = ["false", "true"];

    const [onSaveButtonClicked, setSaveButtonClicked] = useState(false);
    const [cancelButtonClicked, setCancelButtonClicked] = useState(false);
    var questionFormData = {
        questionDescription: "",
        difficulty: difficultyList[0],
        questionScore: "",
        choices: []
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
        choiceError1: false,
        choiceError1Message: "",
        choiceError2: false,
        choiceError2Message: "",
        choiceError3: false,
        choiceError3Message: "",
        choiceError4: false,
        choiceError4Message: "",
        optionError1: false,
        optionError1Message: "",
        optionError2: false,
        optionError2Message: "",
        optionError3: false,
        optionError3Message: "",
        optionError4: false,
        optionError4Message: "",
        questionDescriptionMessage: "",
        questionDifficultyMessage: "",
        questionScoreMessage: "",

    });

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

    const [choiceDescription1, setChoiceDescription1] = useState("")
    const [choiceDescription2, setChoiceDescription2] = useState("")
    const [choiceDescription3, setChoiceDescription3] = useState("")
    const [choiceDescription4, setChoiceDescription4] = useState("")

    const [choice1, setChoice1] = useState(false)
    const [choice2, setChoice2] = useState(false)
    const [choice3, setChoice3] = useState(false)
    const [choice4, setChoice4] = useState(false)

    const handleOptionChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case "isCorrect1":
                if (value === "") {
                    setFormErrors((prevState) => ({
                        ...prevState,
                        optionError1: true,
                        optionError1Message: emptyErrorMessage,
                    }));
                }
                else {
                    setFormErrors({
                        ...formErrors,
                        optionError1: false,
                        optionError1Message: ""
                    });
                }
                console.log("value", value);
                console.log("value1 ", value === 'true');
                setChoice1(value === 'true');
                break;
            case "isCorrect2":
                if (value === "") {
                    setFormErrors((prevState) => ({
                        ...prevState,
                        optionError2: true,
                        optionError2Message: emptyErrorMessage,
                    }));
                }
                else {
                    setFormErrors({
                        ...formErrors,
                        optionError2: false,
                        optionError2Message: ""
                    });
                }
                setChoice2(value === 'true');
                break;
            case "isCorrect3":
                if (value === "") {
                    setFormErrors((prevState) => ({
                        ...prevState,
                        optionError3: true,
                        optionError3Message: emptyErrorMessage,
                    }));
                }
                else {
                    setFormErrors({
                        ...formErrors,
                        optionError3: false,
                        optionError3Message: ""
                    });
                }
                setChoice3(value === 'true');
                break;
            case "isCorrect4":
                if (value === "") {
                    setFormErrors((prevState) => ({
                        ...prevState,
                        optionError4: true,
                        optionError4Message: emptyErrorMessage,
                    }));
                }
                else {
                    setFormErrors({
                        ...formErrors,
                        optionError4: false,
                        optionError4Message: ""
                    });
                }
                setChoice4(value === 'true');
                break;
            default:
                break;
        }
    }

    const handleChoice = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case "choice1":
                if (value === "") {
                    setFormErrors((prevState) => ({
                        ...prevState,
                        choiceError1: true,
                        choiceError1Message: emptyErrorMessage,
                    }));
                }
                else {
                    setFormErrors({
                        ...formErrors,
                        choiceError1: false,
                        choiceError1Message: ""
                    });
                }
                setChoiceDescription1(value);
                break;
            case "choice2":
                if (value === "") {
                    setFormErrors((prevState) => ({
                        ...prevState,
                        choiceError2: true,
                        choiceError2Message: emptyErrorMessage,
                    }));
                }
                else {
                    setFormErrors({
                        ...formErrors,
                        choiceError2: false,
                        choiceError2Message: ""
                    });
                }
                setChoiceDescription2(value);
                break;
            case "choice3":
                if (value === "") {
                    setFormErrors((prevState) => ({
                        ...prevState,
                        choiceError3: true,
                        choiceError3Message: emptyErrorMessage,
                    }));
                }
                else {
                    setFormErrors({
                        ...formErrors,
                        choiceError3: false,
                        choiceError3Message: ""
                    });
                }
                setChoiceDescription3(value);
                break;
            case "choice4":
                if (value === "") {
                    setFormErrors((prevState) => ({
                        ...prevState,
                        choiceError4: true,
                        choiceError4Message: emptyErrorMessage,
                    }));
                }
                else {
                    setFormErrors({
                        ...formErrors,
                        choiceError4: false,
                        choiceError4Message: ""
                    });
                }
                setChoiceDescription4(value);
                break;
            default:
                break;
        }
    }
    const handleOnChange = (e) => {
        e.preventDefault();
        setDisableEdit(false);
        const { name, value } = e.target;
        switch (name) {
            case "patientname":
                setFormData({ ...formData, questionDescription: value });
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
            case "difficulty":
                setFormData({ ...formData, difficulty: value });
                if (value === "") {
                    setPatientGenderErrorType("Must be one of the option");
                }
                break;
            case "phonenumber":
                setFormData({ ...formData, questionScore: value });
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
            default:
                break;
        }
    };

    const formValid = (formData, formErrors) => {
        let valid = true;
        let choiceArray = [
            {
                optionDescription: choiceDescription1,
                correct: choice1
            },
            {
                optionDescription: choiceDescription2,
                correct: choice2
            },
            {
                optionDescription: choiceDescription3,
                correct: choice3
            },
            {
                optionDescription: choiceDescription4,
                correct: choice4
            },
        ]
        if(choiceDescription1 !== "" || choiceDescription2 !== "" || choiceDescription3 !== "" || choiceDescription4 !== "") {
            setFormData((prevState) => ({
                ...prevState,
                choices: prevState.choices.push(choiceArray)
            }));
        }
        console.log(choiceArray);
        if (formData.patientName === "") {
            setPatientNameErrorType(emptyErrorMessage);
            valid = false;
        }
        if (formData.phoneNumber === "") {
            setPatientPhoneErrorType(emptyErrorMessage);
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
        if (
            formErrors.patientAddressError ||
            formErrors.patientNameError ||
            formErrors.phoneNumberError ||
            formErrors.patientAddress ||
            formErrors.choiceError1 ||
            formErrors.choiceError2 ||
            formErrors.choiceError3 ||
            formErrors.choiceError4 ||
            formErrors.optionError1 ||
            formErrors.optionError2 ||
            formErrors.optionError3 ||
            formErrors.optionError4
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
        dispatch({ type: ActionTypes.DELETE_QUESTION_DETAILS_PROGRESS, payload: formData.questionId })
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
    console.log("formData", formData)
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
                                rows={3}
                                defaultValue={formData.questionDescription}
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
                                    name="difficulty"
                                    defaultValue={formData.difficulty === '' ? difficultyList[0] : formData.difficulty}
                                    id="gender"
                                    onChange={handleOnChange}
                                    inputProps={{
                                        name: "difficulty",
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
                                defaultValue={formData.questionScore}
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
                        <Grid item className={classes.choices}>
                            <TextField
                                label="Choice 1 Description"
                                variant="outlined"
                                fullWidth
                                multiline
                                required
                                id="choice1"
                                name="choice1"
                                defaultValue={formData.choices[0].optionDescription}
                                onChange={handleChoice}
                                error={formErrors.choiceError1}
                                helperText={formErrors.choiceError1Message}
                            />
                        </Grid>
                        <Grid item>
                            <FormControl variant="outlined" className={classes.gender}>
                                <InputLabel htmlFor="type-native-simple" required>is Correct</InputLabel>
                                <Select
                                    native
                                    label="Option is Correct"
                                    name="isCorrect1"
                                    id="gender"
                                    defaultValue={formData.choices[0].correct}
                                    onChange={handleOptionChange}
                                    inputProps={{
                                        name: "isCorrect1",
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
                        <Grid item className={classes.choices}>
                            <TextField
                                label="Choice 2 Description"
                                variant="outlined"
                                multiline
                                fullWidth
                                required
                                id="choice2"
                                name="choice2"
                                defaultValue={formData.choices[1].optionDescription}
                                error={formErrors.choiceError2}
                                onChange={handleChoice}
                                helperText={formErrors.choiceError2Message}
                            />
                        </Grid>
                        <Grid item>
                            <FormControl variant="outlined" className={classes.gender}>
                                <InputLabel htmlFor="type-native-simple" required>is Correct</InputLabel>
                                <Select
                                    native
                                    label="Option is Correct"
                                    name="isCorrect2"
                                    id="gender"
                                    defaultValue={formData.choices[1].correct}
                                    onChange={handleOptionChange}
                                    inputProps={{
                                        name: "isCorrect2",
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
                        <Grid item className={classes.choices}>
                            <TextField
                                label="Choice 3 Description"
                                variant="outlined"
                                multiline
                                fullWidth
                                required
                                id="choice3"
                                name="choice3"
                                defaultValue={formData.choices[2].optionDescription}
                                error={formErrors.choiceError3}
                                helperText={formErrors.choiceError3Message}
                                onChange={handleChoice}
                            />
                        </Grid>
                        <Grid item>
                            <FormControl variant="outlined" className={classes.gender}>
                                <InputLabel
                                    htmlFor="type-native-simple" required>is Correct</InputLabel>
                                <Select
                                    native
                                    label="Option is Correct"
                                    name="isCorrect3"
                                    id="gender"
                                    defaultValue={formData.choices[2].correct}
                                    onChange={handleOptionChange}
                                    inputProps={{
                                        name: "isCorrect3",
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
                        <Grid item className={classes.choices}>
                            <TextField
                                label="Choice 4 Description"
                                variant="outlined"
                                multiline
                                fullWidth
                                required
                                id="choice4"
                                name="choice4"
                                defaultValue={formData.choices[3].optionDescription}
                                error={formErrors.choiceError4}
                                helperText={formErrors.choiceError4Message}
                                onChange={handleChoice}
                            />
                        </Grid>
                        <Grid item s={12}>
                            <FormControl variant="outlined" className={classes.gender}>
                                <InputLabel defaultValue={formData.choices[3].isCorrect ? formData.choices[3].isCorrect : isCorrectList[0]}
                                    htmlFor="type-native-simple" required>is Correct</InputLabel>
                                <Select
                                    native
                                    label="Option is Correct"
                                    name="isCorrect4"
                                    id="gender"
                                    defaultValue={formData.choices[3].correct}
                                    onChange={handleOptionChange}
                                    inputProps={{
                                        name: "isCorrect4",
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
                </form>
            </Container>
        );
    }
}
