import React from "react";
import "@styles/NotFound.scss";

const NotFound = () => {
  return (
    <div>
      <h1 className="title-404">404</h1>
      <p className="text-404">Oops! Pagina no encontrada.</p>
      <a className="button-404" href="/">
        <button className="primary-button">
          Regresar a la página inicial.
        </button>
      </a>
    </div>
  );
};

export default NotFound;
