import React, { useState, useMemo } from 'react'
import './Recipes.css'
import smuzi from './img/smuzi.png'
import salat from './img/salat.png'
import LOSOS from './img/LOSOS.png'
import BOUI from './img/BOUI.png'
import tomat from './img/tomat.png'
// import smuzi from './img/smuzi.png'
// import smuzi from './img/smuzi.png'
// import smuzi from './img/smuzi.png'
const recipes = [
	{
		id: 1,
		title: 'Витаминный смузи',
		category: 'Иммунитет',
		time: '10 мин',
		difficulty: 'Легко',
		kcal: '120 ккал',
		image: smuzi,
		ingredients: ['Шпинат', 'Яблоко', 'Семена чиа', 'Вода'],
		steps: [
			'Помыть ингредиенты',
			'Измельчить в блендере',
			'Подавать охлажденным'
		]
	},
	{
		id: 2,
		title: 'Салат с киноа',
		category: 'Завтраки',
		time: '20 мин',
		difficulty: 'Средне',
		kcal: '340 ккал',
		image: salat,
		ingredients: ['Киноа', 'Авокадо', 'Томаты черри', 'Масло'],
		steps: ['Отварить киноа', 'Нарезать овощи', 'Смешать и заправить']
	},
	{
		id: 3,
		title: 'Запеченный лосось',
		category: 'Обед',
		time: '30 мин',
		difficulty: 'Средне',
		kcal: '450 ккал',
		image: LOSOS,
		ingredients: ['Лосось', 'Лимон', 'Розмарин', 'Специи'],
		steps: ['Замариновать рыбу', 'Запекать при 180 градусах', 'Полить лимоном']
	},
	{
		id: 4,
		title: 'Ягодный боул',
		category: 'Десерты',
		time: '15 мин',
		difficulty: 'Легко',
		kcal: '210 ккал',
		image: BOUI,
		ingredients: ['Йогурт', 'Черника', 'Гранола', 'Мёд'],
		steps: ['Выложить йогурт в чашу', 'Украсить ягодами и гранолой']
	},
	{
		id: 5,
		title: 'Томатный суп',
		category: 'Ужин',
		time: '25 мин',
		difficulty: 'Легко',
		kcal: '180 ккал',
		image: tomat,
		ingredients: ['Томаты', 'Базилик', 'Чеснок', 'Гренки'],
		steps: ['Потушить томаты', 'Взбить блендером', 'Добавить базилик']
	}
]

const Recipess = () => {
	const [activeCategory, setActiveCategory] = useState('Все')
	const [selectedRecipe, setSelectedRecipe] = useState(null) // Состояние для модалки

	const categories = useMemo(() => {
		return ['Все', ...new Set(recipes.map(r => r.category))]
	}, [])

	const filteredRecipes = useMemo(() => {
		return activeCategory === 'Все'
			? recipes
			: recipes.filter(r => r.category === activeCategory)
	}, [activeCategory])

	return (
		<div className='recipes-page'>
			<header className='recipes-header'>
				<h1 className='recipes-title'>
					Здоровые <span>рецепты</span>
				</h1>
				<ul className='recipes-filter'>
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
			</header>

			<div className='recipes-grid'>
				{filteredRecipes.map(recipe => (
					<div
						key={recipe.id}
						className='recipe-card animate-in'
						onClick={() => setSelectedRecipe(recipe)} // Открываем при клике на карточку
					>
						<div className='recipe-image'>
							<img src={recipe.image} alt={recipe.title} />
							<div className='recipe-badge'>{recipe.kcal}</div>
						</div>
						<div className='recipe-info'>
							<div className='recipe-meta'>
								<span>{recipe.category}</span> • <span>{recipe.time}</span>
							</div>
							<h4>{recipe.title}</h4>
							<button className='view-recipe-btn'>Подробнее</button>
						</div>
					</div>
				))}
			</div>

			{/* МОДАЛЬНОЕ ОКНО */}
			{selectedRecipe && (
				<div className='modal-overlay' onClick={() => setSelectedRecipe(null)}>
					<div className='modal-content' onClick={e => e.stopPropagation()}>
						<button
							className='close-modal'
							onClick={() => setSelectedRecipe(null)}
						>
							×
						</button>

						<div className='modal-grid'>
							<div className='modal-image'>
								<img src={selectedRecipe.image} alt={selectedRecipe.title} />
							</div>

							<div className='modal-details'>
								<span className='recipe-meta'>
									{selectedRecipe.category} • {selectedRecipe.time}
								</span>
								<h2>{selectedRecipe.title}</h2>

								<div className='details-section'>
									<h5>Ингредиенты</h5>
									<ul>
										{selectedRecipe.ingredients.map((ing, i) => (
											<li key={i}>{ing}</li>
										))}
									</ul>
								</div>

								<div className='details-section'>
									<h5>Приготовление</h5>
									<ol>
										{selectedRecipe.steps.map((step, i) => (
											<li key={i}>{step}</li>
										))}
									</ol>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}

export default Recipess
