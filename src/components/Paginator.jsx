import React from "react";

const Paginator = ({ skip, limit, url, setterFunction }) => {
  const handleFetchNextRecords = (e) => {
    e.preventDefault();
  };

  const handleFetchPrevRecords = (e) => {
    e.preventDefault();
  };

  const handleChangeNumberOfDisplayedStores = (e) => {
    e.preventDefault();
    window.alert(
      "se ha cambiado el número de resultados mostrados a " +
        e.target.value +
        " tiendas"
    );
  };

  return (
    <div className="paginator__main-container">
      <div className="paginator__buttons-container">
        <button
          className="paginator__pagination-button"
          onClick={handleFetchNextRecords}
          disabled={skip <= 0}
        >
          <i class="fas fa-arrow-circle-left store-catalog__icon-pagination"></i>
          Anterior
        </button>
        <button
          className="paginator__pagination-button"
          onClick={handleFetchPrevRecords}
        >
          Siguiente
          <i class="fas fa-arrow-circle-right store-catalog__icon-pagination"></i>
        </button>
      </div>

      <div className="paginator__pagination-items-container">
        <label htmlFor="pagination-quantity-items">Número de resultados</label>
        <select
          id="pagination-quantity-items"
          onChange={handleChangeNumberOfDisplayedStores}
        >
          <option value="10" className="paginator__pagination-item">
            10
          </option>
          <option value="30" className="paginator__pagination-item">
            30
          </option>
          <option value="50" className="paginator__pagination-item">
            50
          </option>
          <option value="100" className="paginator__pagination-item">
            100
          </option>
        </select>
      </div>
    </div>
  );
};

export default Paginator;

/**const usePagination = (skip, limit, url, setterFunction) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(async () => {
    try {
        const response = await fetch(url)
        return await response.json();
    } catch(e) {
        Swal.fire({
          title: "Error en la búsqueda",
          text: "Al parecer hubo un error en la búsqueda solicitada, intente nuevamente.",
          timer: 2000,
        });
    }
  }, [url]);

  return { data, error };
};
export default usePagination; */
