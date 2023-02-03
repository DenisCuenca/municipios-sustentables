import userEvent from "@testing-library/user-event";
import React from "react";
import { Link } from "react-router-dom";
import '../static/styles/sidebar.css'
export default function Sidebar() {
  return (
    <>
    <div className="sidebar">

    
      <div className="log">
        
        <h3>Municipos Sustentables</h3>
        {/* <img src={require("./../static/images/logo.png")} /> */}
        
      </div>

      <div className="items">
        <div className="dashboard">
        <i class="fa-solid fa-chart-line"></i>
          <Link className="link" to = "/panel">Dashboard</Link>
        </div>

        <div className="new_register">
        <i class="fa-regular fa-calendar-plus"></i>
          <Link className="link" to= "/panel/new-register">Nuevo registro</Link>
        </div>
        {false ?
        
        <>

        <div className="old_registers">
            <i class="fa-solid fa-list"></i>
            <Link className="link" to= "/panel/old-registers">Registros antiguos</Link>
          
        </div>


          <div className="Municipios">
          <i class="fa-solid fa-users-gear"></i>
          <Link className="link" to= "/panel/municipalities">Municipios</Link>
          </div>
        </>
      :
      
      ""
      
      }
      </div>
      </div>
    </>
  );
}
