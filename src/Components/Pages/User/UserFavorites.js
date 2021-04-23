import React from "react";
import "../../../css/favorites.css";
import original1 from "../../../Images/items/original1.jpg";
import original2 from "../../../Images/items/original2.jpg";
import original3 from "../../../Images/items/original3.jpg";
import original4 from "../../../Images/items/original4.png";
import original5 from "../../../Images/items/original5.jpg";
import original6 from "../../../Images/items/original6.png";
import cart from "../../../Images/cart.png";
import { v4 as uuidv4 } from "uuid";

const favorites = [
  {
    img: original1,
    name: "Product, 700 Silver",
    availability: "In Stock",
    price: 26,
  },
  {
    img: original2,
    name: "Product, 700 Silver",
    availability: "New",
    price: 55,
  },
  {
    img: original3,
    name: "Product, 700 Silver",
    availability: "Promotions",
    price: 1,
  },
  {
    img: original4,
    name: "Product, 700 Silver",
    availability: "In Stock",
    price: 41,
  },
  {
    img: original5,
    name: "Product, 700 Silver",
    availability: "New",
    price: 441,
  },
  {
    img: original6,
    name: "Product, 700 Silver",
    availability: "Promotions",
    price: 5,
  },
];

export default function UserDetails() {
  return (
    <>
      {favorites.map((favorite) => {
        return (
          <div className="col-12" key={uuidv4()}>
            <div className="row favProductCard">
              <div className="col-3 favProductImageBG">
                <div className="favProductImageWrap">
                  <img
                    className="favProductImage"
                    src={favorite.img}
                    alt="Favorite product"
                  />
                </div>
              </div>

              <div className="col-5 col-md-4 favPNameTextWrapper">
                <h5 className="m-0">{favorite.name}</h5>
                <div className="lineSpread my-3"></div>
                <p className="m-0">Availability: {favorite.availability}</p>
              </div>
              <div className="d-none d-md-block col-md-1 col-lg-2"></div>

              <div className="col-4 col-md-4 col-lg-3 favProdPriceWrapper">
                <p className="favProductPrice">
                  Price:&nbsp;
                  <span className="favProductActualPrice">
                    {favorite.price}$
                  </span>
                </p>
                <button className="favProductAddCart favProductsButton">
                  <span className="favProductAddCartText">Add to cart</span>
                  <span className="favProductCartImgWrap">
                    <img className="favProductCartImg" src={cart} alt="" />
                  </span>
                </button>
                <button className="favProductDelete favProductsButton">
                  Delete item
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
