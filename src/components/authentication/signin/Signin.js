import { useRef } from "react";
import { useUserContext } from "../../../context/userContext";
import "./estilo1.css"
import { Link, useNavigate } from "react-router-dom";

const Signin = () => {
  const emailRef = useRef();
  const psdRef = useRef();

  const navigate = useNavigate()

  const { signInUser, forgotPassword } = useUserContext();

  async function onSubmit(e) {

    e.preventDefault();

    const email = emailRef.current.value;
    const password = psdRef.current.value;

    if (email && password) {

      try {
        await signInUser(email, password);
        navigate("/panel");

      } catch (err) {
        navigate("/signin");

      }
    }

  }



  const forgotPasswordHanddler = () => {
    const email = emailRef.current.value;

    if (email) forgotPassword(email).then(() => (emailRef.current.value = ""));
  };

  return (

    <div class="contenedor">

      <div className="rectangulo">

        <h1 className="Titulo1">Bienvenido a MUNICIPIOS SUSTENTABLES</h1>

        <h2 className="Titulo2"> Login </h2>
        <form onSubmit={onSubmit}>

          <label >Ingresa tu email:</label>
          <input placeholder="Email" type="email" ref={emailRef} />
          <label >Ingresa tu contraseña:</label>
          <input placeholder="Password" type="password" ref={psdRef} />
          <button className="boton" type="submit">Ingresar</button>

        </form>
      </div>
          <div className="enlace">
            <Link className="l1"to="/reset-password/">¿Olvidate tu contraseña?</Link>
            <Link className="l1"to="/signup/">Crear Cuenta</Link>
            
          </div>

    </div>
  );
};

export default Signin;