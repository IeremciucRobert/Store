import React, { useState, useEffect } from "react";
import "../../../css/singleProduct.css";
import mainImage1 from "../../../Images/narghilea/product4.jpg";
import favorite1 from "../../../Images/favoriteWhite1.png";
import favorite2 from "../../../Images/favoriteWhite2.png";
import cart from "../../../Images/cartWhite.png";
import SingleProductVerticalCarousel from "./SingleProductVerticalCarousel";
import SingleProductSimilar from "./SingleProductSimilar";
import SingleProductHistory from "./SingleProductHistory";
import SingleProductTabMenu from "./SingleProductTabMenu";
import { v4 as uuidv4 } from "uuid";

const product = {
  name: "Narghilea, 37cm, sky blue",
  price: "100",
  delivery: "29 june - 1 july",
  fee: "10",
};

const colors = ["red", "green", "blue", "yellow"];

export default function SingleProduct() {
  const [imageAndBorder, setImageAndBorder] = useState([mainImage1, null]);
  const changeMainImageHandler = (image, ev) => {
    setImageAndBorder([image, ev.target.parentNode]);
  };

  useEffect(() => {
    if (!imageAndBorder[1]) {
      return;
    }
    let slides = document.querySelectorAll(".verticalSliderSlideInWrap");

    for (let slide of slides) {
      slide.classList.remove("verticalSliderSelectedBorder");
      imageAndBorder[1].classList.remove("verticalSliderSelectedBorder");
    }

    imageAndBorder[1].classList.add("verticalSliderSelectedBorder");
  });

  useEffect(() => {
    document
      .querySelector(".verticalSliderSlideInWrap")
      .classList.add("verticalSliderSelectedBorder");
  }, []);

  const [colorPick, setColorPick] = useState(0);
  const changeColorHandler = (number) => {
    setColorPick(number);
  };

  const [favorite, setFavorite] = useState(true);
  const changeFavoriteHandler = () => {
    setFavorite((prev) => !prev);
  };

  return (
    <section
      className="pageSection container-fluid px-0"
      style={{ backgroundColor: "#9a9a9a" }}
    >
      <div className="container singleProdTopContainer">
        <h5 className="singleProdTitle">{product.name}</h5>
        <div className="row singleProdDetailsContainer">
          <SingleProductVerticalCarousel
            changeMainImage={changeMainImageHandler}
          />

          <div className="col-6 h-100">
            <img
              className="singleProductImage"
              src={imageAndBorder[0]}
              alt="Selected"
            />
          </div>
          <div className="col-4 singleProductRightDetails">
            <p className="singleProdRightPrice">${product.price}</p>
            <p className="singleProdDeliverPrice">
              <span>
                Delivery:{" "}
                <span className="singleProdRightOrangeColor">
                  ${product.delivery}
                </span>
              </span>
              <span className="ml-3">
                Fee:{" "}
                <span className="singleProdRightOrangeColor">
                  ${product.fee}
                </span>
              </span>
            </p>
            <p>Choose color: </p>

            <div className="singleProdRightColorWrap">
              {colors.map((color, index) => {
                return (
                  <span
                    className="singleProdRightColor"
                    style={
                      colorPick === index
                        ? {
                            backgroundColor: color,
                            border: "2px solid #ff7f00",
                          }
                        : { backgroundColor: color }
                    }
                    onClick={() => changeColorHandler(index)}
                    key={uuidv4()}
                  ></span>
                );
              })}
            </div>
            <div className="singleProdButtonsWrap">
              <button className="singleProdCartButton">
                <span className="singleProdCartText">Add to cart</span>
                <span className="singleProdCartIconWrap">
                  <img src={cart} alt="Cart" />
                </span>
              </button>
              <button
                className="singleProdFavoriteButton"
                onClick={changeFavoriteHandler}
              >
                <img src={favorite ? favorite2 : favorite1} alt="Favorites" />
              </button>
            </div>
          </div>
        </div>

        <SingleProductTabMenu />
      </div>

      <div className="container-fluid singleProductSimilarBGGray px-0">
        <div className="container singleProductSimilarPBottom55px">
          <SingleProductSimilar />
        </div>
      </div>

      <div className="container singleProductSimilarPBottom55px">
        <SingleProductHistory />
      </div>
    </section>
  );
}
