import Swal from "sweetalert2";

export const sweetAlertForMemoryDeleteConfirmationBuilder = (
  memoryName,
  creationDate
) =>
  Swal.fire({
    icon: "warning",
    title: "Eliminación de un recuerdo",
    html: `¿Realmente desea eliminar el recuerdo <b>${memoryName}</b> creado el <b>${creationDate}</b>?`,
    footer: `<small><b>Esta acción no se puede deshacer</b></small>`,
    showConfirmButton: true,
    showDenyButton: false,
    showCancelButton: true,
    timerProgressBar: true,
    timer: 10000,
    confirmButtonText: "Continuar",
    cancelButtonText: "Cancelar",
    allowEscapeKey: false,
    allowOutsideClick: false,
  });

export const sweetalertForInputTagAlreadyDefinedBuilder = (newTag) =>
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: `La etiqueta '${newTag}' ya ha sido ingresada, intenta con otro valor.`,
    showConfirmButton: false,
    timer: 3500,
  });

export const sweetalertForEmailAlreadyDefinedBuilder = (newEmail) =>
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: `El email '${newEmail}' ya ha sido ingresado.`,
    showConfirmButton: false,
    timer: 3500,
    timerProgressBar: true,
  });

export const sweetalertForNoImageUploaded = () =>
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: `No ha seleccionado ninguna imágen para su foto del recuerdo.`,
    timer: 3500,
    timerProgressBar: true,
    showConfirmButton: true,
  });

export const sweetalertForFetchingMemoriesBuilder = () =>
  Swal.fire({
    icon: "success",
    title: "Solicitud exitosa",
    text: `Estamos buscando el(los) recuerdo(s) solicitado(s).`,
    timerProgressBar: true,
    timer: 3000,
    allowEnterKey: false,
    showConfirmButton: false,
    allowEscapeKey: false,
    allowOutsideClick: false,
  });

export const sweetalertForInvalidSearchValueBuilder = (message) =>
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: message,
    showConfirmButton: false,
    timer: 3500,
  });

export const sweetalertForVisibilityChangeBuilder = () =>
  Swal.fire({
    icon: "info",
    title: "Cambio de visibilidad de un recuerdo",
    html: `<h3>Antes de cambiar la visibilidad de un recuerdo tenga presente lo siguiente:</h3>
      <ul>  
        <li>Si cambia la visibilidad de un recuerdo <b>protegido</b> a <b>público</b> o <b>privado</b> se eliminará la lista de usuarios autorizados para ver el recuerdo</li>
        <li>Si cambia la visibilidad de un recuerdo <b>protegido</b> o <b>público</b> a <b>privado</b> se eliminará la lista de usuarios que han visto el recuerdo</li>
      </ul>`,
    footer: `<b>Si estás creando el recuerdo puedes elegir libremente la visibilidad</b>`,
    timer: 60000,
    width: 600,
    timerProgressBar: true,
    showConfirmButton: true,
    confirmButtonText: "Continuar",
    confirmButtonColor: "red",
    showCancelButton: true,
    cancelButtonText: "Cancelar",
  });

export const sweetalertForFormSubmitErrorsReportBuilder = (errorsReport) =>
  Swal.fire({
    icon: "error",
    title: "Error en el formulario",
    html: `<h3>El formulario tiene los siguientes errores:</h3>
      <ul>  
        ${errorsReport.id !== undefined ? +`<li>${errorsReport.id}</li>` : ""}
        ${
          errorsReport.name !== undefined ? `<li>${errorsReport.name}</li>` : ""
        }
        ${
          errorsReport.memoryDate !== undefined
            ? `<li>${errorsReport.memoryDate}</li>`
            : ""
        }
        ${
          errorsReport.visibility !== undefined
            ? `<li>${errorsReport.visibility}</li>`
            : ""
        }
        ${errorsReport.tag !== undefined ? `<li>${errorsReport.tag}</li>` : ""}
        ${
          errorsReport.country !== undefined
            ? `<li>${errorsReport.country}</li>`
            : ""
        }
        ${
          errorsReport.city !== undefined ? `<li>${errorsReport.city}</li>` : ""
        }
        ${
          errorsReport.authorizedEmail !== undefined
            ? `<li>${errorsReport.authorizedEmail}</li>`
            : ""
        }
        ${
          errorsReport.memoryPhotoText !== undefined
            ? `<li>${errorsReport.memoryPhotoText}</li>`
            : ""
        }
        ${
          errorsReport.memoryPhotoDescription !== undefined
            ? `<li>${errorsReport.memoryPhotoDescription}</li>`
            : ""
        }
        ${
          errorsReport.memoryPhotoList !== undefined
            ? `<li>${errorsReport.memoryPhotoList}</li>`
            : ""
        }
        
      </ul>`,
    footer: `<b>Verifica los valores ingresados e intenta nuevamente</b>`,
    showConfirmButton: true,
    width: 600,
    confirmButtonText: "Continuar",
    cancelButtonText: "Cancelar",
  });

export const sweetalertForMemorySuccessfullyCreatedOrUpdateBuilder = () =>
  Swal.fire({
    icon: "success",
    text: "¡Creación/Actualización exitosa de tu recuerdo!",
    timerProgressBar: true,
    timer: 4000,
    allowEnterKey: false,
    showConfirmButton: false,
    allowEscapeKey: false,
    allowOutsideClick: false,
  });

export const sweetalertForGenericErrorBuilder = (errorMessage) =>
  Swal.fire({
    icon: "error",
    text: errorMessage,
    timerProgressBar: true,
    timer: 4000,
    allowEnterKey: false,
    showConfirmButton: false,
    allowEscapeKey: false,
    allowOutsideClick: false,
  });
