const urlBase = 'https://ppl-backend-production.up.railway.app/fecha';

export const getFecha = async (fechaId,callback) =>{

    await fetch (urlBase+ '/' + fechaId)
    .then( (httpResponse) => {
        if(httpResponse.ok)
            return httpResponse.json();
    }) 
    .then( body =>{
        callback(body);
    })
}


export const getFechasByComp = async (compId,callback) =>{

    await fetch (urlBase+'ByComp/' + compId)
    .then( (httpResponse) => {
        if(httpResponse.ok)
            return httpResponse.json();
    }) 
    .then( body =>{
        callback(body);
    })
}

export const createFecha = async (fechaJson) =>{

    await fetch (urlBase, {
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

