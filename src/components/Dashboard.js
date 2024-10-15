import React from "react";
import Icon from "./Icon";
import "./dashboard.css";

function Dashboard({ isActive, iconName, content }) {
  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <Icon
          name={iconName}
          width={isActive ? "25px" : "17px"}
          Length={isActive ? "25px" : "17px"}
        />
        <strong style={{ color: isActive ? "#2B3674" : "#7482AE" }}>
          {content}
        </strong>
      </div>
      {isActive && <div className="active"></div>}
    </div>
  );
}

export default Dashboard;
