import axios from "axios";
import { API_URL } from "../config/config";
import { HandleErrorAxios, messageInformation } from "../utils/HandleError";
const FONCTION = 'fonction'
const LIST = 'list';
const ADD = 'add';

export const getAllFonction = async () => {
    try{
        const reponseApi = await axios.get(`${API_URL}/${FONCTION}/${LIST}`);
        const { listeFonction } = reponseApi.data;
        return listeFonction;
    }
    catch(err){
        HandleErrorAxios(err);
    }
}

export const addFonctionIntoDatabase = async (fonction) => {
    try{
        const reponseApi = await axios.post(`${API_URL}/${FONCTION}/${ADD}`, {...fonction})
        // console.log(reponseApi.data)
        const {message } = reponseApi.data;
        messageInformation(message)
    }
    catch(err){
        HandleErrorAxios(err)
    }
}