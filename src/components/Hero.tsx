import React from "react";
import "../css/hero.css";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../utils/translations";

const HeroSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="hero-container">
      {/* Header Bar */}
      <header className="hero-header d-flex justify-content-between align-items-center px-1 py-3">
        <button className="btn-disabilitas d-flex align-items-center gap-2">
          <img
            src="/assets/dis.png"
            alt="Accessibility Icon"
            className="icon-accessibility"
          />
          <span className="disabilitas">{t.btn_disability}</span>
        </button>

        <div className="search-wrapper d-flex align-items-center">
          <div className="search-input-wrapper">
            <input
              type="text"
              placeholder={t.search_placeholder}
              className="search-input"
            />
          </div>
          <button className="btn-search">
            <i className="bi bi-search"></i>
          </button>
        </div>
      </header>

      {/* Hero Section (Hanya Gambar) */}
      <section className="hero-content">
        <div className="hero-image-wrapper">
          <img
            src="/assets/laksa.png"
            alt="Banner Laksa"
            className="hero-image img-fluid"
          />
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
