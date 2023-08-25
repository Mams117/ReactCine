import React, { useState, useEffect } from 'react';
import Editar from './Editar';
const Section = ({datos,setDatos}) => {
    const [editar, setEditar] = useState(0);
    const leerLocalStorage = () => {

        let peliculas= JSON.parse(localStorage.getItem("pelicula"));
        setDatos(peliculas);
        return peliculas;
        // console.log(datos);
      };


      const borrarPelicula = (id) => {
        //console.log(id);
        //leer la base de datos local actual y la transformamos en un array
        let bdLocal = leerLocalStorage();
    
        //creamos un nuevo arreglo donde filtramos por el id
        let bdNueva = bdLocal.filter((datos) => datos.id !== parseInt(id));
    
        //actualizamos el estado del componente principal APP
        setDatos(bdNueva);
    
        //Guardamos en la base de datos del localStorage
        localStorage.setItem("pelicula", JSON.stringify(bdNueva));
      };


      
    
      //metodo de carga inicial del componente
      useEffect(() => {
        leerLocalStorage();
      }, []);


    return ( <>
     
            <div className="container">
                <div className="row">

                {datos == null || datos.length === 0 ? (
            <h1>No hay datos</h1>
      ) : (
        <>
          {datos.map((pelicula) => {
            return (
                <div className="col-4">




 <div class="card" style={{width:"18rem"}}>
  <img src={pelicula.imagen}  className="card-img-top w-75 img-fluid img-thumbnail card-img-top mx-auto mt-2"
 alt="imagen"/>
  <div class="card-body" key={pelicula.id}>
    <h5 class="card-title" style={{color:"Red"}}>{pelicula.titulo}</h5>
    <p class="card-text">{pelicula.descripcion}</p>
    <button className="btn btn-success w-100 mt-2"onClick={()=>{
        setEditar(pelicula.id)
    }} >Editar</button> 


                <button
                  className="btn btn-danger w-100 mt-2"
                  onClick={() => {
                    borrarPelicula(pelicula.id);
                  }}
                >
                  Borrar
                </button>

                {editar===pelicula.id &&(<Editar pelicula={pelicula}
                            datos={datos}
                            setDatos={setDatos}
                            leerLocalStorage={leerLocalStorage}
                            setEditar={setEditar}/>
                )
          }




            </div>
             </div>
                </div>
              
            );
          })}
        </>
      )}

                 

                </div>
            </div>
    
    </> );
}
 
export default Section;<>
</>