import { useState } from "react";

function ContadorDoble() {
    const [contador, setContador] = useState(0);
    const [activo, setActivo] = useState(false);

    return (
        <div>
            <h3>Componente con dos Estados</h3>

            <p>Clicks: {contador}</p>
            <button onClick={() => setContador(contador + 1)}>Contar</button>

            <p>Estado: {activo ? "Activo" : "Inactivo"}</p>
             <button onClick={() => setActivo(!activo)}>Alternar</button>
        </div>
    );
}

export default ContadorDoble;