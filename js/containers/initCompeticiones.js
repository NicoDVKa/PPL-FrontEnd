import { getCompeticiones, createCompeticion } from "../services/fetchCompeticiones.js";
import { dropdownComp } from "../components/header.js";
import { RenderFechas } from "./initFechas.js";

export const RenderComps = async () =>{

    await RenderOffcanvasComp();
    
    await RenderFechas();
}

//RENDER OFFCANVAS COMPETICIONES
export const RenderOffcanvasComp = async () =>{

    await getCompeticiones(RenderOffcanvasCompCallBack);
}

const RenderOffcanvasCompCallBack = (CompsJSON) =>{

    let dropdown = document.getElementById("dropdownComps");

    dropdown.innerHTML = "";

    for(let i = 0 ; i<CompsJSON.length; i++){
        
        let id = CompsJSON[i].id;
        let name = CompsJSON[i].name;

        dropdown.innerHTML += dropdownComp(id,name);
    }
}

//RENDER MODAL COMPETICION
export const guardarCompeticion = async (name) =>{

     const comp = {
        name :  name
    };

    await createCompeticion(comp);

    //renderizar nuevamente el offcanvas
    await RenderOffcanvasComp();
};