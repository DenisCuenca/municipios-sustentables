import Auth from "./components/auth";
import Dashboard from "./components/dashboard/Dashboard";
import Signin from "./components/authentication/signin/Signin";
import Signup from "./components/authentication/signup/Signup";
import  {useUserContext}  from "./context/userContext";
import { Route, Router, Routes,  } from "react-router-dom";


function App() {
  const { user, loading, error } = useUserContext();

  return (
    <div className="App">
      {error && <p className="error">{error}</p>}
      {loading ? <h2>Loading...</h2> : <> {user ? <Dashboard /> : <Auth />} </>}

      {/* <Routes>
            <Route path="" element={<Signin />} />
            <Route path="/singup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            
        </Routes> */}

    </div>
  );
}

export default App;