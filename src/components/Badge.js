import "./badge.css";

function Badge({ status }) {
  return (
    <>
      {status === "active" ? (
        <div className="badge-container" style={{ background: "#ECFDF3" }}>
          <div className="dot" style={{ background: "#05CD99" }}></div>
          <strong className="badge-strong" style={{ color: "#05CD99" }}>
            Active
          </strong>
        </div>
      ) : status === "pending" ? (
        <div className="badge-container" style={{ background: "#FDF7EC" }}>
          <div className="dot" style={{ background: "#CD9505" }}></div>
          <strong className="badge-strong" style={{ color: "#CD9505" }}>
            Pending
          </strong>
        </div>
      ) : null}
    </>
  );
}

export default Badge;

