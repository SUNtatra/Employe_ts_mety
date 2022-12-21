import axios from "axios";
import { API_URL } from "../config/config";
import { HandleErrorAxios, messageInformation } from "../utils/HandleError";


const CONGE = "conge";
const LIST_VALIDATE = "validate";
const LIST_NOT_VALIDATE = "notValidate";
const LIST_DEMANDE_CONGE = "listeDemanderConge";
const ADD ='add';
const DELETE = 'delete';

export const getListeCongeValideDb = async() => {
    const liste = await getCongeDatabase(LIST_VALIDATE);
    return liste;

}
const getCongeDatabase = async (url) => {
    try{
        const reponseApi = await axios.get(`${API_URL}/${CONGE}/${url}`);
        const { listeConge } = reponseApi.data;
        return listeConge;
    }
    catch(err){
        HandleErrorAxios(err);
    }
}

export const getListeCongeNonValideDb = async() => {
    const liste = await getCongeDatabase(LIST_NOT_VALIDATE);
    return liste;
}

export const getdemandeconge = async() => {
    try{
        const reponseApi = await axios.get(`${API_URL}/${CONGE}/${LIST_DEMANDE_CONGE}`);
        const { listeConge } = reponseApi.data;
        return listeConge;
    }
    catch(err){
        HandleErrorAxios(err);
    }

}
export const addCongeDb = async (payload) => {
    try{
        const reponseApi = await axios.post(`${API_URL}/${CONGE}/${ADD}`, {...payload});
        const { message } = reponseApi.data;
        messageInformation(message);
    }
    catch(err){
        HandleErrorAxios(err);
    }
}


// export const deleteCongeDb = async (codeUnite) => {
//     try{
//         const reponseApi = await axios.delete(`${API_URL}/${CONGE}/${DELETE}`, {data: {codeUnite}});
//         const { message } = reponseApi.data;
//         messageInformation(message);
//     }
//     catch(err){
//         HandleErrorAxios(err);
//     }
// }