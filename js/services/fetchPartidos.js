import { urlBase } from "../config.js";
const url = urlBase+'/partido';


export const getPartidos = async (fechaId,callback) =>{

    await fetch (url + "/" + fechaId)
    .then( (httpResponse) => {
        if(httpResponse.ok)
            return httpResponse.json();
    }) 
    .then( body =>{
        callback(body);
    })

}

export const createPartido = async (partidoJson,callback) => {
    
    await fetch (url, {
        method : 'POST',
        headers:{
    
            "Content-Type": "application/json"
        },
        body : JSON.stringify(partidoJson)
    })
    .then( (httpResponse) => {
            return httpResponse.json();
    }) 
    .then( body =>{

        if(callback!=undefined){

            callback(body);

        }else{

            console.log(body);
        }
        
    })
}

export const updatePartido = async (partidoId,golesJson) =>{
    let partidoUpdated;
    await fetch (url + "/" + partidoId,{
        method : 'PUT',
        headers:{
    
            "Content-Type": "application/json"
        },
        body : JSON.stringify(golesJson)
    })
    .then( (httpResponse) => {
        if(httpResponse.ok)
            return httpResponse.json();
    }) 
    .then( body =>{
        partidoUpdated = body;
    })
    return partidoUpdated;
}

export const updatePartidoEnCurso = async (partidoId) =>{

    await fetch (url + "EnCurso/" + partidoId,{
        method : 'PUT'
    })
    .then( (httpResponse) => {
        if(httpResponse.ok)
            return httpResponse.json();
    }) 
    .then( body =>{
        console.log(body);
    })

}

export const updatePartidoFinal = async (partidoId) =>{

    await fetch (url + "Final/" + partidoId,{
        method : 'PUT'
    })
    .then( (httpResponse) => {
        if(httpResponse.ok)
            return httpResponse.json();
    }) 
    .then( body =>{
        console.log(body);
    })

}



