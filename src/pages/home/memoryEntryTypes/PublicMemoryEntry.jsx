import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { activeMemory } from "../../../actions/memoryActions";

const MAX_NUM_TAGS_DISPLAYED = 10;

const PublicMemoryEntry = ({
  id,
  name,
  memoryDate,
  creationDate,
  visibility,
  tagList,
  ownerId,
  memoryPortrait,
  location,
  isAFavorite,
  viewsCount,
}) => {
  const dispatch = useDispatch();
  const { memories, auth } = useSelector((state) => state);
  const activedmemory = memories.activeMemory;

  const handleSelectMemory = () => {
    dispatch(
      activeMemory(id, {
        name,
        memoryDate,
        creationDate,
        visibility,
        tagList,
        ownerId,
        memoryPortrait,
        location,
        isAFavorite,
        viewsCount,
      })
    );
  };

  const handleWatchMemory = (e) => {
    e.preventDefault();
  };
  const handleModifyMemory = (e) => {
    e.preventDefault();
  };

  const handleDeleteMemory = (e) => {
    e.preventDefault();
  };
  return (
    <div
      className="memory-catalog__memory-entry"
      style={{ backgroundColor: activedmemory?.id === id && "#94DAFF" }}
    >
      {
        <div
          className="memory-catalog__memory-entry-picture"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url(${memoryPortrait})`,
          }}
        ></div>
      }

      <div className="memory-catalog__memory-entry-body">
        <h2 className="memory-catalog__memory-entry-title">{name}</h2>
        <div className="memory-catalog__decoration-line">
          <hr />
        </div>
        <p className="memory-catalog__memory-entry-content">
          <i class="fas fa-map-marker-alt memory-catalog__icon-entry-value"></i>
          <span className="bold-text">
            {location.country}, {location.city}
          </span>
        </p>
        <p className="memory-catalog__memory-entry-content">
          <i class="fas fa-calendar-alt memory-catalog__icon-entry-value"></i>
          <span className="bold-text">{memoryDate}</span>
        </p>
        <p>
          <i class="fas fa-tags memory-catalog__icon-entry-value"></i>
          {tagList
            .slice(0, MAX_NUM_TAGS_DISPLAYED)
            .toString()
            .replaceAll(",", ", ")}
          ...
        </p>
        <div className="memory-catalog__memory-entry-date-box">
          <button
            className="memory-catalog__visit-memory mt-1"
            onClick={handleWatchMemory}
          >
            Ver Recuerdo
          </button>
          <button
            className="memory-catalog__visit-memory mt-1"
            onClick={handleModifyMemory}
          >
            Modificar Recuerdo
          </button>

          {isAFavorite ? (
            <i class="fas fa-heart memory-catalog__icon-fav-memory"></i>
          ) : (
            <i class="far fa-heart memory-catalog__icon-fav-memory"></i>
          )}
          <div className="memory-catalog__memory-view-count text-center">
            <h6 className="mt-2">
              <i class="fas fa-eye memory-catalog__icon-entry-value"></i>
              {viewsCount} visitas
            </h6>
          </div>
        </div>
        {!auth.uid === ownerId && (
          <button
            className="memory-catalog__delete-memory-button"
            onClick={handleDeleteMemory}
          >
            Eliminar
          </button>
        )}
      </div>
    </div>
  );
};

export default PublicMemoryEntry;
