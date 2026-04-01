import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useStore } from '../../Store/store'
import './Cart.css'

const Cart = () => {
	// ИСПРАВЛЕНО: Достаем removeFromCart из стора
	const { cart, removeFromCart } = useStore()
	const navigate = useNavigate()

	// ИСПРАВЛЕНО: Считаем общую сумму прямо здесь
	const totalPrice = cart.reduce((sum, item) => sum + item.price, 0)

	const handleCheckout = () => {
		if (cart.length > 0) {
			navigate('/checkout')
		} else {
			alert('Ваша корзина пуста!')
		}
	}

	return (
		<section className='cart-section'>
			<div className='cart-container'>
				<h2 className='cart-title'>
					Ваш <span>выбор</span>
				</h2>

				{cart.length > 0 ? (
					<div className='cart-grid'>
						<div className='cart-items-list'>
							{cart.map((item, index) => (
								<div key={index} className='cart-item-row'>
									<div className='item-main'>
										<span className='item-letter'>{item.name[0]}</span>
										<div>
											<h4>{item.name}</h4>
											<p>{item.category}</p>
										</div>
									</div>
									<div className='item-meta'>
										<span className='item-price'>{item.price} ₽</span>
										<button
											onClick={() => removeFromCart(item.id)}
											className='delete-btn'
										>
											Удалить
										</button>
									</div>
								</div>
							))}
						</div>

						<div className='cart-checkout-card'>
							<h3>Детали заказа</h3>
							<div className='checkout-row'>
								<span>Позиций в чеке:</span>
								<span>{cart.length}</span>
							</div>
							<div className='checkout-total'>
								<span>Итого:</span>
								<span>{totalPrice} ₽</span>
							</div>
							<button className='main-checkout-btn' onClick={handleCheckout}>
								Оформить заказ
							</button>
						</div>
					</div>
				) : (
					<div className='cart-is-empty'>
						<p>Корзина пуста. Выберите необходимые препараты в каталоге.</p>
					</div>
				)}
			</div>
		</section>
	)
}

export default Cart
