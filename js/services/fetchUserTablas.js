const urlBase = 'http://localhost:3000/userTabla';


export const createUserTabla = async (userTablaJson) => {
    
    await fetch (urlBase, {
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