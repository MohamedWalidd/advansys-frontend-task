import "./badge.css";

function Badge({ hasDot, text, color, badgeColor }) {
  return (
    <>
      <div className="badge-container" style={{ background: badgeColor }}>
        {hasDot && <div className="dot" style={{ background: color }}></div>}
        <strong className="badge-strong" style={{ color: color }}>
          {text}
        </strong>
      </div>
    </>
  );
}

export default Badge;

