import { uploadFileToCloudinary } from "../../actions/cloudinaryActions";
import validator from "validator";
import { v4 as uuidv4 } from "uuid";

const getLocalDate = () => {
  return new Date().toISOString().split("T")[0];
};

//Initial values for the section #1 form of the store setup.
export const formInitialValues = {
  id: uuidv4(),
  name: "",
  memoryDate: "",
  creationDate: getLocalDate(),
  visibility: "",
  tag: "",
  memoryPhotoText: "",
  memoryPhotoImg: "",
  memoryPhotoDescription: "",
  country: "",
  city: "",
  authorizedEmail: "",
};

export const getInitialFormValuesForUpdating = (activeMemoryToUpdate) => ({
  id: activeMemoryToUpdate.memoryId,
  name: activeMemoryToUpdate.name,
  memoryDate: activeMemoryToUpdate.memoryDate,
  creationDate: activeMemoryToUpdate.creationDate,
  visibility: activeMemoryToUpdate.visibility,
  tag: "",
  memoryPhotoText: "",
  memoryPhotoImg: "",
  memoryPhotoDescription: "",
  country: activeMemoryToUpdate.location.country,
  city: activeMemoryToUpdate.location.city,
  authorizedEmail: "",
});

export const formInitialErrorState = {
  //   id: { hasErrors: false, message: "" }, --> Autogenerated
  name: { hasErrors: false, message: "" },
  memoryDate: { hasErrors: false, message: "" },
  //   creationDate: { hasErrors: false, message: "" }, --> Autogenerated
  visibility: { hasErrors: false, message: "" },
  tag: { hasErrors: false, message: "" },
  memoryPhotoText: { hasErrors: false, message: "" },
  memoryPhotoImg: { hasErrors: false, message: "" },
  memoryPhotoDescription: { hasErrors: false, message: "" },
  country: { hasErrors: false, message: "" },
  city: { hasErrors: false, message: "" },
  authorizedEmail: { hasErrors: false, message: "" },
};

export const visibilityTypes = [
  {
    type: "privado",
    label: "Privado",
    title: "Los recuerdos privados sólo tú los puedes ver",
  },
  {
    type: "publico",
    label: "Publico",
    title: "Los recuerdos públicos cualquier usuario los puede ver",
  },
  {
    type: "protegido",
    label: "Protegido",
    title: "Los recuerdos protegidos sólo los pueden ver a quien autorices",
  },
];

export const memoryFormValidator = (e, setErrorsState, userEmail, memoryId) => {
  const { name: fieldName, value, files } = e.target;
  switch (fieldName) {
    case "name":
      handleNameValidation(value, setErrorsState);
      break;
    case "memoryDate":
      handleMemoryDateValidation(value, setErrorsState);
      break;
      // case "visibility":
      //   handleVisibilityValidation(value, setErrorsState);
      break;
    case "tag":
      handleTagValidation(value, setErrorsState);
      break;
    case "memoryPhotoText": //title
      handleMemoryPhotoTextValidation(value, setErrorsState);
      break;
    case "memoryPhotoImg":
      handleMemoryPhotoImgValidation(
        files[0],
        setErrorsState,
        userEmail,
        memoryId
      );
      break;
    case "memoryPhotoDescription":
      handleMemoryPhotoDescriptionValidation(value, setErrorsState);
      break;
    case "country":
      handleCountryValidation(value, setErrorsState);
      break;
    case "city":
      handleCityValidation(value, setErrorsState);
      break;
    case "authorizedEmail":
      handleAuthorizedEmailValidation(value, setErrorsState);
      break;
    default:
      break;
  }
};

//Generic function
const setErrorStateForField = (
  setErrorsState,
  fieldName,
  hasErrors,
  message
) => {
  setErrorsState((state) => {
    return {
      ...state,
      [`${fieldName}`]: {
        hasErrors,
        message,
      },
    };
  });
};

