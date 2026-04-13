import React, { useState } from 'react'
import { Link } from 'react-router-dom' // Добавил Link для перехода
import { useStore } from '../../Store/store'
import './ProductListView.css'

const ProductListView = () => {
	const { products, addToCart, cart, updateQuantity } = useStore()

	const [randomProducts] = useState(() => {
		return [...products].sort(() => 0.5 - Math.random()).slice(0, 4)
	})

	const fallbackImage = 'https://flaticon.com'

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
					const cartItem = cart.find(item => item.id === product.id)

					return (
						<div key={product.id} className='product-card'>
							{/* ДОБАВЛЕНО: Блок с картинкой */}
							<Link
								to={`/product/${product.id}`}
								className='product-image-link'
							>
								<div className='product-image-box'>
									<img
										src={product.image || fallbackImage}
										alt={product.name}
										className='product-img'
										onError={e => {
											e.target.onerror = null
											e.target.src = fallbackImage
										}}
									/>
								</div>
							</Link>

							<div className='product-info'>
								{/* Обернул название в ссылку */}
								<Link
									to={`/product/${product.id}`}
									style={{ textDecoration: 'none', color: 'inherit' }}
								>
									<h3 className='product-name'>{product.name}</h3>
								</Link>
								<p className='product-price'>{product.price} ₽</p>

								{!cartItem ? (
									<button
										className='add-to-cart-btn'
										onClick={() => addToCart(product)}
									>
										В корзину
									</button>
								) : (
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
