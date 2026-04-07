import FooterView from '../components/Home/Footer/FooterView'
import HeaderView from '../components/Home/Header/HeaderView'
import HeroView from '../components/Home/HeroView/HeroView'
import ProductListView from '../components/ProductListView/ProductListView'

const HomePage = () => {
	return (
		<>
			<HeaderView />
			<HeroView />
			<ProductListView />
			<FooterView />
		</>
	)
}

export default HomePage
