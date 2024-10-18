import Icon from "./Icon";
import "./apiCard.css";
function APICard() {
  return (
    <div className="api-card-container">
      <div className="api-card-content">
        <Icon name="APIIcon" width="64px" height="64px" />
        <h1 className="api-title">API Integration</h1>
        <p className="api-content">
          Discover how to use our API within your customized solution..
        </p>
      </div>
      <button className="api-button">Generate Key</button>
    </div>
  );
}
export default APICard;
