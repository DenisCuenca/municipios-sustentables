import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <>
      <div className="log">
        <h3>Dashboard</h3>
        {/* <img src={require("./../static/images/logo.png")} /> */}
      </div>

      <div className="items">
        <div className="dashboard">
        <i class="fa-solid fa-chart-line"></i>
          <Link to = "/panel">Dashboard</Link>
        </div>

        <div className="new_register">
        <i class="fa-regular fa-calendar-plus"></i>
          <Link to= "/panel/new-register">Nuevo registro</Link>
        </div>

        <div className="old_registers">
            <i class="fa-solid fa-list"></i>
            <Link to= "/panel/">Registros antiguos</Link>
          
        </div>

        <div className="Municipios">
        <i class="fa-solid fa-users-gear"></i>
        <Link to= "/panel">Municipios</Link>
        </div>
      </div>
    </>
  );
}
