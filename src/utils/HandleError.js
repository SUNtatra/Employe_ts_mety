import swal from "sweetalert"


export const HandleErrorAxios = (err) => {
    if(err.response){
        
        const {message} = err.response.data;
        messageInformation(message, "error")
        // console.log(err.response)
    }
    else if(err.request){
        messageInformation("Aucune reponse obtenu veuillez reessayer ", "error")
    }
    else {
        console.log(err)
        messageInformation("Aucune connexion", "error")
    }
}

export const messageInformation = (text, icon) => {
    swal({
        text,
        icon
    })
}
export const convertirDate = (d) => {
    if(d){
        let date = new Date(d);
        let mois = date.getMonth() + 1;
        return date.getDate() + "/" + mois + "/" + date.getFullYear();
    }
    return d;
  }