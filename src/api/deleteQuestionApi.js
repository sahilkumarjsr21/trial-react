import Axios from "axios";

const deleteQuestion = async (id)=>{
    try {
        return await Axios.delete(
          `http://localhost:8080/questions/deleteQuestion/${id}`,
        ).then((res) => {
        if(res.status === 200)
            return true
        else{
            throw new Error();
        }
        });
      } catch (err) {
        throw new Error(err);
      }
    };
    
export default deleteQuestion;
    