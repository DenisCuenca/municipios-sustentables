import "./style.css";
import { Link } from "react-router-dom";
import { useUserContext } from "../../context/userContext";
import { Bar, Radar, Pie, PolarArea, Line } from "react-chartjs-2";

// firebase functions
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

import { useEffect, useState } from "react";
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
function LandingPage() {

  
  //
  const [municipalities, setMunicipalities] = useState([]);

  // useEffect(() => {
  //   const q = query(
  //           collection(db, "municipalities"),
  //           where("municipio", "==", user.displayName)
  //           );
  //           getDocs(query).then(res => console.log(res))

  // }, [])

  useEffect(() => {
    (async () => {
      const q = query(collection(db, "municipalities"));
      const querySnapshot = await getDocs(q);
      const docs = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        data.id = doc.id;
        return data;
      });

      setMunicipalities(docs);
      console.log("doxs", docs);
    })();
  }, []);

  const { user } = useUserContext();

  const isLogged = "/panel";
  const isNotLogged = "/signin";

  return (
    <div className="conte">
      <header class="cabeceraPrincipal">
        <section class="logotipo">
          <img src={require("./images/logo.jpg")} />
        </section>
        <nav class="menuPrincipal1">
          <a href="#importantes">Importantes</a>
          <a href="#graficas">Gráficas</a>
          <a href="#objetivo">Objetivos </a>
          <a href="#sponsor">Sponsor</a>
        </nav>
        <nav class="menuPrincipal2">
          <a href="/signin/">
            <button class="botonMenu1">
              <Link to={user ? isLogged : isNotLogged}>Ingreso </Link>
            </button>
          </a>
          <a href="/signup">
            <button class="botonMenu2">Registro</button>
          </a>
        </nav>
      </header>

      <section class="sliderPrincipal">
        <img src={require("./images/portada.jpg")} title="Slider" />
        <div class="textoGrande">
          <b>
            Municipios
            <br />
            Sustentables
          </b>
        </div>
        <div class="textoPequeño">
          <br />
          <p>
            Lograr que las ciudades sean más inclusivas,
            <br />
            seguras, resilientes y sostenibles. <br />
          </p>
        </div>
        <div class="botonesPortada">
          <a href="/">
            <button class="botonPortada1">
              <Link to={user ? isLogged : isNotLogged}>INGRESAR</Link>
            </button>
          </a>
          <a href="#">
            <button class="botonPortada2">CONOCER MÁS</button>
          </a>
        </div>
      </section>

      <section class="cards" id="importantes">
        <p class="team">Puntos importantes</p>
        <div class="container">
          <div class="card">
            <img src={require("./images/fotoCard1.jpg")} />
            <h3>Ambiental</h3>
            <p>
              El desarrollo sustentable se ha convertido es un poderoso y
              controvertido tema, creando metas que parece casi imposibles para
              los políticos y los funcionarios de las instituciones del
              desarrollo.
            </p>
            <a href="#">Leer más</a>
          </div>
          <div class="card">
            <img src={require("./images/fotoCard2.jpg")} />
            <h3>Contaminación</h3>
            <p>
              El desarrollo sustentable se ha convertido es un poderoso y
              controvertido tema, creando metas que parece casi imposibles para
              los políticos y los funcionarios de las instituciones del
              desarrollo.
            </p>
            <a href="#">Leer más</a>
          </div>
          <div class="card">
            <img src={require("./images/fotoCard3.jpg")} />
            <h3>Problemas</h3>
            <p>
              El desarrollo sustentable se ha convertido es un poderoso y
              controvertido tema, creando metas que parece casi imposibles para
              los políticos y los funcionarios de las instituciones del
              desarrollo.
            </p>
            <a href="#">Leer más</a>
          </div>
        </div>
      </section>

      <section class="carrusel">
        <div
          id="carouselExampleCaptions"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src={require("./images/slider1.jpg")}
                class="d-block w-100"
                alt="fondo1"
              />
              <div class="carousel-caption d-none d-md-block">
                <h3>¿QUÉ CONSIDERAMOS?</h3>
                <h6>
                  Componente de gestión <br />
                  ambiental (IGA)
                </h6>
                <p>
                  Permiten medir los esfuerzos de gestión realizados por las
                  <br />
                  organizaciones y dirigidos a facilitar la infraestructura
                  necesaria
                  <br />
                  para una correcta gestión ambiental, por ejemplo, el número{" "}
                  <br />
                  designado en actividades de gestión y protección ambiental,
                  <br />
                  número de proyectos impulsados para la protección ambiental,
                  <br />
                  de mitigación al cambio climático, de sensibilización.
                </p>
                <img class="sli" src={require("./images/sliderFoto1.jpg")} />
              </div>
            </div>
            <div class="carousel-item">
              <img
                src={require("./images/slider2.jpg")}
                class="d-block w-100"
                alt="fondo2"
              />
              <div class="carousel-caption d-none d-md-block">
                <h3>¿QUÉ CONSIDERAMOS?</h3>
                <h6>
                  Componente de proteccion <br />
                  ambiental (IPA)
                </h6>
                <p>
                  Permiten medir los esfuerzos de gestión realizados por las
                  <br />
                  organizaciones y dirigidos a facilitar la infraestructura
                  necesaria
                  <br />
                  para una correcta gestión ambiental, por ejemplo, el número{" "}
                  <br />
                  designado en actividades de gestión y protección ambiental,
                  <br />
                  número de proyectos impulsados para la protección ambiental,
                  <br />
                  de mitigación al cambio climático, de sensibilización.
                </p>
                <img class="sli" src={require("./images/sliderFoto2.jpg")} />
              </div>
            </div>
            <div class="carousel-item">
              <img
                src={require("./images/slider3.jpg")}
                class="d-block w-100"
                alt="fondo3"
              />
              <div class="carousel-caption d-none d-md-block">
                <h3>¿QUÉ CONSIDERAMOS?</h3>
                <h6>
                  Componente de consumo de
                  <br /> recursos (ICR)
                </h6>
                <p>
                  Permiten medir los esfuerzos de gestión realizados por las
                  <br />
                  organizaciones y dirigidos a facilitar la infraestructura
                  necesaria
                  <br />
                  para una correcta gestión ambiental, por ejemplo, el número{" "}
                  <br />
                  designado en actividades de gestión y protección ambiental,
                  <br />
                  número de proyectos impulsados para la protección ambiental,
                  <br />
                  de mitigación al cambio climático, de sensibilización.
                </p>
                <img class="sli" src={require("./images/sliderFoto3.jpg")} />
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      <section class="graficas" id="graficas">
        <p class="centroGrafica">GRÁFICAS DE CADA MUNICIPIO</p>
        <label for="dog-names">Escoja un Municipio:</label>

        <select name="dog-names">
          {municipalities.map((d) => {
            return (
              <>
               
                <option value="">{d["municipio"]}</option>
              </>
            );
          })}
        </select>




      </section>

      <section class="objetivo" id="objetivo">
        <p class="centroObjetivo">OBJETIVO</p>
        <div class="ConceptoObjetivo">
          {" "}
          El objetivo de esta propuesta es desarrollar una plataforma <br />
          para evaluar la gestión ambiental del municipio de Loja,
          <br /> permitiendo a la sociedad en general conocer el nivel de
          <br /> gestión del gobierno local.
        </div>
        <div class="imag">
          <img src={require("./images/fotoObjetivo.jpg")} />
        </div>
        <div class="botonesObjetivo">
          <a href="#">
            <br />
            <button class="botonObjetivo1">Aprender</button>
          </a>
          <a href="/signin">
            <br />
            <button class="botonObjetivo2">
              <Link to={user ? isLogged : isNotLogged}>Únete</Link>
            </button>
          </a>
          <a href="#">
            <br />
            <button class="botonObjetivo3">Apoyo</button>
          </a>
        </div>
      </section>

      <section class="sponsor" id="sponsor">
        <p class="centroSponsor">
          <b>¿Quiénes nos apoyan?</b>
        </p>
        <div class="imagenesSponsor">
          <img src={require("./images/sponsor1.jpg")} />
          <img src={require("./images/sponsor2.jpg")} />
          <img src={require("./images/sponsor3.jpg")} />
        </div>
      </section>

      <footer class="piePagina">
        <img src={require("./images/fondoFooter.jpg")} />
        <div class="textoFooter1">
          <h4>Proyecto Economía</h4>
          <p>
            Indicador Económico Sustentable <br />
            Indicador Social Sustentable <br />
            Indicador Ambiental Sustentable <br />
            Idicador Institucional Sustentable <br />
            Indicador Global Sustentable
          </p>
        </div>
        <div class="textoFooter2">
          <h4>Información</h4>
          <p>
            dabravo@utpl.edu.ec
            <br />
            Loja - Ecuador <br />
            2190789732 <br />
            Loja - Ecuador <br />
            2190789732 <br />
          </p>
        </div>
        <div class="iconos">
          <a href="">
            <i class="fa-brands fa-facebook"></i>
          </a>
          <a href="">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="">
            <i class="fa-brands fa-tiktok"></i>
          </a>
        </div>
        <div class="centroDerechos">
          <h6>Derechos reservados 2022 - 2023</h6>
        </div>
      </footer>
      <div />

      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossorigin="anonymous"
      ></script>
    </div>
  );
}

export default LandingPage;
