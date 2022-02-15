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