export const isTheTagAlreadyDefined = (tagName, tagsList, setErrorsState) => {
  if (tagsList.includes(tagName)) {
    setErrorsState((state) => {
      return {
        ...state,
        ["tag"]: {
          hasErrors: true,
          message: `La etiqueta '${tagName}' ya ha sido ingresada, intente con otro valor.`,
        },
      };
    });
    return true;
  }
};

export const isTheEmailAlreadyDefined = (
  email,
  authorizedEmailList,
  setErrorsState
) => {
  if (authorizedEmailList.includes(email)) {
    setErrorsState((state) => {
      return {
        ...state,
        ["authorizedEmail"]: {
          hasErrors: true,
          message: `El correo electrónico '${email}' ya ha sido ingresado.`,
        },
      };
    });
    return true;
  }
};

const handleNameValidation = (value, setErrorsState) => {
  if (
    (value.trim().length >= 5 && value.trim().length <= 50) ||
    value.trim() === ""
  ) {
    setErrorStateForField(setErrorsState, "name", false, "");
    return;
  }
  setErrorStateForField(
    setErrorsState,
    "name",
    true,
    "El nombre del recuerdo debe tener entre 5 y 50 caracteres."
  );
};

const handleMemoryDateValidation = (value, setErrorsState) => {
  if (new Date(value).getTime() > new Date().getTime()) {
    setErrorStateForField(
      setErrorsState,
      "memoryDate",
      true,
      "La fecha ingresada está el futuro, por favor ingresa una fecha válida."
    );
    return;
  }
  setErrorStateForField(setErrorsState, "memoryDate", false, "");
};

const handleVisibilityValidation = (value, setErrorsState) => {};

const handleTagValidation = (value, setErrorsState) => {
  if (
    (value.trim().length >= 3 && value.trim().length <= 20) ||
    value.trim() === ""
  ) {
    setErrorStateForField(setErrorsState, "tag", false, "");
    return;
  }
  setErrorStateForField(
    setErrorsState,
    "tag",
    true,
    "El nombre de la etiqueta de tu recuerdo debe tener entre 3 y 20 caracteres."
  );
};

const handleMemoryPhotoTextValidation = (value, setErrorsState) => {
  if (
    (value.trim().length >= 3 && value.trim().length <= 20) ||
    value.trim() === ""
  ) {
    setErrorStateForField(setErrorsState, "memoryPhotoText", false, "");
    return;
  }
  setErrorStateForField(
    setErrorsState,
    "memoryPhotoText",
    true,
    "El nombre de la foto debe tener entre 3 y 20 caracteres o debe estar vacío."
  );
};
const handleMemoryPhotoDescriptionValidation = (value, setErrorsState) => {
  if (
    (value.trim().length >= 3 && value.trim().length <= 200) ||
    value.trim() === ""
  ) {
    setErrorStateForField(setErrorsState, "memoryPhotoDescription", false, "");
    return;
  }
  setErrorStateForField(
    setErrorsState,
    "memoryPhotoDescription",
    true,
    "La descripción de la foto debe tener entre 3 y 200 caracteres o debe estar vacío."
  );
};
const handleMemoryPhotoImgValidation = (
  file,
  setErrorsState,
  userEmail,
  memoryId
) => {
  if (!file?.type.startsWith("image")) {
    const imagePreview = document.getElementById("memory-image-preview");
    imagePreview.setAttribute(
      "src",
      "https://res.cloudinary.com/dahwtwzdl/image/upload/v1644706887/tse_memories/assets/no-content-image.webp"
    );
    imagePreview.classList.replace(
      "memory-image-preview--with-content",
      "memory-image-preview--no-content"
    );
    setErrorStateForField(
      setErrorsState,
      "memoryPhotoImg",
      true,
      "Error: El archivo ingresado no es una imágen, por favor suba un archivo con formato correcto."
    );
    return;
  }
  //Enviar la imagen a cloudinary y en base a la peticion hacer lo siguiente.
  uploadFileToCloudinary(file, userEmail, memoryId).then((responseUrl) => {
    const imagePreview = document.getElementById("memory-image-preview");
    const urlImage = document.getElementById("memory-image-preview-url");
    imagePreview.src = `${responseUrl}`;
    urlImage.setAttribute("href", responseUrl);
    urlImage.textContent = "Ver la imágen en tamaño grande";
    imagePreview.classList.replace(
      "memory-image-preview--no-content",
      "memory-image-preview--with-content"
    );
    setErrorStateForField(setErrorsState, "memoryPhotoImg", false, "", true);
  });
};

