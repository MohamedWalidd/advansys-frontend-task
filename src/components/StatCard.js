import Icon from "./Icon";
import "./StatCard.css";

function StatCard({ iconName, statName, text, color }) {
  return (
    <div className="stat-card">
      <span className="stat-icon-container">
        <Icon name={iconName} width="20px" length="20px" />
      </span>
      <span className="stat-name">{statName}:</span>
      <span className="stat-text" style={{ color }}>
        {text}
      </span>
    </div>
  );
}

export default StatCard;
