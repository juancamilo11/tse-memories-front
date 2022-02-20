import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import {
  activeNothingToShow,
  startCountMemoryView,
  startFetchAndShowRandomMemory,
  startFetchMemoryAllImages,
} from "../../actions/memoryActions";
import { startFetchUserById } from "../../actions/userActions";
import MemoryImagesList from "../../components/MemoryImagesList";
import ViewerList from "../../components/ViewerList";
import {
  sweetalertForFetchingMemoriesBuilder,
  sweetAlertForShowingAllMemoryViewers,
} from "../../helpers/sweetAlertBuilder";

const viewerList = [
  {
    name: "Doris del Carmen Mosquera Lozano",
    urlPhoto:
      "https://lh3.googleusercontent.com/a-/AOh14GjnkTKE1MwBx1jBXLj6SCsCSUANvgmn28L0yh31wg=s96-c-rg-br100",
    visualizationDate: "2022-02-04",
  },
  {
    name: "Juan Camilo Cardona Calderón",
    urlPhoto:
      "https://lh3.googleusercontent.com/a-/AOh14GjnkTKE1MwBx1jBXLj6SCsCSUANvgmn28L0yh31wg=s96-c-rg-br100",
    visualizationDate: "2022-02-04",
  },
  {
    name: "Wilmar Mosquera Lozano",
    urlPhoto:
      "https://lh3.googleusercontent.com/a-/AOh14GjnkTKE1MwBx1jBXLj6SCsCSUANvgmn28L0yh31wg=s96-c-rg-br100",
    visualizationDate: "2022-02-04",
  },
];

const MemoryView = () => {
  const { uid: userId } = useSelector((state) => state.auth);
  const { activeMemoryToShow, memoriesList } = useSelector(
    (state) => state.memories
  );

  const [viewerListStatus, setViewerListStatus] = useState({
    viewerList: [],
    showViewerList: false,
  });

  const { showViewerList } = viewerListStatus;

  const {
    memoryId,
    name,
    creatorId, //Utilizar este campo para traer la data del usuario
    visibility,
    location,
    tagList,
    memoryDate,
    memoryPhotoList,
    creationDate,
    isAFavorite,
    authorizedIdList,
    visualizationList,
  } = activeMemoryToShow;

  const [ownerInfo, setOwnerInfo] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    startFetchUserById(creatorId)
      .then((ownerInfoResponse) => {
        setOwnerInfo(ownerInfoResponse);
        dispatch(
          startCountMemoryView(memoryId, userId, visibility, memoriesList)
        );
      })
      .catch((err) => {
        //window.alert("No hay comunicación con el server");
      });
  }, [dispatch, memoriesList, memoryId, userId, visibility]);

  const handleShowViewers = (e) => {
    e.preventDefault();
    setViewerListStatus({
      ...viewerListStatus,
      showViewerList: !showViewerList,
    });
    if (!showViewerList) {
      Swal.fire({
        text: "La lista de usuarios que han visto el recuerdo aparecerá abajo",
        timer: 3000,
        timerProgressBar: true,
      });
    }
  };

  const handleAddOrRemoveFromFavorites = (e) => {
    e.preventDefault();
  };

  const handleRandomSearch = (e) => {
    e.preventDefault();
    sweetalertForFetchingMemoriesBuilder();
    dispatch(startFetchAndShowRandomMemory());
  };

  const handleGoBack = (e) => {
    e.preventDefault();
    dispatch(activeNothingToShow());
  };

  return (
    <div className="memory-view__main-container">
      <div className="memory-view__header-section">
        <div className="memory-view__header-view-count">
          {activeMemoryToShow.visibility !== "privado" && (
            <button
              className="memory-view__header-view-count-button"
              onClick={handleShowViewers}
            >
              <i className="fas fa-eye memory-view__header-view-count-icon"></i>
              <span>
                <b>{activeMemoryToShow.visualizationList.length}</b> vistas{" "}
                {showViewerList ? "(Ocultar)" : "(Mostrar)"}
              </span>
            </button>
          )}
          <button
            className="memory-view__header-view-count-button"
            onClick={handleAddOrRemoveFromFavorites}
          >
            {!true ? (
              <span>
                <i className="fas fa-heart memory-view__header-view-count-icon"></i>{" "}
                Eliminar
              </span>
            ) : (
              <span>
                <i className="far fa-heart memory-view__header-view-count-icon"></i>{" "}
                Agregar
              </span>
            )}
          </button>
        </div>
        <div className="memory-view__buttons-section">
          <button
            className="memory-view__random-search-button"
            onClick={handleRandomSearch}
          >
            Búsqueda aleatoria
          </button>
          <button
            className="memory-view__go-back-button"
            onClick={handleGoBack}
          >
            Atrás
          </button>
        </div>
      </div>
      <div className="memory-view__description-section">
        <img
          src={
            ownerInfo?.photoUrl ||
            "https://res.cloudinary.com/dahwtwzdl/image/upload/v1644706887/tse_memories/assets/no-content-image.webp"
          }
          className="memory-view__user-photo"
          alt="Profile pic"
        />
        <h4 className="memory-view__description-content">
          {ownerInfo?.name || "Nombre Usuario"} estuvo en {location.city},{" "}
          {location.country} el {memoryDate} y ha compartido este recuerdo
          llamado "{name}"
        </h4>
      </div>
      <div className="memory-view__tag-list-section">
        {tagList.map((tag) => (
          <div className="memory-view__tag-item">{tag}</div>
        ))}
      </div>
      <div className="memory-view__images-list-section">
        <MemoryImagesList memoryImages={memoryPhotoList} />
      </div>
      {JSON.stringify(visualizationList)}
      {showViewerList && <ViewerList viewerList={visualizationList || []} />}
    </div>
  );
};

export default MemoryView;
