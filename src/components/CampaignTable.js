import Table from "./Table";

function CampaignsTable() {
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
  return <Table columns={columns} rows={rows} name="All Campaigns" />;
}

export default CampaignsTable;
