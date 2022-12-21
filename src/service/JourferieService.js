import axios from "axios";
import { API_URL } from "../config/config";
import { HandleErrorAxios, messageInformation } from "../utils/HandleError";

const JOURFERIE = "jourferie";
const LIST = "list";
const ADD = "add";

export const getAllJourferie = async() => {
    try{
        const reponseApi = await axios.get(`${API_URL}/${JOURFERIE}/${LIST}`);
        const { listeJourFerie } = reponseApi.data;
        return listeJourFerie;
    }
    catch(err){
        HandleErrorAxios(err);
    }

}

export const addJourFerieIntoDatabase = async (jourferie) => {
    try{
        const reponseApi = await axios.post(`${API_URL}/${JOURFERIE}/${ADD}`, {...jourferie})
        // console.log(reponseApi.data)
        const {message } = reponseApi.data;
        messageInformation(message)
    }
    catch(err){
        HandleErrorAxios(err)
    }
}