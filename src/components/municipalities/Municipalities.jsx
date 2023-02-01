import React, { useEffect, useState } from "react";
import Sidebar from "../dashboard/components/Sidebar";

import { useUserContext } from "../../context/userContext";
import { db } from "../../firebase";


// firebase functions
import { collection, query, where, getDocs } from "firebase/firestore";
import { createSearchParams, Link, useNavigate } from "react-router-dom";

export default function Municipalities() {


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

    const navigate = useNavigate();
    
        
        // navigate({
        //     pathname :  "/tmp_mun/view",
        //     search : createSearchParams({
        //         id: d.municipio
        //     }).toString()

        // });

    
  
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
                <th>indAmbiental</th>
                <th>indSocial</th>
                <th>indEconomico</th>
                <th>indInstitucional</th>
                <th>indGlobalSustentabilidad</th>
                <th>Ver Data</th>
              </tr>
            </thead>

            <tbody>
              {IndData.map((d) => {
                return (
                  <tr key={d.id}>
                    <td>{d.id}</td>

                    <td>{d.municipio}</td>

                    

                    <td>{d.indAmbiental}</td>

                    <td>{d.indSocial}</td>

                    <td>{d.indEconomico}</td>

                    <td>{d.indInstitucional}</td>

                    <td>{d.indGlobalSustentabilidad}</td>
                    <td>
                        
                        <button onClick={() => {
                           navigate({
                                    pathname :  "/tmp_mun/view",
                                    search : createSearchParams({
                                        id: d.municipio
                                    }).toString()
                        
                                });
                        }} className="btn btn-success">Acceder a vista</button>
                    </td>

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
