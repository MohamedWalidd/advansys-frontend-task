import Card from "./Card";
import Icon from "./Icon";
import "./mediumTeam.css";

function MediumTeam() {
  return (
    <div className="medium-team-container">
      <div className="team-header">
        <span className="team-header-title">All Senders</span>
        <span className="card-icon-container">
          <Icon name="moreButtonIcon" width="17px" height="17px" />
        </span>
      </div>
      <div className="cards-container">
        <Card name="Advansys #1" badgeStatus="active" />
        <Card name="Advansys #2" badgeStatus="pending" />
        <Card name="Advansys #3" badgeStatus="pending" />
      </div>
    </div>
  );
}

export default MediumTeam;
