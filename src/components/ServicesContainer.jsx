import { useNavigate } from "react-router-dom";

export default function ServicesContainer() {
  const navigate = useNavigate();
  const navigateToServices = () => navigate("/services");
  return (
    <section className="about-cont home-about-section">
      <div className="h-a-flex-item">
        <h2 className="title">ԲԺՇԿԱԿԱՆ ՊԱՐԱԳԱՆԵՐԻ ՍՏԵՐԻԼԻԶԱՑՈՒՄ</h2>
        <p>Մենք առաջարկում ենք բժշկական պարագաների ստերիլիզացում</p>
        <button className="btn" onClick={navigateToServices}>
          ԿԱՐԴԱԼ ԱՎԵԼԻՆ
        </button>
      </div>
      <div className="h-a-flex-item">
        <img src="./pictures/service.jpg" alt="pic" />
        <img className="circle" src="./pictures/circle.png" alt="circle" />
      </div>
    </section>
  );
}
