import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useStore } from "../../Store/store";
import "./ProductListView.css";

const ProductListView = () => {
  const { products, addToCart, cart, updateQuantity } = useStore();

  // Выбираем 4 случайных товара один раз при монтировании
  const [randomProducts] = useState(() => {
    return [...products].sort(() => 0.5 - Math.random()).slice(0, 4);
  });

  // Корректная SVG-заглушка, если у товара нет фото
  const fallbackImage =
    "data:image/svg+xml;utf8,<svg xmlns='http://w3.org' width='100' height='100' viewBox='0 0 24 24' fill='none' stroke='%23ccc' stroke-width='1'><rect x='3' y='3' width='18' height='18' rx='2' ry='2'/><circle cx='8.5' cy='8.5' r='1.5'/><polyline points='21 15 16 10 5 21'/></svg>";

  return (
    <section className="product-section">
      <div className="section-header">
        <h2 className="section-title">
          Популярные <span>препараты</span>
        </h2>
        <p className="section-count">Найдено: {products.length}</p>
      </div>

      <div className="product-grid">
        {randomProducts.map((product) => {
          const cartItem = cart.find((item) => item.id === product.id);

          return (
            <div key={product.id} className="product-card">
              {/* Изображение товара */}
              <Link
                to={`/product/${product.id}`}
                className="product-image-link"
              >
                <div className="product-image-box">
                  <img
                    src={product.image || fallbackImage}
                    alt={product.name}
                    className="product-img"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = fallbackImage;
                    }}
                  />
                </div>
              </Link>

              {/* Информация о товаре */}
              <div className="product-info">
                <Link
                  to={`/product/${product.id}`}
                  className="product-name-link"
                >
                  <h3 className="product-name">{product.name}</h3>
                </Link>
                <p className="product-price">{product.price} ₽</p>

                {/* Блок управления покупкой (Кнопка / Счётчик) */}
                <div className="product-controls-wrapper">
                  {!cartItem ? (
                    <button
                      className="add-to-cart-btn"
                      onClick={() => addToCart(product)}
                    >
                      В корзину
                    </button>
                  ) : (
                    <div className="quantity-controls list-view-controls">
                      <button
                        onClick={() => updateQuantity(product.id, -1)}
                        aria-label="Уменьшить количество"
                      >
                        -
                      </button>
                      <span className="quantity-value">
                        {cartItem.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(product.id, 1)}
                        aria-label="Увеличить количество"
                      >
                        +
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProductListView;
