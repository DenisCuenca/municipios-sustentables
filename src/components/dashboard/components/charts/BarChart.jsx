import { Bar } from "react-chartjs-2";
import { animator, ArcElement, Chart, LineElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";


Chart.register(ArcElement, CategoryScale, LineElement, Tooltip, Legend);


function PieChart({ chartData }) {
  console.log("desde el bar ", chartData);
  return (
    <div className="chart-container" style={{ width: "650px" }}>
      <h2 style={{ textAlign: "center" }}>Indices Ambientales</h2>
      <Bar
        width={200}
        height={200}
        data={chartData}
        options={{
          animation: true,
          plugins: {
            legend: {
              display: true,
            },
            tooltip: {
              enabled: true,
            },
          },
        }}
      />
    </div>
  );
}
export default PieChart;
