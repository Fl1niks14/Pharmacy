import React from 'react'
import './Aboutus.css'
import teamImg from './img/teamImg.png' // Замени на свою картинку

const Aboutus = () => {
	return (
		<div className='about-page'>
			<section className='about-hero animate-in'>
				<span className='about-tag'>О проекте</span>
				<h1 className='about-title'>
					Мы создаем культуру <span>здорового будущего</span>
				</h1>
			</section>

			<section className='about-content'>
				<div className='about-grid'>
					<div className='about-image'>
						<img src={teamImg} alt='Наша команда' />
					</div>
					<div className='about-text'>
						<h3>Наша миссия</h3>
						<p>
							Мы верим, что забота о себе должна быть простой и эстетичной. Наш
							проект объединяет экспертные знания в области фармакологии и
							современные подходы к здоровому образу жизни.
						</p>
					</div>
				</div>
			</section>

			<section className='about-values'>
				<div className='value-card'>
					<span>01</span>
					<h5>Качество</h5>
					<p>Только сертифицированные продукты от проверенных поставщиков.</p>
				</div>
				<div className='value-card'>
					<span>02</span>
					<h5>Экспертность</h5>
					<p>Наша команда — это профессионалы с медицинским образованием.</p>
				</div>
				<div className='value-card'>
					<span>03</span>
					<h5>Эстетика</h5>
					<p>
						Мы заботимся о том, чтобы каждый контакт с нами приносил
						удовольствие.
					</p>
				</div>
			</section>
		</div>
	)
}

export default Aboutus
