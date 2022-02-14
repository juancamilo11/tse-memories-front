import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import {
  startCountMemoryView,
  startFetchMemoryAllImages,
} from "../../actions/memoryActions";
import { startFetchMemoryOwnerInfoByMemoryId } from "../../actions/userActions";

const MemoryView = () => {
  const { userId } = useSelector((state) => state.auth);
  const { activeMemoryToShow, memoriesList } = useSelector(
    (state) => state.memories
  );
  const { id: memoryId, ownerId, visibility } = activeMemoryToShow;

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
        window.alert("No hay comunicación con el server");
      });
  }, []);

  return (
    <div className="memory-view__main-container">
      <div className="memory-view__header-section">
        <div className="memory-view__header-view-count">
          {activeMemoryToShow?.visibility !== "privado" ? (
            <button className="memory-view__header-view-count-button">
              <i className="fas fa-eye memory-view__header-view-count-icon"></i>
              <span>
                <b>{activeMemoryToShow.viewsCount}</b> vistas
              </span>
            </button>
          ) : (
            <span>Este recuerdo es privado y sólo tú puedes verlo</span>
          )}
        </div>
        <div className="memory-view__buttons-section">
          <button className="memory-view__random-search-button">
            Búsqueda aleatoria
          </button>
          <button className="memory-view__go-back-button">Atrás</button>
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
          {ownerInfo?.name} ha compartido un recuerdo en {}
        </h4>
      </div>
    </div>
  );
};

export default MemoryView;
