import React, { useEffect, useState } from "react";
import { useUserContext } from "../../context/userContext";
import { redirect, useNavigate } from "react-router-dom";
import UploadReport from "../reports/UploadReport";
import { db } from "../../firebase/index";
import BarsGraph from "../reports/BarsGraph";
import Sidebar from "./components/Sidebar";

// firebase functions
import { collection, query, where, getDocs } from "firebase/firestore";

const Dashboard = () => {
  const { user, logoutUser } = useUserContext();

  const [municipality, setMunicipality] = useState("");
  const [IndData, setIndData] = useState({});
  useEffect(() => {
    ;(async () => {
      const q = query(
        collection(db, "municipalities"),
        where("municipio", "==", user.displayName)
      );
      const querySnapshot = await getDocs(q);
      const docs = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        data.id = doc.id;
        return data;
      });


      // setMunicipality(docs[0].displayname);

      // const mun = query(
      //   collection(db, "municipalities"),
      //   where("municipio", "==", municipality.displayname)
      // );
      // const querySnapshot_ = await getDocs(mun);
      // const docs_ = querySnapshot_.docs.map((doc) => {
      //   const data = doc.data();
      //   data.id = doc.id;
      //   return data;
      // });

      setIndData(docs[0]);
      




      console.log("datos papi", docs);

      // const colRef = collection(db, "users");
      // let snapshots = await getDocs(colRef);
      // const docs = snapshots.docs.map((doc) => {
      //   const data = doc.data();
      //   data.id = doc.id;
      //   return data;
      // });
      // console.log("docs:", docs);

      // const t = docs.filter((i) => i.id === user.email);
      // console.log("mun: ", t[0].city);

      // setMunicipality(t[0].city);
    })();
  }, []);

  // const navigate = useNavigate()
  // logout te debe llevar a el signin
  // const n = useNavigate();

  return (
    <>
      <Sidebar />

      <div className="dashboard" style={{ background: "#e48" }}>
        <div className="header">
          <p>Name: {user.displayName}</p>
          <a href="/signin" onClick={logoutUser}>
            logout
          </a>
        </div>

        
        {/* <p>Email: {municipality.email}</p> */}
        <br></br>

        <h2>Datos del municipio</h2>
        <p>Indicador ambiental: {IndData.indAmbiental}</p>
        <p>Indicador social: {IndData.indSocial}</p>
        <p>Indicador insitucional: {IndData.indInstitucional}</p>
        <p>Indicador economico: {IndData.indEconomico}</p>

        <p>Indicador Global de sustentabilidad: {IndData.indGlobalSustentabilidad}</p>

        <BarsGraph />
      </div>
    </>
  );
};

export default Dashboard;

