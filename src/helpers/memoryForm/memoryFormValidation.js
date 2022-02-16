import { uploadFileToCloudinary } from "../../actions/cloudinaryActions";

//Initial values for the section #1 form of the store setup.
export const formInitialValues = {
  id: "",
  name: "",
  memoryDate: "",
  creationDate: "",
  visibility: "",
  tag: "",
  memoryPhotoText: "",
  memoryPhotoImg: "",
  memoryPhotoDescription: "",
  country: "",
  city: "",
};

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
};

export const visibilityTypes = [
  { type: "privado", label: "privado" },
  { type: "publico", label: "publico" },
  { type: "protegido", label: "protegido" },
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

export const memoryFormSubmitValidation = (
  formValues,
  tagsList,
  errorsState
) => {};
