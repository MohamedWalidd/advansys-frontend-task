import React from "react";
import Icon from "./Icon";

import "./earnings.css";
//props are earningType objects
function Earnings(props) {
  return (
    <div className="earnings-container">
      <div className="earnings-info">
        <div>
          <p>{props.title}</p>
          <Icon
            name={
              (props.title === "SMS Count" || props.title === "SMS Length") &&
              "errorIcon"
            }
            width="9px"
            length="9px"
          />
        </div>
      </div>
      <strong>{props.content}</strong>
    </div>
  );
}
export default Earnings;
