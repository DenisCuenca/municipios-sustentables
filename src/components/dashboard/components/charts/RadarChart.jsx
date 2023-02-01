import React from 'react'
import {Radar} from 'react-chartjs-2'


export default function RadarChart({chartData}) {
  return (
    
        <div className="chart-container" style={{ width: "650px" }}>
          <h2 style={{ textAlign: "center" }}>Indices Ambientales</h2>
          <Radar id='3'
            data={chartData}
            options={{
                plugins: {
                  title: {
                    display: true,
                    text: "Users Gained between 2016-2020"
                  }
                }
              }}
          />
        </div>
      
  )
}
