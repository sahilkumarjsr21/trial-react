import Axios from "axios";

const fetchQuestionDetails = async ()=>{
    try {
        return await Axios.get(
          "http://localhost:8080/questions/",
        ).then((res) => {
          return res.data;
        });
      } catch (err) {
        throw new Error(err);
      }
    };
    
export default fetchQuestionDetails;
    