import React from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../Store/store";
import "./Cart.css";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useStore();
  const navigate = useNavigate();

  // Подсчет суммарной стоимости и количества товаров
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0,
  );
  const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);

  const handleCheckout = () => {
    if (cart.length > 0) {
      navigate("/checkout");
    }
  };

  return (
    <section className="cart-section">
      <div className="cart-container">
        <h2 className="cart-title">
          Ваш <span>выбор</span>
        </h2>

        {cart.length > 0 ? (
          <div className="cart-grid">
            {/* Список добавленных препаратов */}
            <div className="cart-items-list">
              {cart.map((item) => (
                <div key={item.id} className="cart-item-row animate-fade-in">
                  {/* Главная информация (Буква-аватар и Название) */}
                  <div className="item-main">
                    <span className="item-letter">{item.name[0]}</span>
                    <div className="item-text-info">
                      <h4>{item.name}</h4>
                      <p>{item.category || "Медикаменты"}</p>
                    </div>
                  </div>

                  {/* Блок изменения количества (Счетчик) */}
                  <div className="quantity-controls">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      disabled={item.quantity <= 1}
                      aria-label="Уменьшить количество"
                    >
                      -
                    </button>
                    <span className="quantity-value">{item.quantity || 1}</span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      aria-label="Увеличить количество"
                    >
                      +
                    </button>
                  </div>

                  {/* Мета-информация (Итоговая цена строки и Удаление) */}
                  <div className="item-meta">
                    <span className="item-price">
                      {(item.price * (item.quantity || 1)).toLocaleString()} ₽
                    </span>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="delete-btn"
                    >
                      Удалить
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Карточка суммарного расчета и чекаута */}
            <div className="cart-checkout-card">
              <h3 className="checkout-card-title">Детали заказа</h3>
              <div className="checkout-row">
                <span>Всего товаров:</span>
                <span>{totalItems} шт.</span>
              </div>

              <div className="checkout-total">
                <span>Итого:</span>
                <span>{totalPrice.toLocaleString()} ₽</span>
              </div>
              <button className="main-checkout-btn" onClick={handleCheckout}>
                Оформить заказ
              </button>
            </div>
          </div>
        ) : (
          <div className="cart-is-empty animate-fade-in">
            <p>Корзина пуста. Выберите необходимые препараты в каталоге.</p>
            <button
              className="main-checkout-btn"
              onClick={() => navigate("/catalog")}
            >
              Перейти в каталог
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
