import axios from "axios";
import { API_URL } from "../config/config";
import { HandleErrorAxios, messageInformation } from "../utils/HandleError";

const UNITE = 'unite'
const LIST = 'list';
const ADD = 'add';
const DELETE = 'delete';


export const getAllUnite = async () => {
    try{
        const reponseApi = await axios.get(`${API_URL}/${UNITE}/${LIST}`);
        const { listeUnite } = reponseApi.data;
        return listeUnite;
    }
    catch(err){
        HandleErrorAxios(err);
    }

}

export const addUniteDb = async (payload) => {
    try{
        const reponseApi = await axios.post(`${API_URL}/${UNITE}/${ADD}`, {...payload});
        const { message } = reponseApi.data;
        messageInformation(message);
    }
    catch(err){
        HandleErrorAxios(err);
    }
}
export const deleteUniteDb = async (nomUnite) => {
    try{
        const reponseApi = await axios.delete(`${API_URL}/${UNITE}/${DELETE}`, {data: {nomUnite}});
        const { message } = reponseApi.data;
        messageInformation(message);
    }
    catch(err){
        HandleErrorAxios(err);
    }
}