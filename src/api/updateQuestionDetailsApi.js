import Axios from "axios";
const updateQuestion = async (payload)=>{
    try {
        const questionId = payload.questionId
        delete payload.questionId
        payload.choices.map((choice)=> delete choice.optionId)
        return await Axios.put(
            `http://localhost:8080/questions/updateQuestion/${questionId}`,payload
        ).then((res) => {
          return res.data;
        });
      } catch (err) {
        throw new Error(err);
      }
    };
    
export default updateQuestion;
    