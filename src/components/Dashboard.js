import React from "react";
import Icon from "./Icon";
import "./dashboard.css";

function Dashboard({ isActive }) {
  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <Icon
          name="dashboardIcon"
          height={isActive?"25px":"17px"}
        />
        <strong style={{ color: isActive ? "#2B3674" : "#7482AE" }}>
          Dashboard
        </strong>
      </div>
      {isActive && <div className="active"></div>}
    </div>
  );
}

export default Dashboard;
