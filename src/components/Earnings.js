import Icon from "./Icon";

import "./earnings.css";
//props are earningType objects
function Earnings(props) {
  return (
    <div className="earnings-container">
      <div className="earnings-info">
        <div>
          <p>{props.title}</p>
          {(props.title === "SMS Count" || props.title === "SMS Length") && (
            <Icon name="infoIcon" width="9px" height="9px" />
          )}
        </div>
      </div>
      <strong>{props.content}</strong>
    </div>
  );
}
export default Earnings;

