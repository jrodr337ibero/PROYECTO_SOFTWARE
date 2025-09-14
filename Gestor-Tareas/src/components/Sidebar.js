import React from 'react';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <h2>TaskFlow</h2>
      </div>
      <div className="nav-item active">Tablero Principal</div>
      <div className="nav-item">Mis Tareas</div>
      <div className="nav-item">Calendario</div>
      <div className="nav-item">Reportes</div>
      <div className="nav-item">Configuración</div>
    </div>
  );
};

export default Sidebar;