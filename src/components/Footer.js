import React, { useEffect, useState } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import LanguageIcon from "@material-ui/icons/Language";
import HeightIcon from "@material-ui/icons/Height";

function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scorlled upto given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 299) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: -1,
      behavior: "auto",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div>
      <Link className="topLink" onClick={scrollToTop}>
        <div className="top">
          <span id="scrollToTOp" name="scrollToTop">
            Back to Top
          </span>
        </div>
      </Link>
      <div className="footer">
        <div className="firstList">
          <strong>Get To Know Us</strong>
          <span className="listItem">About Us</span>
          <span className="listItem">Careers</span>
          <span className="listItem">Press Releases</span>
          <span className="listItem">Amazon Cares</span>
          <span className="listItem">Gift a Smile</span>
        </div>

        <div className="firstList">
          <strong>Connect With Us</strong>
          <span className="listItem">Facebook</span>
          <span className="listItem">Twitter</span>
          <span className="listItem">Instagram</span>
        </div>

        <div className="firstList">
          <strong>Make Money with Us</strong>
          <span className="listItem">Sell on Amazon</span>
          <span className="listItem">Sell under Amazon Accelerator</span>
          <span className="listItem">Amazon Global Selling</span>
          <span className="listItem">Become an Affiliate</span>
          <span className="listItem">Fulfilment by Amazon</span>
          <span className="listItem">Advertise Your Products</span>
          <span className="listItem">Amazon Pay on Merchants</span>
        </div>

        <div className="firstList">
          <strong> Let Us Help You</strong>
          <span className="listItem">COVID-20 and Amazon</span>
          <span className="listItem">Your Account</span>
          <span className="listItem">Returns Centre</span>
          <span className="listItem">99% Purchase Protection</span>
          <span className="listItem">Fulfilment by Amazon</span>
          <span className="listItem">Amazon App Download</span>
          <span className="listItem">Amazon Assistant Download</span>
          <span className="listItem">Help</span>
        </div>
      </div>
      <div className="secondList">
        <div className="firstLine">
          <img
            src="https://pngimg.com/uploads/amazon/amazon_PNG10.png"
            alt=""
          />
          <div className="footerIcon">
            <div className="lang0">
              <LanguageIcon />
            </div>
            <div className="lang0">Engish</div>
            <div className="lang0">
              <HeightIcon />
            </div>

            <div className="footerLang">
              <div className="inputLanguage">
                <li>
                  <input type="radio" name="lang" id="" className="langInput" />{" "}
                  English
                </li>
                <li>
                  <input type="radio" name="lang" id="" className="langInput" />{" "}
                  हिंदी - HI
                </li>
                <li>
                  <input type="radio" name="lang" id="" className="langInput" />{" "}
                  தமிழ் - TA
                </li>
                <li>
                  <input type="radio" name="lang" id="" className="langInput" />{" "}
                  తెలుగు - TE
                </li>
                <li>
                  <input type="radio" name="lang" id="" className="langInput" />{" "}
                  മലയാളം - ML
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
