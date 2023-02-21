const urlBase = 'http://localhost:3000/user';



export const getUserById = async(userId,callback) =>{

    await fetch(urlBase + "/" + userId)
    .then((httpResponse) => {
        return httpResponse.json();
    })
    .then(body =>{
        callback(body);
    })
}

export const getUsers = async (callback) => {

    await fetch(urlBase )
    .then((httpResponse) => {
        return httpResponse.json();
    })
    .then(body =>{

        callback(body);
    })
}

export const createUser = async (userJson) => {
    
    await fetch (urlBase, {
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