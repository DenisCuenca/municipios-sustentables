import React, { useRef } from "react";
import { useUserContext } from "../../../context/userContext";
import "./signup.css"
import { Link , useNavigate} from "react-router-dom";
import { db } from "../../../firebase";
import { doc, setDoc } from "firebase/firestore";
const Signup = () => {

  const navigate = useNavigate();

  const nameRef = useRef();
  const countryRef = useRef();
  const cityRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const psdRef = useRef();
  const repasswordRef = useRef();
  

  const { registerUser, addDocUser } = useUserContext();
  
  async function onSubmit (e)  {
    e.preventDefault();
    
    const name = nameRef.current.value;
    const country = countryRef.current.value;
    const city = cityRef.current.value;
    const email = emailRef.current.value;
    const phone = phoneRef.current.value;
    const password = psdRef.current.value;
    const re_password = repasswordRef.current.value;
    
    try{
      if (email && name && password && password) {
        registerUser(email,  password,name);
        
        await setDoc(doc(db, "users", email), {
          id: email,
          displayname: name,
          email: email,
          country: country,
          city: city,
          phone: phone,
          CreatedAt: new Date(),
          isAdmin: false
        });


        navigate("/signin")
        
      }

    }catch(error){
        alert("error: ", error)
        navigate("/signup")
    }
    
  };

  return (
    <>
    <div className="contenedor1">
    <div className="rectangulo1">
      <h1 className="Titulo1">Bienvenido a MUNICIPIOS SUSTENTABLES</h1>
      
        <h2 className="Subtitulo1">Registro</h2>
        
        <form onSubmit={onSubmit}>
          <label>Nombres:</label>
          <input placeholder="  nombre" type="text" ref={nameRef}/>
          <label>País:</label>
          <input placeholder="  país" type="text" ref={countryRef} />
          <label>Ciudad:</label>
          <input placeholder="  ciudad" type="text" ref={cityRef} />
          <label>Email:</label>
          <input placeholder="  email" type="email" ref={emailRef} />
          <label>Telefóno:</label>
          <input placeholder="  telefóno" type="number" ref={phoneRef} />
          <label>Contraseña:</label>
          <input placeholder="  contraseña" type="password" ref={psdRef} />
          <label>Confirmar contraseña:</label>
          <input placeholder=" contraseña" type="password" ref={repasswordRef} />
          <div className="enlace1">
            Ya tienes una cuenta? <Link to= "/signin/">  Iniciar sesión</Link>
          </div> 
          <button className="boton1" type="submit">Registrar</button>
         
        </form>
        
      </div>
 
    </div>
    </>
  );
};

export default Signup;
