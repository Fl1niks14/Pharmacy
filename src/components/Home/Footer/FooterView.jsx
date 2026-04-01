import React from 'react'
import './FooterView.css'

const FooterView = () => {
	return (
		<footer className='footer'>
			<div className='footer-container'>
				<div className='footer-grid'>
					{/* Блок бренда */}
					<div className='footer-brand'>
						<h2 className='footer-logo'>
							PHARMA<span>CIE</span>
						</h2>
						<p className='footer-tagline'>
							Эстетика здоровья и заботы в каждой детали вашего заказа.
						</p>
					</div>

					{/* Навигационные ссылки */}
					<div className='footer-links'>
						<h4>Сервис</h4>
						<a href='#'>Доставка</a>
						<a href='#'>Оплата</a>
						<a href='#'>Возврат</a>
					</div>

					<div className='footer-links'>
						<h4>Компания</h4>
						<a href='#'>О нас</a>
						<a href='#'>Рецепты</a>
						<a href='#'>Контакты</a>
					</div>

					{/* Соцсети в стиле Veloretti (текстом) */}
					<div className='footer-social'>
						<h4>Мы в сети</h4>
						<div className='social-row'>
							<a href='#'>Instagram</a>
							<a href='#'>Facebook</a>
							<a href='#'>LinkedIn</a>
						</div>
					</div>
				</div>

				<div className='footer-bottom'>
					<p>© 2026 PHARMACIE. Все права защищены. Дипломный проект.</p>
					<div className='legal-links'>
						<a href='#'>Privacy Policy</a>
						<a href='#'>Terms of Service</a>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default FooterView
