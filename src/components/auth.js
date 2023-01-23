import React, { useState } from "react";
import Signup from "./authentication/signup/Signup";
import Signin from "./authentication/signin/Signin";
import ResetPassword from "./authentication/resetPassword/ResetPassword";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";

const Auth = () => {
  const [index, setIndex] = useState(false);
  const toggleIndex = () => {
    setIndex((prevState) => !prevState);
  };

  const router = createBrowserRouter([
   
    {
      path: "/",
      element: 
      <>
      <h1>Bienvenido a landingPage</h1>
      <Link to = "/signin">ingresar</Link>
      </>
    },
    {
      path: "/signin",      
      element:  <Signin />  ,
    },
    {
      path: "/reset-password/",
      element: <ResetPassword />,
    },
    {
      path: "/signup/",
      element: <Signup />,
    },
    {
      path: "/panel/",
      element: <Dashboard />,
    },
  ]);

  return (
    <div className="container">
      <RouterProvider router={router} />

      {/* {!index ? <Signin /> : <Signup />} */}
      {/* <p onClick={toggleIndex}> {!index ? "Crear cuenca" : "<-- Ir a Login"}</p> */}
      denis
    </div>
  );
};

export default Auth;
