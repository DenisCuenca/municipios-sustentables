import userEvent from "@testing-library/user-event";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../static/styles/sidebar.css";
import { db } from "../../../firebase";
import { useUserContext } from "../../../context/userContext";
import { collection, query, where, getDocs } from "firebase/firestore";

export default function Sidebar() {
  const [currentUser, setCurrentUser] = useState([]);
  const { user } = useUserContext();

  useEffect(() => {
    (async () => {
      const q = query(
        collection(db, "users"),
        where("email", "==", user.email)
      );
      const querySnapshot = await getDocs(q);
      const docs = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        data.id = doc.id;
        return data;
      });

      setCurrentUser(docs);
    })();
  }, []);

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
            <Link className="link" to="/panel">
              Dashboard
            </Link>
          </div>

          <div className="old_registers">
            <i class="fa-solid fa-list"></i>
            <Link className="link" to="/panel/old-registers">
              Registros antiguos
            </Link>
          </div>

          {currentUser.map((c) => {
            return (
              <>
                {c.isAdmin ? (
                  <>
                    <div className="new_register">
                      <i class="fa-regular fa-calendar-plus"></i>
                      <Link className="link" to="/panel/new-register">
                        Nuevo registro
                      </Link>
                    </div>
                    <div className="Municipios">
                      <i class="fa-solid fa-users-gear"></i>
                      <Link className="link" to="/panel/municipalities">
                        Municipios
                      </Link>
                    </div>
                  </>
                ) : (
                  ""
                )}
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
