import "../styles/Home.css";
import data from "../db-example/exDB.json";
import ProductItem from "./ProductItem";
import { useNavigate } from "react-router-dom";

export default function ProdsContainer() {
  const getSixItems = data.products.napkins.slice(0, 6);
  const navigate = useNavigate();
  const navigateToProducts = () => navigate("/products");
  return (
    <section className="prods-cont">
      <h2 className="title">ԱՐՏԱԴՐԱՆՔ</h2>
      <div className="product-list">
        {getSixItems.map((item, index) => (
          <ProductItem item={item} key={index} />
        ))}
      </div>
      <button className="btn" onClick={navigateToProducts}>
        ՏԵՍՆԵԼ ԱՄԲՈՂՋԸ
      </button>
    </section>
  );
}
