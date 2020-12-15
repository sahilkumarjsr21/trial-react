import Axios from "axios";

const signUpRequest = async (userDetails) => {
  delete userDetails.reEnterPassword;
  userDetails.roles =["ROLE_ADMIN"];
  try {
    return await Axios.post(
      "http://localhost:8080/users/signUp",
      userDetails
    ).then((res) => {
      return res.data;
    });
  } catch (err) {
    throw new Error(err);
  }
};

export default signUpRequest;