const handleCountryValidation = (value, setErrorsState) => {
  if (
    (value.trim().length >= 2 && value.trim().length <= 30) ||
    value.trim() === ""
  ) {
    setErrorStateForField(setErrorsState, "country", false, "");
    return;
  }
  setErrorStateForField(
    setErrorsState,
    "country",
    true,
    "El nombre país debe tener entre 2 y 30 caracteres."
  );
};
const handleCityValidation = (value, setErrorsState) => {
  if (
    (value.trim().length >= 2 && value.trim().length <= 30) ||
    value.trim() === ""
  ) {
    setErrorStateForField(setErrorsState, "city", false, "");
    return;
  }
  setErrorStateForField(
    setErrorsState,
    "city",
    true,
    "El nombre de la ciudad debe tener entre 2 y 30 caracteres."
  );
};

const handleAuthorizedEmailValidation = (value, setErrorsState) => {
  if (validator.isEmail(value.trim()) || value.trim() === "") {
    setErrorStateForField(setErrorsState, "authorizedEmail", false, "");
    return;
  }
  setErrorStateForField(
    setErrorsState,
    "authorizedEmail",
    true,
    "El valor ingresado no es un email."
  );
};

export const memoryFormSubmitValidation = (formValues, errorsState) => {
  const { id, name, memoryDate, visibility, country, city } = formValues;

  let errorsReport = { hasErrors: false };

  // if (id === "") {
  //   errorsReport = {
  //     ...errorsReport,
  //     hasErrors: true,
  //     id: "El Id del recuerdo ha quedado vacío",
  //   };
  // }
  if (errorsState.name.hasErrors || name === "") {
    errorsReport = {
      ...errorsReport,
      hasErrors: true,
      name: "El nombre ha quedado vacío o tiene errores",
    };
  }
  if (errorsState.memoryDate.hasErrors || memoryDate === "") {
    errorsReport = {
      ...errorsReport,
      hasErrors: true,
      memoryDate:
        "La fecha de ocurrencia del recuerdo ha quedado vacía o tiene errores",
    };
  }
  if (errorsState.visibility.hasErrors || visibility === "") {
    errorsReport = {
      ...errorsReport,
      hasErrors: true,
      visibility: "La visibilidad del recuerdo ha quedado vacía",
    };
  }
  if (errorsState.tag.hasErrors) {
    errorsReport = {
      ...errorsReport,
      hasErrors: true,
      tag: "La última etiqueta que estabas ingresando ha quedado con errores",
    };
  }
  if (errorsState.country.hasErrors || country === "") {
    errorsReport = {
      ...errorsReport,
      hasErrors: true,
      country: "El país en el que ocurrió el recuerdo ha quedado con errores",
    };
  }
  if (errorsState.city.hasErrors || city === "") {
    errorsReport = {
      ...errorsReport,
      hasErrors: true,
      city: "La ciudad en el que ocurrió el recuerdo ha quedado con errores",
    };
  }
  if (errorsState.authorizedEmail.hasErrors) {
    errorsReport = {
      ...errorsReport,
      hasErrors: true,
      authorizedEmail:
        "El último email de usuario para compartir tu recuerdo que estabas ingresando ha quedado con errores",
    };
  }
  if (errorsState.memoryPhotoText.hasErrors) {
    errorsReport = {
      ...errorsReport,
      hasErrors: true,
      memoryPhotoText:
        "El título de la última imágen que estabas ingresando ha quedado con errores",
    };
  }
  if (errorsState.memoryPhotoDescription.hasErrors) {
    errorsReport = {
      ...errorsReport,
      hasErrors: true,
      memoryPhotoDescription:
        "La descripción de la última imágen que estabas ingresando ha quedado con errores",
    };
  }

  return errorsReport;
};
