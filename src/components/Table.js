import Badge from "./Badge";
import Icon from "./Icon";
import Percentage from "./Percentage";

import "./table.css";

function Table() {
  const columns = [
    "Campaign Name",
    "Delivered %",
    "Total SMS",
    "Date",
    "Sender",
    "Type",
  ];

  const rows = [
    ["Smartcom_jav_2024", "75%", "2338", "Dec 30 2023", "Sender #1", "One:One"],
    ["Smartcom_jav_2024", "75%", "1399", "jan 13 2024", "Sender #1", "Bulk"],
    ["Smartcom_jav_2024", "75%", "5941", "Dec 23 2023", "Sender #1", "One:One"],
  ];

  return (
    <div className="container">
      <div className="table-header">
        <span className="table-header-title">All Campaigns</span>
        <span className="table-header-icon">
          <Icon name="dropdownIcon" width="16px" height="16px" />
        </span>
      </div>
      <table className="table-container">
        <thead>
          <tr>
            {columns.map((col, index) => (
              <th key={index}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody className="table-body">
          {rows.map((cell, index) => (
            <tr key={index}>
              {cell.map((data, cellIndex) => {
                if (cellIndex === 1) {
                  return (
                    <td>
                      <div className="percentage-cell">
                        {data}
                        <Percentage />
                      </div>
                    </td>
                  );
                } else if (cellIndex === 5) {
                  return (
                    <td>
                      <div className="type-cell">
                        <Badge
                          hasDot={false}
                          text={data}
                          color="#05CD99"
                          badgeColor="#ECFDF3"
                        />
                      </div>
                    </td>
                  );
                }
                return <td>{data}</td>;
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
