import Header from "./componentes/Header";
import Section from "./componentes/Section";
import Agregar from "./componentes/Agregar";
import DebajoHeader from "./componentes/DebajoHeader";
import React, { useState, useEffect } from 'react';

//Aplicar npm i axios Cuando baje el proyecto de la nuve




function App() {


  const [datos, setDatos] = useState([]);

  return (
    <>
    <Header/>
    <DebajoHeader/>
    <Section datos={datos} setDatos={setDatos}/>
    <Agregar datos={datos} setDatos={setDatos} />
    
    </>
  );
}

export default App;
