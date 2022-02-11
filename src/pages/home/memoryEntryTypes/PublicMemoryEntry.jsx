import React from "react";

const MemoryEntry = ({
  id,
  name,
  memoryDate,
  creationDate,
  visibility,
  tagList,
  owner,
  memoryPortrait,
  location,
}) => {
  const dispatch = useDispatch();
  const { memories } = useSelector((state) => state);
  const activedmemory = memories.activeMemory;
  const handleSelectmemory = () => {
    dispatch(
      activememory(id, {
        name,
        slogan,
        endingDate,
        location,
        memoryTags,
        urlmemory,
        isAFavorite,
        viewsCount,
        portraitImageUrl,
      })
    );
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
            backgroundImage: `url(https://cdn.blacksoft.ca/assets/blacksoft/img/empty.png)`,
          }}
        ></div>
      }

      <div className="memory-catalog__memory-entry-body">
        <h2 className="memory-catalog__memory-entry-title">{name}</h2>
        <div className="memory-catalog__decoration-line">
          <hr />
        </div>
        <p className="memory-catalog__memory-entry-content memory-catalog__memory-entry-slogan">
          {slogan}
        </p>
        <p className="memory-catalog__memory-entry-content">
          <i class="fas fa-calendar-alt memory-catalog__icon-entry-value"></i>
          Abierta hasta el <span className="bold-text">{endingDate}</span>
        </p>
        <p className="memory-catalog__memory-entry-content">
          <i class="fas fa-map-marker-alt memory-catalog__icon-entry-value"></i>
          {location}
        </p>
        <p>
          <i class="fas fa-tags memory-catalog__icon-entry-value"></i>
          {memoryTags
            .slice(0, MAX_NUM_TAGS_DISPLAYED)
            .toString()
            .replaceAll(",", ", ")}
        </p>
        <div className="memory-catalog__memory-entry-date-box">
          <button
            className="memory-catalog__visit-memory mt-1"
            onClick={handleSelectmemory}
          >
            Ver tienda
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
      </div>
    </div>
  );
};

export default MemoryEntry;
