import React from "react";
import $ from "jquery";
import { v4 as uuidv4 } from "uuid";

$(document).ready(function() {
  let arrows = $(".headerMobileArrowButton");

  for (let arrow of arrows) {
    $(arrow).click(function() {
      let actualArrow = $(this).find(".headerMobileArrow");

      if (actualArrow.hasClass("HMAReversed")) {
        actualArrow.toggleClass("HMAReversed");
        actualArrow.toggleClass("HMAInversed");
      } else {
        actualArrow.toggleClass("HMAInversed");
        actualArrow.toggleClass("HMAReversed");

        initialState(actualArrow);
      }
    });
  }

  // arrow from 1 menu, the products one.
  let productsArrow = $(".headerProdMobArrowButton");

  $(productsArrow).click(function() {
    let getProductsArrow = $(productsArrow).find(".headerProdMobArrow");
    $(getProductsArrow).toggleClass("HPMAInversed");
    $(getProductsArrow).toggleClass("HPMAReversed");

    initialState(productsArrow);
  });

  function initialState(arrow) {
    // make sure all submenus are closed when parent gets closed, otherwise they stay open.
    let getAncestorCard = arrow.closest(".card");
    let allCollapsable = getAncestorCard.find(".collapse");

    for (let collapsable of allCollapsable) {
      $(collapsable).collapse("hide");
    }

    //also reverse arrows back.
    let allArrows = getAncestorCard.find(".headerMobileArrow");

    for (let arrow of allArrows) {
      let actualArrow = $(arrow);
      actualArrow.addClass("HMAReversed");
      actualArrow.removeClass("HMAInversed");
    }
  }
});

export default function ProductsMobile(props) {
  return <>{getOptions(props.productsCategories, 0)}</>;
}

function getOptions(productsArray, startID) {
  return (
    <div className="pl-2" id="categoriesWrap">
      {productsArray.map(product => {
        if (!product.more) {
          return (
            <div
              className={
                startID > 0
                  ? "card mt-1 ml-1 mb-1 border-right-0"
                  : "card my-1 border-right-0"
              }
              id={`categoriesWrap${startID + 100}`}
              key={uuidv4()}
            >
              <div className="card-header">
                <h5 className="">{product.name}</h5>
              </div>
            </div>
          );
        } else {
          return (
            <div id={`categoriesWrap${startID}`} key={uuidv4()}>
              <div
                className={
                  startID > 0
                    ? "card mt-1 ml-1 mb-1 border-right-0"
                    : "card my-1 border-right-0"
                }
                id="categoriesWrap"
              >
                <div className="card-header headerMobArrowParent">
                  <h5 className="">{product.name}</h5>
                  <button
                    className="headerMobileArrowButton"
                    data-toggle="collapse"
                    data-target={`#collapseSubMenu${startID}`}
                  >
                    <span className="position-relative d-inline-block w-100 h-100">
                      <i className="headerMobileArrow HMAInversed fa fa-chevron-up"></i>
                    </span>
                  </button>
                </div>
                <div
                  className="collapse pl-2"
                  id={`collapseSubMenu${startID}`}
                  data-parent={`#categoriesWrap${startID}`}
                >
                  {getOptions(product.more, startID + 1)}
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}
