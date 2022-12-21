import axios from "axios";
import { API_URL } from "../config/config";
import { HandleErrorAxios, messageInformation } from "../utils/HandleError";

const EMPLOYE = "employe";
const LIST = "list";
const ADD = "add";
const DELETE = 'delete';


export const getListeEmployeeDb = async() => {
    try{
        const reponseApi = await axios.get(`${API_URL}/${EMPLOYE}/${LIST}`);
        const { listeEmploye } = reponseApi.data;
        return listeEmploye;
    }
    catch(err){
        HandleErrorAxios(err);
    }

}


export const deleteEmployeeDb = async (nomEmployee) => {
    try{
        const reponseApi = await axios.delete(`${API_URL}/${EMPLOYE}/${DELETE}`, {data: {nomEmployee}});
        const { message } = reponseApi.data;
        messageInformation(message);
    }
    catch(err){
        HandleErrorAxios(err);
    }
}


export const addEmployeIntoDatabase = async (employe) => {
    try{
        const reponseApi = await axios.post(`${API_URL}/${EMPLOYE}/${ADD}`, {...employe})
        // console.log(reponseApi.data)
        const {message } = reponseApi.data;
        messageInformation(message)
    }
    catch(err){
        HandleErrorAxios(err)
    }
}