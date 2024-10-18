import Badge from "./Badge";
import Icon from "./Icon";
import Percentage from "./Percentage";

import "./table.css";

function Table({ columns, rows, name }) {
  return (
    <div className="container">
      <div className="table-header">
        <span className="table-header-title"> {name}</span>
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
                  return name === "All Campaigns" ? (
                    <td>
                      <div className="percentage-cell">
                        {data}
                        <Percentage />
                      </div>
                    </td>
                  ) : name === "Scheduled Messages" ? (
                    <td>
                      <div className="status-cell">
                        <Icon
                          name={
                            data === "Sent"
                              ? "greenCheckmarkIcon"
                              : data === "Pending"
                              ? "pendingExclamationMarkIcon"
                              : null
                          }
                          width="16px"
                          height="16px"
                        />
                        {data}
                      </div>
                    </td>
                  ) : null;
                } else if (cellIndex === 5 && name === "All Campaigns") {
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
