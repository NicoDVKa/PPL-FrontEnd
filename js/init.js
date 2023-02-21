import { urlBase } from "./config.js";
import { RenderComps, guardarCompeticion} from "./containers/initCompeticiones.js";
import { guardarFecha, RenderFechas } from "./containers/initFechas.js";
import { guardarPartido, RenderPartidos, updatePartidoEstado, updatePartidoGoles} from "./containers/initPartidos.js";

export let socket = io(urlBase);

console.log(socket);

socket.on('update partido', async function(msg){
  console.log(msg);
  await RenderPartidos();
})


window.onload = async () => {
  
  await RenderComps();

};

function newDate() {
    let today = new Date();

    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();
    let hours = today.getHours()
    let minutes = today.getMinutes()
    let seconds = today.getSeconds()
  
    if (dd < 10) {
      dd = "0" + dd;
    }
  
    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (mm < 10) {
      mm = "0" + mm;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
  
  
    today = yyyy + '-' + mm + '-' + dd + ' ' + hours + ':' + minutes + ':' + seconds + '+0';
  
  
  
    return today;
}

let btnGuardarPartido = document.getElementById("guardarPartido");
btnGuardarPartido.addEventListener("click", async()=>{
  
  let local = document.getElementById("formLocal").value;
  let visitante = document.getElementById("formVisitante").value;
  let date = newDate();
  let comp = JSON.parse(localStorage.getItem("Comp"));
  let fecha = JSON.parse(localStorage.getItem("fecha"));

  await guardarPartido(local,visitante,date,comp,fecha);
});

let btnGuardarComp = document.getElementById("guardarComp");
btnGuardarComp.addEventListener("click", async()=>{
  let name = document.getElementById("formNombreDelTorneo").value;
  await guardarCompeticion(name);
});

let btnGuardarFecha = document.getElementById("guardarFecha");
btnGuardarFecha.addEventListener("click", async() => {
  let name = document.getElementById("formFecha").value;
  let comp = JSON.parse(localStorage.getItem("Comp"));
  await guardarFecha(name,comp);
});

// let btnGuardarUsuario = document.getElementById("guardarUsuario");

document.addEventListener("click", async function (e) {
  const { target } = e;

  if (target.matches(".liFecha")) {

    localStorage.setItem(
      "fecha",
      JSON.stringify({
        id: parseInt(target.title),
        name: target.text,
      })
    );
    
    await RenderFechas();
  }

  if (target.matches(".liComp")) {
    localStorage.setItem(
      "Comp",
      JSON.stringify({
        id: parseInt(target.title),
        name: target.text,
      })
    );

    await RenderComps();
  }

  if (target.matches(".updatePartido")) {

    let estado = target.value;

    let partidoId = parseInt(target.title);

    await updatePartidoEstado(partidoId, estado);
  }
});

document.addEventListener("change", async function(e){

    const {target} = e;

    if(target.matches(".inputPartidoLocal") || target.matches(".inputPartidoVisitante")){

        let visitante ;
        let local ;

       if(target.id === (target.title + "inputPartidoLocal")){

        local = target;

        visitante = document.getElementById( target.title +"inputPartidoVisitante");

       }else{

        visitante = target; 

        local = document.getElementById( target.title +"inputPartidoLocal");

       }

        let golesLocal = local.value;
        
        let golesVisitante = visitante.value; 

        if(golesLocal != "" && golesVisitante != ""){

            let goles = {

                golLocal: parseInt(golesLocal),
                golVisitante : parseInt(golesVisitante)
            }
            
            await  updatePartidoGoles(target.title,goles);
        }



    }


    if ( target.matches(".inputPrediccionLocal") || target.matches(".inputPrediccionVisitante")) 
    { 

      let visitante;
      let local;

      if (target.id === target.title + "inputPrediccionLocal") {

        local = target;

        visitante = document.getElementById( target.title + "inputPrediccionVisitante");

      } else {

        visitante = target;

        local = document.getElementById(target.title + "inputPrediccionLocal");
      }

      let golesLocal = local.value;

      let golesVisitante = visitante.value;

      if (golesLocal != "" && golesVisitante != "") {

        let goles = {
          golLocal: parseInt(golesLocal),
          golVisitante: parseInt(golesVisitante),
        };

        await updatePrediccionGoles(target.title, goles);
      }
    } 

});
