import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { fetchViewersData } from "../actions/userActions";

const MAX_VIEWER_RECORDS = 10;

const ViewerList = ({ visualizationList }) => {
  const [recordsRange, setRecordsRange] = useState({
    min: 0,
    max: MAX_VIEWER_RECORDS,
  });
  const [viewersInfo, setViewersInfo] = useState([]);

  const { min, max } = recordsRange;

  const handlePreviousResults = (e) => {
    e.preventDefault();
    setRecordsRange({
      min: min - MAX_VIEWER_RECORDS,
      max: max - MAX_VIEWER_RECORDS,
    });
  };
  const handleNextResults = (e) => {
    e.preventDefault();
    // if (min + max > viewerList.length) return;
    setRecordsRange({
      min: min + MAX_VIEWER_RECORDS,
      max: max + MAX_VIEWER_RECORDS,
    });
  };

  useEffect(() => {
    fetchViewersData(
      visualizationList.map((visualization) => visualization.userId)
    ).then((userList) => {
      setViewersInfo(userList);
    });
  }, [visualizationList]);

  return (
    <section>
      <h3 className="viewer-list__main-container text-center">
        La lista de usuarios que han visto este recuerdo
      </h3>
      <div className="viewer-list__viewers-container">
        {viewersInfo.slice(min, max).map((viewer) => (
          <div key={viewer.urlProfilePhoto} className="viewer-list__viewer">
            <div className="viewer-list__viewer-profile-photo">
              <img
                src={`${viewer.urlProfilePhoto}`}
                className="viewer-list__viewer-profile-photo"
                alt="viewer Google pic"
              />
            </div>
            <div className="">
              <p>{viewer.name}</p>
            </div>
            <div className="">
              <p className="">
                {visualizationList.find(
                  (visualization) => visualization.userId === viewer.id
                )?.visualizationDate || "Sin fecha"}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="viewer-list__pagination-buttons">
        <button
          className="viewer-list__pagination-button"
          onClick={handlePreviousResults}
          disabled={min === 0}
        >
          Anterior
        </button>
        <button
          className="viewer-list__pagination-button"
          onClick={handleNextResults}
          disabled={max >= viewersInfo.length}
        >
          Siguiente
        </button>
      </div>
    </section>
  );
};

export default ViewerList;
