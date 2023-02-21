import { urlBase } from "../config.js";
const url =  urlBase+'/prediccion';


export const getPrediccionByPartidoId = async (partidoId,callback) =>{

    await fetch (url + "Partido/" + partidoId)

    .then( (httpResponse) => {
        if(httpResponse.ok)
            return httpResponse.json();
    }) 
    .then( body =>{
        callback(body);
    })
}

export const createPrediccion = async (prediccionJSON) =>{

    await fetch (url,{
        method : 'POST',
        headers:{
    
            "Content-Type": "application/json"
        },
        body : JSON.stringify(prediccionJSON)
    })

    .then( (httpResponse) => {
        if(httpResponse.ok)
            return httpResponse.json();
    }) 
    .then( body =>{
        console.log(body);;
    })
}

export const updatePrediccion = async (prediccionId,prediccionJSON) =>{

    await fetch (url + "/" + prediccionId,{
        method : 'PUT',
        headers:{
    
            "Content-Type": "application/json"
        },
        body : JSON.stringify(prediccionJSON)
    })

    .then( (httpResponse) => {
        if(httpResponse.ok)
            return httpResponse.json();
    }) 
    .then( body =>{
        console.log(body);;
    })
}
