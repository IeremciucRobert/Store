import React, { useState, useEffect } from "react";
import "../../../css/universal.css";
import "../../../css/products.css";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import ProductsSort from "./ProductsSort/ProductsSort";
import ProductsProduct from "./ProductsProduct";
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
import $ from "jquery";

let currentProducts = [
  { img: product1, name: "Product 30 x 30 x 4cm", price: 13 },
  { img: product2, name: "Product 30 x 30 x 4cm", price: 22 },
  { img: product3, name: "Product 30 x 30 x 4cm", price: 34 },
  { img: product4, name: "Product 30 x 30 x 4cm", price: 44 },
  { img: product5, name: "Product 30 x 30 x 4cm", price: 73 },
  { img: product6, name: "Product 30 x 30 x 4cm", price: 72 },
  { img: product7, name: "Product 30 x 30 x 4cm", price: 52 },
  { img: product8, name: "Product 30 x 30 x 4cm", price: 5 },
  { img: product9, name: "Product 30 x 30 x 4cm", price: 63 },
  { img: product10, name: "Product 30 x 30 x 4cm", price: 43 },
  { img: product11, name: "Product 30 x 30 x 4cm", price: 51 },
];

let products = [
  ...currentProducts,
  ...currentProducts,
  ...currentProducts,
  ...currentProducts,
  ...currentProducts,
  ...currentProducts,
  ...currentProducts,
  ...currentProducts,
  ...currentProducts,
];

