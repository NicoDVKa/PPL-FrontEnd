import { getFecha, getFechasByComp, createFecha } from "../services/fetchFecha.js";
import { headerFecha, headerFechaVacia } from "../components/headerFecha.js";
import { dropdownFechas } from "../components/dropdownFecha.js";
import { RenderPartidos } from "./initPartidos.js";

export const RenderFechas = async () =>{

    await RenderDropdownFecha();
    
    await RenderNavFecha();

    await RenderPartidos();
}

//RENDER DROPDOWN FECHA
export const RenderDropdownFecha = async () =>{

    // arrayPersonas = [];

    // localStorage.setItem("usuariosPrediccion", JSON.stringify(arrayPersonas));

    let comp = JSON.parse(localStorage.getItem("Comp"));

    if(comp != undefined){

        let compId = comp.id;

        await getFechasByComp(compId,RenderDropdownFechaCallBack);
    }

    
};

const RenderDropdownFechaCallBack = (FechasJSON) =>{

    let dropdown = document.getElementById("dropdownFecha");

    dropdown.innerHTML = "";

    let fechaLocal = JSON.parse(localStorage.getItem("fecha"));

    let fechaJson;

    if(fechaLocal != null){
        
        fechaJson = FechasJSON.find( i => i.id == fechaLocal.id )
    
        if(fechaJson == undefined){
    
            localStorage.removeItem("fecha");
        }
    }

    for(let i = 0 ; i < FechasJSON.length ; i++){
        
            let name = FechasJSON[i].name;
            let id = FechasJSON[i].id;

            if(i == 0 && fechaJson == undefined){

                localStorage.setItem("fecha",JSON.stringify({
                    id: id,
                    name : name
                }));
            }

            dropdown.innerHTML += dropdownFechas(name,id);
    }
}

//RENDER NAV FECHA
export const RenderNavFecha = async () =>{

    // arrayPersonas = [];

    // localStorage.setItem("usuariosPrediccion", JSON.stringify(arrayPersonas));

    let fecha = JSON.parse(localStorage.getItem("fecha"));

    if(fecha != undefined){

        let fechaId = fecha.id;

        await getFecha(fechaId,RenderNavFechaCallBack);

    }else{

        RenderNavFechaVacia();
    }

};

const RenderNavFechaVacia = () =>{

    let navFecha = document.getElementById("navFecha");


    navFecha.innerHTML = headerFechaVacia();
}

const RenderNavFechaCallBack = (FechaJSON) =>{

    localStorage.setItem("fecha",JSON.stringify({
        id:FechaJSON.id,
        name: FechaJSON.name
    }));

    let navFecha = document.getElementById("navFecha");

    let name = FechaJSON.name;

    navFecha.innerHTML = headerFecha(name);
}

//RENDER MODAL FECHA
export const guardarFecha = async (name,comp) =>{

     const fecha = {
        name :  name,
        competicionId: parseInt(comp.id)
    };

    await createFecha(fecha);

    await RenderDropdownFecha();

};