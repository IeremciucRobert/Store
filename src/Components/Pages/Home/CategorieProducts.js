import React, { useState } from "react";
import "../../../css/home.css";
import favorites1 from "../../../Images/favorites1.png";
import favorites2 from "../../../Images/favorites2.png";
import { v4 as uuidv4 } from "uuid";

export default function CategorieProducts(props) {
  return (
    <div className="row homeCardWrap">
      {props.products.map((product) => {
        return <Product product={product} key={uuidv4()} />;
      })}

      <a
        href="/#"
        className={
          props.offers
            ? "viewProductsCategorie viewOurOffers"
            : "viewProductsCategorie"
        }
      >
        {props.offers ? "Our Offers" : "View Products"}
      </a>
    </div>
  );
}

function Product(props) {
  const [favorite, setFavorite] = useState(true);

  function changeFavorite() {
    setFavorite((prevFavorite) => !prevFavorite);
  }

  return (
    <div className="homeCard p-3">
      <div
        className="homeCardImage"
        style={{
          backgroundImage: `url(${props.product.img})`,
        }}
      >
        <img
          onMouseEnter={changeFavorite}
          onMouseLeave={changeFavorite}
          className="homeCardFavorites"
          src={favorite ? favorites1 : favorites2}
          alt="Favorites"
        />
      </div>
      <p className="homeCardName">{props.product.name}</p>
      <span className="homeCardPrice">
        Price:&nbsp;
        <span className="homeCardPriceDollar">{props.product.price}$</span>
      </span>
      <a href="/#" className="homeCardButtonWrap">
        <div className="homeCardButton">Details</div>
        <span className="homeCardButtonArrowWrap">
          &nbsp;<span className="homeCardButtonArrow"></span>
        </span>
      </a>
    </div>
  );
}
