import React, { useState, useEffect } from 'react'
import { useStore } from '../../../Store/store'
import { Link } from 'react-router-dom'
import './HeaderView.css'

const HeaderView = () => {
	const { searchQuery, setSearchQuery, products, cart } = useStore()
	const [isScrolled, setIsScrolled] = useState(false)

	useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > 50)
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	const filtered = products
		.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()))
		.slice(0, 5)

	return (
		<header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
			<div className='header-container'>
				<div className='logo'>
					<Link to='/'>
						PHARMA<span>CIE</span>
					</Link>
				</div>
				<nav className='nav-menu'>
					<Link to='/catalog'>Каталог</Link>
					<Link to='/recipes'>Рецепты</Link>
					<Link to='/about'>О нас</Link>
				</nav>
				<div className='header-actions'>
					<div className='search-wrapper'>
						<input
							type='text'
							placeholder='Поиск препаратов...'
							value={searchQuery}
							onChange={e => setSearchQuery(e.target.value)}
							className='search-input'
						/>
						{searchQuery.length > 1 && (
							<div className='search-results'>
								{filtered.length ? (
									filtered.map(p => (
										<Link
											to={`/product/${p.id}`}
											key={p.id}
											className='search-item'
											onClick={() => setSearchQuery('')}
										>
											<span className='search-item-name'>{p.name}</span>
											<span className='search-item-price'>{p.price} ₽</span>
										</Link>
									))
								) : (
									<div className='search-item-empty'>Ничего не найдено</div>
								)}
							</div>
						)}
					</div>
					<Link to='/cart' className='icon-btn'>
						<svg
							className='action-icon'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							strokeWidth='1.5'
						>
							<path d='M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z' />
							<line x1='3' y1='6' x2='21' y2='6' />
							<path d='M16 10a4 4 0 0 1-8 0' />
						</svg>
						<span className='cart-count'>{cart.length}</span>
					</Link>
				</div>
			</div>
		</header>
	)
}
export default HeaderView
