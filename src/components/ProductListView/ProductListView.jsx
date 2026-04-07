import React, { useState } from 'react'
import { useStore } from '../../Store/store'
import './ProductListView.css'

const ProductListView = () => {
	// Достаем cart и updateQuantity, чтобы управлять состоянием из карточки
	const { products, addToCart, cart, updateQuantity } = useStore()

	const [randomProducts] = useState(() => {
		return [...products].sort(() => 0.5 - Math.random()).slice(0, 4)
	})

	return (
		<section className='product-section'>
			<div className='section-header'>
				<h2 className='section-title'>
					Популярные <span>препараты</span>
				</h2>
				<p className='section-count'>Найдено: {products.length}</p>
			</div>

			<div className='product-grid'>
				{randomProducts.map(product => {
					// Проверяем, есть ли этот товар уже в корзине
					const cartItem = cart.find(item => item.id === product.id)

					return (
						<div key={product.id} className='product-card'>
							<div className='product-info'>
								<h3 className='product-name'>{product.name}</h3>
								<p className='product-price'>{product.price} ₽</p>

								{/* Если товара нет в корзине — показываем кнопку "В корзину" */}
								{!cartItem ? (
									<button
										className='add-to-cart-btn'
										onClick={() => addToCart(product)}
									>
										В корзину
									</button>
								) : (
									/* Если товар в корзине — показываем кнопки +/- */
									<div className='quantity-controls list-view-controls'>
										<button onClick={() => updateQuantity(product.id, -1)}>
											-
										</button>
										<span className='quantity-value'>{cartItem.quantity}</span>
										<button onClick={() => updateQuantity(product.id, 1)}>
											+
										</button>
									</div>
								)}
							</div>
						</div>
					)
				})}
			</div>
		</section>
	)
}

export default ProductListView
