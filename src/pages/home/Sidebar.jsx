import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { startLogout } from "../../actions/authActions";
import { activeSearchPanel } from "../../actions/memoryActions";
import MemoryEntries from "./MemoryEntries";

const Sidebar = () => {
  //Aquí es donde se llevan a cabo los procesos de filtrado y búsqueda y ordenamiento

  const { memories } = useSelector((state) => state);

  const dispatch = useDispatch();

  const handleOpenSearchPanel = (e) => {
    e.preventDefault();
    dispatch(activeSearchPanel());
  };

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(startLogout());
  };

  const { auth } = useSelector((state) => state);
  return (
    <aside className="memory-catalog__sidebar">
      <div className="memory-catalog__sidebar-navbar">
        <div className="memory-catalog__sidebar-user-info">
          {auth?.photoUrl ? (
            <img
              src={auth.photoUrl}
              alt="profile pic"
              className="memory-catalog__img-profile"
            />
          ) : (
            <i className="fas fa fa-user-circle memory-catalog__logo-profile"></i>
          )}
          <span className="memory-catalog__display-name"> {auth.name}</span>
        </div>
        <div className="memory-catalog__sidebar-buttons">
          <button
            className="memory-catalog__search-button"
            onClick={handleOpenSearchPanel}
          >
            Buscar y filtrar
          </button>
          <button
            className="memory-catalog__logout-button"
            onClick={handleLogout}
          >
            Salir
          </button>
        </div>
      </div>
      <MemoryEntries memories={memories} />
    </aside>
  );
};

export default Sidebar;
