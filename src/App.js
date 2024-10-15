import "./App.css";
import "./pageContent.css";

import Icon from "./components/Icon";
import Earnings from "./components/Earnings";
import SmallEarnings from "./components/SmallEarnings";
import Dashboard from "./components/Dashboard";
import Badge from "./components/Badge";
import Card from "./components/Card";
import Sidebar from "./components/Sidebar";
import StatCard from "./components/StatCard";

function TitleSection() {
  return (
    <div className="page-item title-section">
      <h1 className="title">Main Dashboard</h1>
      <div className="title-section-stats-container">
        <StatCard
          iconName="smsIcon"
          statName="SMS"
          color="#BA1319"
          text="81,765,601,333"
        />
        <StatCard
          iconName="totalBalanceIcon"
          statName="Balance"
          color="#05CD99"
          text="5000 EGP"
        />
      </div>
    </div>
  );
}

function CardsSection() {
  return (
    <div className=" cards-section">
      <SmallEarnings type="smsCount" />
      <SmallEarnings type="smsLength" />
      <SmallEarnings type="totalBalance" />
      <SmallEarnings type="totalCampaigns" />
      <SmallEarnings type="totalSenders" />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="page-container">
        <TitleSection />
        <CardsSection />
        <div>1</div>
        <div>1</div>
      </div>
    </div>
  );
}

export default App;
