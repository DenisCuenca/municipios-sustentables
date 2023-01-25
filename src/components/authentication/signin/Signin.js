import { useRef } from "react";
import { useUserContext } from "../../../context/userContext";
import "./estilo1.css"
import { Link } from "react-router-dom";

const Signin = () => {
  const emailRef = useRef();
  const psdRef = useRef();

  const { signInUser, forgotPassword } = useUserContext();

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = psdRef.current.value;

    if (email && password) signInUser(email, password);
  };

  const forgotPasswordHanddler = () => {
    const email = emailRef.current.value;

    if (email) forgotPassword(email).then(() => (emailRef.current.value = ""));
  };

  return (
    <>
      <div class="contenedor">
                                 
                  
                        
                   <div className="rectangulo">     
                   
                         <h1 className="Titulo1">Bienvenido a MUNICIPIOS SUSTENTABLES</h1> 
                                               
                        
                        <h2 className="Titulo2"> Login </h2>        
                        <form  onSubmit={onSubmit}>
                          
                          <label className="label1">Ingresa tu email:</label>
                          <input placeholder="Email" type="email" ref={emailRef} />
                          <label className="label2">Ingresa tu cotraseña:</label>
                          <input placeholder="Password" type="password" ref={psdRef} />
                         
                          <Link to= "reset-password/">¿Olvidate tu contraseña?</Link>       
                           
                          <button className="boton" type="submit">Ingresar</button>
                          
                          
                        </form>
                        
                        
                           
                        
                  </div>
                 
      </div>
    </>
  );
};

export default Signin;