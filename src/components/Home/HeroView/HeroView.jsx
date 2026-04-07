import { Link } from 'react-router-dom'

import './HeroView.css'
import sis from './img/sis.png'
const HeroView = () => {
	return (
		<section className='hero'>
			<div className='hero-container'>
				<div className='hero-content'>
					<h1 className='hero-title'>
						Ваше здоровье <br />
						<span>в деталях.</span>
					</h1>
					<p className='hero-description'>
						Доставка сертифицированных медикаментов и товаров для красоты прямо
						к вашей двери. Эстетика заботы в каждом заказе.
					</p>
					<div className='hero-btns'>
						<Link to='/catalog' className='btn-primary'>
							Перейти в каталог
						</Link>
						<Link to='/about' className='btn-secondary'>
							О сервисе
						</Link>
					</div>
				</div>
				<div className='hero-image'>
					{/* Можно использовать стильное фото минималистичной баночки или цветка */}
					<img src={sis} alt='Pharmacy' />
				</div>
			</div>
		</section>
	)
}

export default HeroView
