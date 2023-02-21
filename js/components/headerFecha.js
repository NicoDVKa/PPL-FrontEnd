
export const headerFecha = (nombre) =>{

    let name = "";

    let comp = JSON.parse(localStorage.getItem("Comp"));

    if(comp != undefined){
        name = comp.name;
    }

    return `
        <h5 class="mt-1" >${name} : ${nombre}</h5>
        <div class="d-flex justify-content-center" >
            <button class="btn text-light " data-bs-toggle="modal" data-bs-target="#modalBorrarFecha"> <i class="bi bi-x-circle"></i></button>
            <button  class="btn text-light " data-bs-toggle="modal" data-bs-target="#modalEditarFecha"> <i class="bi bi-pencil-square"></i></button>
        </div>  
    `
}


export const headerFechaVacia= () =>{
    let name = "";

    let comp = JSON.parse(localStorage.getItem("Comp"));

    if(comp != undefined){
        name = comp.name;
    }

    return `
        <h5 class="mt-1" >${name} : Sin Fechas</h5>
        
    `
}