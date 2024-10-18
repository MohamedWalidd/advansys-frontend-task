import "./App.css";
import "./pageContent.css";
import Sidebar from "./components/Sidebar";
import TitleSection from "./components/TitleSection";
import CardsSection from "./components/CardsSection";
import CalendarSection from "./components/CalendarSection";
import MediumTeam from "./components/MediumTeam";
import CampaignsTable from "./components/CampaignTable";
import ScheduledMessagesTable from "./components/ScheduledMessagesTable";
import APICard from "./components/APICard";
import CustomCalendar from "./components/customCalendar";

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="page-container">
        <TitleSection />
        <CalendarSection date="1 Nov, 2023 - 1 Feb, 2024" />
        <CardsSection />

        <div className="campaign-info-section">
          <CampaignsTable />
          <div>
            <MediumTeam />
          </div>
        </div>

        <div className="messages-API-section">
          <ScheduledMessagesTable />
          <CustomCalendar />
          <APICard />
        </div>
      </div>
    </div>
  );
}

export default App;

