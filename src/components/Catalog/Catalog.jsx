import React, { useMemo, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useStore } from "../../Store/store";
import "./Catalog.css";

const Catalog = () => {
  const navigate = useNavigate();
  const {
    products,
    activeCategory,
    setActiveCategory,
    searchQuery,
    addToCart,
  } = useStore();

  const [toastMessage, setToastMessage] = useState(null);

  // Список категорий
  const categories = useMemo(() => {
    return ["Все", ...new Set(products.map((p) => p.category))];
  }, [products]);

  // Фильтрация товаров
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory =
        activeCategory === "Все" || p.category === activeCategory;
      const matchesSearch = p.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [products, activeCategory, searchQuery]);

  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    addToCart(product);
    setToastMessage(product.name);
    setTimeout(() => setToastMessage(null), 2000);
  };

  // Качественная SVG-заглушка бренда
  const fallbackImage =
    "data:image/svg+xml;utf8,<svg xmlns='http://w3.org' width='100' height='100' viewBox='0 0 24 24' fill='none' stroke='%232d5a52' stroke-width='1' stroke-opacity='0.2'><rect x='3' y='3' width='18' height='18' rx='2' ry='2'/><circle cx='8.5' cy='8.5' r='1.5'/><polyline points='21 15 16 10 5 21'/></svg>";

  return (
    <div className="catalog-page">
      {/* Премиальное Toast уведомление */}
      <div className={`catalog-toast ${toastMessage ? "show" : ""}`}>
        <span>✓</span> <p className="toast-truncate">{toastMessage}</p> добавлен
        в корзину
      </div>

      <main className="catalog-container">
        {/* Боковая панель категорий (на мобильных — горизонтальный скролл) */}
        <aside className="catalog-sidebar">
          <h3>Категории</h3>
          <ul className="category-list">
            {categories.map((cat) => (
              <li
                key={cat}
                className={activeCategory === cat ? "active" : ""}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </li>
            ))}
          </ul>
        </aside>

        {/* Основной контент */}
        <section className="catalog-content">
          <h1 className="catalog-title">
            Каталог <span>препаратов</span>
          </h1>

          <div className="catalog-grid">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="product-card animate-in"
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => navigate(`/product/${product.id}`)}
              >
                {/* Категория сверху */}
                <span className="product-tag">{product.category}</span>

                {/* Общая картинка */}
                <div className="product-image-box">
                  <img
                    src={product.image || fallbackImage}
                    alt={product.name}
                    className="product-img"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = fallbackImage;
                    }}
                  />
                </div>

                {/* Инфо о товаре */}
                <div className="product-info-block">
                  <Link
                    to={`/product/${product.id}`}
                    className="product-title-link"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <h4>{product.name}</h4>
                  </Link>

                  <p className="product-price">{product.price} ₽</p>

                  <button
                    className="add-btn"
                    onClick={(e) => handleAddToCart(e, product)}
                  >
                    В корзину
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="no-items">
              <p>По вашему запросу ничего не найдено</p>
              <button
                onClick={() => {
                  setActiveCategory("Все");
                }}
              >
                Сбросить фильтры
              </button>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default Catalog;
