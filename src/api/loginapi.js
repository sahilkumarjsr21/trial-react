import Axios from "axios";

const loginRequest = async (userDetails) => {
  try {
    return await Axios.post(
      "http://localhost:8080/users/login",
      userDetails
    ).then((res) => {
      return res.data;
    });
  } catch (err) {
    throw new Error(err);
  }
};

export default loginRequest;
