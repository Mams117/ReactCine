
import React, { useState, useEffect } from 'react';

const  Header= () => {
    return ( <>

        <nav className="navbar navbar-expand-lg" style={{background:"black"}}>
            <div className="container">
                <a className="navbar-brand" href="index.html" style={{color:"white"}}>
                    Video Vision
                </a>

                <a href="ticket.html" className="btn custom-btn d-lg-none ms-auto me-4">Disfruta!!!</a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav align-items-lg-center ms-auto me-lg-5">
                        <li className="nav-item">
                            <a className="nav-link click-scroll" href="#section_1">Inicio</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link click-scroll" href="#section_2">Peliculas</a>
                        </li>

                       
                    </ul>

                    <a href="#" className="btn btn-success d-lg-block d-none">Disfruta!!!</a>
                </div>
            </div>
        </nav>
        <section className="hero-section" id="section_1">
            <div className="section-overlay"></div>

            <div className="container d-flex justify-content-center align-items-center">
                <div className="row">

                    <div className="col-12 mt-auto mb-5 text-center">
                        <small>Video Vision Presenta</small>

                        <h1 className="text-white mb-5">Las mejores peliculas del 2023</h1>

                        <a className="btn btn-success" href="index.html">Ver ahora</a>
                    </div>

                    <div className="col-lg-12 col-12 mt-auto d-flex flex-column flex-lg-row text-center">
                        <div className="date-wrap">
                            <h5 className="text-white">
                                
                                26<sup> </sup>Agosto 2023
                            </h5>
                        </div>

                        <div className="location-wrap mx-auto py-3 py-lg-0">
                            <h5 className="text-white">
                               
                                Cartago,Colombia
                            </h5>
                        </div>

                        <div className="social-share">
                            <ul className="social-icon d-flex align-items-center justify-content-center">
                                <span className="text-white me-3">Share:</span>

                                <li className="social-icon-item">
                                   
                                       
                                    
                                </li>

                                <li className="social-icon-item">
                                   
                                        
                                  
                                </li>

                                <li className="social-icon-item">
                                 
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="video-wrap">
                <img  src="./images/baki.jpg" loop="" muted="" className="custom-video" poster=""/>
                      

                   
                
            </div>
        </section>

    </> );
}
 
export default Header;
