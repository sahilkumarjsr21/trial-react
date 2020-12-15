import Axios from "axios";
const addquestion = async (payload)=>{
    try {
        return await Axios.post(
            `http://localhost:8080/questions/createQuestion`,payload
        ).then((res) => {
          return res.data;
        });
      } catch (err) {
        throw new Error(err);
      }
    };
    
export default addquestion;