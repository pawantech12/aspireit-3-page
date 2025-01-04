import React from "react";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

// Register required components for Chart.js
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const RadarChart = ({ data, labels }) => {
  const chartData = {
    labels: labels, // Dynamic labels (skills)
    datasets: [
      {
        label: "Skill Level 1",
        data: data[0], // Dynamic dataset 1
        backgroundColor: "rgba(0, 123, 255, 0.3)",
        borderColor: "rgba(0, 123, 255, 1)",
        borderWidth: 2,
        pointBackgroundColor: "rgba(0, 123, 255, 1)",
      },
      {
        label: "Skill Level 2",
        data: data[1], // Dynamic dataset 2
        backgroundColor: "rgba(123, 123, 255, 0.3)",
        borderColor: "rgba(123, 123, 255, 1)",
        borderWidth: 2,
        pointBackgroundColor: "rgba(123, 123, 255, 1)",
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      r: {
        beginAtZero: true,
        ticks: {
          backdropColor: "transparent", // Transparent tick background
          color: "#1E1E1E", // Gray tick color
          font: {
            size: 12,
          },
        },
        grid: {
          color: "#7E7E7E", // Light gray grid lines
        },
        angleLines: {
          color: "#7E7E7E", // Light gray angle lines
        },
        pointLabels: {
          font: {
            size: 12, // Increased font size for skill labels
            weight: "bold",
          },
          color: "#1E1E1E", // Dark gray skill labels
        },
      },
    },
    plugins: {
      legend: {
        display: false,
        labels: {
          color: "#374151", // Dark gray legend text
        },
      },
    },
  };

  return (
    <div className="p-8 bg-white rounded-3xl shadow-[0px_0px_4px_0px_#00000040] h-[420px]">
      <h3 className="text-[24px] font-semibold text-gray-800 ">Sub-skills</h3>

      <Radar data={chartData} options={options} />
    </div>
  );
};

export default RadarChart;
