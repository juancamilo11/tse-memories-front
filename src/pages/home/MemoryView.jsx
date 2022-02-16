import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import {
  activeNothingToShow,
  startCountMemoryView,
  startFetchMemoryAllImages,
} from "../../actions/memoryActions";
import { startFetchMemoryOwnerInfoByMemoryId } from "../../actions/userActions";
import MemoryImagesList from "../../components/MemoryImagesList";
import ViewerList from "../../components/ViewerList";
import { sweetAlertForShowingAllMemoryViewers } from "../../helpers/sweetAlertBuilder";

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
  {
    name: "Pepito andres perez marin",
    urlPhoto:
      "https://lh3.googleusercontent.com/a-/AOh14GjnkTKE1MwBx1jBXLj6SCsCSUANvgmn28L0yh31wg=s96-c-rg-br100",
    visualizationDate: "2022-02-04",
  },
  {
    name: "Maria camila Carodna Villada",
    urlPhoto:
      "https://lh3.googleusercontent.com/a-/AOh14GjnkTKE1MwBx1jBXLj6SCsCSUANvgmn28L0yh31wg=s96-c-rg-br100",
    visualizationDate: "2022-02-04",
  },
  {
    name: "Maria camila Carodna Villada",
    urlPhoto:
      "https://lh3.googleusercontent.com/a-/AOh14GjnkTKE1MwBx1jBXLj6SCsCSUANvgmn28L0yh31wg=s96-c-rg-br100",
    visualizationDate: "2022-02-04",
  },
  {
    name: "Maria camila Carodna Villada",
    urlPhoto:
      "https://lh3.googleusercontent.com/a-/AOh14GjnkTKE1MwBx1jBXLj6SCsCSUANvgmn28L0yh31wg=s96-c-rg-br100",
    visualizationDate: "2022-02-04",
  },
  {
    name: "Maria camila Carodna Villada",
    urlPhoto:
      "https://lh3.googleusercontent.com/a-/AOh14GjnkTKE1MwBx1jBXLj6SCsCSUANvgmn28L0yh31wg=s96-c-rg-br100",
    visualizationDate: "2022-02-04",
  },
  {
    name: "Maria camila Carodna Villada",
    urlPhoto:
      "https://lh3.googleusercontent.com/a-/AOh14GjnkTKE1MwBx1jBXLj6SCsCSUANvgmn28L0yh31wg=s96-c-rg-br100",
    visualizationDate: "2022-02-04",
  },
  {
    name: "Maria camila Carodna Villada",
    urlPhoto:
      "https://lh3.googleusercontent.com/a-/AOh14GjnkTKE1MwBx1jBXLj6SCsCSUANvgmn28L0yh31wg=s96-c-rg-br100",
    visualizationDate: "2022-02-04",
  },
  {
    name: "Maria camila Carodna Villada",
    urlPhoto:
      "https://lh3.googleusercontent.com/a-/AOh14GjnkTKE1MwBx1jBXLj6SCsCSUANvgmn28L0yh31wg=s96-c-rg-br100",
    visualizationDate: "2022-02-04",
  },
];

const MemoryView = () => {
  const { userId } = useSelector((state) => state.auth);
  const { activeMemoryToShow, memoriesList } = useSelector(
    (state) => state.memories
  );

  const [viewerListStatus, setViewerListStatus] = useState({
    viewerList: [],
    showViewerList: false,
  });

  const { showViewerList } = viewerListStatus;

  const {
    id: memoryId,
    name,
    creatorId,
    visibility,
    location,
    tagList,
    memoryDate,
  } = activeMemoryToShow;

  const [ownerInfo, setOwnerInfo] = useState(null);
  const [memoryImages, setMemoryImages] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    startFetchMemoryOwnerInfoByMemoryId(memoryId)
      .then((ownerInfoResponse) => {
        setOwnerInfo(ownerInfoResponse);
        return startFetchMemoryAllImages(memoryId, visibility);
      })
      .then((memoryImagesResponse) => {
        setMemoryImages(memoryImagesResponse);
        dispatch(
          startCountMemoryView(memoryId, userId, visibility, memoriesList)
        );
      })
      .catch((err) => {
        //window.alert("No hay comunicación con el server");
      });
  }, []);

  const handleShowViewers = (e) => {
    e.preventDefault();
    setViewerListStatus({
      ...viewerListStatus,
      showViewerList: !showViewerList,
    });
    if (!showViewerList) {
      Swal.fire({
        text: "La lista de usuarios que han visto el recuerdo aparecerá abajo",
      });
    }
  };

  const handleAddOrRemoveFromFavorites = (e) => {
    e.preventDefault();
  };

  const handleGoBack = (e) => {
    dispatch(activeNothingToShow());
  };

  return (
    <div className="memory-view__main-container">
      <div className="memory-view__header-section">
        <div className="memory-view__header-view-count">
          <button
            className="memory-view__header-view-count-button"
            onClick={handleShowViewers}
          >
            <i className="fas fa-eye memory-view__header-view-count-icon"></i>
            <span>
              <b>{activeMemoryToShow.viewsCount}</b> vistas{" "}
              {showViewerList ? "(Ocultar)" : "(Mostrar)"}
            </span>
          </button>
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
          <button className="memory-view__random-search-button">
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
          alt="Profile photo"
        />
        <h4 className="memory-view__description-content">
          {ownerInfo?.name} estuvo en {location.city}, {location.country} el{" "}
          {memoryDate} y ha compartido este recuerdo llamado "{name}"
        </h4>
      </div>
      <div className="memory-view__tag-list-section">
        {tagList.map((tag) => (
          <div className="memory-view__tag-item">{tag}</div>
        ))}
      </div>
      <div className="memory-view__images-list-section">
        <MemoryImagesList memoryImages={memoryImages || []} />
      </div>
      {showViewerList && <ViewerList viewerList={viewerList || []} />}
    </div>
  );
};

export default MemoryView;
