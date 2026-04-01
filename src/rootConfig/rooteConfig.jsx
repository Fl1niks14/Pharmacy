import HomePage from '../container/HomePage'
import CartPage from '../container/CartPage'

import CheckoutPage from '../container/CheckoutPage'
import CatalogPage from '../container/CatalogPage'

const routesConfig = [
	{
		path: '/',
		Component: HomePage
	},
	{
		path: '/cart',
		Component: CartPage
	},
	{
		path: '/checkout',
		Component: CheckoutPage
	},
	{
		path: '/catalog',
		Component: CatalogPage
	}
]

export default routesConfig
