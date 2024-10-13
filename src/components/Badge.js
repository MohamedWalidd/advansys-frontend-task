import React from "react";
import"./badge.css"

function Badge ({name}){

    return(
    <>
      {name === "Active" ? (
        <div className="badge-container" style={{ background: "#ECFDF3" }}>
          <div className="dot" style={{ background: "#05CD99" }}></div>
          <strong className="badge-strong"  style={{ color: "#05CD99" }}>Active</strong>
        </div>
      ) : name === "Pending" ? (
        <div className="badge-container" style={{ background: "#FDF7EC" }}>
          <div className="dot" style={{ background: "#CD9505" }}></div>
          <strong className="badge-strong" style={{ color: "#CD9505" }}>Pending</strong>
        </div>
      ) : null}
    </>
    )
}

export default Badge;