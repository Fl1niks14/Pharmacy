import Catalog from '../components/Catalog/Catalog'
import FooterView from '../components/Home/Footer/FooterView'
import HeaderView from '../components/Home/Header/HeaderView'

const CatalogPage = () => {
	return (
		<>
			<HeaderView />
			<Catalog />
			<FooterView />
		</>
	)
}

export default CatalogPage
