import { useRef } from "react";
import { useUserContext } from "../../../context/userContext";
import "./signin.css"
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

        <h1 className="Titulo">Bienvenido a MUNICIPIOS SUSTENTABLES</h1>

        <h2 className="Subtitulo"> Login </h2>
        <form onSubmit={onSubmit}>

          <label >Ingresa tu email:</label>
          <input placeholder="  Email" type=" email" ref={emailRef} />
          <label >Ingresa tu contraseña:</label>
          <input placeholder="  Contraseña" type=" password" ref={psdRef} />
          <div className="enlace">
            <Link className="l1"to="/signup/">Crear cuenta nueva </Link>
            <Link className="l1"to="/reset-password/"> ¿Olvidaste tu contraseña? </Link>
            
            
          </div>
          <button className="boton" type="submit">Iniciar sesión</button>

        </form>
      </div>
          

    </div>
  );
};

export default Signin;