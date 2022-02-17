import React, { useReducer, useState } from "react";
import ErrorFlag from "../../components/ErrorFlag";
import useForm from "../../hooks/useForm";
import { useDispatch } from "react-redux";
import {
  formInitialErrorState,
  formInitialValues,
  isTheTagAlreadyDefined,
  isTheEmailAlreadyDefined,
  memoryFormSubmitValidation,
  memoryFormValidator,
  visibilityTypes,
} from "../../helpers/memoryForm/memoryFormValidation";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import MemoryTagList from "../../components/MemoryTagList";
import InputMemoryImagesForm from "../../components/InputMemoryImagesForm";
import {
  sweetalertForEmailAlreadyDefinedBuilder,
  sweetalertForFormSubmitErrorsReportBuilder,
  sweetalertForInputTagAlreadyDefinedBuilder,
  sweetalertForMemorySuccessfullyCreatedOrUpdateBuilder,
  sweetalertForVisibilityChangeBuilder,
} from "../../helpers/sweetAlertBuilder";
import Swal from "sweetalert2";
import AuthorizedUserList from "../../components/AuthorizedUserList";
import { startSaveOrUpdateMemory } from "../../actions/memoryActions";

const MemoryActualizationForm = () => {
  const { email, uid } = useSelector((state) => state.auth);
  const [formValues, handleInputChange, resetForm] = useForm(formInitialValues);
  const [errorsState, setErrorsState] = useState(formInitialErrorState);
  const [newMemoryId, setNewMemoryId] = useState(uuidv4());
  const [warningColor, setWarningColor] = useState("yellow");
  const { activeMemoryToUpdate } = useSelector((state) => state.memories);

  const [tagList, setTagList] = useState([]);
  const [memoryPhotoList, setMemoryPhotoList] = useState([]);
  const [authorizedEmailList, setAuthorizedEmailList] = useState([]);

  const dispatch = useDispatch();

  const {
    id,
    name,
    memoryDate,
    creationDate,
    visibility,
    tag,
    country,
    city,
    authorizedEmail,
  } = formValues;

  const handleAddNewTag = (e) => {
    e.preventDefault();
    const tagValue = document.getElementById("tag").value.trim();
    const cleanEvent = { target: { name: "tag", value: "" } };
    if (tagValue === "" || errorsState.tag.hasErrors) return;
    if (isTheTagAlreadyDefined(tagValue, tagList, setErrorsState)) {
      sweetalertForInputTagAlreadyDefinedBuilder(tagValue);
      return;
    }
    setTagList([...tagList, tagValue]);
    handleInputValidation(cleanEvent);
  };

  const handleAddNewEmailForShareMemory = (e) => {
    e.preventDefault();
    const emailValue = document.getElementById("authorizedEmail").value.trim();
    const cleanEvent = { target: { name: "authorizedEmail", value: "" } };
    if (emailValue === "" || errorsState.authorizedEmail.hasErrors) return;
    if (
      isTheEmailAlreadyDefined(emailValue, authorizedEmailList, setErrorsState)
    ) {
      sweetalertForEmailAlreadyDefinedBuilder(emailValue);
      return;
    }
    setAuthorizedEmailList([emailValue, ...authorizedEmailList]);
    handleInputValidation(cleanEvent);
  };

  const handleInputValidation = (e) => {
    handleInputChange(e);
    memoryFormValidator(
      e,
      setErrorsState,
      email, //To build the cloudinary folder target
      activeMemoryToUpdate.memoryId //To build the cloudinary folder target
    );
  };

  const handleMemoryFormSubmit = (e) => {
    e.preventDefault();
    const memoryInfo = {
      ...formValues,
      tagList,
      memoryPhotoList,
      authorizedEmailList,
    };
    const errorsReport = memoryFormSubmitValidation(memoryInfo, errorsState);
    if (errorsReport.hasErrors) {
      sweetalertForFormSubmitErrorsReportBuilder(errorsReport);
      return;
    }
    startSaveOrUpdateMemory(memoryInfo, uid).then((res) => {
      sweetalertForMemorySuccessfullyCreatedOrUpdateBuilder();
    });
  };

  const handleSelectImageToLoad = (e) => {
    e.preventDefault();
    const { id } = e.target;
    document.getElementById("memory-form__input-image").click();
  };

  const getLocalDate = () => {
    return new Date().toISOString().split("T")[0];
  };

  const changeSetDangerColor = (e) => {
    setWarningColor("red");
  };

  const changeDefaultWarningColor = (e) => {
    setWarningColor("yellow");
  };

  return (
    <div className="memory-form__main-container">
      <div className="memory-form__header-info">
        <div className="memory-form__id-container">
          <b className="memory-form__id-label">Identificador</b>
          <div className="memory-form__id-content">
            <b className="memory-form__id-value">{id || newMemoryId}</b>
            <button className="memory-form__id-copy-button">
              <i className="fas fa-copy memory-form__id-copy"></i>
            </button>
          </div>
        </div>

        <div className="memory-form__creation-date-container">
          <p className="memory-form__creation-date-label">Fecha de creación</p>
          <b className="memory-form__creation-date-value">
            {creationDate || getLocalDate()}
          </b>
        </div>
      </div>

      <form onSubmit={handleMemoryFormSubmit}>
        <div className="memory-form__command-buttons">
          <button className="memory-form__command-button" type="submit">
            Guardar
          </button>
        </div>
        <div className="memory-form__form-container">
          <div className="memory-form__inputs-container">
            <div className="memory-form__input-container">
              <label htmlFor="name" className="memory-form__input-label">
                Nombre del recuerdo
              </label>
              <input
                type="text"
                autoFocus="true"
                name="name"
                id="name"
                className="memory-form__input"
                autoComplete="off"
                value={name}
                onChange={handleInputValidation}
              />
              <input
                type="date"
                name="memoryDate"
                id="memoryDate"
                className="memory-form__input memory-form__input--secundary"
                autoComplete="off"
                value={memoryDate}
                onChange={handleInputValidation}
              />
            </div>
            <div className="memory-form__error-flag">
              {errorsState.memoryDate.hasErrors && (
                <ErrorFlag
                  message={
                    errorsState.memoryDate.message ||
                    "Error: Error de prueba de name"
                  }
                  color="red"
                />
              )}
            </div>
            <div className="memory-form__error-flag mt-2 mb-4">
              {errorsState.name.hasErrors && (
                <ErrorFlag
                  message={
                    errorsState.name.message ||
                    "Error: Error de prueba de memoryDate"
                  }
                  color="red"
                />
              )}
            </div>

            <div className="memory-form__input-container">
              <label htmlFor="country" className="memory-form__input-label">
                País y ciudad
              </label>
              <input
                type="text"
                name="country"
                id="country"
                className="memory-form__input"
                autoComplete="off"
                value={country}
                onChange={handleInputValidation}
              />

              <input
                type="text"
                name="city"
                id="city"
                className="memory-form__input memory-form__input--secundary"
                autoComplete="off"
                value={city}
                onChange={handleInputValidation}
              />
            </div>
            <div className="memory-form__error-flag mt-2 mb-4">
              {errorsState.country.hasErrors && (
                <ErrorFlag
                  message={
                    errorsState.country.message ||
                    "Error, mensaje de prueba de country"
                  }
                  color="red"
                />
              )}
            </div>
            <div className="memory-form__error-flag mt-2 mb-4">
              {errorsState.city.hasErrors && (
                <ErrorFlag
                  message={
                    errorsState.city.message ||
                    "Error, mensaje de prueba de city"
                  }
                  color="red"
                />
              )}
            </div>

            <div className="memory-form__input-container">
              <label htmlFor="tag" className="memory-form__input-label">
                Palabras clave
              </label>
              <input
                type="text"
                name="tag"
                id="tag"
                className="memory-form__input memory-form__input-tag"
                autoComplete="off"
                value={tag}
                onChange={handleInputValidation}
              />
              <button
                onClick={handleAddNewTag}
                className="memory-form__input memory-form__button-input-tag btn btn-primary"
                disabled={errorsState.tag.hasErrors}
                type="button"
                disabled={tagList.length >= 25}
              >
                Ingresar
              </button>
              <select
                name="visibility"
                id="visibility"
                className="memory-form__input memory-form__input--secundary"
                autoComplete="off"
                value={visibility}
                onChange={handleInputValidation}
                onMouseOver={changeSetDangerColor}
                onMouseOut={changeDefaultWarningColor}
              >
                <option value="NN" selected>
                  Seleccione la visibilidad
                </option>
                {visibilityTypes.map((visibility) => (
                  <option title={visibility.title} value={visibility.type}>
                    {visibility.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="memory-form__error-flag mt-2 mb-4">
              {
                <ErrorFlag
                  message="IMPORTANTE: Antes de cambiar la visibilidad de un recuerdo tenga presente lo siguiente: 
                              Si cambia la visibilidad de un recuerdo protegido a público o privado se eliminará la lista de usuarios autorizados para ver el recuerdo, o 
                              si cambia la visibilidad de un recuerdo protegido o público a privado se eliminará la lista de usuarios que han visto el recuerdo"
                  color={warningColor}
                />
              }
            </div>
            <div className="memory-form__error-flag mt-2 mb-4">
              {errorsState.tag.hasErrors && (
                <ErrorFlag
                  message={
                    errorsState.tag.message || "Error, error de prueba de tag"
                  }
                  color="red"
                />
              )}
            </div>
            <div className="memory-form__error-flag mt-2 mb-4">
              {errorsState.visibility.hasErrors && (
                <ErrorFlag
                  message={
                    errorsState.visibility.message ||
                    "Error, error de prueba de visibility"
                  }
                  color="red"
                />
              )}
            </div>
            <MemoryTagList tagList={tagList} setTagList={setTagList} />

            {visibility === "protegido" && (
              <div>
                <div className="memory-form__input-container">
                  <label
                    htmlFor="memoryPhotoText"
                    className="memory-form__input-label"
                  >
                    Email del usuario
                  </label>
                  <input
                    type="text"
                    name="authorizedEmail"
                    id="authorizedEmail"
                    className="memory-form__input memory-form__input-shared-email"
                    autoComplete="off"
                    value={authorizedEmail}
                    onChange={handleInputValidation}
                  />
                  <button
                    onClick={handleAddNewEmailForShareMemory}
                    className="memory-form__input memory-form__button-input-tag btn btn-primary"
                    disabled={errorsState.authorizedEmail.hasErrors}
                    type="button"
                  >
                    Ingresar
                  </button>
                </div>
                <div className="memory-form__error-flag mt-2 mb-4">
                  {errorsState.authorizedEmail.hasErrors && (
                    <ErrorFlag
                      message={errorsState.authorizedEmail.message}
                      color="red"
                    />
                  )}
                </div>

                <AuthorizedUserList
                  authorizedEmailList={authorizedEmailList}
                  setAuthorizedEmailList={setAuthorizedEmailList}
                />
              </div>
            )}
          </div>

          <InputMemoryImagesForm
            formValues={formValues}
            errorsState={errorsState}
            handleInputValidation={handleInputValidation}
            handleSelectImageToLoad={handleSelectImageToLoad}
            memoryPhotoList={memoryPhotoList}
            setMemoryPhotoList={setMemoryPhotoList}
            resetForm={resetForm}
          />
        </div>
      </form>
    </div>
  );
};

export default MemoryActualizationForm;
