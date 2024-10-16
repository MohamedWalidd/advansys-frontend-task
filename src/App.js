import "./App.css";
import "./pageContent.css";

import Sidebar from "./components/Sidebar";
import TitleSection from "./components/TitleSection";
import CardsSection from "./components/CardsSection";
import CalendarSection from "./components/CalendarSection";
import Table from "./components/Table";
import MediumTeam from "./components/MediumTeam";
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
        <div>chart section</div>

        <div className="campaign-info-section">
          <Table />
          <div>
            <MediumTeam />
          </div>
        </div>

        <div>messages section</div>
      </div>
    </div>
  );
}

export default App;

