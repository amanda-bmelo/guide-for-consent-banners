import { useState } from "react";

/**
 * @param {number} recommendationNumber
 * @param {function} onAction
 * @returns {object}
 */
const useBanner = (recommendationNumber, onAction) => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAction = (action) => {
    if (recommendationNumber < 6) return;
    
    if (action === "manage") {
      setIsModalOpen(true);
      return;
    }
    
    if (onAction) onAction(action);
    setIsMinimized(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleModalClose = (preferences) => {
    setIsModalOpen(false);
    // Se preferences for null, o usuário fechou sem confirmar (clicou no X)
    // Nesse caso, apenas fecha o modal sem minimizar
    if (preferences !== null) {
      setIsMinimized(true);
      if (onAction) onAction("preferences-saved", preferences);
    }
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
    isModalOpen,
    handleAction,
    closeModal,
    handleModalClose,
    restore,
    getVisibilityClass,
  };
};

export default useBanner;
