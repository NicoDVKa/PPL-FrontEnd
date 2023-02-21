const urlBase = 'https://ppl-backend-production.up.railway.app/competicion';


export const getCompeticiones = async (callback) =>{

    await fetch(urlBase)
    .then((httpResponse) => {
        return httpResponse.json();
    })
    .then(body =>{
        callback(body);
    })
}

export const createCompeticion = async (compJson) => {

    await fetch (urlBase, {
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