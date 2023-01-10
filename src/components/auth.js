import React, { useState } from 'react'
import Signup from './authentication/signup/Signup';
import Signin from './authentication/signin/Signin';
import  ResetPassword from './authentication/resetPassword/ResetPassword';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";


const Auth = ()  => {
 
    const [index, setIndex] = useState(false);
    const toggleIndex = () =>{
        setIndex((prevState) => !prevState);
    };

    const router = createBrowserRouter([
        {
          path: "/",
          element: !index ? <Signin /> : <Signup />,
        },
        {
            path: "/reset-password/",
            element: <ResetPassword/>,
          },
      ]);
    
    return (
        
      <div className='container'>

        <RouterProvider router={router} />
        
        {/* {!index ? <Signin /> : <Signup />} */}
        <p onClick={toggleIndex}> {!index ? "Crear cuenca" : "<-- Ir a Login"}</p>

        </div>
    );
  
}


export default Auth;