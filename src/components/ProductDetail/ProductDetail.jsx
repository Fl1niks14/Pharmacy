import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useStore } from "../../Store/store";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, addToCart } = useStore();

  const [showToast, setShowToast] = useState(false);

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Товар не найден</h2>
        <button className="btn-primary" onClick={() => navigate("/catalog")}>
          Вернуться в каталог
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  // Качественная SVG-заглушка в стиле бренда
  const fallbackImage =
    "data:image/svg+xml;utf8,<svg xmlns='http://w3.org' width='100' height='100' viewBox='0 0 24 24' fill='none' stroke='%232d5a52' stroke-width='1' stroke-opacity='0.3'><rect x='3' y='3' width='18' height='18' rx='2' ry='2'/><circle cx='8.5' cy='8.5' r='1.5'/><polyline points='21 15 16 10 5 21'/></svg>";

  return (
    <div className="product-detail-page">
      {/* Всплывающее уведомление (Toast) */}
      <div className={`toast ${showToast ? "show" : ""}`}>
        {product.name} добавлен в корзину!
      </div>

      {/* Кнопка возврата */}
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Назад
      </button>

      {/* Карточка товара */}
      <div className="product-detail-card animate-fade-in">
        {/* Левая часть: Визуал */}
        <div className="product-detail-visual">
          <img
            src={product.image || fallbackImage}
            alt={product.name}
            className="detail-img"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = fallbackImage;
            }}
          />
        </div>

        {/* Правая часть: Информация */}
        <div className="product-detail-info">
          {product.category && (
            <span className="detail-category">{product.category}</span>
          )}
          <h1 className="detail-title">{product.name}</h1>

          <p className="detail-description">
            {product.description ||
              `Описание для ${product.name} скоро появится. Данный препарат применяется строго по назначению врача. Перед использованием ознакомьтесь с инструкцией.`}
          </p>

          {/* Нижняя часть контента: Цена и Действие */}
          <div className="detail-footer">
            <span className="detail-price">{product.price} ₽</span>
            <button className="add-btn" onClick={handleAddToCart}>
              Добавить в корзину
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
