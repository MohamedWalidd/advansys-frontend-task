import Dashboard from "./Dashboard";
import Icon from "./Icon";
import "./sidebar.css";

function Sidebar() {
  return (
    <div>
      <div className="sidebar-header">
        <div className="sidebar-header-content">
          <Icon name="advansysLogoLargeIcon" width="180px" height="32px" />
          <Icon name="sidebarButtonIcon" width="12px" height="12px" />
        </div>
      </div>

      <div className="sidebar-pages">
        <Dashboard
          isActive={true}
          iconName="dashboardIcon"
          content="Dashboard"
        />
        <Dashboard
          isActive={false}
          iconName="campaignsIcon"
          content="Campaigns"
        />
        <Dashboard isActive={false} iconName="reportsIcon" content="Reports" />

        <Dashboard isActive={false} iconName="sendersIcon" content="Senders" />

        <Dashboard
          isActive={false}
          iconName="accountsIcon"
          content="Accounts"
        />
        <Dashboard
          isActive={false}
          iconName="transactionsIcon"
          content="Transactions"
        />
        <Dashboard
          isActive={false}
          iconName="apiIntegrationIcon"
          content="API Integration"
        />
        <Dashboard
          isActive={false}
          iconName="configurationsIcon"
          content="Configurations"
        />
        <Dashboard
          isActive={false}
          iconName="termsAndConditionsIcon"
          content="Terms and Conditions"
        />
      </div>
    </div>
  );
}

export default Sidebar;

