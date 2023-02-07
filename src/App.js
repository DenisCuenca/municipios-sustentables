import { useUserContext } from "./context/userContext";
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
import NewReport from "./components/new-report/NewReport";
import Toast, { toast, Toaster } from "react-hot-toast";

function App() {
  const { user, error } = useUserContext();

  const islogged = "/panel";
  const notlogged = "/signin";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/signin",
      element: <Signin />,
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
      path : "*",
      element: 
      <>
          <div
            style={{ display: "grid", placeItems: "center", height: "100vh", background: "#fff" }}
          >
            <div>
              <h3 style={{textAlign: "center"}}>404</h3>
              <img src="https://www.sdpnoticias.com/resizer/YFbndo7qqN8aeZuHw8UvKndaIsc=/arc-photo-sdpnoticias/arc2-prod/public/5FQKNCOOKNGYVIUKYRMLSLZMOY.png" width="500px" />
              {/* {require("./images/logo.jpg")} */}
              <h1>💂 Ruta no encontrada 💂</h1>
              <Link to="/">Ir a inicio</Link>
            </div>
          </div>
        </>
      
    },
    {
      path: "/panel/",
      element: <Dashboard />,
      errorElement: (
        <>
          <div
            style={{ display: "grid", placeItems: "center", height: "100vh" }}
          >
            <div>
              <h1>Inicia sesión para ver tus datos 🤨</h1>
              <Link to="/">Ir a inicio</Link>
            </div>
          </div>
        </>
      ),
    },
    {
      path: "/panel/new-register/",
      element: <UploadReport />,
      errorElement: (
        <>
          <div
            style={{ display: "grid", placeItems: "center", height: "100vh" }}
          >
            <div>
              <h1>Inicia sesión para ver tus datos 🤨</h1>
              <Link to="/">Ir a inicio</Link>
            </div>
          </div>
        </>
      ),
    },
    {
      path: "/panel/old-registers/",
      element: <OldReports />,
      errorElement: (
        <>
          <div
            style={{ display: "grid", placeItems: "center", height: "100vh" }}
          >
            <div>
              <h1>Inicia sesión para ver tus datos 🤨</h1>
              <Link to="/">Ir a inicio</Link>
            </div>
          </div>
        </>
      ),

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
    {
      path: "/panel/create-new-report",
      element: <NewReport />,
    },
  ]);

  return (
    <div className="App">
      {/* mostrar error de firebase */}
      {/* <Toaster position="top-left"/> */}

      {console.log("deniscunca", error)}

      <RouterProvider router={router} />
    </div>
  );
}

export default App;
