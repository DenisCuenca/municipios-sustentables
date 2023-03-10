import React, { useRef } from "react";
import { useUserContext } from "../../../context/userContext";
import toast, { Toaster } from "react-hot-toast";
import { async } from "@firebase/util";
import "./Reset.css"
import { useNavigate, Link } from "react-router-dom";


function ResetPassword() {

  const navigate = useNavigate();
  const emailRef = useRef();
  
  async function forgotPasswordHanddler(e) {
    e.preventDefault();
    const email = emailRef.current.value;

    if (email) {
      try {
        await forgotPassword(email).then(() => (emailRef.current.value = ""));
        alert("Se envió un correo para el cambio de contraseña");
        navigate("/signin");
        // } on FirebaseAuthException catch  (e){
      } catch (e) {
        alert(`Ocurrio un error: \n\n ${e.response.data.detail}`);
        toast.error(`Ocurrio un error: \n\n ${e.response.data.detail}`);
      }
    }
  }

  const { signInUser, forgotPassword } = useUserContext();

  return (
    <>
     <div className="contenedor2"> 
     <Toaster position="top-center" reverseOrder={false} />
        <div className="rectangulo2">        
                <h1 className="Titulo2">Bienvenido a MUNICIPIOS SUSTENTABLES</h1>
            
                <h2 className="Subtitulo2">Recuperar </h2>
                <h2 className="Subtitulo2"> cuenta</h2>
                
                <form onSubmit={forgotPasswordHanddler}>
                  <label>Email</label>
                  <input placeholder="  email" type="email" ref={emailRef} />
                  <div className="enlace2">
                  <Link to="/signin">Iniciar sesión</Link>
                  </div>
                  <button className="boton2">Enviar</button>
                  
                  
                  
                </form>
         </div>
          
      </div>
    </>
  );
}

export default ResetPassword;
