import { useRef } from "react";
import { useUserContext } from "../../../context/userContext";
// import "./signIn.css"
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
    <div>
      <h4>Bienvenido a MUNICIPIOS SUSTENTABLES</h4>
      <div className="form">
        <h2> Login </h2>
        <form onSubmit={onSubmit}>
          <label>Ingresa tu email:</label>
          <input placeholder="Email" type="email" ref={emailRef} />
          <label>Ingresa tu cotraseña:</label>
          <input placeholder="Password" type="password" ref={psdRef} />
          <button type="submit">Ingresar</button>

          {/* <p onClick={forgotPasswordHanddler}>¿Olvidate tu contraseña?</p> */}
          <Link to="reset-password/">¿Olvidate tu contraseña?</Link>
        </form>
      </div>
    </div>
  );
};

export default Signin;
