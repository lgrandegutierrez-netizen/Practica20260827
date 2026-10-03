function Usuario({ nombre, edad, esPremium }) {
    return (
        <div>
            <h3>Componente con Props</h3>
            <p>Nombre: { nombre }</p>
            <p>Edad: { edad }</p>
            <p>Premium: { esPremium ? "Sí" : "No" }</p>
        </div>
    );
}

export default Usuario;