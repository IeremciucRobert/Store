import React from "react";
import { v4 as uuidv4 } from "uuid";

export default function Products(props) {
  return <>{getOptions(props.productsCategories)}</>;
}

function getOptions(productsArray) {
  return (
    <div className="productsOptionsWrap">
      {productsArray.map((option) => {
        if (!option.more) {
          return (
            <div className="headerProductsHoverPadding" key={uuidv4()}>
              <span className="headerInnerProductsOptions d-block">
                {option.name}
              </span>
            </div>
          );
        } else {
          return (
            <div className="headerProductsHoverPadding" key={uuidv4()}>
              <span className="headerInnerProductsOptions d-block">
                {option.name}
                {getOptions(option.more)}
              </span>
            </div>
          );
        }
      })}
    </div>
  );
}
