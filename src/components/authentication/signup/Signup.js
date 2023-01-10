import React, { useRef } from "react";
import { useUserContext } from "../../../context/userContext";

const Signup = () => {
  const nameRef = useRef();
  const countryRef = useRef();
  const cityRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const psdRef = useRef();
  const repasswordRef = useRef();
  

  const { registerUser, addDocUser } = useUserContext();

  const onSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const country = countryRef.current.value;
    const city = cityRef.current.value;
    const email = emailRef.current.value;
    const phone = phoneRef.current.value;
    const password = psdRef.current.value;
    const re_password = repasswordRef.current.value;
    
    
    if (email && name && password && password) {
      registerUser(email, name, password);
      addDocUser(name, country, city, email, phone);
    }
  };

  return (
    <>
    <div>
    <h4>Bienvenido a MUNICIPIOS SUSTENTABLES</h4>
    <div className="form">
      <h2>Registro</h2>
      <form onSubmit={onSubmit}>
        <label>Nombre de empresa:</label>
        <input placeholder="nombre" type="text" ref={nameRef}/>
        <label>País:</label>
        <input placeholder="país" type="text" ref={countryRef} />
        <label>Ciudad:</label>
        <input placeholder="ciudad" type="text" ref={cityRef} />
        <label>Email:</label>
        <input placeholder="email" type="email" ref={emailRef} />
        <label>Telefóno:</label>
        <input placeholder="telefóno" type="number" ref={phoneRef} />
        <label>Contraseña:</label>
        <input placeholder="contraseña" type="password" ref={psdRef} />
        <label>Repetir Contraseña:</label>
        <input placeholder="contraseña" type="password" ref={repasswordRef} />
        <button type="submit">Ingresar</button>
      </form>
    </div>
    </div>
    </>
  );
};

export default Signup;
