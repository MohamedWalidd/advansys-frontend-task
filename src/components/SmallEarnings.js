import Icon from "./Icon";
import Earnings from "./Earnings";
import "./SmallEarnings.css";
import small_earnings_data from "../small_earnings_data";

function SmallEarnings({ type }) {
  const earningType = small_earnings_data[type];

  return (
    <div className="small-earnings-container ">
      <div className="icon-container">
        <Icon name={earningType.icon} width="20px" height="20px" />
      </div>
      <Earnings title={earningType.title} content={earningType.content} />
    </div>
  );
}
export default SmallEarnings;

