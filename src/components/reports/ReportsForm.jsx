import React, { useRef }  from 'react'
import {useReportContext} from '../../context/reportContext'


import { auth, db } from "../../firebase";
import { addDoc, collection } from "firebase/firestore";
import { async } from "@firebase/util";
import { useUserContext } from '../../context/userContext';



import { Radar } from 'react-chartjs-2';
import { updatePassword } from 'firebase/auth';



export default function ReportsForm() {

  const {user} = useUserContext();
  
  const ind1Ref = useRef();
  const ind2Ref = useRef();
  const ind3Ref = useRef();
  
  const { addRepotDoc } = useReportContext();



  async function onSubmit(e){
    e.preventDefault();
    const ind1 = ind1Ref.current.value;
    const ind2 = ind2Ref.current.value;
    const ind3 = ind3Ref.current.value;
    if (ind1 && ind2 && ind3) {
      
        await addDoc(collection(db, "reports"), {
          ind1,
          ind2,
          ind3,
          createdAt: new Date(),
          createdBy: user.email
        });

    }

    alert("Reporte Creado!")



  };

 

  




  return(

    <>
    <form onSubmit={onSubmit}>
        <input placeholder="idicador 1"  type="number" ref={ind1Ref}></input>
        <input placeholder="idicador 2" type="number" ref={ind2Ref}></input>
        <input placeholder="idicador 3" type="number" ref={ind3Ref}></input>
        <button type='submit'>Registrar</button>
    </form>


    </>

  )
}
