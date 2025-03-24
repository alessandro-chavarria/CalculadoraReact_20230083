import React, { useState } from 'react';

function Lista() {
  const [tarea, setTarea] = useState('');
  const [tareas, setTareas] = useState([]);

  const agregarTarea = () => {
    if (tarea.trim() !== '') {
      setTareas([...tareas, tarea]);
      setTarea('');
    }
  };

  const eliminarTarea = (index) => {
    const nuevasTareas = tareas.filter((_, i) => i !== index);
    setTareas(nuevasTareas);
  };

  return (
    <div className="lista-container">
      <h2>Lista de Tareas</h2>
      <div className="input-tarea">
        <input 
          type="text"
          value={tarea}
          onChange={(e) => setTarea(e.target.value)}
          placeholder="Ingrese una tarea"
        />
        <button onClick={agregarTarea}>Agregar</button>
      </div>
      <ul className="lista-tareas">
        {tareas.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => eliminarTarea(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Lista;