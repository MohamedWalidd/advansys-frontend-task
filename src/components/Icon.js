import React from "react";

import totalBalanceIcon from "../assets/totalBalance.svg";
import dashboardIcon from "../assets/dashboard.svg";
import campaignsIcon from "../assets/campaigns.svg";
import reportsIcon from "../assets/reports.svg";
import sendersIcon from "../assets/senders.svg";
import accountsIcon from "../assets/accounts.svg";
import transactionsIcon from "../assets/transactions.svg";
import apiIntegrationIcon from "../assets/apiIntegration.svg";
import configurationsIcon from "../assets/configurations.svg";
import termsAndConditionsIcon from "../assets/termsAndConditions.svg";
import errorIcon from "../assets/error.svg";
import smsIcon from "../assets/sms.svg";
import smsLengthIcon from"../assets/smsLength.svg"

function Icon(props, width, height) {
  const svgs = {
    totalBalanceIcon,
    dashboardIcon,
    campaignsIcon,
    reportsIcon,
    sendersIcon,
    accountsIcon,
    transactionsIcon,
    apiIntegrationIcon,
    configurationsIcon,
    termsAndConditionsIcon,
    errorIcon,
    smsIcon,
    smsLengthIcon
  };

  const selectedIcon = svgs[props.name];
  return (
    <img
      src={selectedIcon}
      alt={props.name}
      width={props.width}
      height={props.height}
    ></img>
  );
}

export default Icon;
