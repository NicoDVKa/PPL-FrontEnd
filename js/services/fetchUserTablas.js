import { urlBase } from "../config.js";
const url = urlBase + '/userTabla';


export const createUserTabla = async (userTablaJson) => {
    
    await fetch (url, {
        method : 'POST',
        headers:{
    
            "Content-Type": "application/json"
        },
        body : JSON.stringify(userTablaJson)
    })
    .then( (httpResponse) => {
            return httpResponse.json();
    }) 
    .then( body =>{
        console.log(body);
    })
}