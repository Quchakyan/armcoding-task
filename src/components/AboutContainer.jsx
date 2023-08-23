import "../styles/Home.css";
import { useNavigate } from "react-router-dom";

export default function AboutContainer() {
  const navigate = useNavigate();
  const navigateToServices = () => navigate("/services");
  return (
    <section className="about-cont home-about-section">
      <div className="h-a-flex-item">
        <h2 className="title">ԱՌԱՋԻՆԸ ՀԱՅԱՍՏԱՆՈՒՄ</h2>
        <p>
          Բինտեր, թանզիֆե մանրէազերծված բժշկական անձեռոցիկներ, մանրէազերծված և
          ոչ մանրէազերծված բժշկական վիրակապեր արտադրող;
        </p>
        <button className="btn" onClick={navigateToServices}>
          ԿԱՐԴԱԼ ԱՎԵԼԻՆ
        </button>
      </div>
      <div className="h-a-flex-item">
        <img src="./pictures/firstpic.jpg" alt="pic" />
        <img className="circle" src="./pictures/circle.png" alt="circle" />
      </div>
    </section>
  );
}
