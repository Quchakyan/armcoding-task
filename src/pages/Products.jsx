import Helmet from "../components/helmet/Helmet";
import { useState, useRef, useEffect } from "react";
import data from "../db-example/exDB.json";
import ProductItem from "../components/ProductItem";

export default function Products() {
  const myData = data["products"]["bandages"];
  const [type, setType] = useState(myData);
  const li1_ref = useRef();
  const li2_ref = useRef();
  const li3_ref = useRef();
  const li4_ref = useRef();
  const changeType = (checkedType) => {
    setType(data["products"][checkedType]);
  };
  useEffect(() => {
    li1_ref.current.style.color = "black";
    li2_ref.current.style.color = "black";
    li3_ref.current.style.color = "black";
    li4_ref.current.style.color = "black";
    if (type === data["products"]["bandages"]) {
      li1_ref.current.style.color = "#12724F";
    } else if (type === data["products"]["tanfizes"]) {
      li2_ref.current.style.color = "#12724F";
    } else if (type === data["products"]["napkins"]) {
      li3_ref.current.style.color = "#12724F";
    } else if (type === data["products"]["tops"]) {
      li4_ref.current.style.color = "#12724F";
    }
  }, [type]);
  return (
    <Helmet title="Products">
      <section className="product-page-container">
        <nav className="check-prod-type">
          <ul>
            <li ref={li1_ref} onClick={() => changeType("bandages")}>
              ԲԻՆՏԵՐ
            </li>
            <li ref={li2_ref} onClick={() => changeType("tanfizes")}>
              ԹԱՆՖԻԶՆԵՐ
            </li>
            <li ref={li3_ref} onClick={() => changeType("napkins")}>
              ԱՆՁԵՌՈՑԻԿՆԵՐ
            </li>
            <li ref={li4_ref} onClick={() => changeType("tops")}>
              ԹՈՓԵՐ
            </li>
          </ul>
        </nav>
        <div className="product-list">
          {type.map((prod, index) => (
            <ProductItem item={prod} key={index} />
          ))}
        </div>
      </section>
    </Helmet>
  );
}
