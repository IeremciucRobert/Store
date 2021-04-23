import React, { useState } from "react";
import $ from "jquery";
import { v4 as uuidv4 } from "uuid";

export default function SingleProductTabMenu() {
  const [details, setDetails] = useState(0);
  const changeDetailsHandler = (number, ev) => {
    setDetails(number);

    let buttons = $(".singleProdBottomButtonsWrap").find("button");

    for (let button of buttons) {
      $(button).removeClass("singleProdBotButtonBGColor");
    }
    $(ev.target).addClass("singleProdBotButtonBGColor");
  };

  return (
    <div className="row singleProdBottomDetailWrap">
      <div className="col-12">
        <div className="singleProdBottomButtonsWrap">
          <button
            className="singleProdBotButtonBGColor"
            onClick={(ev) => {
              changeDetailsHandler(0, ev);
            }}
          >
            Description
          </button>
          <button
            onClick={(ev) => {
              changeDetailsHandler(1, ev);
            }}
          >
            Specification
          </button>
        </div>
        <div className="singleProdBottomDetailWrap">
          {details === 0 ? <SingleProductBotDesc /> : <SingleProductBotSpecs />}
        </div>
      </div>
    </div>
  );
}

function SingleProductBotDesc() {
  return (
    <div className="singleProdBottomDetailDescWrap">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.
    </div>
  );
}

const productSpecifications = {
  "Product type": "Narghilea",
  "Hoses number": "One",
  Accessories: "One Charcoal",
  Material: "Glass, Metal",
  Height: "27cm",
  "Hoses length": "100cm",
};

const productSpecificationsText = Object.keys(productSpecifications);

function SingleProductBotSpecs() {
  return (
    <div className="singleProdBottomDetailInnerWrap">
      {Object.keys(productSpecifications).map((product, index) => {
        return (
          <div className="singleProdBotDetail" key={uuidv4()}>
            <span className="singleProdBotDetailTitle">
              {productSpecificationsText[index]}:
            </span>
            {productSpecifications[product]}
          </div>
        );
      })}
    </div>
  );
}
