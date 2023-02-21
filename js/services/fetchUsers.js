import { urlBase } from "../config.js";
const url = urlBase + '/user';



export const getUserById = async(userId,callback) =>{

    await fetch(url + "/" + userId)
    .then((httpResponse) => {
        return httpResponse.json();
    })
    .then(body =>{
        callback(body);
    })
}

export const getUsers = async (callback) => {

    await fetch(url )
    .then((httpResponse) => {
        return httpResponse.json();
    })
    .then(body =>{

        callback(body);
    })
}

export const createUser = async (userJson) => {
    
    await fetch (url, {
        method : 'POST',
        headers:{
    
            "Content-Type": "application/json"
        },
        body : JSON.stringify(userJson)
    })
    .then( (httpResponse) => {
            return httpResponse.json();
    }) 
    .then( body =>{
        console.log(body);
    })
}