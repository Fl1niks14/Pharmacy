import Checkout from '../components/Checkout/Checkout'
import FooterView from '../components/Home/Footer/FooterView'
import HeaderView from '../components/Home/Header/HeaderView'
import ProductListView from '../components/ProductListView/ProductListView'

const CheckoutPage = () => {
	return (
		<>
			<HeaderView />
			<Checkout />
			<ProductListView />
			<FooterView />
		</>
	)
}

export default CheckoutPage
