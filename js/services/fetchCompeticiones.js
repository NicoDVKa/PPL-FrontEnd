import { urlBase } from "../config.js";

const url = urlBase + '/competicion'

export const getCompeticiones = async (callback) =>{

    await fetch(url)
    .then((httpResponse) => {
        return httpResponse.json();
    })
    .then(body =>{
        callback(body);
    })
}

export const createCompeticion = async (compJson) => {

    await fetch (url, {
        method : 'POST',
        headers:{
    
            "Content-Type": "application/json"
        },
        body : JSON.stringify(compJson)
    })
    .then( (httpResponse) => {
            return httpResponse.json();
    }) 
    .then( body =>{
        console.log(body);
    })
}