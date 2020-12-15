import Axios from "axios";
const updateQuestion = async (payload)=>{
    try {
        return await Axios.post(
            `http://localhost:8080/questions/updateQuestion/${payload.id}`,payload
        ).then((res) => {
          return res.data;
        });
      } catch (err) {
        throw new Error(err);
      }
    };
    
export default updateQuestion;
    