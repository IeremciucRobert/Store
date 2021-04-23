import React, { useState } from "react";
import "../../../css/universal.css";
import $ from "jquery";

export default function CheckoutPayment() {
  const [miniMenuTab, setMiniMenuTab] = useState(2);
  const miniMenuTabHandler = (number, ev) => {
    setMiniMenuTab(number);
    let buttons = $(".menuTabButtonsWrap").find("button");
    for (let button of buttons) {
      $(button).removeClass("menuTabBGOrange");
    }
    $(ev.target).addClass("menuTabBGOrange");
  };

  return (
    <div className="row">
      <div className="col-12">
        <h5 className="titleWithOrangeLine">Payment Details</h5>
      </div>
      <div className="col-12">
        <div className="row">
          <div className="col-12">
            <div className="menuTabButtonsWrap">
              <button onClick={(ev) => miniMenuTabHandler(1, ev)}>
                Cash at delivery
              </button>
              <button
                className="menuTabBGOrange"
                onClick={(ev) => miniMenuTabHandler(2, ev)}
              >
                Online Card
              </button>
            </div>
            {miniMenuTab === 2 ? <OnlineCard /> : ""}
          </div>
        </div>
      </div>
    </div>
  );
}

function OnlineCard() {
  return (
    <div className="boxContainerShadow mb-0">
      <div className="menuTabMiniMenuInnerWrap">
        <div className="menuTabMiniMenuDetail border-0">
          <span className="menuTabMiniMenuDetailTitle">Card Number:</span>
          <input
            className="cardNumberInput removeInputDefaults"
            placeholder="Ex 1234 5678 910230"
          />
        </div>
        <div className="menuTabMiniMenuDetail expiringCVVWrap">
          <div className="expiringDateWrap">
            <div className="d-flex">
              <span className="menuTabMiniMenuDetailTitle">Expiring Date:</span>
              <input
                className="expiringDate removeInputDefaults text-center"
                placeholder="DD/YYYY"
              />
            </div>
            <div className="cvvWrap">
              <span className="menuTabMiniMenuDetailTitle mr-0">
                CVV:&nbsp;&nbsp;
              </span>
              <input
                className="removeInputDefaults text-center"
                placeholder="CVV"
              />
            </div>
          </div>
        </div>
        <p className="boxInnerLine border-bottom-0 checkoutSaveCardDetWrap">
          <input type="checkbox" id="checkoutSaveCardDetails" />
          <label
            htmlFor="checkoutSaveCardDetails"
            className="boxWordBold boxTextOrange mb-0 ml-2"
          >
            Save card details
          </label>
        </p>
      </div>
    </div>
  );
}
