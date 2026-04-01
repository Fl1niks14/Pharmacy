import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useStore = create(
	persist(
		set => ({
			products: [
				{ id: 1, name: 'Аспирин', price: 150, category: 'Обезболивающее' },
				{ id: 2, name: 'Нурофен', price: 450, category: 'Обезболивающее' },
				{ id: 3, name: 'Корвалол', price: 80, category: 'Сердечное' },
				{ id: 4, name: 'Витамин C', price: 200, category: 'Витамины' },
				{ id: 5, name: 'Парацетамол', price: 90, category: 'Обезболивающее' },
				{ id: 6, name: 'Магний B6', price: 600, category: 'Витамины' },
				{ id: 7, name: 'Амоксициллин', price: 350, category: 'Антибиотики' },
				{ id: 8, name: 'Валидол', price: 50, category: 'Сердечное' },
				{ id: 9, name: 'Лоратадин', price: 120, category: 'Аллергия' },
				{ id: 10, name: 'Супрастин', price: 310, category: 'Аллергия' }
			],
			categories: [
				'Все',
				'Обезболивающее',
				'Витамины',
				'Сердечное',
				'Антибиотики',
				'Аллергия'
			],
			activeCategory: 'Все',
			searchQuery: '',
			cart: [],

			setActiveCategory: cat => set({ activeCategory: cat }),
			setSearchQuery: text => set({ searchQuery: text }),
			addToCart: product => set(state => ({ cart: [...state.cart, product] })),
			removeFromCart: productId =>
				set(state => ({
					cart: state.cart.filter(
						(item, index) =>
							index !== state.cart.findIndex(i => i.id === productId)
					)
				})),
			clearCart: () => set({ cart: [] })
		}),
		{ name: 'pharmacy-storage' }
	)
)
