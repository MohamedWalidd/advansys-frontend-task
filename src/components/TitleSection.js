import React from "react";
import TitleStatCard from "./TitleStatCard";
import "./titleSection.css";
import Icon from "./Icon";

function TitleSection() {
  return (
    <div className="title-section">
      <h1 className="title">Main Dashboard</h1>
      <div className="title-section-stats-container">
        <TitleStatCard
          iconName="smsIcon"
          statName="SMS"
          color="#BA1319"
          text="81,765,601,333"
        />
        <TitleStatCard
          iconName="totalBalanceIcon"
          statName="Balance"
          color="#05CD99"
          text="5000 EGP"
        />
        <div className="stat-card">
          <TitleStatCard
            iconName="advansysLogoSmallIcon"
            color="#2B3674"
            text="Advansys"
          />
          <Icon name="dropdownIcon" width="16" height="16px" />
        </div>
      </div>
    </div>
  );
}

export default TitleSection;
