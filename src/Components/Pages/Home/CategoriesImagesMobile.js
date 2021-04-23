import React from "react";

export default function CategoriesImagesMobile(props) {
  return (
    <div className="secondImageMobileWrap">
      <img className="secondImageMobile" src={props.image} alt={props.image} />
      <a href="/#" className="secondImageMobileTitle">
        {props.tag}
      </a>
    </div>
  );
}
