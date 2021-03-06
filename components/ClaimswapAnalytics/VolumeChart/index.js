import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";

const VolumeChart = ({ data }) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "#738598",
          font: {
            size: 14,
          },
          margin: "20px",
        },
      },
    },
    scales: {
      A: {
        title: "USD",
        type: "linear",
        position: "left",
        ticks: {
          color: "#FC770A",
          callback: function (value, index, values) {
            if (parseInt(value) >= 1000) {
              return (
                "$" + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              );
            } else {
              return "$" + value;
            }
          },
        },
      },
      B: {
        type: "linear",
        position: "right",
        ticks: {
          color: "#00AF91",
          max: 1,
          min: 0,
        },
      },
      x: {
        ticks: {
          color: "#738598",
        },
      },
    },
  };
  const volumeGraph = {
    datasets: [
      {
        label: "$ Volume (7d)",
        yAxisID: "A",
        data: data,
        borderColor: "#00AF91",
        backgroundColor: "#00AF91",
      },
    ],
  };

  return <Line options={options} data={volumeGraph} />;
};

export default VolumeChart;
