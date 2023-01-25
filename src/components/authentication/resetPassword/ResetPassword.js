import React, { useRef } from "react";
import { useUserContext } from "../../../context/userContext";
import toast, { Toaster } from 'react-hot-toast';
import { async } from "@firebase/util";
import "./estilos2.css"
import { useNavigate } from "react-router-dom";


function ResetPassword() {
    
    async function forgotPasswordHanddler (e) {
      e.preventDefault();
      const email = emailRef.current.value;
    
      if (email) {
          try{
              
              await forgotPassword(email).then(() => (emailRef.current.value = ""))
              alert("Se envió un correo para el cambio de contraseña");
              navigate("/");
          // } on FirebaseAuthException catch  (e){
          }catch (e) {
            alert(`Ocurrio un error: \n\n ${e.response.data.detail}`)
              toast.error(`Ocurrio un error: \n\n ${e.response.data.detail}`)
          }
    
      };
      
    };
    const navigate = useNavigate()
  const emailRef = useRef();

  const { signInUser, forgotPassword } = useUserContext();


  return (
    <>
     <div className="contenedor"> 
      
        <div className="rectangulo">        
                <h1 className="Titulo1">Bienvenido a MUNICIPIOS SUSTENTABLES</h1>
            
                <h2 className="Titulo2">Recuperar </h2>
                <h2 className="Titulo2"> contraseña:</h2>
                
                <form onSubmit={forgotPasswordHanddler}>
                  <label className="label1">Ingresa tu email</label>
                  <input placeholder="Email" type="email" ref={emailRef} />
                  <button className="boton">Enviar</button>
                </form>
         </div>
          
      </div>
    </>
  );
}

export default ResetPassword;
<Toaster 
                    position="top-center"
                    reverseOrder={false}
                /> 