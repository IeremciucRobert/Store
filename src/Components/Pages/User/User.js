import React, { useState } from "react";
import "../../../css/user.css";
import userImage from "../../../Images/userImage.png";
import UserFavorites from "./UserFavorites";
import UserOrders from "./UserOrders";
import UserDetails from "./UserDetails";
import $ from "jquery";

const user = {
  name: "John Smith",
  registerDate: "20.05.2020",
  totalOrders: "3",
  favorites: "products",
  email: "youremail@yahoo.com",
  phone: "0748948272",
  address: "street TheStreet, Nr.8, Iasi",
};

export default function User() {
  const [subPage, setSubPage] = useState(1);

  function changeSubPage(page, ev) {
    setSubPage(page);

    let userSubPageButtonWrap = $(".userSubPageButtonWrap").find("button");
    for (let button of userSubPageButtonWrap) {
      $(button).removeClass("buttonBGColor");
    }

    $(ev.target).addClass("buttonBGColor");
  }

  return (
    <div className="pageSection">
      <div className="container userWrapper mb-md-5">
        <div className="userDataContainer row mx-0">
          <div className="userImageContainer col-12 col-sm-3">
            <div className="userImageWrapper">
              <img className="userImage" src={userImage} alt="" />
            </div>
          </div>
          <div className="userTextData col-12 col-sm-9">
            <h5 className="mb-0">{user.name}</h5>
            <span className="userSpreadBorder"></span>
            <div className="row">
              <div className="col-12 col-lg-6">
                <p>
                  Register date:&nbsp;&nbsp;
                  <span className="userOrangeText">{user.registerDate}</span>
                </p>
                <p>
                  Total Orders:&nbsp;&nbsp;
                  <span className="userOrangeText">{user.totalOrders}</span>
                </p>
                <p>
                  Favorites:&nbsp;&nbsp;
                  <span className="userOrangeText">{user.favorites}</span>
                </p>
              </div>
              <div className="col-12 col-lg-6">
                <p>
                  E-mail:&nbsp;&nbsp;
                  <span className="userOrangeText">{user.email}</span>
                </p>
                <p>
                  Phone:&nbsp;&nbsp;
                  <span className="userOrangeText">{user.phone}</span>
                </p>
                <p>
                  Address:&nbsp;&nbsp;
                  <span className="userOrangeText">{user.address}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 userSubPageButtonWrap">
            <button
              className="buttonBGColor"
              onClick={(ev) => changeSubPage(1, ev)}
            >
              Favorites
            </button>
            <button onClick={(ev) => changeSubPage(2, ev)}>Orders</button>
            <button onClick={(ev) => changeSubPage(3, ev)}>My Details</button>
          </div>
        </div>
        <div className="row">
          {subPage === 1 ? (
            <UserFavorites />
          ) : subPage === 2 ? (
            <UserOrders />
          ) : (
            <UserDetails />
          )}
        </div>
      </div>
    </div>
  );
}
