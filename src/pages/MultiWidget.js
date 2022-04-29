import React from "react";
import "./Dashboard.css";
import { subscribe } from "../utils/PubSub";
import { KPIWidget } from "../components/KPIWidget";
import { PivotWidget } from "../components/PivotWidget";
import { PieChartWidget } from "../components/PieChartWidget";

export const MultiWidget = () => {
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
                <PivotWidget />    
                <KPIWidget />                        
              </div>
            </div>
            <footer className="footer">
              <div className="d-flex align-items-center">
                    MultiWidget Footer
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};
