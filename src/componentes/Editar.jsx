import React, { useState, useEffect } from 'react';
const Editar = ({pelicula,datos,setDatos,leerLocalStorage, setEditar}) => {

    const actualizarInformacion = (e, id) => {
        e.preventDefault();
        let peliculasActual = leerLocalStorage();
    
        let index = peliculasActual.findIndex((pelicula) => pelicula.id === id);
        let datosForm = {
          id,
          titulo: e.target.titulo.value,
          descripcion: e.target.descripcion.value,
          imagen: e.target.imagen.value,
        };
        peliculasActual[index] = datosForm;
        localStorage.setItem("pelicula", JSON.stringify(peliculasActual));
        setEditar(0);
      };
    return ( <>
    
    <form
        onSubmit={(e) => {
          actualizarInformacion(e, pelicula.id);
        }}
      >
        <input
          type="text"
          id="id"
          className="form-control"
          name="id"
          placeholder=""
          hidden="false"
        />
        <input
          type="text"
          id="titulo"
          className="form-control"
          name="titulo"
          placeholder="Titulo"
          defaultValue={pelicula.titulo}
        />
        <textarea
          id="descripcion"
          name="descripcion"
          className="form-control mt-2"
          placeholder="Descripción"
          rows="5"
          style={{ resize: "none" }}
          defaultValue={pelicula.descripcion}
        ></textarea>
        <input
          type="text"
          id="imagen"
          className="form-control mt-2"
          name="imagen"
          placeholder="url de la imagen"
          defaultValue={pelicula.imagen}
        />
        <button type="submit"
          
          className="btn btn-success w-100 mt-2"
          data-bs-dismiss="offcanvas"> Actualizar
          
        </button>
      </form>
    
    
    </> );
}
 
export default Editar;