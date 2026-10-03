function BotonesAccion({ funcionPadre }) {

    const funcionLocal = () => {
        alert("Soy la función local del hijo");
    };

    return (
        <div>
            <h3>Componente con Eventos</h3>
            <button onClick={funcionLocal}>Botón Local</button>
            <button onClick={funcionPadre}>Botón del Padre</button>
        </div>
    );
}

export default BotonesAccion;