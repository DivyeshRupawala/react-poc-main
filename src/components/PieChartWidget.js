import React from "react";
import { Pie } from "react-chartjs-2";

export const PieChartWidget = () => {
  const data = {
    chart1: {
      labels: ["Eating", "Drinking", "Sleeping"],
      datasets: [
        {
          label: "My First dataset",
          backgroundColor: ["#F2C94C", "#2F80ED", "#9B51E0"],
          borderWidth: 0,
          data: [9, 22, 7],
        },
      ],
    },
  };
  return (
    <div className="card-bg w-100 border d-flex flex-column">
      <div className="p-4 d-flex flex-column h-100">
        <div className="d-flex align-items-center justify-content-between">
          <h4 className="m-0 h5 font-weight-bold text-dark">
            Traffic by Source
          </h4>
          <div className="px-2 py-1 bg-grey rounded-circle">
            <i className="fas fa-chart-line"></i>
          </div>
        </div>
        <div className="justify-content-between">
          <div className="pie-chart-container">
            <Pie
              data={data.chart1}
              options={
                ({ responsive: true },
                { maintainAspectRatio: false },
                { legend: { display: false } })
              }
            />
          </div>
          <div className="text-right w-25">
            <p className="m-0">Google</p>
            <p className="text-success small">10.57</p>
            <div>
              <div className="d-flex align-items-center justify-content-between text-success">
                <span
                  style={{
                    fontSize: "3em",
                    margin: "-2rem 0px -1.5rem 0px",
                  }}
                >
                  &#8226;
                </span>
                <span className="small">Google</span>
              </div>
              <div
                className="d-flex align-items-center justify-content-between"
                style={{ color: "#9B51E0" }}
              >
                <span
                  style={{
                    fontSize: "3em",
                    margin: "-2rem 0px -1.5rem 0px",
                  }}
                >
                  &#8226;
                </span>
                <span className="small">Yahoo</span>
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
                <span className="small">Bing</span>
              </div>
            </div>
          </div>
        </div>
        <p className="c-p text-dark mb-0 font-weight-bold text-right mt-auto">
          More Details
          <i className="fas fa-arrow-right ml-1"></i>
        </p>
      </div>
    </div>
  );
};
