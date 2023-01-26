
import  {useUserContext}  from "./context/userContext";
import { Link, createBrowserRouter, RouterProvider } from "react-router-dom";
import ResetPassword from "./components/authentication/resetPassword/ResetPassword";
import Signin from "./components/authentication/signin/Signin";
import Signup from "./components/authentication/signup/Signup";
import Dashboard from "./components/dashboard/Dashboard";
import LandingPage from "./components/landing_page/Landing_page";


function App() {
  const { user, error } = useUserContext();
  

  const islogged = "/panel";
  const notlogged = "/signin";
  

  const router = createBrowserRouter([
   
    {
      path: "/",
      element: <LandingPage/>
      
    },
    {
      path: "/signin",
      element:  <Signin /> ,
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
    <div className="App">

      {/* mostrar error de firebase */}
      {error && <p className="error">{error}</p>} 
      <RouterProvider router={router}/>

      
    </div>
  );
}

export default App;