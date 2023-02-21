
// let arrayPersonas = [];

// //RENDER PARTIDOS
// export const RenderPartidos = async() =>{

//     arrayPersonas = [];

//     localStorage.setItem("usuariosPrediccion", JSON.stringify(arrayPersonas));

//     let fecha = JSON.parse(localStorage.getItem("fecha"));

//     if(fecha != undefined){

//         let fechaId = fecha.id;

//         await getPartidos(fechaId,RenderPartidosCallBack);

//     }else{

//         RenderPartidosVacio();
//     }

// };

// const RenderPartidosVacio = () =>{

//     let headerTablaPartido = document.getElementById("headerTablaPartidos");

//     headerTablaPartido.innerHTML = "";

//     let tablaPartidos = document.getElementById("tablaPartidos");

//     tablaPartidos.innerHTML = "";

//     let btnAgregarPartido = document.getElementById("divAgregarPartidoFecha");

//     btnAgregarPartido.innerHTML = "";
   
// }

// const RenderPartidosCallBack = (PartidosJSON) =>{

//     let headerTablaPartido = document.getElementById("headerTablaPartidos");

//     headerTablaPartido.innerHTML = "";

//     let tablaPartidos = document.getElementById("tablaPartidos");

//     tablaPartidos.innerHTML = "";

//     for(let i = 0 ; i < PartidosJSON.length; i++){

//         if(i === 0){

//             let headerTablaPartido = document.getElementById("headerTablaPartidos");

//             headerTablaPartido.innerHTML = headerPartido();
//         }

//         let local = PartidosJSON[i].local;
//         let golLocal = PartidosJSON[i].golLocal;
//         let visitante = PartidosJSON[i].visitante;
//         let golVisitante = PartidosJSON[i].golVisitante;
//         let estado  = PartidosJSON[i].enCurso;
//         let id = PartidosJSON[i].id;

//         if(golLocal === null){

//             golLocal = "";
//             golVisitante = "";

//         }

//         tablaPartidos.innerHTML += registroPartido(id,local,visitante,golLocal,golVisitante,estado);
//     }

//     let btnAgregarPartido = document.getElementById("divAgregarPartidoFecha");

//     btnAgregarPartido.innerHTML = botonAgregarPartido();
// };

// //RENDER MODAL PARTIDO
// export const guardarPartido = async () =>{

//     let local = document.getElementById("formLocal").value;
//     let visitante = document.getElementById("formVisitante").value;

//     let date = newDate();

//     let comp = JSON.parse(localStorage.getItem("Comp"));

//     let fecha = JSON.parse(localStorage.getItem("fecha"));

//      const partido = {
//         local : local,
//         visitante : visitante,
//         fechaHora : date,
//         competicionId : parseInt(comp.id),
//         fechaId : parseInt(fecha.id),
//     };

//     let arrayPredicciones = JSON.parse(localStorage.getItem("usuariosPrediccion"));

//     if(arrayPredicciones == undefined){

//         await createPartido(partido,undefined);

//         await RenderPartidos();

//         await RenderPredicciones();

//     }else{

//         await createPartido(partido,generarPredicciones);
         
//         await RenderPartidos();

//         await RenderPredicciones();
//     }

// };

// export const generarPredicciones = async (partidoJSON) =>{

//     let partidoId = partidoJSON.id;

//     let arrayPredicciones = JSON.parse(localStorage.getItem("usuariosPrediccion"));

    
//     for (let i = 0; i < arrayPredicciones.length; i++) {

//         let persona = arrayPredicciones[i];

//         let personaId = persona.id;

//         let prediccion = {

//             golLocal:null,
//             golVisitante:null,
//             partidoId:partidoId,
//             userId:personaId
//         }
        
//         await createPrediccion(prediccion);


//     }

// }


// //RENDER TABLA PREDICCIONES
// export const RenderPredicciones = async () =>{


//     let partidos = document.getElementById("tablaPartidos");

//     let trs = partidos.children;

//     //Si hay partidos renderizo

//     if(trs.length >= 1){

//         //Render Head

//         let header = document.getElementById("trPredicciones");

//         header.innerHTML = "";

