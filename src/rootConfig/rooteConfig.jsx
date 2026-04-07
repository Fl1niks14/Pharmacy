import HomePage from '../container/HomePage'
import CartPage from '../container/CartPage'

import CheckoutPage from '../container/CheckoutPage'
import CatalogPage from '../container/CatalogPage'
import Product from '../container/Product'
import Recipes from '../container/Recipes'
import About from '../container/About'

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
		path: '/product/:id',
		Component: Product
	},
	{
		path: '/recipes',
		Component: Recipes
	},
	{
		path: '/catalog',
		Component: CatalogPage
	},
	{
		path: '/about',
		Component: About
	}
]

export default routesConfig
