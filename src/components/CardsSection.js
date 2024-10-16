import SmallEarnings from "./SmallEarnings";

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
export default CardsSection;
