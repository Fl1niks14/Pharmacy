import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useStore } from '../../Store/store'

import './Checkout.css'

const Checkout = () => {
	const { cart, clearCart } = useStore()
	const navigate = useNavigate()
	const [isOrdered, setIsOrdered] = useState(false)

	const totalPrice = cart.reduce((sum, item) => sum + item.price, 0)

	const handleSubmit = e => {
		e.preventDefault()
		// Имитация отправки данных на сервер
		setTimeout(() => {
			setIsOrdered(true)
			clearCart() // Очищаем корзину после заказа
		}, 1000)
	}

	if (isOrdered) {
		return (
			<div className='checkout-success'>
				<div className='success-content'>
					<div className='success-icon'>✓</div>
					<h1>
						Заказ <span>принят</span>
					</h1>
					<p>
						Благодарим за доверие. Наш менеджер свяжется с вами в ближайшее
						время.
					</p>
					<button onClick={() => navigate('/')} className='btn-back'>
						Вернуться в магазин
					</button>
				</div>
			</div>
		)
	}

	return (
		<div className='checkout-page'>
			<main className='checkout-container'>
				<h1 className='checkout-title'>
					Оформление <span>заказа</span>
				</h1>

				<div className='checkout-grid'>
					<form className='checkout-form' onSubmit={handleSubmit}>
						<div className='input-group'>
							<label>Ваше имя</label>
							<input type='text' required placeholder='Иван Иванов' />
						</div>
						<div className='input-group'>
							<label>Телефон</label>
							<input type='tel' required placeholder='+7 (___) ___-__-__' />
						</div>
						<div className='input-group'>
							<label>Адрес доставки</label>
							<input
								type='text'
								required
								placeholder='Город, улица, дом, квартира'
							/>
						</div>
						<button type='submit' className='submit-order-btn'>
							Подтвердить заказ — {totalPrice} ₽
						</button>
					</form>

					<div className='order-preview'>
						<h3>Ваш заказ</h3>
						<div className='preview-list'>
							{cart.map((item, index) => (
								<div key={index} className='preview-item'>
									<span>{item.name}</span>
									<span>{item.price} ₽</span>
								</div>
							))}
						</div>
						<div className='preview-total'>
							<span>Итого:</span>
							<span>{totalPrice} ₽</span>
						</div>
					</div>
				</div>
			</main>
		</div>
	)
}

export default Checkout
