

export const registroPartido = (id,local,visitante,golLocal,golVisitante,estado) =>{

    if(estado === 0){
        return `
        <tr  title = "${id}">
        <td>
          <div class="d-flex justify-content-between">
            <input class="form-check-input me-2 updatePartido" type="radio" name="${id}inlineRadioOptions" id="sinComenzar" title = "${id}" value="0" checked>
            <input class="form-check-input me-2 updatePartido" type="radio" name="${id}inlineRadioOptions" id="comenzado" title = "${id}" value="1" >
            <input class="form-check-input updatePartido" type="radio" name="${id}inlineRadioOptions" id="terminado" title = "${id}"value="2"  >
          </div>
        </td>
        <td  scope="row justify-content-center">${local}</td>
        <td class="d-flex h-100">
          <input
            type="text"
            class="form-control me-2 ms-2 inputPartidoLocal"
            maxlength="2"
            id="${id}inputPartidoLocal"
            value = "${golLocal}"
            title = "${id}" 
          />
          <input
            type="text"
            class="form-control me-2 ms-2 inputPartidoVisitante"
            maxlength="2"
            id="${id}inputPartidoVisitante"
            value = "${golVisitante}"
            title = "${id}" 
          />
        </td>
        <td>${visitante}</td>
        <td> <div class="d-flex justify-content-center">
         <button class="btn text-light" data-bs-toggle="modal" data-bs-target="#modalBorrarPartido"> <i class="bi bi-x-circle"></i></button>
         <button  class="btn text-light" data-bs-toggle="modal" data-bs-target="#modalEditarPartido"id=""> <i class="bi bi-pencil-square"></i></button>

        </div></td>
      </tr>
        `
    }
    if (estado === 1){
        return `
        <tr title = "${id}">
        <td>
          <div class="d-flex justify-content-between">
            <input class="form-check-input me-2 updatePartido" type="radio" name="${id}inlineRadioOptions" id="sinComenzar" title = "${id}" value="0">
            <input class="form-check-input me-2 updatePartido" type="radio" name="${id}inlineRadioOptions" id="comenzado" title = "${id}" value="1" checked>
            <input class="form-check-input updatePartido " type="radio" name="${id}inlineRadioOptions" id="terminado" title = "${id}" value="2"  >
          </div>
        </td>
        <td  scope="row justify-content-center">${local}</td>
        <td class="d-flex h-100">
          <input
            type="text"
            class="form-control me-2 ms-2 inputPartidoLocal"
            maxlength="2"
            id="${id}inputPartidoLocal"
            value = "${golLocal}"
            title = "${id}" 
          />
          <input
            type="text"
            class="form-control me-2 ms-2 inputPartidoVisitante"
            maxlength="2"
            id="${id}inputPartidoVisitante"
            value = "${golVisitante}"
            title = "${id}" 
          />
        </td>
        <td>${visitante}</td>
        <td> <div class="d-flex justify-content-center">
         <button class="btn text-light" data-bs-toggle="modal" data-bs-target="#modalBorrarPartido"> <i class="bi bi-x-circle"></i></button>
         <button  class="btn text-light" data-bs-toggle="modal" data-bs-target="#modalEditarPartido"id=""> <i class="bi bi-pencil-square"></i></button>

        </div></td>
      </tr>
        `

    }   
    if (estado === 2){
        return `
        <tr title = "${id}">
        <td>
          <div class="d-flex justify-content-between">
            <input class="form-check-input me-2 updatePartido" type="radio" name="${id} inlineRadioOptions" id="sinComenzar" title = "${id}" value="0">
            <input class="form-check-input me-2 updatePartido" type="radio" name="${id} inlineRadioOptions" id="comenzado" title = "${id}" value="1" >
            <input class="form-check-input updatePartido" type="radio" name="${id} inlineRadioOptions" id="terminado" title = "${id}" value="2"checked >
          </div>
        </td>
        <td  scope="row justify-content-center">${local}</td>
        <td class="d-flex h-100">
          <input
            type="text"
            class="form-control me-2 ms-2 inputPartidoLocal"
            maxlength="2"
            id="${id}inputPartidoLocal"
            value = "${golLocal}"
            title = "${id}" 
          />
          <input
            type="text"
            class="form-control me-2 ms-2 inputPartidoVisitante"
            maxlength="2"
            id="${id}inputPartidoVisitante"
            value = "${golVisitante}"
            title = "${id}" 
          />
        </td>
        <td>${visitante}</td>
        <td> <div class="d-flex justify-content-center">
         <button class="btn text-light" data-bs-toggle="modal" data-bs-target="#modalBorrarPartido"> <i class="bi bi-x-circle"></i></button>
         <button  class="btn text-light" data-bs-toggle="modal" data-bs-target="#modalEditarPartido"id=""> <i class="bi bi-pencil-square"></i></button>

        </div></td>
      </tr>
        `
    }

    
}

export const botonAgregarPartido = () =>{


  return `

    <button class="btn text-light mx-auto d-flex" data-bs-toggle="modal" data-bs-target="#modalAgregarPartido" >
        <i class="bi bi-plus-circle me-2" id="agregarPartidoFecha" ></i>
        <h5>Agregar partido</h5>
    </button> 

  `
}

export const headerPartido = () =>{

  return `
        <tr>
          <th scope="col" class="">Estado</th>
          <th scope="col" class="w-25">Local</th>
          <th scope="col" class="w-50">Resultado</th>
          <th scope="col"  class="w-25">Visitante</th>
          <th scope="col" class="">Acciones</th>
        </tr>
  `;
}