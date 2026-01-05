import React, { useState } from "react";
import "./BannerDemo.css";
import useBanner from "./useBanner";
import BannerMinimized from "./BannerMinimized";
import {
  BANNER_1_CONTENT,
  BANNER_2_CONTENT,
  BANNER_3_CONTENT,
} from "./bannerContent";

// Banner 1
export const Banner1 = ({ recommendationNumber = 0, onAction }) => {
  const { isMinimized, handleAction, restore, getVisibilityClass } = useBanner(
    recommendationNumber,
    onAction
  );
  const content = BANNER_1_CONTENT;

  if (isMinimized) {
    return <BannerMinimized bannerNumber={1} onRestore={restore} />;
  }

  return (
    <div className="banner-demo banner-1">
      <div className="banner-text-content">
        <p className={getVisibilityClass(3, "blurred")}>{content.mainText}</p>
        <p className={getVisibilityClass(4)}>{content.dataText}</p>
        <p className={getVisibilityClass(5)}>
          {content.privacyText}{" "}
          <a href={content.privacyUrl}>{content.privacyLink}</a>.
        </p>
        <p className={`banner-subtext ${getVisibilityClass(6)}`}>
          {content.subtext}
        </p>
      </div>
      <div className="banner-actions">
        <button className="btn-accept" onClick={() => handleAction("accept")}>
          {content.buttons.accept}
        </button>
        <button className="btn-reject" onClick={() => handleAction("reject")}>
          {content.buttons.reject}
        </button>
        <button className="btn-manage" onClick={() => handleAction("manage")}>
          {content.buttons.manage}
        </button>
      </div>
    </div>
  );
};

// Banner 2
export const Banner2 = ({ recommendationNumber = 0, onAction }) => {
  const { isMinimized, handleAction, restore, getVisibilityClass } = useBanner(
    recommendationNumber,
    onAction
  );
  const content = BANNER_2_CONTENT;

  const [cookies, setCookies] = useState(
    content.toggles.reduce((acc, toggle) => ({ ...acc, [toggle.id]: true }), {})
  );

  const handleToggle = (cookieId) => {
    setCookies((prev) => ({ ...prev, [cookieId]: !prev[cookieId] }));
  };

  if (isMinimized) {
    return <BannerMinimized bannerNumber={2} onRestore={restore} />;
  }

  return (
    <div className="banner-demo banner-2">
      <div className="banner-text-content banner-2-top">
        <p className={getVisibilityClass(3, "blurred")}>{content.mainText}</p>
        <p className={getVisibilityClass(4)}>{content.purposeText}</p>
      </div>
      <div className="banner-2-layout">
        <div className="banner-text-content banner-2-secondary">
          <p className={`banner-subtext ${getVisibilityClass(6)}`}>
            {content.subtext}
          </p>
          <p className={getVisibilityClass(5)}>
            <a href={content.cookiesUrl}>{content.cookiesLink}</a>
          </p>
        </div>
        <div className={`banner-toggles ${getVisibilityClass(7)}`}>
          {content.toggles.map((toggle) => (
            <div className="toggle-item" key={toggle.id}>
              <label className="toggle">
                <input
                  type="checkbox"
                  checked={cookies[toggle.id]}
                  onChange={() => handleToggle(toggle.id)}
                />
                <span className="toggle-slider"></span>
              </label>
              <div className="toggle-lines">
                <span className="line">
                  <strong>{toggle.title}</strong> {toggle.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="banner-actions banner-2-actions">
        <button className="btn-confirm" onClick={() => handleAction("confirm")}>
          {content.buttons.confirm}
        </button>
        <button
          className="btn-reject-all"
          onClick={() => handleAction("reject")}
        >
          {content.buttons.rejectAll}
        </button>
      </div>
    </div>
  );
};

// Banner 3
export const Banner3 = ({ recommendationNumber = 0, onAction }) => {
  const { isMinimized, handleAction, restore, getVisibilityClass } = useBanner(
    recommendationNumber,
    onAction
  );
  const content = BANNER_3_CONTENT;

  if (isMinimized) {
    return <BannerMinimized bannerNumber={3} onRestore={restore} />;
  }

  return (
    <div className="banner-demo banner-3">
      <div className="banner-text-content">
        <p className={getVisibilityClass(3, "blurred")}>{content.mainText}</p>
        <p className={getVisibilityClass(4)}>{content.dataText}</p>
        <p className={getVisibilityClass(5)}>
          {content.privacyText}{" "}
          <a href={content.privacyUrl}>{content.privacyLink}</a>.
        </p>
        <p className={`banner-subtext ${getVisibilityClass(6)}`}>
          {content.subtext}
        </p>
      </div>
      <div className="banner-actions banner-3-actions">
        <button
          className="btn-accept-necessary"
          onClick={() => handleAction("necessary")}
        >
          {content.buttons.acceptNecessary}
        </button>
        <button
          className="btn-accept-all"
          onClick={() => handleAction("accept")}
        >
          {content.buttons.acceptAll}
        </button>
        <button
          className="btn-manage-alt"
          onClick={() => handleAction("manage")}
        >
          {content.buttons.manage}
        </button>
      </div>
    </div>
  );
};

export const BannerShowcase = ({ recommendationNumber = 0 }) => {
  return (
    <div className="banner-showcase">
      <Banner1 recommendationNumber={recommendationNumber} />
      <Banner2 recommendationNumber={recommendationNumber} />
      <Banner3 recommendationNumber={recommendationNumber} />
    </div>
  );
};

export default BannerShowcase;
