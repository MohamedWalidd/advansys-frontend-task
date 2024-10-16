import Badge from "./Badge";

import "./card.css";

function Card({ name, badgeStatus }) {
  return (
    <div className="card-container">
      <strong>{name}</strong>
      <Badge status={badgeStatus} />
    </div>
  );
}

export default Card;

