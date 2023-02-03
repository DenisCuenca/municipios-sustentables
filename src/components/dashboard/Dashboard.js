import React, { useEffect, useState } from "react";
import { useUserContext } from "../../context/userContext";
import { db } from "../../firebase/index";
import Sidebar from "./components/Sidebar";
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
  const { user, logoutUser } = useUserContext();
  
  const [IndData, setIndData] = useState([]);


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
              <a href="/signin" onClick={logoutUser}>
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
                <div className="charts">
                  <h4>Muestras Gráficas:</h4>
                  <div className="chart-container line"  style={{ width: "780px" }}>
                    <h5>GRÁFICA LINEAL: ÚLTIMO REGISTRO</h5>
                    <Line data={chartData} style={{ height: "340px" }}/>
                  </div>

                  <div className="lastReportData">
                    <div className="chart-container" style={{ width: "400px" }}>
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
