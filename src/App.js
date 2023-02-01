
import  {useUserContext}  from "./context/userContext";
import { Link, createBrowserRouter, RouterProvider } from "react-router-dom";
import ResetPassword from "./components/authentication/resetPassword/ResetPassword";
import Signin from "./components/authentication/signin/Signin";
import Signup from "./components/authentication/signup/Signup";
import Dashboard from "./components/dashboard/Dashboard";
import LandingPage from "./components/landing_page/Landing_page";
import UploadReport from "./components/reports/UploadReport";
import OldReports from "./components/reports/OldReports";
import Municipalities from "./components/municipalities/Municipalities";
import TmpMunDash from "./components/dashboard/components/TmpMunDash";


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
    {
      path: "/panel/new-register/",
      element: <UploadReport />,
    },
    {
      path: "/panel/old-registers/",
      element: <OldReports />,
    },
    {
      path: "/panel/municipalities/",
      element: <Municipalities />,
    },
// temporal
    {
      path: "/tmp_mun/view",
      element: <TmpMunDash />,
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