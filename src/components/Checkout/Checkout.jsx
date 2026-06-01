import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../Store/store";
import "./Checkout.css";

const Checkout = () => {
  const { cart, clearCart } = useStore();
  const navigate = useNavigate();
  const [isOrdered, setIsOrdered] = useState(false);

  // ИСПРАВЛЕНО: Расчет стоимости теперь учитывает количество (quantity) каждого товара
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0,
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    // Имитация отправки данных на сервер
    setTimeout(() => {
      setIsOrdered(true);
      clearCart(); // Очищаем корзину после успешного заказа
    }, 1000);
  };

  if (isOrdered) {
    return (
      <div className="checkout-success">
        <div className="success-content animate-fade-in">
          <div className="success-icon">✓</div>
          <h1 className="success-title">
            Заказ <span>принят</span>
          </h1>
          <p className="success-text">
            Благодарим за доверие. Наш менеджер свяжется с вами в ближайшее
            время для подтверждения доставки.
          </p>
          <button onClick={() => navigate("/")} className="btn-back">
            Вернуться в магазин
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <main className="checkout-container">
        <h1 className="checkout-title">
          Оформление <span>заказа</span>
        </h1>

        <div className="checkout-grid">
          {/* Форма ввода данных */}
          <form className="checkout-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Ваше имя</label>
              <input type="text" required placeholder="Иван Иванов" />
            </div>
            <div className="input-group">
              <label>Телефон</label>
              <input type="tel" required placeholder="+7 (___) ___-__-__" />
            </div>
            <div className="input-group">
              <label>Адрес доставки</label>
              <input
                type="text"
                required
                placeholder="Город, улица, дом, квартира"
              />
            </div>
            <button type="submit" className="submit-order-btn">
              Подтвердить заказ — {totalPrice} ₽
            </button>
          </form>

          {/* Правая панель — Содержимое корзины */}
          <div className="order-preview">
            <h3 className="preview-title">Ваш заказ</h3>
            <div className="preview-list">
              {cart.map((item, index) => (
                <div key={index} className="preview-item">
                  <div className="preview-item-info">
                    <span className="preview-item-name">{item.name}</span>
                    {item.quantity > 1 && (
                      <span className="preview-item-qty">
                        {" "}
                        × {item.quantity}
                      </span>
                    )}
                  </div>
                  <span className="preview-item-price">
                    {item.price * (item.quantity || 1)} ₽
                  </span>
                </div>
              ))}
            </div>
            <div className="preview-total">
              <span>Итого:</span>
              <span>{totalPrice} ₽</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Checkout;
