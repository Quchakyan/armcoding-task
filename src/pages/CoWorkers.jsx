import Helmet from "../components/helmet/Helmet";
import data from "../db-example/exDB.json";
import CoWorker from "../components/CoWorker";

export default function CoWorkers() {
  const coWorkers = data["co-workers"];
  return (
    <Helmet title="Co-Workers">
      <section className="coworkers-cont-page">
        <div className="product-list">
          {coWorkers.map((item, index) => (
            <CoWorker info={item} key={index} />
          ))}
        </div>
      </section>
    </Helmet>
  );
}
