import React from "react";
import "../../../css/home.css";
import Title from "./TitleForCategories";
import CategorieProducts from "./CategorieProducts";
import CategoriesImages from "./CategoriesImages";
import CategoriesImagesMobile from "./CategoriesImagesMobile";
import home1 from "../../../Images/home1.jpg";
import home2 from "../../../Images/home2.jpg";
import home3 from "../../../Images/home3.jpg";
import food1 from "../../../Images/food1.png";
import food2 from "../../../Images/food2.jpg";
import food3 from "../../../Images/food3.jpg";
import food4 from "../../../Images/food4.jpg";
import narghilea1 from "../../../Images/narghilea/narghilea1.jpg";
import narghilea2 from "../../../Images/narghilea/narghilea2.jpg";
import narghilea3 from "../../../Images/narghilea/narghilea3.jpg";
import narghilea4 from "../../../Images/narghilea/narghilea4.jpg";
import original1 from "../../../Images/items/original1.jpg";
import original2 from "../../../Images/items/original2.jpg";
import original3 from "../../../Images/items/original3.jpg";
import original4 from "../../../Images/items/original4.png";

export default function Home() {
  const food = [
    { img: food1, name: "Hommos Tahina 370g, Alwadi", price: 3 },
    { img: food2, name: "Tahini Sauce 400g, Heinz", price: 23 },
    { img: food3, name: "Arabian Spices 370g, Mohran", price: 34 },
    { img: food4, name: "Herbal Tea 370g, Alwadi", price: 12 },
  ];

  const narghilea = [
    { img: narghilea1, name: "Hubble-bubble 30in x 20in, black", price: 3 },
    { img: narghilea2, name: "Hubble-bubble, Charcoal Holder", price: 23 },
    { img: narghilea3, name: "Hubble-bubble Glass Vase", price: 34 },
    { img: narghilea4, name: "Hubble-bubble, Rapsberry Tobacco", price: 12 },
  ];

  const original = [
    { img: original1, name: "Oriental Jewelry Box, 30 x 30 x 4cm", price: 3 },
    {
      img: original2,
      name: "Oriental coffee cups, porcelain and copper",
      price: 23,
    },
    { img: original3, name: "Oriental coffe pot, 700ml silver", price: 34 },
    {
      img: original4,
      name: "Oriental traditional slipper, Genuine leather",
      price: 12,
    },
  ];

  const offers = [
    { img: original1, name: "Oriental Jewelry Box, 30 x 30 x 4cm", price: 3 },
    {
      img: original2,
      name: "Oriental coffee cups, porcelain and copper",
      price: 23,
    },
    { img: original3, name: "Oriental coffe pot, 700ml silver", price: 34 },
    {
      img: original4,
      name: "Oriental traditional slipper, Genuine leather",
      price: 12,
    },
  ];

  const categoriesTag = [
    "Narghilea",
    "Oriental Food",
    "Oriental Items",
    "Our Offers",
  ];

  return (
    <section className="pageSection pageSectionHome">
      <div className="mainImageWrapper">
        <div className="mainTextWrapper">
          <h3>Lorem Ipsum is simply dummy text of the printing</h3>
          <p className="mainNormalText">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it
          </p>
          <a href="/#" className="mainViewButton">
            View Products
          </a>
        </div>
      </div>
      <div className="container categoriesWrapper">
        <Title title="Categories" />
      </div>
      <div className="secondImagesWrapper">
        <CategoriesImages />
        <CategoriesImages />
        <CategoriesImages />
        <CategoriesImagesMobile image={home1} tag={categoriesTag[0]} />
        <CategoriesImagesMobile image={home2} tag={categoriesTag[1]} />
        <CategoriesImagesMobile image={home3} tag={categoriesTag[2]} />
      </div>
      <div className="secondImageTagWrap">
        <a href="/#" className="secondImageTag px-md-5 px-3">
          {categoriesTag[0]}
        </a>
        <a href="/#" className="secondImageTag px-md-5 px-3">
          {categoriesTag[1]}
        </a>
        <a href="/#" className="secondImageTag px-md-5 px-3">
          {categoriesTag[2]}
        </a>
      </div>
      <div className="container categoriesWrapper categoriesMarginTop">
        <Title title={categoriesTag[0]} />
        <CategorieProducts products={narghilea} />
        <Title title={categoriesTag[1]} />
        <CategorieProducts products={food} />
        <Title title={categoriesTag[2]} />
        <CategorieProducts products={original} />
      </div>
      <div className="container-fluid">
        <div className="row ourOffers">
          <div className="container ourOffersContainer">
            <Title title={categoriesTag[3]} />
          </div>
          <div className="container">
            <CategorieProducts products={offers} offers={true} />
          </div>
        </div>
      </div>
    </section>
  );
}
