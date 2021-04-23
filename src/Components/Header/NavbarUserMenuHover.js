import React from "react";

export default function NavbarUserMenuHover(props) {
  return (
    <div className="headerUserMenuHover">
      <div className="headerUserMenuHoverPadding">
        <span className="headerInnerUserMenuHover d-block">Favorites</span>
      </div>
      <div className="headerUserMenuHoverPadding">
        <span className="headerInnerUserMenuHover d-block">Orders History</span>
      </div>
      <div className="headerUserMenuHoverPadding">
        <span className="headerInnerUserMenuHover d-block">My Details</span>
      </div>
      <div className="headerUserMenuHoverPadding">
        <span className="headerInnerUserMenuHover d-block">Login</span>
      </div>
    </div>
  );
}
