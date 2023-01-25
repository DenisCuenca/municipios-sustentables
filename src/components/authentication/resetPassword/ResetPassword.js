import React, { useRef } from "react";
import { useUserContext } from "../../../context/userContext";
import toast, { Toaster } from "react-hot-toast";
import { async } from "@firebase/util";

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
      <Toaster position="top-center" reverseOrder={false} />
      <div>
        <h4>Bienvenido a MUNICIPIOS SUSTENTABLES</h4>
        <div className="form">
          <h2>Recuperar contraseña:</h2>
          <form onSubmit={forgotPasswordHanddler}>
            <label>Email</label>
            <input placeholder="email" type="email" ref={emailRef} />
            <button>Enviar</button>
            <Link to="/signin">Ingresar</Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default ResetPassword;