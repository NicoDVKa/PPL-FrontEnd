import { urlBase } from "../config.js";
const url = urlBase + '/fecha';

export const getFecha = async (fechaId,callback) =>{

    await fetch (url+ '/' + fechaId)
    .then( (httpResponse) => {
        if(httpResponse.ok)
            return httpResponse.json();
    }) 
    .then( body =>{
        callback(body);
    })
}


export const getFechasByComp = async (compId,callback) =>{

    await fetch (url+'ByComp/' + compId)
    .then( (httpResponse) => {
        if(httpResponse.ok)
            return httpResponse.json();
    }) 
    .then( body =>{
        callback(body);
    })
}

export const createFecha = async (fechaJson) =>{

    await fetch (url, {
        method : 'POST',
        headers:{
    
            "Content-Type": "application/json"
        },
        body : JSON.stringify(fechaJson)
    })
    .then( (httpResponse) => {
            return httpResponse.json();
    }) 
    .then( body =>{
        console.log(body);
    })
}

