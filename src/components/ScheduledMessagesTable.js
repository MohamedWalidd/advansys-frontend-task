import Table from "./Table";

function ScheduledMessagesTable() {
  const columns = ["Campaign Name", "Status", "Date", "Time"];

  const rows = [
    ["Smartcom_jav_2024", "Sent", "Dec 30 2023", "2338"],
    ["Smartcom_jav_2024", "Pending", "jan 13 2024", "1399"],
    ["Smartcom_jav_2024", "Pending", "Dec 23 2023", "5941"],
    ["Smartcom_jav_2024", "Sent", "Dec 23 2023", "5941"],
  ];
  return <Table columns={columns} rows={rows} name="Scheduled Messages" />;
}

export default ScheduledMessagesTable;
