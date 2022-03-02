import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  activeMemoryToShow,
  activeMemoryToUpdate,
  startDeleteMemory,
} from "../../../actions/memoryActions";
import { sweetAlertForMemoryDeleteConfirmationBuilder } from "../../../helpers/sweetAlertBuilder";

const MAX_NUM_TAGS_DISPLAYED = 10;

const PublicMemoryEntry = ({
  id,
  name,
  memoryDate,
  creationDate,
  visibility,
  tagList,
  creatorId,
  memoryPhotoList,
  location,
  isAFavorite, // No implemented yet
  visualizationList,
}) => {
  const dispatch = useDispatch();
  const { memories, auth } = useSelector((state) => state);
  const activeMemory = memories.activeMemoryToShow;
  const activeMemoryUpdating = memories.activeMemoryToUpdate;

  const handleWatchMemory = (e) => {
    e.preventDefault();
    dispatch(
      activeMemoryToShow(id, {
        name,
        memoryDate,
        creationDate,
        visibility,
        tagList,
        creatorId,
        memoryPhotoList,
        location,
        isAFavorite,
        visualizationList,
      })
    );
  };

  const handleModifyMemory = (e) => {
    e.preventDefault();
    dispatch(
      activeMemoryToUpdate(id, {
        name,
        memoryDate,
        creationDate,
        visibility,
        tagList,
        creatorId,
        memoryPhotoList,
        location,
        isAFavorite,
        visualizationList,
      })
    );
  };

  const handleDeleteMemory = (e) => {
    e.preventDefault();
    sweetAlertForMemoryDeleteConfirmationBuilder(name, creationDate).then(
      (res) => {
        if (res.isConfirmed) {
          dispatch(
            startDeleteMemory(auth.uid, id, visibility, memories.memoriesList)
          );
        }
      }
    );
  };

  return (
    <div
      className="memory-catalog__memory-entry"
      style={{
        backgroundColor:
          (activeMemory?.memoryId === id && "#94DAFF") ||
          (activeMemoryUpdating?.memoryId === id && "#94DAAA"),
      }}
    >
      <div
        className="memory-catalog__memory-entry-picture"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${
            memoryPhotoList[0]?.urlPhoto ||
            "https://res.cloudinary.com/dahwtwzdl/image/upload/v1644706887/tse_memories/assets/no-content-image.webp"
          })`,
        }}
      ></div>

      <div className="memory-catalog__memory-entry-body">
        <h2 className="memory-catalog__memory-entry-title text-center">
          {name}
        </h2>
        <div className="memory-catalog__decoration-line">
          <hr />
        </div>
        <p className="memory-catalog__memory-entry-content">
          <i className="fas fa-map-marker-alt memory-catalog__icon-entry-value"></i>
          <span className="bold-text">
            {location.city}, {location.country}
          </span>
        </p>
        <p className="memory-catalog__memory-entry-content">
          <i className="fas fa-calendar-alt memory-catalog__icon-entry-value"></i>
          <span className="bold-text">{memoryDate}</span>
        </p>
        <p className="memory-catalog__memory-entry-content">
          <i className="fas fa-tags memory-catalog__icon-entry-value"></i>
          {tagList
            .slice(0, MAX_NUM_TAGS_DISPLAYED)
            .toString()
            .replaceAll(",", ", ")}
          ...
        </p>
        <div className="memory-catalog__memory-entry-buttons">
          <button
            className="memory-catalog__visit-memory-button mt-1"
            onClick={handleWatchMemory}
          >
            Ver Recuerdo
          </button>
          {auth.uid === creatorId && (
            <button
              className="memory-catalog__visit-memory mt-1"
              onClick={handleModifyMemory}
            >
              Modificar Recuerdo
            </button>
          )}
        </div>

        <div className="memory-catalog__memory-entry-details-container">
          <div className="memory-catalog__memory-entry-details">
            <div className="memory-catalog__memory-entry-details-favorite">
              {isAFavorite ? (
                <>
                  <i className="fas fa-heart memory-catalog__icon-fav-memory"></i>
                  <h5>En tus favoritos</h5>
                </>
              ) : (
                <>
                  <i className="far fa-heart memory-catalog__icon-fav-memory"></i>
                  <h5>No en favoritos</h5>
                </>
              )}
            </div>
            <div className="memory-catalog__memory-entry-details-view-count">
              <i className="fas fa-eye memory-catalog__icon-fav-memory"></i>
              <h5>{visualizationList.length} visitas</h5>
            </div>
          </div>
        </div>

        {auth.uid === creatorId && (
          <button
            className="memory-catalog__delete-memory-button"
            onClick={handleDeleteMemory}
            title="Este recuerdo es tuyo y sólo tú puedes eliminarlo."
          >
            <i className="fas fa-trash memory-catalog__icon-delete-memory"></i>
          </button>
        )}
        <p className="memory-catalog__visibility-icon">
          <i
            className="fas fa-users"
            title="Este recuerdo público y cualquier persona en el mundo puede verlo"
          ></i>
        </p>
      </div>
    </div>
  );
};

export default PublicMemoryEntry;
