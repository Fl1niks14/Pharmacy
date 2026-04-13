import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import aspirin from './imgCatalog/aspirin.png'
import nurofen from './imgCatalog/nurofen.png'
import korvalol from './imgCatalog/korvalol.png'
import vitamin_c from './imgCatalog/vitamin_c.png'
import paracetamol from './imgCatalog/paracetamol.png'
import magniyb6 from './imgCatalog/magniyb6.png'
import amoxicillin from './imgCatalog/amoxicillin.png'
import validol from './imgCatalog/validol.png'
import loratadine from './imgCatalog/loratadine.png'
import suprastin from './imgCatalog/suprastin.png'
import ibuprofen from './imgCatalog/ibuprofen.png'
import glycerinsuppositories from './imgCatalog/glycerin-suppositories.png'
import ginkgo from './imgCatalog/ginkgo.png'
import coughsyrup from './imgCatalog/cough-syrup.png'
import citramon from './imgCatalog/citramon.png'
import mezim from './imgCatalog/mezim.png'
import ketorolac from './imgCatalog/ketorolac.png'
import askorbina from './imgCatalog/askorbina.png'
export const useStore = create(
	persist(
		set => ({
			products: [
				{
					id: 1,
					name: 'Аспирин',
					price: 150,
					category: 'Обезболивающее',
					description:
						'Классическое средство для снижения боли и температуры...',
					image: aspirin
				},
				{
					id: 2,
					name: 'Нурофен',
					price: 450,
					category: 'Обезболивающее',
					description:
						'Эффективное средство против боли и жара. Действует быстро и целенаправленно.',
					image: nurofen
				},
				{
					id: 3,
					name: 'Корвалол',
					price: 80,
					category: 'Сердечное',
					description:
						'Средство для снятия нервного напряжения и спокойствия сердца.',
					image: korvalol
				},
				{
					id: 4,
					name: 'Витамин C',
					price: 200,
					category: 'Витамины',
					description:
						'Антиоксидант, укрепляет иммунитет и помогает бороться с простудными заболеваниями.',
					image: vitamin_c
				},
				{
					id: 5,
					name: 'Парацетамол',
					price: 90,
					category: 'Обезболивающее',
					description:
						'Облегчает головную боль, снижает жар и уменьшает воспаление.',
					image: paracetamol
				},
				{
					id: 6,
					name: 'Магний B6',
					price: 600,
					category: 'Витамины',
					description:
						'Поддерживает работу нервной системы и помогает бороться с утомлением.',
					image: magniyb6
				},
				{
					id: 7,
					name: 'Амоксициллин',
					price: 350,
					category: 'Антибиотики',
					description: 'Лекарство для лечения бактериальных инфекций.',
					image: amoxicillin
				},
				{
					id: 8,
					name: 'Валидол',
					price: 50,
					category: 'Сердечное',
					description:
						'Средство для быстрого снятия болей и неприятных ощущений в области сердца.',
					image: validol
				},
				{
					id: 9,
					name: 'Лоратадин',
					price: 120,
					category: 'Аллергия',
					description:
						'Помогает устранить симптомы аллергии, такие как зуд, насморк и чихание.',
					image: loratadine
				},
				{
					id: 10,
					name: 'Супрастин',
					price: 310,
					category: 'Аллергия',
					description:
						'Противоаллергическое средство для снятия симптомов аллергии.',
					image: suprastin
				},
				{
					id: 11,
					name: 'Ибупрофен',
					price: 180,
					category: 'Обезболивающее',
					description: 'Обезболивающее и противовоспалительное средство.',
					image: ibuprofen
				},
				{
					id: 12,
					name: 'Глицериновые свечи',
					price: 250,
					category: 'Противоспазматические',
					description:
						'Средство для устранения запоров и мягкого очищения кишечника.',
					image: glycerinsuppositories
				},
				{
					id: 13,
					name: 'Гинкго Билоба',
					price: 700,
					category: 'Витамины',
					description:
						'Улучшает кровообращение и память, способствует концентрации.',
					image: ginkgo
				},
				{
					id: 14,
					name: 'Сироп от кашля',
					price: 220,
					category: 'Противопростудные',
					description: 'Облегчает кашель и снимает раздражение горла.',
					image: coughsyrup
				},
				{
					id: 15,
					name: 'Цитрамон',
					price: 120,
					category: 'Обезболивающее',
					description: 'Обезболивающее средство для головных болей и жара.',
					image: citramon
				},
				{
					id: 16,
					name: 'Мезим',
					price: 300,
					category: 'Пищеварение',
					description:
						'Способствует пищеварению и помогает при нарушениях желудка.',
					image: mezim
				},
				{
					id: 17,
					name: 'Кеторолак',
					price: 650,
					category: 'Обезболивающее',
					description: 'Мощное обезболивающее средство при сильных болях.',
					image: ketorolac
				},
				{
					id: 18,
					name: 'Аскорбиновая кислота',
					price: 100,
					category: 'Витамины',
					description:
						'Витамин C для повышения иммунитета и борьбы с простудами.',
					image: askorbina
				}
			],

			activeCategory: 'Все',
			searchQuery: '',
			cart: [],
			updateQuantity: (productId, amount) =>
				set(state => ({
					cart: state.cart.map(item =>
						item.id === productId
							? {
									...item,
									quantity: Math.max(1, (item.quantity || 1) + amount)
								}
							: item
					)
				})),
			// Экшены управления состоянием
			setActiveCategory: cat => set({ activeCategory: cat }),
			setSearchQuery: text => set({ searchQuery: text }),

			addToCart: product =>
				set(state => {
					const existingItem = state.cart.find(item => item.id === product.id)
					if (existingItem) {
						return {
							cart: state.cart.map(item =>
								item.id === product.id
									? { ...item, quantity: (item.quantity || 1) + 1 }
									: item
							)
						}
					}
					return { cart: [...state.cart, { ...product, quantity: 1 }] }
				}),

			removeFromCart: productId =>
				set(state => ({
					cart: state.cart.filter(item => item.id !== productId)
				})),

			clearCart: () => set({ cart: [] })
		}),

		{
			name: 'pharmacy-storage',
			// Сохраняем только корзину, чтобы изменения в списке продуктов сразу применялись
			partialize: state => ({ cart: state.cart })
		}
	)
)
