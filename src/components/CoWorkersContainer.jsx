import data from "../db-example/exDB.json";
import CoWorker from "./CoWorker";
import { useNavigate } from "react-router-dom";

export default function CoWorkersContainer() {
  const coWorkers = data["co-workers"];
  const navigate = useNavigate();
  const navigateToCoWorkers = () => {
    navigate("/coworkers");
  };
  return (
    <section className="coworkers-cont">
      <h2 className="title">ԳՈՐԾԸՆԿԵՐՆԵՐ</h2>
      <div className="product-list">
        {coWorkers.map((item, index) => (
          <CoWorker info={item} key={index} />
        ))}
      </div>
      <button className="btn" onClick={navigateToCoWorkers}>
        ՏԵՍՆԵԼ ԱՄԲՈՂՋԸ
      </button>
    </section>
  );
}
