import React from "react";
import { Link } from "react-router-dom";
import "../../css/header-nav.css";
import logo from "../../Images/logo.png";
import user from "../../Images/user.png";
import cart from "../../Images/cart.png";
import Products from "./Products";
import ProductsMobile from "./ProductsMobile";
import $ from "jquery";
import NavbarUserMenuHover from "./NavbarUserMenuHover";

$(document).ready(function () {
  // click outside the mobile menu and hamburger should close the mobile menu
  if (window.innerWidth < 767) {
    $(document).click(function (event) {
      let navbar = $(".navbar-collapse");
      let clickover = $(event.target);
      let openedMenu = navbar.hasClass("show");
      let checkIfInsideMenu = clickover.parents(".navbar-collapse").length;

      if (checkIfInsideMenu || clickover.hasClass("navbar-collapse")) {
        return;
      }

      if (openedMenu && !clickover.hasClass("navbar-toggle")) {
        navbar.collapse("hide");
        mobileMenuResetOnClose();
      }
    });
  }

  function mobileMenuResetOnClose() {
    // make sure all submenus are closed when parent gets closed, otherwise they stay open.
    let mobileMenu = $(".header-nav").find(".navbar-collapse");
    let subMenus = mobileMenu.find(".collapse");

    for (let collapsable of subMenus) {
      $(collapsable).collapse("hide");
    }

    //also reverse arrows back.
    let subMenusArrows = subMenus.find(".headerMobileArrow");
    let menusArrows = mobileMenu.find(".headerProdMobArrow");

    for (let arrow of menusArrows) {
      let actualArrow = $(arrow);
      actualArrow.addClass("HPMAReversed");
      actualArrow.removeClass("HPMAInversed");
    }

    for (let arrow of subMenusArrows) {
      let actualArrow = $(arrow);
      actualArrow.addClass("HMAReversed");
      actualArrow.removeClass("HMAInversed");
    }
  }

  let hamburger = $(".navbarHamburger");
  let collapsibleMenu = $(".navbar-collapse");
  hamburger.click(function () {
    // this is for a small bug that showed scroll on mobile menu during animation
    if (collapsibleMenu.hasClass("menuMobileOverflow")) {
      collapsibleMenu.removeClass("menuMobileOverflow");
    } else {
      setTimeout(() => {
        collapsibleMenu.addClass("menuMobileOverflow");
      }, 400);
    }

    // this is to close all menus and submenus from mobile menu
    mobileMenuResetOnClose();
  });

  // this is to close the mobile menu after width bigger, so it won't stay open after getting bigger
  $(window).on("resize", function () {
    let windowWidth = window.innerWidth;
    let collapsibleMenu = $(".navbar-collapse");
    let collapseSubMenu = $(".collapse");

    if (windowWidth > 767) {
      collapsibleMenu.removeClass("show");
      collapsibleMenu.removeClass("menuMobileOverflow");
      // close the submenus as well
      collapseSubMenu.map(function () {
        return $(this).removeClass("show");
      });
    } else {
      collapsibleMenu.addClass("menuMobileOverflow");
    }
  });
});

const productsCategories = [
  { name: "Oriental Food" },
  {
    name: "Narghilea",
    more: [
      { name: "Narghilea" },
      { name: "Related" },
      { name: "Accessories" },
      {
        name: "Tobacco Flavors",
        more: [
          {
            name: "Hubble-Bubble",
            more: [
              { name: "Bubble-Hubble" },
              { name: "Tahini-Hubble" },
              { name: "Hammos Bubble" },
            ],
          },
          { name: "Bub Accesories" },
          { name: "Hubble Flavors" },
        ],
      },
    ],
  },
  { name: "Oriental Items" },
];

export default function NavBar() {
  return (
    <header className="containerWrap">
      <div className="container">
        <nav className="row navbar header-nav navbar-expand-md">
          &nbsp;
          <Link to="/Home" className="navbar-brand header-logo">
            <img className="navbarLogo" src={logo} alt="Logo" />
          </Link>
          <button
            className="navbar-toggler navbarHamburger navbar-light"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav navbarItemWrap m-auto">
              <Link to="/Home">
                <li className="card my-1 nav-item">
                  <h5 className="card-header headerProductName">Home</h5>
                </li>
              </Link>
              <Link to="/Products">
                <li className="card my-1 nav-item" id="productsItem">
                  <h5 className="card-header headerProductName">
                    Products
                    <button
                      className="headerProdMobArrowButton"
                      data-toggle="collapse"
                      data-target="#collapseProductsSubMenu"
                    >
                      <span className="position-relative d-inline-block w-100 h-100">
                        <i className="headerProdMobArrow HPMAReversed fa fa-chevron-up"></i>
                      </span>
                    </button>
                  </h5>
                  <Products productsCategories={productsCategories} />
                  <div className="collapse" id="collapseProductsSubMenu">
                    <ProductsMobile productsCategories={productsCategories} />
                  </div>
                </li>
              </Link>
              <Link to="/Favorites">
                <li className="card my-1 nav-item">
                  <h5 className="card-header headerProductName">Favorites</h5>
                </li>
              </Link>
              <Link to="/Contact">
                <li className="card my-1 nav-item">
                  <h5 className="card-header headerProductName">Contact</h5>
                </li>
              </Link>
            </ul>
          </div>
          <div className="userCartWrap">
            <Link
              to="/User"
              className="d-inline-block position-relative mr-2"
              id="headerUserIcon"
            >
              <img src={user} alt="" />
              <NavbarUserMenuHover />
            </Link>
            <Link to="/Cart" className="d-inline-block">
              <div className="position-relative">
                <img src={cart} alt="Cart" />
                <span className="cardProductsAmount badge badge-pill badge-danger">
                  3
                </span>
              </div>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
