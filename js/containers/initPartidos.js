import { getPartidos , createPartido, updatePartido, updatePartidoEnCurso, updatePartidoFinal} from "../services/fetchPartidos.js";
import { registroPartido, botonAgregarPartido, headerPartido } from "../components/tablaPartidos.js";
import { socket } from "../init.js";


export const RenderPartidos = async () =>{

   await  RenderTablePartidos();
}

//RENDER PARTIDOS
export const RenderTablePartidos = async() =>{

    // arrayPersonas = [];

    // localStorage.setItem("usuariosPrediccion", JSON.stringify(arrayPersonas));

    let fecha = JSON.parse(localStorage.getItem("fecha"));

    if(fecha != undefined){

        let fechaId = fecha.id;

        await getPartidos(fechaId,RenderPartidosCallBack);

    }else{

        RenderPartidosVacio();
    }

};

const RenderPartidosVacio = () =>{

    let headerTablaPartido = document.getElementById("headerTablaPartidos");

    headerTablaPartido.innerHTML = "";

    let tablaPartidos = document.getElementById("tablaPartidos");

    tablaPartidos.innerHTML = "";

    let btnAgregarPartido = document.getElementById("divAgregarPartidoFecha");

    btnAgregarPartido.innerHTML = "";
   
}

const RenderPartidosCallBack = (PartidosJSON) =>{

    let headerTablaPartido = document.getElementById("headerTablaPartidos");

    headerTablaPartido.innerHTML = "";

    let tablaPartidos = document.getElementById("tablaPartidos");

    tablaPartidos.innerHTML = "";

    for(let i = 0 ; i < PartidosJSON.length; i++){

        if(i === 0){

            let headerTablaPartido = document.getElementById("headerTablaPartidos");

            headerTablaPartido.innerHTML = headerPartido();
        }

        let local = PartidosJSON[i].local;
        let golLocal = PartidosJSON[i].golLocal;
        let visitante = PartidosJSON[i].visitante;
        let golVisitante = PartidosJSON[i].golVisitante;
        let estado  = PartidosJSON[i].enCurso;
        let id = PartidosJSON[i].id;

        if(golLocal === null){

            golLocal = "";
            golVisitante = "";

        }

        tablaPartidos.innerHTML += registroPartido(id,local,visitante,golLocal,golVisitante,estado);
    }

    let btnAgregarPartido = document.getElementById("divAgregarPartidoFecha");

    btnAgregarPartido.innerHTML = botonAgregarPartido();
};

//RENDER MODAL PARTIDO
export const guardarPartido = async (local,visitante,date,comp,fecha) =>{
   
     const partido = {
        local : local,
        visitante : visitante,
        fechaHora : date,
        competicionId : parseInt(comp.id),
        fechaId : parseInt(fecha.id),
    };

    await createPartido(partido,undefined);

    await RenderPartidos();

    // let arrayPredicciones = JSON.parse(localStorage.getItem("usuariosPrediccion"));

    // if(arrayPredicciones == undefined){

    //     await createPartido(partido,undefined);

    //     await RenderPartidos();

    //     await RenderPredicciones();

    // }else{

    //     await createPartido(partido,generarPredicciones);
         
    //     await RenderPartidos();

    //     await RenderPredicciones();
    // }

};

//RENDER UPDATE PARTIDO ESTADO
export const updatePartidoEstado = async (partidoId,estado) =>{

    if(estado === "0"){

        //Activar inputs 

        //Hara algo
    }

    if(estado === "1"){

        //Desactivar inputs de predicciones
        await updatePartidoEnCurso(partidoId);
    }   
    
    if(estado ==="2"){
        //Desactivar inputs de predicciones y partido
        await updatePartidoFinal(partidoId);
    }

    await RenderPartidos();
};

//RENDER UPDATE PARTIDO GOLES
export const updatePartidoGoles = async (partidoId,golesJson) =>{

    await updatePartido(partidoId , golesJson);

   socket.emit('update partido', 'se actualizo un partido');

    await RenderPartidos();
};
