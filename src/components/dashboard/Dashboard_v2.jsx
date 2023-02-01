// import React, { useEffect, useState } from "react";
// import { useUserContext } from "../../context/userContext";
// import { db } from "../../firebase/index";
// import Sidebar from "./components/Sidebar";
// import BarChart from "./components/charts/BarChart";
// import { Pie } from "react-chartjs-2";
// import { ArcElement, Chart } from "chart.js";

// // firebase functions
// import { collection, query, where, getDocs } from "firebase/firestore";
// import { async } from "@firebase/util";

// Chart.register(ArcElement);

// function Dashboard() {

//     const [data, setdata] = useState({})
//     const [index, setindex] = useState(0)

//   useEffect(() => {
//     setdata()
//     getData();
//   }, [data]);

//   const getData = async () => {
//     // db.collection("municipalities").onSnapshot((querySnapshot) => {
//     //     const docs = [];
//     //     querySnapshot.forEach((doc)=>{
//     //         docs.push({...doc.data(), id: doc.id})
//     //     });
//     // })

//     const q = query(
//       collection(db, "municipalities"),
//       where("municipio", "==", "PALANDA")
//     );
//     const querySnapshot = await getDocs(q);
//     const docs = querySnapshot.docs.map((doc) => {
//       const data = doc.data();
//       data.id = doc.id;
//       return data;
//     });

//     setdata(docs[0])
//   };

//   const [chartData, setChartData] = useState({
//     labels: ["denis", "cuenca"],

//     datasets: [
//       {
//         label: "Users Gained ",
//         data: [data.indGlobalSustentabilidad, data.indGlobalSustentabilidad],
//         backgroundColor: [
//           "rgba(75,192,192,1)",
//           "#ecf0f1",

//         ],
//         borderColor: "grey",
//         borderWidth: 1,
//       },
//     ],
//   });

//   console.log("est",data)
//   return <div>Dashboard

//     {data.indGlobalSustentabilidad}
//   </div>;
// }

// export default Dashboard;

// import React, { Component } from 'react'

import React, { useEffect, useState, Component } from "react";
import { useUserContext } from "../../context/userContext";
import { db } from "../../firebase/index";
import Sidebar from "./components/Sidebar";
import BarChart from "./components/charts/BarChart";
import { Pie } from "react-chartjs-2";
import { ArcElement, Chart } from "chart.js";

// firebase functions
import { collection, query, where, getDocs } from "firebase/firestore";
import { async } from "@firebase/util";

Chart.register(ArcElement);


async function getData()  {
  const q = query(
      collection(db, "municipalities"),
      where("municipio", "==", "PALANDA")
      );
      const querySnapshot = await getDocs(q);
      const docs = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          data.id = doc.id;
          this.setState({
            ...this.state,
            data: [data, ...this.state.data]
          })
          console.log("docs", this.State)
          return data;
      });
      

      
  };

export default class Dashboard extends Component {
  constructor(props) {
    
    super(props);
    this.state = [{
      date: "denis",
      data : [],
    }];
    
    getData();
      
      
        // getData().then((res) => console.log("en", res[0].indAmbiental));
    //   tor: getData().then((res) => {ind : res}),
   

    
    
    
    //   getData();
    //   getData().then(doc => {return doc})
    
  }
  
  


  render() {
    return (
      <div>
        
        <h1>Hello, world!</h1>
        { console.log("state", this.state)}
        <h2>
          It is {this.state.date}.</h2>

      </div>
    );
  }
}
