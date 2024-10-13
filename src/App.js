import "./App.css";

import Icon from "./components/Icon";
import Earnings from "./components/Earnings";
import SmallEarnings from "./components/SmallEarnings";
import Dashboard from "./components/Dashboard";
import Badge from "./components/Badge";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SmallEarnings type="totalCampaigns"/>
      </header>
    </div>
  );
}

export default App;
