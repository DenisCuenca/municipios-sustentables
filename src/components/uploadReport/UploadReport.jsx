import { useState } from "react";

import * as XLSX from "xlsx";

function UploadReport() {
  const [item, setItem] = useState([]);
  const [cols, setCols] = useState([]);
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
      setItem(d);
      console.log(d);
      console.log(d[8]);
      console.log(Object.values(d[4]).length);
      console.log("cols:", Object.keys(d[4]));
      setCols(Object.keys(d[4]));
    });
  };

  function submitDataFromFile() {
    const list1 = [];
    item.map((d) => {
      // console.log(d);

      console.log(
        "cantidad de la primera col: ",
        d[
          "Ingresos para protección ambiental provenientes de: Recursos fiscales generados por la institución "
        ]
      );
      list1.push(
        d[
          "Ingresos para protección ambiental provenientes de: Recursos fiscales generados por la institución "
        ]
      );
    });
    console.log("total: ", list1);
    let onlyNum = [];
    list1.map((d) => {
      if (!isNaN(d)) {
        if (d !== "") {
          onlyNum.push(d);
        }
      }
    });

    console.log("filter: ", onlyNum);

    console.log("minimo", Math.min(...onlyNum));
  }
  const denis = "denis testing";

  return (
    <>
    {denis}
      <form>
        <input
          type="file"
          onChange={(e) => {
            const file = e.target.files[0];
            readExcel(file);
          }}
        />

        <table class="table container">
          <thead>
            <tr>
              {cols.map((d, i) => (
                <th>{d}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {item.map((d, i) => (
              <tr>
                
               { 
               Object.values(d).forEach( e =>{

                 <th>{d[i]}</th>
               }

               )
                  
                  
               }
               
                
                {/* for(let j = 0 ; j < 3; j++ ){
                  

                
              } */}
              
              </tr>
            )
            )
            }
          </tbody>
        </table>

        <a onClick={submitDataFromFile()}>Subir data</a>
      </form>
    </>
  );
}

export default UploadReport;
