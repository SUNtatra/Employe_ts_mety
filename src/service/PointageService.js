import axios from "axios";
import { API_URL } from "../config/config";
import { HandleErrorAxios } from "../utils/HandleError";

const POINTAGE = "pointage";
const LIST = "list";

export const getAllPointage = async() => {
    try{
        const reponseApi = await axios.get(`${API_URL}/${POINTAGE}/${LIST}`);
        const { listePointage } = reponseApi.data;
        return listePointage;
    }
    catch(err){
        HandleErrorAxios(err);
    }

}