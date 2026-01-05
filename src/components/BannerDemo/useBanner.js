import { useState } from "react";

/**
 * @param {number} recommendationNumber
 * @param {function} onAction
 * @returns {object}
 */
const useBanner = (recommendationNumber, onAction) => {
  const [isMinimized, setIsMinimized] = useState(false);

  const handleAction = (action) => {
    if (recommendationNumber < 6) return;
    if (onAction) onAction(action);
    setIsMinimized(true);
  };

  const restore = () => setIsMinimized(false);

  /**
   * @param {number} minRecommendation
   * @param {string} hiddenClass
   */
  const getVisibilityClass = (minRecommendation, hiddenClass = "display-none") => {
    return recommendationNumber < minRecommendation ? hiddenClass : "";
  };

  return {
    isMinimized,
    handleAction,
    restore,
    getVisibilityClass,
  };
};

export default useBanner;
