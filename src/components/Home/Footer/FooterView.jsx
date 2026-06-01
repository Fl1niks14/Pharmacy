import React from "react";
import { Link } from "react-router-dom";
import "./FooterView.css";

const FooterView = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Блок бренда */}
          <div className="footer-brand">
            <h2 className="footer-logo">
              PHARMA<span>CIE</span>
            </h2>
            <p className="footer-tagline">
              Эстетика здоровья и заботы в каждой детали вашего заказа.
            </p>
          </div>

          {/* Навигационные ссылки */}
          <div className="footer-links">
            <h4>Сервис</h4>
            <Link to="/delivery">Доставка</Link>
            <Link to="/payment">Оплата</Link>
            <Link to="/returns">Возврат</Link>
          </div>

          <div className="footer-links">
            <h4>Компания</h4>
            <Link to="/about">О нас</Link>
            <Link to="/recipes">Рецепты</Link>
            <Link to="/contacts">Контакты</Link>
          </div>

          {/* Соцсети в стиле Veloretti (текстом) */}
          <div className="footer-social">
            <h4>Мы в сети</h4>
            <div className="social-row">
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                Instagram
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                Facebook
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 PHARMACIE. Все права защищены. Дипломный проект.</p>
          <div className="legal-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterView;
