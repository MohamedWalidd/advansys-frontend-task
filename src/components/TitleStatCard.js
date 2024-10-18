import Icon from "./Icon";
import "./titleStatCard.css";

function TitleStatCard({ iconName, statName, text, color }) {
  return (
    <div className="stat-card">
      <span className="stat-icon-container">
        <Icon name={iconName} width="20px" height="20px" />
      </span>
      {statName && <span className="stat-name">{statName}:</span>}
      <span className="stat-text" style={{ color }}>
        {text}
      </span>
    </div>
  );
}

export default TitleStatCard;

