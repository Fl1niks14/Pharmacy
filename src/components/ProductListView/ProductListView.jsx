import React from 'react'
import { useStore } from '../../Store/store'
import './ProductListView.css'

const ProductListView = () => {
	// Достаем всё необходимое из стора одним хуком
	const { products, searchQuery, addToCart } = useStore()

	const filteredProducts = products.filter(p =>
		p.name.toLowerCase().includes(searchQuery.toLowerCase())
	)

	return (
		<section className='product-section'>
			<div className='section-header'>
				<h2 className='section-title'>
					Популярные <span>препараты</span>
				</h2>
				<p className='section-count'>Найдено: {filteredProducts.length}</p>
			</div>

			<div className='product-grid'>
				{filteredProducts.map(product => (
					<div key={product.id} className='product-card'>
						<div className='product-image-wrapper'>
							<div className='product-category'>{product.category}</div>
							<div className='product-placeholder'>
								{/* Берем первую букву названия для минималистичной иконки */}
								<span>{product.name[0]}</span>
							</div>
						</div>
						<div className='product-info'>
							<h3 className='product-name'>{product.name}</h3>
							<p className='product-price'>{product.price} ₽</p>

							<button
								className='add-to-cart-btn'
								onClick={() => addToCart(product)}
							>
								В корзину
							</button>
						</div>
					</div>
				))}
			</div>

			{filteredProducts.length === 0 && (
				<div className='no-results-msg'>
					К сожалению, по запросу «{searchQuery}» ничего не найдено.
				</div>
			)}
		</section>
	)
}

export default ProductListView
