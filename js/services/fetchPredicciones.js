const urlBase = 'https://ppl-backend-production.up.railway.app/prediccion';


export const getPrediccionByPartidoId = async (partidoId,callback) =>{

    await fetch (urlBase + "Partido/" + partidoId)

    .then( (httpResponse) => {
        if(httpResponse.ok)
            return httpResponse.json();
    }) 
    .then( body =>{
        callback(body);
    })
}

export const createPrediccion = async (prediccionJSON) =>{

    await fetch (urlBase,{
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

    await fetch (urlBase + "/" + prediccionId,{
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
