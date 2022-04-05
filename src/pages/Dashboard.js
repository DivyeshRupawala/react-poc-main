import React from "react";
import "./Dashboard.css";
import { subscribe } from "../utils/PubSub";
import { KPIWidget } from "../components/KPIWidget";
import { PieChartWidget } from "../components/PieChartWidget";
import { LineChartWidget } from "../components/LineChartWidget";
import { PivotWidget } from "../components/PivotWidget";
import LineChart from "../components/LineChart";

export const Dashboard = () => {
  const unsubscribe = subscribe("header-refresh", "1", (data) => {
    console.log("Dashboard Component: Got header-refresh data:", data);
  });

  return (
    <div className="dashboard d-flex">
      <div
        style={{
          flex: "1 1 auto",
          display: "flex",
          flexFlow: "column",
          height: "100vh",
          overflowY: "hidden",
        }}
      >
        <div style={{ height: "100%" }}>
          <div style={{ height: "calc(100% - 64px)", overflowY: "scroll" }}>
            <div className="d-flex card-section">
              <div className="cards-container">
                <KPIWidget />
                <PieChartWidget />
                <LineChartWidget />
                <PivotWidget />                
                <LineChart />                
              </div>
            </div>
            <footer className="footer">
              <div className="d-flex align-items-center">
                Footer Placeholder
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};
