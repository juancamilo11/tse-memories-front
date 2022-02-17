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

export const sweetalertForFetchingMemoriesBuilder = () =>
  Swal.fire({
    icon: "success",
    title: "Solicitud exitosa",
    text: `Estamos buscando los recuerdos solicitados.`,
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
    showConfirmButton: false,
    timer: 60000,
    width: 600,
    timerProgressBar: true,
    showConfirmButton: true,
    confirmButtonText: "Continuar",
    confirmButtonColor: "red",
    showCancelButton: true,
    cancelButtonText: "Cancelar",
  });
