import "../styles/Components.css";
import CharSizesList from "./CharSizesList";
import CharList from "./CharList";
import { useNavigate } from "react-router-dom";

export default function ProductItem(props) {
  const picSrc = "./pictures/" + props.item.picture;
  const navigate = useNavigate();
  const navigateToProduct = () => {
    localStorage.setItem("product", JSON.stringify(props));
    navigate("/product");
  };
  return (
    <div className="grid-item">
      <img src={picSrc} alt="product-pic" />
      {props.item.steril && (<div className="steril">ՍՏԵՐԻԼ</div>)}
      <h3>{props.item.name}</h3>
      <div className="characters-part">
        {props.item.characteristics ? (
          <CharList props={props.item.characteristics} />
        ) : (
          <CharSizesList props={props.item.sizes} />
        )}
      </div>
      <button className="btn" onClick={navigateToProduct}>
        ՏԵՍՆԵԼ ԱՎԵԼԻՆ
      </button>
    </div>
  );
}
