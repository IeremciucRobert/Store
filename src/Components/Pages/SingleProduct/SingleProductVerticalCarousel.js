import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import mainImage1 from "../../../Images/narghilea/product4.jpg";
import image1 from "../../../Images/narghilea/product3.jpg";
import image2 from "../../../Images/narghilea/product5.jpg";
import image3 from "../../../Images/narghilea/product6.jpg";
import image4 from "../../../Images/narghilea/product7.jpg";
import image5 from "../../../Images/narghilea/product8.jpg";
import image6 from "../../../Images/narghilea/product9.jpg";
import image7 from "../../../Images/narghilea/product10.jpg";

const productImages = [
  mainImage1,
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image4,
  image5,
];

export default function SingleProductVerticalCarousel({ changeMainImage }) {
  useEffect(() => {
    let nextButton = document.querySelector(".verticalSliderNext");
    let previousButton = document.querySelector(".verticalSliderPrevious");
    let verticalSlider = document.querySelector(".verticalSlider");
    let verticalSliderSlide = document.querySelector(".verticalSliderSlide")
      .clientHeight;
    let slidesNumber = document.querySelectorAll(".verticalSliderSlide").length;
    let slideHeight = 0;
    let slidesCount = slidesNumber;

    function waitPreviousEnd() {
      previousButton.firstElementChild.classList.add("sliderDisabledArrow");
    }
    function waitNextEnd() {
      nextButton.firstElementChild.classList.add("sliderDisabledArrow");
    }

    previousButton.addEventListener("click", function () {
      // undisable next button, since it can't be disabled anymore;
      nextButton.firstElementChild.classList.remove("sliderDisabledArrow");
      verticalSlider.removeEventListener("transitionend", waitNextEnd);

      // disable arrow when reach end.
      if (slidesCount - slidesNumber === slidesNumber - 5) {
        verticalSlider.addEventListener("transitionend", waitPreviousEnd);
      }

      // stop moving the container up, when reach end
      if (slidesCount - slidesNumber === slidesNumber - 4) {
        return;
      }
      slidesCount++;
      slideHeight += verticalSliderSlide;
      verticalSlider.style.transform = `translateY(-${slideHeight}px)`;
    });

    nextButton.addEventListener("click", function () {
      previousButton.firstElementChild.classList.remove("sliderDisabledArrow");
      verticalSlider.removeEventListener("transitionend", waitPreviousEnd);

      if (slidesCount - slidesNumber === 1) {
        verticalSlider.addEventListener("transitionend", waitNextEnd);
      }

      if (!(slidesCount > slidesNumber)) {
        return;
      }
      slidesCount--;
      slideHeight -= verticalSliderSlide;
      verticalSlider.style.transform = `translateY(-${slideHeight}px)`;
    });
  }, []);

  return (
    <div className="col-2 singleProdLeftCarousel">
      <div className="verticalSliderWrapper">
        <ul className="verticalSlider">
          {productImages.map((image, index) => {
            return (
              <Item
                image={image}
                changeMainImage={changeMainImage}
                index={index}
                key={uuidv4()}
              />
            );
          })}
        </ul>
      </div>
      <a className="verticalSliderNext" type="button" href="/#">
        <span className="singleProductSliderArrow verticalSliderArrowNext sliderDisabledArrow"></span>
      </a>
      <a className="verticalSliderPrevious" type="button" href="/#">
        <span className="singleProductSliderArrow verticalSliderArrowPrevious"></span>
      </a>
    </div>
  );
}

function Item({ image, changeMainImage }) {
  return (
    <li className="verticalSliderSlide">
      <div
        className="verticalSliderSlideInWrap"
        onClick={(ev) => changeMainImage(image, ev)}
      >
        <img
          className="verticalSliderSlideImage"
          src={image}
          alt="Slide Item"
        />
      </div>
    </li>
  );
}
