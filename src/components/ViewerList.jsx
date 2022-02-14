import React from "react";
import { useState } from "react";

const ViewerList = ({ viewerList }) => {
  const [recordsRange, setRecordsRange] = useState({
    min: 0,
    max: 2,
  });

  const { min, max } = recordsRange;

  const handlePreviusResults = (e) => {
    e.preventDefault();
    setRecordsRange({ min: min - 2, max: max - 2 });
  };
  const handleNextResults = (e) => {
    e.preventDefault();
    // if (min + max > viewerList.length) return;
    setRecordsRange({ min: min + 2, max: max + 2 });
  };

  return (
    <section>
      <h3 className="viewer-list__main-container text-center">
        La lista de usuarios que han visto este recuerdo
      </h3>
      <div className="viewer-list__viewers-container">
        {viewerList.slice(min, max).map((viewer) => (
          <div className="viewer-list__viewer">
            <div className="viewer-list__viewer-profile-photo">
              <img
                src={viewer.urlPhoto}
                className="viewer-list__viewer-profile-photo"
              />
            </div>
            <div className="">
              <p src={viewer.urlPhoto}>{viewer.name}</p>
            </div>
            <div className="">
              <p className="">{viewer.visualizationDate}</p>
            </div>
          </div>
        ))}
      </div>
      <div>
        <br />
        min {min}
        max {max}
        <br />
        <button onClick={handlePreviusResults} disabled={min === 0}>
          Anterior
        </button>
        <button
          onClick={handleNextResults}
          disabled={max === viewerList.length}
        >
          Siguiente
        </button>
      </div>
    </section>
  );
};

export default ViewerList;
