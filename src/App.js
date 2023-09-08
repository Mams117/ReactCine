import Header from "./componentes/Header";
import Section from "./componentes/Section";
import Agregar from "./componentes/Agregar";

import DebajoHeader from "./componentes/DebajoHeader";
import React, { useState, useEffect } from "react";
import Buscar from "./componentes/Buscar";

//Aplicar npm i axios Cuando baje el proyecto de la nuve

function App() {
  const [datos, setDatos] = useState([]);

  return (
    <>
      <Header />
      <DebajoHeader />
      <Buscar datos={datos} setDatos={setDatos} />
      <Section datos={datos} setDatos={setDatos} />
      <Agregar datos={datos} setDatos={setDatos} />
    </>
  );
}

export default App;
