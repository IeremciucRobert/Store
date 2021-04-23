import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import favorite1 from "../../../Images/favorites1.png";
import favorite2 from "../../../Images/favorites2.png";
import cart from "../../../Images/cartWhite.png";
import product1 from "../../../Images/narghilea/product1.jpg";
import product2 from "../../../Images/narghilea/product2.jpg";
import product3 from "../../../Images/narghilea/product3.jpg";
import product4 from "../../../Images/narghilea/product4.jpg";
import product5 from "../../../Images/narghilea/product5.jpg";
import product6 from "../../../Images/narghilea/product6.jpg";
import product7 from "../../../Images/narghilea/product7.jpg";
import product8 from "../../../Images/narghilea/product8.jpg";
import product9 from "../../../Images/narghilea/product9.jpg";
import product10 from "../../../Images/narghilea/product10.jpg";
import product11 from "../../../Images/narghilea/product11.jpg";

let currentProducts = [
  { img: product11, name: "Product 30 x 30 x 4cm", price: 51, favorite: false },
  { img: product1, name: "Product 30 x 30 x 4cm", price: 13, favorite: true },
  { img: product2, name: "Product 30 x 30 x 4cm", price: 22, favorite: true },
  { img: product3, name: "Product 30 x 30 x 4cm", price: 34, favorite: false },
  { img: product7, name: "Product 30 x 30 x 4cm", price: 52, favorite: true },
  { img: product4, name: "Product 30 x 30 x 4cm", price: 44, favorite: true },
  { img: product8, name: "Product 30 x 30 x 4cm", price: 5, favorite: false },
  { img: product5, name: "Product 30 x 30 x 4cm", price: 73, favorite: false },
  { img: product6, name: "Product 30 x 30 x 4cm", price: 72, favorite: true },
  { img: product7, name: "Product 30 x 30 x 4cm", price: 52, favorite: true },
  { img: product8, name: "Product 30 x 30 x 4cm", price: 5, favorite: false },
  { img: product9, name: "Product 30 x 30 x 4cm", price: 63, favorite: true },
  { img: product10, name: "Product 30 x 30 x 4cm", price: 43, favorite: false },
  { img: product11, name: "Product 30 x 30 x 4cm", price: 51, favorite: false },
];

export default function SingleProductHistory() {
  useEffect(() => {
    let nextButton = document.querySelector(".historyNext");
    let previousButton = document.querySelector(".historyPrevious");
    let slider = document.querySelector(".historySlider");
    let getSlideWidth = document.querySelector(".historySlide").clientWidth;
    let slidesNumber = currentProducts.length;
    let slideWidth = 0;
    let slidesCount = slidesNumber;

    function waitPreviousEnd() {
      previousButton
        .querySelector(".historyArrowPrevious ")
        .classList.add("sliderDisabledArrow");
    }
    function waitNextEnd() {
      nextButton
        .querySelector(".historyArrowNext ")
        .classList.add("sliderDisabledArrow");
    }

    // NEXT BUTTON
    nextButton.addEventListener("click", function () {
      previousButton
        .querySelector(".historyArrowPrevious ")
        .classList.remove("sliderDisabledArrow");
      slider.removeEventListener("transitionend", waitPreviousEnd);

      if (slidesCount <= 6) {
        slider.addEventListener("transitionend", waitNextEnd);
      }

      if (slidesCount <= 5) {
        return;
      }

      slidesCount--;
      slideWidth += getSlideWidth;
      slider.style.transform = `translateX(-${slideWidth}px)`;
    });

    // PREVIOUS BUTTON
    previousButton.addEventListener("click", function () {
      nextButton
        .querySelector(".historyArrowNext ")
        .classList.remove("sliderDisabledArrow");
      slider.removeEventListener("transitionend", waitNextEnd);

      if (slidesCount >= slidesNumber - 1) {
        slider.addEventListener("transitionend", waitPreviousEnd);
      }

      if (slidesCount === slidesNumber) {
        return;
      }

      slidesCount++;
      slideWidth -= getSlideWidth;
      slider.style.transform = `translateX(-${slideWidth}px)`;
    });
  }, []);

  return (
    <>
      <h5 className="singleProductSimilarTitle">History Products</h5>
      <div className="singleProdSimilarContainer m-auto">
        <div className="singleProdContainerHidden">
          <div className="singleProdSimilarFullWidth historySlider">
            {currentProducts.map((product, index) => {
              return <Product product={product} index={index} key={uuidv4()} />;
            })}
          </div>
        </div>
        <a
          className="similarSlider similarSliderPrevious historyPrevious"
          type="button"
          href="/#"
        >
          <span className="position-relative d-inline-block w-100 h-100">
            <span className="singleProductSliderArrow similarSliderArrowPrevious sliderDisabledArrow historyArrowPrevious"></span>
          </span>
        </a>
        <a
          className="similarSlider similarSliderNext  historyNext"
          type="button"
          href="/#"
        >
          <span className="position-relative d-inline-block w-100 h-100">
            <span className="singleProductSliderArrow similarSliderArrowNext historyArrowNext"></span>
          </span>
        </a>
      </div>
    </>
  );
}

function Product({ product, index }) {
  const [favorite, setFavorite] = useState(product.favorite);
  const favoriteHandler = () => {
    setFavorite((prev) => !prev);
  };

  return (
    <div className="singleProductCol historySlide">
      <div className="card card-body">
        <div
          className="card-img-top singleProductImageWrap"
          style={{
            backgroundImage: `url(${product.img})`,
          }}
        >
          <div
            className="singleProductCardFavWrap"
            onMouseEnter={() => favoriteHandler()}
            onMouseLeave={() => favoriteHandler()}
          >
            <img
              className="singleProductCardFavorites"
              src={favorite ? favorite1 : favorite2}
              alt="Favorites"
            />
          </div>
        </div>
        <div className="card-body">
          <h5 className="card-title">Product</h5>

          <p className="card-text">
            <span className="singleProductCardPrice">
              Price:&nbsp;
              <span className="singleProductCardPriceDollar">22$</span>
            </span>
          </p>
          <button className="singleProductCardButtonWrap">
            <div className="singleProductCardButton">Add to cart</div>
            <span className="singleProductCardButtonIconWrap">
              <img
                className="singleProductCardButtonIcon"
                src={cart}
                alt="cart"
              />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
