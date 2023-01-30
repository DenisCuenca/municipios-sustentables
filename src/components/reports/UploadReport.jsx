import React, { Component } from "react";
import { useState } from "react";
import * as XLSX from "xlsx";
import { auth, db } from "../../firebase";
import { useUserContext } from "../../context/userContext";
import { addDoc, collection } from "firebase/firestore";

export default function UploadReport() {
  const { user } = useUserContext();

  const [data, setdata] = useState([]);

  let vars = [];
  let munsDataJoined = [];
  let i = 0;

  // variables para componer el doc de firestore
  let municipality = [];
  let indices = [[], [], [], []];

  function setObs(mun) {
    for (let index = 0; index < 224; index++) {
      const mn = {
        municipio: mun[4][index],
        indEconomico: mun[0][index],
        indAmbiental: mun[2][index],
        indInstitucional: mun[3][index],
        indSocial: mun[1][index],
        indGlobalSustentabilidad: ArrayAvg([
          mun[0][index],
          mun[2][index],
          mun[3][index],
          mun[1][index],
        ]),
      };

      munsDataJoined.push(mn);
    }

    setdata(munsDataJoined);
  }

  // get values per column, data = dataset, i = column index
  function getMin(data, i) {
    // console.log("data", data[0])
    let list = [];

    // validar si el valor es un número o una cadena de texto
    data.map((d) => {
      if (typeof Object.values(d)[i] == "number") {
        list.push(Object.values(d)[i]);
      }
    });
    // console.log("minimo: ", Math.min(...list));

    return Math.min(...list);
  }

  function getMax(data, i) {
    // console.log("data", data[0]);
    let list = [];

    data.map((d) => {
      if (typeof Object.values(d)[i] == "number") {
        list.push(Object.values(d)[i]);
      }
    });
    // console.log("minimo: ", Math.max(...list));
    return Math.max(...list);
  }

  // const s  = ( 9 * (

  // ( C4 - (MIN($C$4:$C$224))  )  /  (MAX($C$4:$C$224)-MIN($C$4:$C$224))

  // ))+1

  function ArrayAvg(myArray) {
    var i = 0,
      summ = 0,
      ArrayLen = myArray.length;
    while (i < ArrayLen) {
      summ = summ + myArray[i++];
    }
    return summ / ArrayLen;
  }

  function getmuns(d) {
    // console.log("data from getmuns", d)
    d.map((item) => {
      municipality.push(Object.values(item)[0]);
      // console.log(Object.values(item)[0]);
    });
    // console.log("muns: ",municipality)
  }

  function formula(d) {
    console.log("valor de i", i);
    let vars = [];

    // i++;

    d.map(
      (item) => {
        // console.log("item", Object.values(item)[0])
        // se almacenan los nombres de los municipios

        Object.keys(item).map((j, n) => {
          // console.log("1: ", Object.values(item)[n + 1]);
          // console.log("2: get min ", getMin(d, n + 1));
          // console.log("3: get max ", getMax(d, n + 1));

          let c = getMin(d, n + 1);
          let m = getMax(d, n + 1);
          let e = Object.values(item)[n + 1];
          let b = (e - c) / (m - c);
          let a = 9 * b;
          let x = 1 + a;

          vars.push(x);

          // vars.push(

          //   9 *
          //     (Object.values(item)[n + 1] -
          //       getMin(d, n + 1) / (getMax(d, n + 1) - getMin(d, n + 1))) +
          //     1
          // );
        });

        // console.log("elemt: ", vars);
        vars.pop();
        vars.pop();
        vars.pop();

        // console.log("normalizados: ", ArrayAvg(vars));
        indices[i].push(ArrayAvg(vars));

        // console.log("avg: ", ArrayAvg(vars));

        vars = [];

        // const c1 = 9;
        // const c2 = d[]
        // const l2 = d[0][1];
        // const min = getMin(d, 1);
        // const max = getMax(d, 1);
      }
      // console.log("mun", municipality)
    );
    i++;

    // return (
    //   9* (( l1 * (l2 - min)) / max - min)+1
    //   )
  }

  const readExcel = (file) => {
    for (let i = 0; i < 4; i++) {
      const promise = new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsArrayBuffer(file);

        fileReader.onload = (e) => {
          const bufferArray = e.target.result;

          const wb = XLSX.read(bufferArray, { type: "buffer" });

          const wsname = wb.SheetNames[i];

          const ws = wb.Sheets[wsname];

          console.log("test", wb.SheetNames[i]);

          const data = XLSX.utils.sheet_to_json(ws, { defval: "" });
          // console.log(data);
          resolve(data);
        };

        fileReader.onerror = (error) => {
          reject(error);
        };
      });

      promise.then((d) => {
        // console.log("valor de i ", i);

        formula(d);
        // setdata(d);
        // console.log("data actual", d);

        if (i === 3) {
          getmuns(d);
          // agregar los nombres de los municipios a un arreglo
          indices.push(municipality);
          setObs(indices);
        }

        // console.log("final", indices)
      });
    }
  };

  function handleSubmit(e) {
    e.preventDefault();

    try {
      data.map(async (d) => {
        await addDoc(collection(db, "municipalities"), {
            municipio: d["municipio"],
            indEconomico: d["indEconomico"],
            indAmbiental: d["indAmbiental"],
            indInstitucional: d["indInstitucional"],
            indSocial: d["indSocial"],
            indGlobalSustentabilidad: d["indGlobalSustentabilidad"],
            creadoEn: new Date(),
            creadoPor: user.email,
          });
      });
      console.log("exito")
    } catch (error) {
      
      console.log(error);
    }

    
  }

  return (
    <>
      <hr />
      <form onSubmit={handleSubmit}>
        <h5>Upload file: </h5>
        <input
          type="file"
          onChange={(e) => {
            const file = e.target.files[0];
            readExcel(file);
          }}
        />
        {console.log(data)}
        <table className="table mt-4 container-sm ">
          <thead>
            <tr>
              <th>
                <strong>Municipio</strong>
              </th>
              <th>
                <strong>Índice Economico</strong>
              </th>
              <th>
                <strong>Índice Social</strong>
              </th>
              <th>
                <strong>Índice Ambiental</strong>
              </th>
              <th>
                <strong>Índice Institucional</strong>
              </th>
              <th>
                <strong>Índice Global de Sustentabilidad</strong>
              </th>
            </tr>
          </thead>

          <tbody>
            {data.map((d) => (
              <tr>
                <th>{d["municipio"]}</th>
                <th>{d["indEconomico"]}</th>
                <th>{d["indSocial"]}</th>
                <th>{d["indAmbiental"]}</th>
                <th>{d["indInstitucional"]}</th>
                <th>{d["indGlobalSustentabilidad"]}</th>
              </tr>
            ))}
          </tbody>
        </table>

        <button type="submit">Subir</button>
      </form>
    </>
  );
}
