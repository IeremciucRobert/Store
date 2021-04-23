import React from "react";
import "../../../css/cart.css";
import original1 from "../../../Images/items/original1.jpg";
import original2 from "../../../Images/items/original2.jpg";
import original3 from "../../../Images/items/original3.jpg";
import original4 from "../../../Images/items/original4.png";
import original5 from "../../../Images/items/original5.jpg";
import original6 from "../../../Images/items/original6.png";
import CartProducts from "./CartProducts";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const favorites = [
  {
    img: original1,
    name: "Product, 700 Silver",
    availability: "In Stock",
    price: 26,
    deliveryCost: 10,
  },
  {
    img: original2,
    name: "Product, 700 Silver",
    availability: "New",
    price: 55,
    deliveryCost: 32,
  },
  {
    img: original3,
    name: "Product, 700 Silver",
    availability: "Promotions",
    price: 1,
    deliveryCost: 12,
  },
  {
    img: original4,
    name: "Product, 700 Silver",
    availability: "In Stock",
    price: 41,
    deliveryCost: 15,
  },
  {
    img: original5,
    name: "Product, 700 Silver",
    availability: "New",
    price: 441,
    deliveryCost: 18,
  },
  {
    img: original6,
    name: "Product, 700 Silver",
    availability: "Promotions",
    price: 5,
    deliveryCost: 19,
  },
];

export default function Cart() {
  return (
    <div className="pageSection">
      <div className="container universalMarginBottom45px">
        <div className="row favTopTitleWrapper">
          <div className="col-12 favTopMinorWrap d-flex">
            <h5 className="favTopTitle">Your Cart</h5>
            <div className="favDeleteProducts">
              <span>products</span>
              <button className="favDeleteAll favProductsButton">
                Delete All
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          {favorites.map((favorite) => {
            return <CartProducts favorite={favorite} key={uuidv4()} />;
          })}
        </div>
        <div className="row">
          <div className="col-12">
            <div className="row cartToCheckout">
              <div className="col-6 cartToCheckoutPriceWrap">
                <h5 className="cartYourOrderTextMobile">Your order: </h5>
                <p className="mb-1">
                  Products cost:{" "}
                  <span className="cartToCheckoutPrices">140$</span>
                </p>
                <p>
                  Delivery cost:{" "}
                  <span className="cartToCheckoutPrices">20$</span>
                </p>
              </div>
              <div className="col-6 cartToCheckoutPriceWrap cartToCheckoutPriceWrapRight">
                <h5 className="cartTotalCostTextMobile">
                  Total Cost: <span className="cartToCheckoutPrices">160$</span>
                </h5>
                <Link
                  to="/Checkout"
                  className="cartToCheckoutContinueOuterWrap"
                >
                  <button className="cartToCheckoutContinueWrap">
                    <span className="cartToCheckoutContinueText">Continue</span>

                    <span className="cartContinueButtonArrowWrap">
                      &nbsp;<span className="cartContinueButtonArrow"></span>
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
