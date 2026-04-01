import Cart from '../components/Cart/Cart'

import FooterView from '../components/Home/Footer/FooterView'
import HeaderView from '../components/Home/Header/HeaderView'
import ProductListView from '../components/ProductListView/ProductListView'

const CartPage = () => {
	return (
		<>
			<HeaderView />
			<Cart />
			<ProductListView />
			<FooterView />
		</>
	)
}

export default CartPage
