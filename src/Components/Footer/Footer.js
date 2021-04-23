import React from "react";
import "../../css/footer.css";
import logo from "../../Images/logo.png";
import facebook from "../../Images/facebook.png";
import instagram from "../../Images/instagram.png";
import twitter from "../../Images/twitter.png";
import gmail from "../../Images/gmail.png";

export default function Footer() {
  return (
    <footer className="container-fluid footerBGGray px-0">
      <div className="container footerWrapper py-5">
        <div className="row">
          <div className="footerImageWrap col-xl-4 col-lg-3 col-md-12 pb-5 pb-lg-0 d-flex align-items-center">
            <div>
              <img src={logo} alt="Logo" />
            </div>
          </div>
          <div className="col-xl-8 col-lg-9 col-md-12">
            <div className="row">
              <div className="footerTitleText col-md-3 mt-0">
                <h5 className="footerTitle">About Oriental Store</h5>
                <p className="footerText">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </p>
              </div>
              <div className="footerTitleText col-md-3">
                <h5 className="footerTitle">Categories</h5>
                <ul className="list-unstyled categoriesUL footerText">
                  <li>
                    <a href="/#">Oriental Food</a>
                  </li>
                  <li>
                    <a href="/#">Narghilea</a>
                  </li>
                  <li>
                    <a href="/#">Oriental Items</a>
                  </li>
                  <li>
                    <a href="/#">Our Offers</a>
                  </li>
                </ul>
              </div>
              <div className="footerTitleText col-md-3">
                <h5 className="footerTitle">Our Products</h5>
                <p className="footerText">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </p>
              </div>
              <div className="footerTitleText col-md-3">
                <h5 className="footerTitle">Find us online</h5>
                <ul className="list-unstyled footerItemsWrap">
                  <li className="footerItemWrap">
                    <a className="d-inline-block w-100" href="/#">
                      <img
                        className="d-inline-block w-100"
                        src={facebook}
                        alt="facebook"
                      />
                    </a>
                  </li>
                  <li className="footerItemWrap">
                    <a className="d-inline-block w-100" href="/#">
                      <img
                        className="d-inline-block w-100"
                        src={instagram}
                        alt="instagram"
                      />
                    </a>
                  </li>
                  <li className="footerItemWrap">
                    <a className="d-inline-block w-100" href="/#">
                      <img
                        className="d-inline-block w-100"
                        src={twitter}
                        alt="twitter"
                      />
                    </a>
                  </li>
                  <li className="footerItemWrap">
                    <a className="d-inline-block w-100" href="/#">
                      <img
                        className="d-inline-block w-100"
                        src={gmail}
                        alt="gmail"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
