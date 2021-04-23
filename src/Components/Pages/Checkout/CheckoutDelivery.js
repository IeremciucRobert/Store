import React, { useState, useEffect, useRef } from "react";
import "../../../css/universal.css";
import { v4 as uuidv4 } from "uuid";
import $ from "jquery";

const userInitialAddresess = [
  "Street TheStreet, Nr.8, Iasi",
  "Street AnotherStreet, Nr.33, Iasi",
  "Street WhatStreet, Nr.15, Iasi",
];

export default function CheckoutPayment() {
  const [addresess, setAddresess] = useState(userInitialAddresess);

  const addAddressHandler = () => {
    if (addresess.length > 5) {
      return;
    }

    setAddresess(() => [...addresess, ""]);
  };

  const updateAddresses = (addressIndex, addressValue) => {
    setAddresess((prev) => {
      let previous = prev;
      previous[addressIndex] = addressValue;
      return previous;
    });
  };

  const removeAddress = (addressIndex) => {
    setAddresess((prev) => {
      let previous = prev;
      previous.splice(addressIndex, 1);
      console.log(previous);
      return [...previous];
    });
  };

  return (
    <div className="row">
      <div className="col-12">
        <h5 className="titleWithOrangeLine">Delivery Details</h5>
      </div>
      <div className="col-12">
        <div className="row">
          <div className="col-12">
            <div className="boxContainerShadow mb-0 py-4">
              {addresess.map((address, index) => {
                return (
                  <DeliveryAddress
                    address={address}
                    id={index}
                    key={uuidv4()}
                    updateAddresses={updateAddresses}
                    removeAddress={removeAddress}
                  />
                );
              })}
              <div
                className="checkoutDeliveryAddAddress boxInnerLine d-flex border-bottom-0"
                onClick={addAddressHandler}
              >
                &#43; Add address
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DeliveryAddress({ address, id, updateAddresses, removeAddress }) {
  const [edit, setEdit] = useState(false);

  const editHandler = () => {
    setEdit((prev) => !prev);
  };

  useEffect(() => {
    if ($(`#editInput${id}`).length === 0) {
      return;
    }
    let placeholderSize = $(`#editInput${id}`).attr("placeholder").length;
    $(`#editInput${id}`).attr("size", placeholderSize);
  });

  const inputRef = useRef(null);

  useEffect(() => {
    function outsideInputHandler(ev) {
      if (inputRef.current && !inputRef.current.contains(ev.target)) {
        setEdit(false);
      }
    }

    document.addEventListener("mousedown", outsideInputHandler);
    return () => {
      document.removeEventListener("mousedown", outsideInputHandler);
    };
  });

  const [inputValue, setInputValue] = useState(address);
  const changeInputHandler = (ev) => {
    setInputValue(ev.target.value);
    updateAddresses(id, ev.target.value);
  };

  return (
    <div className="boxInnerLine checkoutDeliveryMobile d-flex">
      <span className="checkoutDeliveryMobileInWrap">
        <input
          type="radio"
          id={`checkoutDelivery${id}`}
          name="chekcoutDelivery"
        />
        <label
          htmlFor={`checkoutDelivery${id}`}
          className="menuTabMiniMenuDetailTitle mb-0 ml-2"
        >
          Delivery address:{" "}
        </label>
        {edit ? (
          <input
            className="removeInputDefaults"
            id={`editInput${id}`}
            placeholder={inputValue}
            ref={inputRef}
            onChange={(ev) => changeInputHandler(ev)}
          />
        ) : (
          <span>{inputValue}</span>
        )}
      </span>
      <div className="boxRightAlignedElement">
        <a
          className="boxRightAlignedElement"
          role="button"
          onClick={() => removeAddress(id)}
          href="/#"
        >
          Remove
        </a>
        <a
          className="boxRightAlignedElement ml-3"
          role="button"
          onClick={editHandler}
          href="/#"
        >
          Edit item
        </a>
      </div>
    </div>
  );
}
