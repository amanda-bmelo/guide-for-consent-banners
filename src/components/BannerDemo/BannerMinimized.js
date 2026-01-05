import React from "react";
import bannerCookie1 from "../../assets/icons/banner_cookie_1.svg";
import bannerCookie2 from "../../assets/icons/banner_cookie_2.svg";
import bannerCookie3 from "../../assets/icons/banner_cookie_3.svg";

const cookieIcons = {
  1: bannerCookie1,
  2: bannerCookie2,
  3: bannerCookie3,
};

/**
 * @param {number} bannerNumber
 * @param {function} onRestore
 */
const BannerMinimized = ({ bannerNumber, onRestore }) => {
  return (
    <div className="banner-minimized" onClick={onRestore}>
      <img src={cookieIcons[bannerNumber]} alt="Cookie" />
    </div>
  );
};

export default BannerMinimized;
