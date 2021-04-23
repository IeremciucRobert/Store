import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function ProductsSortPage({
  chooseProductsPerPage,
  windowWidth,
}) {
  const amountsOptions = [64, 44, 32, 16];

  const [perPage, setPerPage] = useState(
    amountsOptions[amountsOptions.length - 1]
  );

  const changePerPage = (amount) => {
    setPerPage(amount);
  };

  return (
    <>
      <span className="sortText">Products:</span>
      <div className="container d-flex px-0">
        <div className="btn-group ml-2 selectWrapper">
          <button
            className="btn btn-primary dropdown-toggle"
            data-toggle="dropdown"
          >
            {perPage} on page
            <span className="caret"></span>
          </button>
          <ul className="dropdown-menu">
            {amountsOptions.map((amountOption) => {
              return (
                <SortOptions
                  amount={amountOption}
                  chooseProductsPerPage={chooseProductsPerPage}
                  changePerPage={changePerPage}
                  key={uuidv4()}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

function SortOptions({ chooseProductsPerPage, amount, changePerPage }) {
  // When selecting an option, update the main one with that option;
  // Need to wait because for some reason it won't update;
  function changeText() {
    setTimeout(() => {
      changePerPage(amount);
    }, 50);

    chooseProductsPerPage(amount);
  }

  return (
    <li className="orderByItemWrap">
      <button
        className="orderByItem"
        onClick={() => {
          changeText();
        }}
      >
        {amount} on page
      </button>
    </li>
  );
}
