import React, { Component } from "react";
import { useState } from "react";
import * as XLSX from "xlsx";

export default function UploadReport() {
  const [data, setdata] = useState([]);

  let vars = [];

  // get values per column
  function getMin(data, i) {
    // console.log("data", data[0])
    let list = [];

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
  function formula(d) {
    d.map((item) => {
      Object.keys(item).map((j, n) => {
        console.log("1: ", Object.values(item)[n + 1]);
        console.log("2: get min ", getMin(d, n + 1));
        console.log("3: get max ", getMax(d, n + 1));

        vars.push(
          9 *
            (Object.values(item)[n + 1] -
              getMin(d, n + 1) / (getMax(d, n + 1) - getMin(d, n + 1))) +
            1
        );
      });

      console.log("elemt: ", vars);
      // guardar el promedio de todos los numeros en la base de datos, hace referencia al valor de un indicador
      vars = [];

      // const c1 = 9;
      // const c2 = d[]
      // const l2 = d[0][1];
      // const min = getMin(d, 1);
      // const max = getMax(d, 1);
    });

    // return (
    //   9* (( l1 * (l2 - min)) / max - min)+1
    //   )
  }

  const readExcel = (file) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);

      fileReader.onload = (e) => {
        const bufferArray = e.target.result;

        const wb = XLSX.read(bufferArray, { type: "buffer" });

        const wsname = wb.SheetNames[0];

        const ws = wb.Sheets[wsname];

        const data = XLSX.utils.sheet_to_json(ws, { defval: "" });

        resolve(data);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });

    promise.then((d) => {
      setdata(d);
      getMin(d, 1);
      formula(d);
    });
  };

  return (
    <>
      <hr />
      <h5>Upload file: </h5>
      <input
        type="file"
        onChange={(e) => {
          const file = e.target.files[0];
          readExcel(file);
        }}
      />

      <table className="table mt-4">
        <thead>
          <tr>
            <th>
              <strong>Municipio</strong>
            </th>
            <th>
              <strong>
                Presupuesto Anual (para planes de sensibilización)
              </strong>
            </th>
            <th>
              <strong>
                Monto recaudado del cobro por la recolección de residuos
                residencial{" "}
              </strong>
            </th>
            <th>
              <strong>
                Total del monto recaudado por el cobro de recoleccion de
                residuos residencial e industrial
              </strong>
            </th>
            <th>
              <strong>
                Presupuesto anual para campañas de conservación de las fuentes
                de captación de agua
              </strong>
            </th>
            <th>
              <strong>
                Ingresos provenientes de: Recursos fiscales generados por
                instituciones de valor
              </strong>
            </th>
            <th>
              <strong>
                Ingresos provenientes de: Recursos de preasignaciones valor
              </strong>
            </th>
            <th>
              <strong>
                Ingresos provenientes de: Recursos de crédito internos valor
              </strong>
            </th>
            <th>
              <strong>
                Ingresos provenientes de: Asistencia técnica y donacionaciones
                valor
              </strong>
            </th>
            <th>
              <strong>
                Ingresos provenientes de: Anticipos de ejercicios anteriores
                valor
              </strong>
            </th>
            <th>
              <strong>Total de ingresos recibidos</strong>
            </th>
            <th>
              <strong>
                Ingresos para protección ambiental provenientes de: Recursos
                fiscales generados por la institución
              </strong>
            </th>
            <th>
              <strong>
                Ingresos para protección ambiental provenientes de: Recursos
                provenientes de preasignaciones valor
              </strong>
            </th>
            <th>
              <strong>
                Total del ingresos recibido para protección ambiental
              </strong>
            </th>
          </tr>
        </thead>

        <tbody>
          {data.map((d) => (
            <tr>
              <th>{d["Municipio "]}</th>
              <th>{d["Presupuesto Anual (para planes de sensibilización)"]}</th>
              <th>
                {
                  d[
                    "Monto recaudado del cobro por la recolección de residuos residencial "
                  ]
                }
              </th>
              <th>
                {
                  d[
                    "Total del monto recaudado por el cobro de recoleccion de residuos residencial e industrial "
                  ]
                }
              </th>
              <th>
                {
                  d[
                    "Presupuesto anual para campañas de conservación de las fuentes de captación de agua"
                  ]
                }
              </th>
              <th>
                {
                  d[
                    "Ingresos provenientes de: Recursos fiscales generados por instituciones de valor "
                  ]
                }
              </th>
              <th>
                {
                  d[
                    "Ingresos provenientes de: Recursos de preasignaciones valor "
                  ]
                }
              </th>
              <th>
                {
                  d[
                    "Ingresos provenientes de: Recursos de crédito internos valor  "
                  ]
                }
              </th>
              <th>
                {
                  d[
                    "Ingresos provenientes de: Asistencia técnica y donacionaciones valor "
                  ]
                }
              </th>
              <th>
                {
                  d[
                    "Ingresos provenientes de: Anticipos de ejercicios anteriores valor "
                  ]
                }
              </th>
              <th>{d["Total de ingresos recibidos "]}</th>
              <th>
                {
                  d[
                    "Ingresos para protección ambiental provenientes de: Recursos fiscales generados por la institución "
                  ]
                }
              </th>
              <th>
                {
                  d[
                    "Ingresos para protección ambiental provenientes de: Recursos provenientes de preasignaciones valor"
                  ]
                }
              </th>
              <th>
                {d["Total del ingresos recibido para protección ambiental "]}
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
