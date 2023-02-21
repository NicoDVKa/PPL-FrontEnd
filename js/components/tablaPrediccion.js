


export const userHeadTablaPredicciones = (id,name) =>{

    return `
        <th scope="col" class="x" title = "${id}" id ="${id}headerPrediccion" >${name} </th>
    `
}

export const rowPrediccionPartido = (partidoId) =>{

    return `
    
        <tr id="${partidoId}prediccionRow" >
   
        </tr>

    `
}

export const bodyRowPrediccionPartido = (golLocal,golVisitante,prediccionId,estado) => {

    if(estado === 0){
        return `
        <td>
            <div class="d-flex justify-content-center">
                <input
                    type="text"
                    class="form-control me-2 inputPrediccionLocal "
                    maxlength="2"
                    id = "${prediccionId}inputPrediccionLocal"
                    title = "${prediccionId}"
                    value = "${golLocal}"
                />
                <input
                    type="text"
                    class="form-control inputPrediccionVisitante "
                    maxlength="2"
                    id = "${prediccionId}inputPrediccionVisitante"
                    title = "${prediccionId}"
                    value = "${golVisitante}"
                />
            </div>
        </td>
    `
    }
    if(estado === 1){
        return `
        <td>
            <div class="d-flex justify-content-center">
                <input
                    type="text"
                    class="form-control me-2 inputPrediccionLocal aciertoResultado"
                    maxlength="2"
                    id = "${prediccionId}inputPrediccionLocal"
                    title = "${prediccionId}"
                    value = "${golLocal}"

                />
                <input
                    type="text"
                    class="form-control inputPrediccionVisitante aciertoResultado"
                    maxlength="2"
                    id = "${prediccionId}inputPrediccionVisitante"
                    title = "${prediccionId}"
                    value = "${golVisitante}"
                />
            </div>
        </td>
    `
    }
    if(estado === 2){
        return `
        <td>
            <div class="d-flex justify-content-center">
                <input
                    type="text"
                    class="form-control me-2 inputPrediccionLocal aciertoGoles"
                    maxlength="2"
                    id = "${prediccionId}inputPrediccionLocal"
                    title = "${prediccionId}"
                    value = "${golLocal}"
                />
                <input
                    type="text"
                    class="form-control inputPrediccionVisitante  aciertoGoles"
                    maxlength="2"
                    id = "${prediccionId}inputPrediccionVisitante"
                    title = "${prediccionId}"
                    value = "${golVisitante}"
                />
            </div>
        </td>
    `

    }
    if(estado === 3){
        return `
        <td>
            <div class="d-flex justify-content-center">
                <input
                    type="text"
                    class="form-control me-2 inputPrediccionLocal errado"
                    maxlength="2"
                    id = "${prediccionId}inputPrediccionLocal"
                    title = "${prediccionId}"
                    value = "${golLocal}"
                />
                <input
                    type="text"
                    class="form-control inputPrediccionVisitante errado"
                    maxlength="2"
                    id = "${prediccionId}inputPrediccionVisitante"
                    title = "${prediccionId}"
                    value = "${golVisitante}"
                />
            </div>
        </td>
        `

    }
    
}

export const botonAgregarUsuario = () =>{


    return `
  
        <button class="btn text-light d-flex mx-auto" data-bs-toggle="modal" data-bs-target="#modalAgregarUsuario" id="">
            <i class="bi bi-plus-circle me-2 id="agregarPrediccionUsuario"></i>
            <h5>Agregar usuario</h5>
        </button>
  
    `

    
}