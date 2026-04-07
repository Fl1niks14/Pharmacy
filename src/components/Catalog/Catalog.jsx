import React, { useMemo, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useStore } from '../../Store/store'
import './Catalog.css'

const Catalog = () => {
	const navigate = useNavigate()
	const {
		products,
		activeCategory,
		setActiveCategory,
		searchQuery,
		addToCart
	} = useStore()

	const [toastMessage, setToastMessage] = useState(null)

	// Список категорий
	const categories = useMemo(() => {
		return ['Все', ...new Set(products.map(p => p.category))]
	}, [products])

	// Фильтрация товаров
	const filteredProducts = useMemo(() => {
		return products.filter(p => {
			const matchesCategory =
				activeCategory === 'Все' || p.category === activeCategory
			const matchesSearch = p.name
				.toLowerCase()
				.includes(searchQuery.toLowerCase())
			return matchesCategory && matchesSearch
		})
	}, [products, activeCategory, searchQuery])

	const handleAddToCart = (e, product) => {
		e.stopPropagation()
		addToCart(product)
		setToastMessage(product.name)
		setTimeout(() => setToastMessage(null), 2000)
	}

	return (
		<div className='catalog-page'>
			{/* Премиальный Toast уведомление */}
			<div className={`catalog-toast ${toastMessage ? 'show' : ''}`}>
				<span>✓</span> {toastMessage} добавлен в корзину
			</div>

			<main className='catalog-container'>
				{/* Боковая панель категорий */}
				<aside className='catalog-sidebar'>
					<h3>Категории</h3>
					<ul className='category-list'>
						{categories.map(cat => (
							<li
								key={cat}
								className={activeCategory === cat ? 'active' : ''}
								onClick={() => setActiveCategory(cat)}
							>
								{cat}
							</li>
						))}
					</ul>
				</aside>

				{/* Основной контент */}
				<section className='catalog-content'>
					<h1 className='catalog-title'>
						Каталог <span>препаратов</span>
					</h1>

					<div className='catalog-grid'>
						{filteredProducts.map((product, index) => (
							<div
								key={product.id}
								className='product-card animate-in'
								style={{ animationDelay: `${index * 0.05}s` }}
								onClick={() => navigate(`/product/${product.id}`)}
							>
								{/* Категория сверху */}
								<span className='product-tag'>{product.category}</span>

								{/* Общая картинка для всех лекарств */}
								<div className='product-image-box'>
									<img
										src={product.image || 'https://flaticon.com'}
										alt={product.name}
										className='product-img'
										onError={e => {
											e.target.onerror = null
											e.target.src = 'https://flaticon.com'
										}}
									/>
								</div>

								{/* Инфо о товаре */}
								<div className='product-info-block'>
									<Link
										to={`/product/${product.id}`}
										className='product-title-link'
										onClick={e => e.stopPropagation()}
									>
										<h4>{product.name}</h4>
									</Link>

									<p className='product-price'>{product.price} ₽</p>

									<button
										className='add-btn'
										onClick={e => handleAddToCart(e, product)}
									>
										В корзину
									</button>
								</div>
							</div>
						))}
					</div>

					{filteredProducts.length === 0 && (
						<div className='no-items'>
							<p>По вашему запросу ничего не найдено</p>
							<button
								onClick={() => {
									setActiveCategory('Все')
								}}
							>
								Сбросить фильтры
							</button>
						</div>
					)}
				</section>
			</main>
		</div>
	)
}

export default Catalog
