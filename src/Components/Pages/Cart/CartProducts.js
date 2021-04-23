import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function CartProducts({ favorite }) {
  const [quantity, setQuantity] = useState(0);

  function decreaseQuantity() {
    if (quantity !== 0) {
      setQuantity(prev => prev - 1);
    }
  }

  return (
    <>
      <div className="col-12" key={uuidv4()}>
        <div className="row cartProductCard">
          <div className="col-3 cartProductImageBG">
            <div className="cartProductImageWrap">
              <img
                className="cartProductImage"
                src={favorite.img}
                alt="Favorite product"
              />
            </div>
          </div>

          <div className="col-4 col-md-4 col-lg-3 cartPNameTextWrapper">
            <h5 className="m-0">{favorite.name}</h5>
            <div className="lineSpread my-3"></div>
            <p className="cartProductPrice">
              Price:&nbsp;
              <span className="cartProductActualPrice">{favorite.price}$</span>
            </p>
            <p className="m-0">Availability: {favorite.availability}</p>
          </div>
          <div className="cartQuantityWrap col-lg-3">
            <span className="cartQuantityText">Quantity:</span>
            <div className="cartQuantityButtonsWrap">
              <button onClick={decreaseQuantity}>-</button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(prev => prev + 1)}>+</button>
            </div>
          </div>
          <div className="col-12 col-md-4 col-lg-3 cartProdPriceWrapper">
            <p className="pb-1">
              Products cost:
              <span className="cartProductActualPrice"> 12$</span>
            </p>
            <p>
              Delivery cost:
              <span className="cartProductActualPrice"> 12$</span>
            </p>
            <span className="cartCostLineSpread"></span>
            <p className="font-weight-bold pb-1">
              Total cost:
              <span className="cartProductActualPrice"> 24$</span>
            </p>
            <button className="cartProductDelete cartProductsButton">
              Delete item
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
