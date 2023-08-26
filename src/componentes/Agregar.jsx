import React, { useState, useEffect } from 'react';
const Agregar = ({datos,setDatos}) => {


    const guardarLocalStorage = (dataFrm) => {
        //leemos la informacion del localStorage
        let elementos = JSON.parse(localStorage.getItem("pelicula"));
        //agregamos al local storage
        if (Array.isArray(elementos)) {
          elementos.push(dataFrm); //verifica q sea un arreglo y agrega un elemento
        } else {
          elementos = [dataFrm]; //crea el arreglo local por primera vez
        }
        //ACTUALIZAMOS LA RENDERIZACION
        setDatos(elementos);
        localStorage.setItem("pelicula", JSON.stringify(elementos));
      };

      const getDatosFormulario = (e) => {
        e.preventDefault(); //evita la recarga automatica del formulario
        let titulo = e.target.titulo;
        let imagen=e.target.imagen;
        let descripcion = e.target.descripcion;
        let dataFrm = {
          id: new Date().getTime(),
          imagen:imagen.value,
          titulo: titulo.value,
          descripcion: descripcion.value,
        };
    
        setDatos(dataFrm);
        //console.log(datos);
        guardarLocalStorage(dataFrm);
      };



    return ( <>


<div class="alert alert-success" role="alert" style={{textAlign:"center"}}>
  <div >
    <h4 style={{textAlign:"center",color:"Green"}} >Agrega Tu Pelicula favorita
        </h4>
  </div>
</div>


<section className="contact-section section-padding" id="section_6">
            <div className="container">
                <div className="row">

                    <div className="col-lg-8 col-12 mx-auto">
                        <h2 className="text-center mb-4">Agregar Pelicula</h2>

                        <nav className="d-flex justify-content-center">
                            <div className="nav nav-tabs align-items-baseline justify-content-center" id="nav-tab"
                                role="tablist">
                               
                              
                            </div>
                        </nav>

                        <div className="tab-content shadow-lg mt-5" id="nav-tabContent">
                            <div className="tab-pane fade show active" id="nav-ContactForm" role="tabpanel"
                                aria-labelledby="nav-ContactForm-tab">
                                <form onSubmit={getDatosFormulario} className="custom-form contact-form mb-5 mb-lg-0" action="#" 
                                    role="form">
                                    <div className="contact-form-body">
                                        <div className="row">
                                            <div className="col-6 col-10 col-12 mx-auto">
                                                <input type="text" name="contact-name" id="titulo"
                                                    className="form-control" placeholder="Titulo" required/>
                                            </div>

                                           
                                        </div>

                                        <input type="text" name="contact-company" id="descripcion"
                                            className="form-control" placeholder="Descripcion" required/>

                                        <textarea name="contact-message" rows="3" className="form-control"
                                            id="imagen" placeholder="Imagen"></textarea>

                                        <div className="col-lg-4 col-md-10 col-8 mx-auto">
                                            <input type="submit" className="form-control"/>
                                        </div>
                                    </div>
                                </form>
                            </div>

                            <div className="tab-pane fade" id="nav-ContactMap" role="tabpanel"
                                aria-labelledby="nav-ContactMap-tab">
                                <iframe className="google-map"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29974.469402870927!2d120.94861466021855!3d14.106066818082482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd777b1ab54c8f%3A0x6ecc514451ce2be8!2sTagaytay%2C%20Cavite%2C%20Philippines!5e1!3m2!1sen!2smy!4v1670344209509!5m2!1sen!2smy"
                                    width="100%" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"></iframe>
                              
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    </> );
}
 
export default Agregar;