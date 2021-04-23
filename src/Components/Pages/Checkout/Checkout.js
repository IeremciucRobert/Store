import React from "react";
import "../../../css/checkout.css";
import "../../../css/universal.css";
import CheckoutInvoice from "./CheckoutInvoice";
import { v4 as uuidv4 } from "uuid";
import CheckoutPayment from "./CheckoutPayment";
import CheckoutDelivery from "./CheckoutDelivery";

const userCredentials = [
  { Name: "John" },
  { Phone: "0748675833" },
  { Email: "me@yahoo.com" },
  { Address: "street TheStreet, Nr.8, Iasi" },
];

export default function Checkout() {
  return (
    <div className="pageSection" style={{ backgroundColor: "#9a9a9a" }}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h5 className="titleWithOrangeLine">Invoice Details</h5>
          </div>
          <div className="col-12">
            <div className="boxContainerShadow mb-0">
              {userCredentials.map((credential) => {
                let objectKey = Object.keys(credential);
                return (
                  <CheckoutInvoice
                    objectKey={objectKey}
                    credential={credential}
                    key={uuidv4()}
                  />
                );
              })}
              <p className="boxInnerLine border-bottom-0">
                <input type="checkbox" id="checkoutAccountCreate" />
                <label
                  htmlFor="checkoutAccountCreate"
                  className="boxWordBold boxTextOrange mb-0 ml-2"
                >
                  Create on Account
                </label>
              </p>
            </div>
          </div>
        </div>

        <CheckoutPayment />

        <CheckoutDelivery />

        <div className="row m-0">
          <div className="col-12">
            <div className="row boxContainerShadow checkoutFinishWrapper my-5">
              <div className="col-6 checkoutPriceWrap p-0">
                <h5 className="checkoutYourOrderTextMobile">Your order: </h5>
                <p className="mb-1">
                  Products cost: <span className="checkoutPrices">140$</span>
                </p>
                <p>
                  Delivery cost: <span className="checkoutPrices">20$</span>
                </p>
              </div>
              <div className="col-6 checkoutPriceWrap checkoutPriceWrapRight p-0">
                <h5 className="checkoutTotalCostTextMobile">
                  Total Cost: <span className="checkoutPrices">160$</span>
                </h5>
                <button className="checkoutContinueWrap">
                  <span className="checkoutContinueText">Finish Order</span>

                  <span className="cartContinueButtonArrowWrap">
                    &nbsp;<span className="cartContinueButtonArrow"></span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
