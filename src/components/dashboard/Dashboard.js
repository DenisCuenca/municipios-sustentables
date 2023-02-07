import React, { useEffect, useState } from "react";
import { useUserContext } from "../../context/userContext";
import { db } from "../../firebase/index";
import Sidebar from "./components/Sidebar";
import { useNavigate } from "react-router-dom";
import PieChart from "./components/charts/BarChart";
import { Bar, Radar, Pie, PolarArea, Line } from "react-chartjs-2";
// import { ArcElement, Chart } from "chart.js";
import "./static/styles/styles.css";

import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";
// import faker from 'faker';

// firebase functions
import { collection, query, where, getDocs } from "firebase/firestore";
import { Navigate } from "react-router-dom";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title
);

const Dashboard = () => {
  const { user, logoutUser, redRoute } = useUserContext();

  const [IndData, setIndData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const q = query(
        collection(db, "municipalities"),
        where("municipio", "==", user.displayName)
      );
      const querySnapshot = await getDocs(q);
      const docs = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        data.id = doc.id;
        return data;
      });

      setIndData(docs);
    })();
  }, []);

  return (
    <>
      <div className="cont">
        <Sidebar />

        <div className="dashboard">
          <div className="header">
            <h4>DASHBOARD</h4>
            <div className="header-right">
              <p>{user.displayName}</p>
              <a
                href="/"
                onClick={() => {
                  logoutUser();
                }}
              >
                CERRAR SESIÓN
              </a>
            </div>
          </div>

          <br></br>

          {IndData.map((i) => {
            const chartData = {
              labels: [
                "Índice ambiental",
                "Índice Social",
                "Índice economico",
                "Índice institucional",
              ],
              datasets: [
                {
                  label: "Indices",
                  data: [
                    i.indAmbiental,
                    i.indSocial,
                    i.indEconomico,
                    i.indInstitucional,
                  ],

                  backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 135, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                  ],

                  borderWidth: 7,
                },
              ],
            };
            return (
              <>
                <div className="indcards">
                  <section className="ind">
                    <div className="text">
                      <div className="fcol">
                        <p>Índice gestión Ambiental</p>
                        <div className="box"></div>
                      </div>
                      <p className="num">{i.indAmbiental.toFixed(2)}</p>
                    </div>
                  </section>

                  <section className="ind">
                    <div className="text">
                      <div className="fcol">
                        <p>Indicador social</p>
                        <div className="box"></div>
                      </div>
                      <p className="num">{i.indSocial.toFixed(2)}</p>
                    </div>
                  </section>

                  <section className="ind">
                    <div className="text">
                      <div className="fcol">
                        <p>Indicador insitucional</p>

                        <div className="box"></div>
                      </div>
                      <p className="num">{i.indInstitucional.toFixed(2)}</p>
                    </div>
                  </section>
                  <section className="ind">
                    <div className="text">
                      <div className="fcol">
                        <p>Indicador economico</p>
                        <div className="box"></div>
                      </div>
                      <p className="num">{i.indEconomico.toFixed(2)}</p>
                    </div>
                  </section>

                  <section className="ind">
                    <div className="text">
                      <div className="fcol">
                        <p>Indicador sustentabilidad:</p>

                        <div className="box"></div>
                      </div>

                      <p className="num">
                        {i.indGlobalSustentabilidad.toFixed(2)}
                      </p>
                    </div>
                  </section>
                </div>
                <div className="charts  bg-error">
                  <h4>Muestras Gráficas:</h4>

                  <div className="d-flex" style={{justifyContent: "center"}} >
                  <div
                      className="table-container"
                      style={{ background: "#fff" , marginRight: "5px", borderRadius: "10px", height: "200px", width: "400px"}}
                    >
                      <h5 style={{marginLeft: "10px"}}>HISTORICO</h5>
                      <table className="table">
                        <thead>
                          <tr>
                            <th style={{fontSize: "13px"}}>Ind Amb</th>
                            <th style={{fontSize: "13px"}}>Ind Social</th>
                            <th style={{fontSize: "13px"}}>Ind Inst</th>
                            <th style={{fontSize: "13px"}}>Ind Eco</th>
                            <th style={{fontSize: "13px"}}>Ind Global</th>
                            <th style={{fontSize: "13px"}}>Creado en:</th>
                          </tr>
                        </thead>

                        <tbody>
                          <tr>
                            <td  style={{fontSize: "13px"}}>{i.indAmbiental.toFixed(2)}</td>
                            <td  style={{fontSize: "13px"}}>{i.indSocial.toFixed(2)}</td>
                            <td  style={{fontSize: "13px"}}>{i.indInstitucional.toFixed(2)}</td>
                            <td  style={{fontSize: "13px"}}>{i.indEconomico.toFixed(2)}</td>
                            <td  style={{fontSize: "13px"}}>{i.indGlobalSustentabilidad.toFixed(2)}</td>
                            <td  style={{fontSize: "13px"}}>{i.creadoEn.toDate().toDateString()}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div
                      className="chart-container line"
                      style={{
                        width: "850px",
                        height: "400px",
                        display: "grid",
                        alignItems: "center",
                      }}
                    >
                      
                      <div className="m-auto" style={{ height: "340px", width: "600px"}}>
                        <h5>GRÁFICA LINEAL: ÚLTIMO REGISTRO</h5>
                        <Line className="" data={chartData}  />
                      </div>
                    </div>
                  </div>

                  <div className="lastReportData">
                    <div className="chart-container" style={{ width: "370px" }}>
                      <h5>GRÁFICA RADAR: ÚLTIMO REGISTRO</h5>

                      <Radar className="radar" data={chartData} />
                    </div>

                    <div className="chart-container" style={{ width: "350px" }}>
                      <h5>GRÁFICA RADIAL: ÚLTIMO REGISTRO</h5>
                      <PolarArea className="polar" data={chartData} />
                    </div>

                    <div className="chart-container" style={{ width: "400px" }}>
                      <h5>ÍNDICES ÚLTIMO REGISTRO</h5>
                      <Bar className="bar" data={chartData} />
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
