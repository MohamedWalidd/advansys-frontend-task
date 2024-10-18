import Badge from "./Badge";

import "./card.css";

function Card({ name, badgeDot, badgeText, badgeTextColor, badgeColor }) {
  return (
    <div className="card-container">
      <strong>{name}</strong>
      <div className="card-badge-container">
        <Badge
          hasDot={badgeDot}
          text={badgeText}
          color={badgeTextColor}
          badgeColor={badgeColor}
        />
      </div>
    </div>
  );
}
export default Card;

