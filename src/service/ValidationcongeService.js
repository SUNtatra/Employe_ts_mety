import axios from "axios";
import { API_URL } from "../config/config";
import { HandleErrorAxios } from "../utils/HandleError";

const VALIDATIONCONGE = "Validationconge";
const LIST = "list";

export const getAllValidationconge = async() => {
    try{
        const reponseApi = await axios.get(`${API_URL}/${VALIDATIONCONGE}/${LIST}`);
        const { listeValidationconge } = reponseApi.data;
        return listeValidationconge;
    }
    catch(err){
        HandleErrorAxios(err);
    }

}