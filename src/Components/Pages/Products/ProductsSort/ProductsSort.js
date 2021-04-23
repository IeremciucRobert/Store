import React, { useState, useEffect } from "react";
import $ from "jquery";
import ProductsSortPage from "./ProductsSortPage";
import ProductsSortOptions from "./ProductsSortOptions";

$(document).ready(function () {
  $(".orderByItem").click(function () {
    var selectedText = $(this).text();
    $(this)
      .parents(".btn-group")
      .find(".dropdown-toggle")
      .html(selectedText + ' <span class="caret"></span>');
  });
});

export default function ProductsSort({ chooseProductsPerPage, toggleFilter }) {
  const [width768, setWidth768] = useState(false);

  useEffect(() => {
    function updateSize() {
      let width = window.innerWidth;
      if (width < 768) {
        setWidth768(true);
      } else {
        setWidth768(false);
      }
    }

    window.addEventListener("resize", updateSize);
    updateSize();
  }, []);

  return (
    <div className="row productsSort">
      <div className="col-12 pb-3 pb-md-0 text-center text-md-left col-md-3">
        Narghilea
      </div>
      <div className="col-12 col-md-9">
        <div className="row productSortRowWrapper">
          <div className="col-0 col-lg-4"></div>
          <div className="col-6 col-lg-4 d-flex productSortWrapper align-items-center">
            <ProductsSortOptions windowWidth={width768} />
          </div>
          <div className="col-6 col-lg-4 d-flex productSortWrapper align-items-center">
            <ProductsSortPage
              windowWidth={width768}
              chooseProductsPerPage={chooseProductsPerPage}
            />
          </div>
        </div>
      </div>
      <div className="col-12 d-md-none d-flex justify-content-center">
        <button
          className="btn btn-primary filterMobile dropdown-toggle w-100"
          onClick={toggleFilter}
        >
          Filter
          <span className="caret"></span>
        </button>
      </div>
    </div>
  );
}
