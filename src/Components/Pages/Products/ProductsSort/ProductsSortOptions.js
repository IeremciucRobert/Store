import React from "react";

export default function ProductsSortOptions({ windowWidth }) {
  return (
    <>
      <span className="sortText">Order by:</span>
      <div className="container d-flex px-0 selectContainer">
        <div className="btn-group ml-2 selectWrapper">
          <button
            className="btn btn-primary dropdown-toggle"
            data-toggle="dropdown"
          >
            {windowWidth ? "Order by" : "Popularity"}
            <span className="caret"></span>
          </button>
          <ul className="dropdown-menu">
            <li className="orderByItemWrap">
              <button className="orderByItem">Popularity</button>
            </li>
            <li className="orderByItemWrap">
              <button className="orderByItem">Ascending</button>
            </li>
            <li className="orderByItemWrap">
              <button className="orderByItem">Descending</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
