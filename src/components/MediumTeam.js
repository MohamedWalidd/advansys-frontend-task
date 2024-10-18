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
        <Card
          name="Advansys #1"
          badgeDot={true}
          badgeText="Active"
          badgeTextColor="#05CD99"
          badgeColor="#ECFDF3"
        />
        <Card
          name="Advansys #2"
          badgeDot={true}
          badgeText="Pending"
          badgeTextColor="#CD9505"
          badgeColor="#FDF7EC"
        />
        <Card
          name="Advansys #3"
          badgeDot={true}
          badgeText="Pending"
          badgeTextColor="#CD9505"
          badgeColor="#FDF7EC"
        />
      </div>
    </div>
  );
}

export default MediumTeam;
