// cspell:disable
import React, { useState, useRef, useEffect } from "react";
import { ReactComponent as PlusIcon } from "../../assets/icons/plus_icon.svg";
import { ReactComponent as LessIcon } from "../../assets/icons/less_icon.svg";
import { ReactComponent as CloseIcon } from "../../assets/icons/close_icon.svg";
import { ReactComponent as LockerIcon } from "../../assets/icons/locker_icon.svg";
import { COOKIE_CATEGORIES } from "./categoriesContent";
import "./PreferencesModal.css";


const PreferencesModal = ({ highlightedElement, onClose, essentialCategories = [], showDeselectAll = false }) => {
  const [categories, setCategories] = useState(
    COOKIE_CATEGORIES.reduce(
      (acc, cat) => ({ ...acc, [cat.id]: cat.defaultChecked }),
      {}
    )
  );
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [openPartnersId, setOpenPartnersId] = useState(null);
  const partnersButtonRef = useRef(null);

  const isEssential = (categoryId) => essentialCategories.includes(categoryId);

  // Auto-expand first category when highlighting partners
  const effectiveExpandedCategory =
    highlightedElement === "partners"
      ? COOKIE_CATEGORIES[1].id
      : expandedCategory;

  // Auto-scroll to partners button when highlighted
  useEffect(() => {
    if (highlightedElement === "partners" && partnersButtonRef.current) {
      partnersButtonRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      // Auto-click partners button when highlighted
      setOpenPartnersId(COOKIE_CATEGORIES[1].id);
    }
  }, [highlightedElement]);

  const handleToggle = (categoryId) => {
    if (isEssential(categoryId)) return;
    setCategories((prev) => ({ ...prev, [categoryId]: !prev[categoryId] }));
  };

  const handleExpand = (categoryId) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
    setOpenPartnersId(null);
  };

  const handlePartnersToggle = (categoryId) => {
    setOpenPartnersId(openPartnersId === categoryId ? null : categoryId);
  };

  const handleRejectAll = () => {
    const rejectedCategories = COOKIE_CATEGORIES.reduce(
      (acc, cat) => ({ ...acc, [cat.id]: false }),
      {}
    );
    setCategories(rejectedCategories);
    if (onClose) onClose(rejectedCategories);
  };

  const handleConfirm = () => {
    if (onClose) onClose(categories);
  };

  const handleCloseModal = () => {
    if (onClose) onClose(null);
  };

  const isHighlighted = (elementId) => {
    return highlightedElement === elementId ? "highlighted" : "";
  };

  const handleDeselectAll = () => {
    setCategories(
      COOKIE_CATEGORIES.reduce(
        (acc, cat) => ({ ...acc, [cat.id]: false }),
        {}
      )
    );
  };

  const allDeselected = Object.values(categories).every((val) => val === false);

  return (
    <div className={`preferences-modal ${isHighlighted("modal")}`}>
      <button className="modal-close" onClick={handleCloseModal} aria-label="Fechar modal">
        <CloseIcon />
      </button>
      <h3 className="modal-title">Gerenciar as preferências</h3>

      {(showDeselectAll || highlightedElement === "buttons") && (
        <div className={`deselect-all-row ${isHighlighted("buttons")}`}>
          <span className="deselect-all-text">Desselecionar não essenciais</span>
          <label className="toggle">
            <input
              type="checkbox"
              checked={essentialCategories.length > 0 ? allDeselected : true}
              onChange={handleDeselectAll}
            />
            <span className="toggle-slider"></span>
          </label>
        </div>
      )}

      <div className={`cookie-categories ${isHighlighted("categories")}`}>
        {COOKIE_CATEGORIES.map((category) => (
          <div className="cookie-category" key={category.id}>
            <div className="category-header">
              <button
                className="category-expand"
                onClick={() => handleExpand(category.id)}
                aria-expanded={effectiveExpandedCategory === category.id}
              >
                <span className="expand-icon">
                  {effectiveExpandedCategory === category.id ? (
                    <LessIcon />
                  ) : (
                    <PlusIcon />
                  )}
                </span>
                <span className="category-name">{category.name}</span>
              </button>
              <label className={`toggle ${isEssential(category.id) ? "toggle-locked" : ""}`}>
                <input
                  type="checkbox"
                  checked={isEssential(category.id) ? true : categories[category.id]}
                  onChange={() => handleToggle(category.id)}
                  disabled={isEssential(category.id)}
                />
                <span className="toggle-slider">
                  {isEssential(category.id) && (
                    <span className="locker-icon">
                      <LockerIcon />
                    </span>
                  )}
                </span>
              </label>
            </div>
            {effectiveExpandedCategory === category.id && (
              <div className="category-content">
                <p className="category-description">{category.description}</p>

                {category.example && (
                  <div className="category-example">
                    <p className="example-title">
                      Exemplo
                      {category.example.source &&
                        ` (retirado do site ${category.example.source})`}
                    </p>
                    <div className="example-box">
                      <p>{category.example.text}</p>
                    </div>
                  </div>
                )}

                {category.partners && category.partners.length > 0 && (
                  <div className="category-partners">
                    <button
                      ref={
                        category.id === COOKIE_CATEGORIES[1].id
                          ? partnersButtonRef
                          : null
                      }
                      className={`partners-button ${isHighlighted("partners")}`}
                      onClick={() => handlePartnersToggle(category.id)}
                    >
                      Parceiros nessa categoria ({category.partners.length})
                    </button>
                    {openPartnersId === category.id && (
                      <div className="partners-list">
                        <ul>
                          {category.partners.map((partner, idx) => (
                            <li key={idx}>{partner}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className={`modal-actions ${isHighlighted("buttons")}`}>
        <button
          className={`btn-reject-all ${isHighlighted("buttons")}`}
          onClick={handleRejectAll}
        >
          Recusar todas as categorias
        </button>
        <button
          className={`btn-confirm ${isHighlighted("confirm")}`}
          onClick={handleConfirm}
        >
          Confirmar minhas escolhas
        </button>
      </div>
    </div>
  );
};

export default PreferencesModal;
