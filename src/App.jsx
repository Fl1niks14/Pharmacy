import { BrowserRouter as Router } from 'react-router-dom'

import AppContent from './AppContent'

const App = () => {
	return (
		<Router basename='/Pharmacy'>
			<AppContent />
		</Router>
	)
}

export default App