export default function Products() {
  const [priceSelectStatus, setPriceSelectStatus] = useState(false);
  const [price, setPrice] = useState({ min: 100, max: 1000 });
  const [minPrice, setMinPrice] = useState(100);
  const [maxPrice, setMaxPrice] = useState(1000);

  useEffect(() => {
    if (!priceSelectStatus) {
      $(".input-range__slider").addClass("inputDisabled inputDisabledBorder");
      $(".input-range__track--active").addClass("inputDisabled");
      $(".input-range__label-container").addClass("inputDisabledColor");
    } else {
      $(".input-range__slider").removeClass(
        "inputDisabled inputDisabledBorder"
      );
      $(".input-range__track--active").removeClass("inputDisabled");
      $(".input-range__label-container").removeClass("inputDisabledColor");
    }
  });

  function onChangePriceSlider(value) {
    if (value.min < 100 || value.max > 1000) {
      return;
    }

    setPrice(value);
    setMinPrice(value.min);
    setMaxPrice(value.max);
  }

  function minChangeFromInput(props) {
    let value = props.currentTarget.value;
    setMinPrice(value);
    if (value >= 100 && value < price.max) {
      setPrice((prev) => ({ min: value, max: prev.max }));
    }
  }

  function maxChangeFromInput(props) {
    let value = props.currentTarget.value;
    setMaxPrice(value);
    if (value > price.min && value <= 1000) {
      setPrice((prev) => ({ min: prev.min, max: value }));
    }
  }

  // ------- For Pagination -------
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(16);

  const indexLastProduct = currentPage * productsPerPage;
  const indexFirstProduct = indexLastProduct - productsPerPage;
  const currentProducts = products.slice(indexFirstProduct, indexLastProduct);

  useEffect(() => {
    updatePage();
  });

  function getPage(pageNumber) {
    setCurrentPage(pageNumber);
  }

  function arrowPaginate(step, totalPages) {
    switch (step) {
      case "increment":
        increment(totalPages);
        break;
      default:
        decrement(totalPages);
        break;
    }

    function increment(totalPages) {
      if (currentPage > 0 && currentPage < totalPages.length) {
        setCurrentPage((prev) => prev + 1);
      }
    }
    function decrement(totalPages) {
      if (currentPage > 1 && currentPage <= totalPages.length) {
        setCurrentPage((prev) => prev - 1);
      }
    }
  }

  function chooseProductsPerPage(amount) {
    setProductsPerPage(amount);
  }

  function updatePage() {
    let pageNumbers = [];
    let totalProducts = products.length;
    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
      pageNumbers.push(i);
    }
    let pageNumbersAmount = pageNumbers.length;
    if (currentPage > pageNumbersAmount) {
      setCurrentPage(pageNumbersAmount);
    }
  }

  // ------- For Mobile, Filter -------
  const [filterStatus, setFilterStatus] = useState(false);

  useEffect(() => {
    function updateSize() {
      let width = window.innerWidth;
      if (width < 768) {
        setFilterStatus(false);
      } else {
        setFilterStatus(true);
      }
    }

    window.addEventListener("resize", updateSize);
    updateSize();
  }, []);

  const toggleFilter = () => {
    setFilterStatus((prev) => !prev);
  };

  return (
    <section className="pageSection container">
      <ProductsSort
        chooseProductsPerPage={chooseProductsPerPage}
        toggleFilter={toggleFilter}
      />

      <div className="row products">
        <div
          className={
            filterStatus
              ? "col-12 col-md-3 pr-md-0 filterMobile"
              : "col-12 col-md-3 filterMobile d-none"
          }
        >
          <div className="productsleftOptionsSet">
            <h5 className="leftSubOptionsTitle">Narghilea</h5>
            <div className="leftSubOptions">
              <a className="leftSetMiniOption" href="/#">
                Narghilea
              </a>
              <a className="leftSetMiniOption" href="/#">
                Accessories
              </a>
              <a className="leftSetMiniOption" href="/#">
                Tobacco Flavors
              </a>
            </div>
          </div>
          <div className="productsleftOptionsSet">
            <h5 className="leftSubOptionsTitle">Availability</h5>
            <div className="form-check leftSubOptions">
              <div className="inputWrapper">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="inStock"
                />
                <label className="form-check-label" htmlFor="inStock">
                  In Stock
                </label>
              </div>
              <div className="inputWrapper">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="promotions"
                />
                <label className="form-check-label" htmlFor="promotions">
                  Promotions
                </label>
              </div>
              <div className="inputWrapper">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="new"
                />
                <label className="form-check-label" htmlFor="new">
                  New
                </label>
              </div>
            </div>
          </div>
          <div className="productsleftOptionsSet">
            <h5 className="leftSubOptionsTitle">Price</h5>
            <div className="leftSubOptions">
              <div className="form-check">
                <div className="inputWrapper">
                  <input
                    name="priceRadio"
                    className="form-check-input"
                    type="radio"
                    value=""
                    id="under100"
                    onChange={() => setPriceSelectStatus(false)}
                  />
                  <label className="form-check-label" htmlFor="under100">
                    under 100
                  </label>
                </div>
              </div>
              <div className="form-check">
                <div className="inputWrapper">
                  <input
                    name="priceRadio"
                    className="form-check-input"
                    type="radio"
                    value=""
                    id="100200"
                    onChange={() => setPriceSelectStatus(false)}
                  />
                  <label className="form-check-label" htmlFor="100200">
                    100-200
                  </label>
                </div>
              </div>
              <div className="form-check">
                <div className="inputWrapper">
                  <input
                    name="priceRadio"
                    className="form-check-input"
                    type="radio"
                    value=""
                    id="selectPrice"
                    onChange={() => setPriceSelectStatus((prev) => !prev)}
                  />
                  <label className="form-check-label" htmlFor="selectPrice">
                    Select Price
                  </label>
                </div>
              </div>
              <div className="rangeSliderWrap">
                <InputRange
                  disabled={!priceSelectStatus}
                  maxValue={1000}
                  minValue={100}
                  value={price}
                  onChange={(value) => onChangePriceSlider(value)}
                />
                <div className="rangeSliderInputWrap">
                  <input
                    disabled={!priceSelectStatus}
                    type="number"
                    className="rangeSliderInput"
                    value={minPrice}
                    onChange={minChangeFromInput}
                  />
                  <span className="dashRangeSlider">-</span>
                  <input
                    disabled={!priceSelectStatus}
                    type="number"
                    className="rangeSliderInput"
                    value={maxPrice}
                    onChange={maxChangeFromInput}
                  />
                </div>
              </div>
            </div>
          </div>
          <button
            className="btn btn-primary closeFilterMobile d-block d-md-none w-100"
            onClick={toggleFilter}
          >
            Close Filter
            <span className="caret"></span>
          </button>
        </div>
        <div className="col-12 col-md-9 d-flex justify-content-between flex-wrap">
          <ProductsProduct
            currentProducts={currentProducts}
            productsPerPage={productsPerPage}
            products={products}
            getPage={getPage}
            currentPage={currentPage}
            arrowPaginate={arrowPaginate}
          />
        </div>
      </div>
      <div className="row"></div>
    </section>
  );
}
