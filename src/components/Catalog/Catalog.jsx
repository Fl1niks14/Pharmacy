import { useStore } from '../../Store/store'

import './Catalog.css'

const Catalog = () => {
	const {
		products,
		categories,
		activeCategory,
		setActiveCategory,
		searchQuery,
		addToCart
	} = useStore()

	// Двойная фильтрация: по категории И по поиску
	const filteredProducts = products.filter(p => {
		const matchesCategory =
			activeCategory === 'Все' || p.category === activeCategory
		const matchesSearch = p.name
			.toLowerCase()
			.includes(searchQuery.toLowerCase())
		return matchesCategory && matchesSearch
	})

	return (
		<div className='catalog-page'>
			<main className='catalog-container'>
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

				<section className='catalog-content'>
					<h1 className='catalog-title'>
						Каталог <span>препаратов</span>
					</h1>
					<div className='catalog-grid'>
						{filteredProducts.map(product => (
							<div key={product.id} className='product-card'>
								<span className='product-tag'>{product.category}</span>
								<div className='product-img-box'>{product.name[0]}</div>
								<h4>{product.name}</h4>
								<p>{product.price} ₽</p>
								<button onClick={() => addToCart(product)}>В корзину</button>
							</div>
						))}
					</div>
					{filteredProducts.length === 0 && (
						<p className='no-items'>Ничего не найдено</p>
					)}
				</section>
			</main>
		</div>
	)
}

export default Catalog
