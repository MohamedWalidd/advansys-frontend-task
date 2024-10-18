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
import infoIcon from "../assets/info.svg";
import smsIcon from "../assets/sms.svg";
import smsLengthIcon from "../assets/smsLength.svg";
import advansysLogoLargeIcon from "../assets/advansysLogoLarge.svg";
import sidebarButtonIcon from "../assets/sidebarButton.svg";
import calendarIcon from "../assets/calendar.svg";
import dropdownIcon from "../assets/dropdown.svg";
import advansysLogoSmallIcon from "../assets/advansysLogoSmall.svg";
import moreButtonIcon from "../assets/moreButton.svg";
import greenCheckmarkIcon from "../assets/greenCheckmark.svg";
import pendingExclamationMarkIcon from "../assets/pendingExclamationMark.svg";
import APIIcon from "../assets/API.svg";
function Icon({ name, width, height }) {
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
    infoIcon,
    smsIcon,
    smsLengthIcon,
    advansysLogoLargeIcon,
    sidebarButtonIcon,
    calendarIcon,
    dropdownIcon,
    advansysLogoSmallIcon,
    moreButtonIcon,
    greenCheckmarkIcon,
    pendingExclamationMarkIcon,
    APIIcon,
  };

  const selectedIcon = svgs[name];
  return (
    <img src={selectedIcon} alt={name} width={width} height={height}></img>
  );
}

export default Icon;

