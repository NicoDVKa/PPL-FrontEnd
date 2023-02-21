const urlBase = 'https://ppl-backend-production.up.railway.app/partido';


export const getPartidos = async (fechaId,callback) =>{

    await fetch (urlBase + "/" + fechaId)
    .then( (httpResponse) => {
        if(httpResponse.ok)
            return httpResponse.json();
    }) 
    .then( body =>{
        callback(body);
    })

}

export const createPartido = async (partidoJson,callback) => {
    
    await fetch (urlBase, {
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

    await fetch (urlBase + "/" + partidoId,{
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
        console.log(body);
    })

}

export const updatePartidoEnCurso = async (partidoId) =>{

    await fetch (urlBase + "EnCurso/" + partidoId,{
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

    await fetch (urlBase + "Final/" + partidoId,{
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



