import routesConfig from './rootConfig/rooteConfig'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
const AppContent = () => {
	return (
		<>
			<Routes>
				{routesConfig.map((route, index) => {
					const Component = route.Component
					return <Route key={index} path={route.path} element={<Component />} />
				})}
			</Routes>
		</>
	)
}
export default AppContent
