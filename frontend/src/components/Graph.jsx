import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Graph = () => {
  const data = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Monthly Data",
        data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor: "rgb(135, 206, 235)", // sky blue
        borderColor: "rgba(135, 206, 235, 0.2)", // sky blue with transparency
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Monthly Data Overview",
      },
    },
    scales: {
      x: {
        ticks: {
          color: 'black', // X-axis labels color
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.1)' // X-axis grid lines color
        }
      },
      y: {
        ticks: {
          color: 'black', // Y-axis labels color
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.1)' // Y-axis grid lines color
        }
      }
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center p-4 bg-white">
      <div className="w-full h-full max-w-4xl">
        <h2 className="text-xl text-black mb-4">PAV Annual Graph</h2>
        <div className="w-full h-full">
          <Line data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default Graph;
