import React, { useEffect, useState } from "react";
import { useUserContext } from "../../context/userContext";
import { db } from "../../firebase/index";
import Sidebar from "../dashboard/components/Sidebar";

// firebase functions
import { collection, query, where, getDocs } from "firebase/firestore";
export default function OldReports() {
  const { user } = useUserContext();
  //
  const [IndData, setIndData] = useState([]);

  // useEffect(() => {
  //   const q = query(
  //           collection(db, "municipalities"),
  //           where("municipio", "==", user.displayName)
  //           );
  //           getDocs(query).then(res => console.log(res))

  // }, [])

  useEffect(() => {
    (async () => {
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

      setIndData(docs);
      console.log("doxs", docs);
    })();
  }, []);

  return (
    <>
      <div className="cont">
        <Sidebar />
        <div className="container">
          <h3>Registros realizados:</h3>
          <table className="table">
            <thead>
              <tr>
                <th>id</th>
                <th>Municipio</th>
                <th>Creado en</th>
                <th>indAmbiental</th>
                <th>indSocial</th>
                <th>indEconomico</th>
                <th>indInstitucional</th>
                <th>indGlobalSustentabilidad</th>
              </tr>
            </thead>

            <tbody>
              {IndData.map((d) => {
                return (
                  <tr>
                    <td>{d.id}</td>

                    <td>{d.municipio}</td>

                    <td>{d.creadoEn.toDate().toDateString()}</td>

                    <td>{d.indAmbiental.toFixed(2)}</td>

                    <td>{d.indSocial.toFixed(2)}</td>

                    <td>{d.indEconomico.toFixed(2)}</td>

                    <td>{d.indInstitucional.toFixed(2)}</td>

                    <td>{d.indGlobalSustentabilidad.toFixed(2)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
