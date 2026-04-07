import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useStore } from '../../Store/store'
import './ProductDetail.css'

const ProductDetail = () => {
	const { id } = useParams()
	const navigate = useNavigate()
	const { products, addToCart } = useStore()

	// Состояние для показа уведомления
	const [showToast, setShowToast] = useState(false)

	const product = products.find(p => p.id === Number(id))

	if (!product) {
		return (
			<div className='product-not-found'>
				<h2>Товар не найден</h2>
				<button onClick={() => navigate('/catalog')}>
					Вернуться в каталог
				</button>
			</div>
		)
	}

	const handleAddToCart = () => {
		addToCart(product)
		setShowToast(true)
		// Скрываем уведомление через 2 секунды
		setTimeout(() => setShowToast(false), 2000)
	}

	return (
		<div className='product-detail-page'>
			{/* Всплывающее уведомление */}
			<div className={`toast ${showToast ? 'show' : ''}`}>
				{product.name} добавлен в корзину!
			</div>

			<button className='back-btn' onClick={() => navigate(-1)}>
				← Назад
			</button>

			<div className='product-detail-card animate-fade-in'>
				<div className='product-detail-visual'>
					<div className='large-placeholder'>{product.name[0]}</div>
				</div>

				<div className='product-detail-info'>
					<span className='detail-category'>{product.category}</span>
					<h1>{product.name}</h1>
					<p className='detail-description'>
						{product.description ||
							`Описание для ${product.name} скоро появится.`}
					</p>

					<div className='detail-footer'>
						<span className='detail-price'>{product.price} ₽</span>
						<button className='add-btn' onClick={handleAddToCart}>
							Добавить в корзину
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProductDetail
