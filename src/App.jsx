import Usuario from "./components/Usuario";
import Contenedor from "./components/Contenedor";
import ContadorDoble from "./components/ContadorDoble";
import BotonesAccion from "./components/BotonesAccion";

function App() {

  const alertaDesdePadre = () => {
    alert("Soy la función que vive en App.jsx");
  };
  return (
    <div>
      <h1>Practica 20260827</h1>
      <Usuario nombre="Juan" edad={25} esPremium={true} />
      <Contenedor>
        <p>Este es un contenido dentro del contenedor</p>
        <ContadorDoble /> 
      </Contenedor>
      <BotonesAccion funcionPadre={alertaDesdePadre} />
    </div>
  );
}

export default App;