//         await RenderHeaderPredicciones(trs);

//         //Render Body

//         let bodyPrediccion = document.getElementById("bodyPredicciones");

//         bodyPrediccion.innerHTML = "";

//         for (let i = 0; i < trs.length; i++) {

//           let partidoId = parseInt(trs[i].title);

//           bodyPrediccion.innerHTML += rowPrediccionPartido(partidoId);

//          await RenderBodyPredicciones(partidoId);
//         }

//         let btnAgregarUsuarioPrediccion = document.getElementById("divAgregarUsuarioPrediccion");

//         btnAgregarUsuarioPrediccion.innerHTML = botonAgregarUsuario();
//     }
//     //Caso contrario no muestro nada
//     else{

//         let header = document.getElementById("trPredicciones");

//         header.innerHTML = "";

//         let bodyPrediccion = document.getElementById("bodyPredicciones");

//         bodyPrediccion.innerHTML = "";

//         let btnAgregarUsuario = document.getElementById("divAgregarUsuarioPrediccion");

//         btnAgregarUsuario.innerHTML = "";

//     }
    
 
// }

// const RenderHeaderPredicciones = async (trs) =>{

//     let partidoId = parseInt( trs[0].title) ;

//     await getPrediccionByPartidoId(partidoId,RenderHeaderPrediccionesCallBack);

// }

// const RenderHeaderPrediccionesCallBack = async (prediccionesJson) =>{

   

//     for(let i = 0; i < prediccionesJson.length; i++){

//         await getUserById(prediccionesJson[i].userId,getName);

//     }

// }

// const getName = (userJson) =>{

//     arrayPersonas.push(userJson);

//     localStorage.setItem("usuariosPrediccion", JSON.stringify(arrayPersonas));

//     let header = document.getElementById("trPredicciones");

//     header.innerHTML += userHeadTablaPredicciones(userJson.id,userJson.name);
      
// }

// export const RenderBodyPredicciones = async (partidoId) =>{

//     await getPrediccionByPartidoId(partidoId,RenderBodyPrediccionesCallBack);

// }

// export const RenderBodyPrediccionesCallBack = (prediccionesJson) =>{

//     let row; 

//     if(prediccionesJson.length > 0){

//         for (let i = 0; i < prediccionesJson.length; i++) {
        
//             if( i === 0) {
    
//                 let partidoId = prediccionesJson[i].partidoId;
    
//                 row = document.getElementById( partidoId + "prediccionRow"); 
    
//                 row.innerHTML = "";
//             }
    
//             let golLocal = prediccionesJson[i].golLocal;
    
//             let golVisitante = prediccionesJson[i].golVisitante;
    
//             let prediccionId = prediccionesJson[i].id;
    
//             let estado = prediccionesJson[i].estado;

//             if(golLocal === null){

//                 golLocal = "";
//                 golVisitante = "";
//             }
    
//             row.innerHTML += bodyRowPrediccionPartido(golLocal,golVisitante,prediccionId,estado);
//         }
//     }

    
// }


//PREDICCION
// export const updatePrediccionGoles = async (prediccionId, prediccionJson) =>{

//     await updatePrediccion(prediccionId , prediccionJson);

//     await RenderPartidos();
// }

// let arrayGetUsers = [];

// export const agregarUsuario = async  () => {

//     arrayGetUsers = [];

//     await getUsers(listUsersCallBack);

                  

//     let name = document.getElementById("formUsuario").value;
    

// }

// export const listUsersCallBack = (usersJSON) =>{

//     let arrayPredicciones = JSON.parse(localStorage.getItem("usuariosPrediccion"));

//     let existe = false;

//     if(arrayPredicciones != undefined){

//         usersJSON.forEach(user => {

//             existe = false;

//             arrayPredicciones.forEach ( userP  =>{

//                 if(user.id === userP.id){
//                     existe = true;
//                 }

//             });

//             if(!existe){
//                 arrayGetUsers.push(user);
//             }
    
//         });
    
//     }else{
//         usersJSON.forEach(user => {

//             arrayGetUsers.push(user);
    
//         });
//     }

//     console.log(arrayGetUsers);

// }