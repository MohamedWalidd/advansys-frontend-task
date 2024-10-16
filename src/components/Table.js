import TableRow from "./TableRow";

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
    ["Smartcom_jav_2024", "75%", "2338", "Dec 30 2023", "Sender #1", "One:One"],
    ["Smartcom_jav_2024", "75%", "2338", "Dec 30 2023", "Sender #1", "One:One"],
  ];

  return (
    <table border="1" cellPadding="10" cellSpacing="0">
      <thead>
        <tr>
          {columns.map((col, index) => (
            <th key={index}>{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((rowData, rowIndex) => (
          <TableRow key={rowIndex} rowData={rowData} />
        ))}
      </tbody>
    </table>
  );
}

export default Table;
