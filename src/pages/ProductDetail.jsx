import React from "react";
import CharList from "../components/CharList";
import CharSizesList from "../components/CharSizesList";

export default function ProductDetail() {
  const data = JSON.parse(localStorage.getItem("product"));
  const imgSRC = "./pictures/" + data.item.picture;
  return (
    <section className="current-prod-container">
      <div className="prod-flex-item">
        <div className="img-child">
          {data.item.steril && <div className="steril">ՍՏԵՐԻԼ</div>}
          <img src={imgSRC} alt="product" />
        </div>
      </div>
      <div className="prod-flex-item">
        <h2 className="title">{data.item.name}</h2>
        <div className="characters-part">
          {data.item.characteristics ? (
            <CharList props={data.item.characteristics} />
          ) : (
            <CharSizesList props={data.item.sizes} />
          )}
        </div>
        <p>{data.item.description}</p>
      </div>
    </section>
  );
}
