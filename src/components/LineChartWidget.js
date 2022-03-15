import React from "react";
import { Bar } from "react-chartjs-2";

export const LineChartWidget = () => {
  const data = {
    chart2: {
      labels: [
        "Eating",
        "Drinking",
        "Sleeping",
        "Designing",
        "Coding",
        "Cycling",
        "Running",
      ],
      datasets: [
        {
          label: "My First dataset",
          backgroundColor: "rgba(255, 153, 51, 0.8)",
          borderColor: "rgb(102, 51, 0)",
          data: [65, 59, 75, 81, 56, 55, 40],
        },
        {
          label: "My Second dataset",
          backgroundColor: "#2F80ED",
          borderColor: "rgb(0, 41, 102)",
          data: [38, 48, 60, 79, 96, 47, 80],
        },
      ],
    },
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    legend: { display: false },
    scales: {
      xAxes: [
        {
          ticks: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            display: false,
          },
          ticks: {
            display: false,
          },
        },
      ],
    },
  };
  return (
    <div
      className="card-bg w-100 d-flex flex-column border d-flex flex-column"
      style={{ gridRow: "span 2" }}
    >
      <div className="p-4 d-flex flex-column h-100">
        <div className="d-flex align-items-center justify-content-between">
          <h4 className="m-0 h5 font-weight-bold text-dark">Total Orders</h4>
          <div className="px-2 py-1 bg-grey rounded-circle">
            <i className="fas fa-shopping-bag"></i>
          </div>
        </div>
        <div className="mt-5 d-flex align-items-center justify-content-between">
          <div>
            <h4 className="m-0 h1 font-weight-bold text-dark">452</h4>
            <p className="text-success small">
              <i className="fas fa-angle-up p-0"></i> 18.52%
            </p>
          </div>
          <div className="text-right d-flex flex-column justify-content-between">
            <div className="d-flex align-items-center justify-content-between text-primary">
              <span
                style={{
                  fontSize: "3em",
                  margin: "-2rem 0px -1.5rem 0px",
                }}
              >
                &#8226;
              </span>
              <span className="small">August</span>
            </div>
            <div className="d-flex align-items-center justify-content-between text-warning">
              <span
                style={{
                  fontSize: "3em",
                  margin: "-2rem 0px -1.5rem 0px",
                }}
              >
                &#8226;
              </span>
              <span className="small ml-2">September</span>
            </div>
          </div>
        </div>
        <div className="p-0 mt-auto">
          <Bar height={250} data={data.chart2} options={options} />
        </div>
        <p className="c-p text-dark font-weight-bold text-right mt-3 mb-0">
          More Details
          <i className="fas fa-arrow-right ml-1"></i>
        </p>
      </div>
    </div>
  );
};
