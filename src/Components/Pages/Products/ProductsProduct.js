import React, { useState } from "react";
import "../../../css/home.css";
import favorites1 from "../../../Images/favorites1.png";
import favorites2 from "../../../Images/favorites2.png";
import cart from "../../../Images/cartWhite.png";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import Pagination from "./Pagination/Pagination";

export default function CategorieProducts(props) {
  return (
    <div className="productsCardWrap card-group w-100">
      <Product products={props.currentProducts} />
      <Pagination
        productsPerPage={props.productsPerPage}
        totalProducts={props.products.length}
        getPage={props.getPage}
        currentPage={props.currentPage}
        arrowPaginate={props.arrowPaginate}
      />
    </div>
  );
}

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favorites: true };
  }

  changeFavorite = () => {
    this.setState((prevState) => ({ favorites: !prevState.favorites }));
  };

  render() {
    const favorites = this.state.favorites;
    let products = this.props.products;
    let productsLength = this.props.products.length;
    let allRows = [];

    for (let i = 0; i < productsLength; i += 4) {
      let row = (
        <div className="row productsCard" key={uuidv4()}>
          {ProductCard(products[i], favorites, this.changeFavorite)}
          {ProductCard(products[i + 1], favorites, this.changeFavorite)}
          {ProductCard(products[i + 2], favorites, this.changeFavorite)}
          {ProductCard(products[i + 3], favorites, this.changeFavorite)}
        </div>
      );
      allRows.push(row);
    }

    return allRows;
  }
}

function ProductCard(props) {
  if (!props) {
    return <EmptyCard />;
  }
  return <FullCard product={props} />;
}

function EmptyCard() {
  return <div className="card col-3 emptyCard"></div>;
}

function FullCard({ product }) {
  const [favorite, setFavorite] = useState(true);

  function changeFavorite() {
    setFavorite((prev) => !prev);
  }

  return (
    <div className="card col-6 col-lg-3">
      <div
        className="card-img-top productsImageWrap"
        style={{
          backgroundImage: `url(${product.img})`,
        }}
      >
        <img
          onMouseEnter={changeFavorite}
          onMouseLeave={changeFavorite}
          className="productsCardFavorites"
          src={favorite ? favorites1 : favorites2}
          alt="Favorites"
        />
      </div>
      <div className="card-body">
        <Link to="/Product">
          <h5 className="card-title">Product</h5>
        </Link>
        <p className="card-text">
          <span className="productsCardPrice">
            Price:&nbsp;
            <span className="productsCardPriceDollar">22$</span>
          </span>
        </p>
        <a className="productsCardButtonWrap" href="/#">
          <div className="productsCardButton">Add to cart</div>
          <span className="productsCardButtonIconWrap">
            <img className="productsCardButtonIcon" src={cart} alt="cart" />
          </span>
        </a>
      </div>
    </div>
  );
}
