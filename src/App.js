import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Header } from './components/header'
import { HomePage } from './pages/home-page'
import { MoviePage } from './pages/movie-page'
import { OrderPage } from './pages/order-page'
import { Provider } from 'react-redux'
import { store } from './store'

function App() {
	return (
		<Provider store={store}>
			<Router>
				<div className='App'>
					<Header />
					<Switch>
						<Route exact path='/order'>
							<OrderPage />
						</Route>
						<Route exact path='/app/:title'>
							<MoviePage />
						</Route>
						<Route exact path='/'>
							<HomePage />
						</Route>
					</Switch>
				</div>
			</Router>
		</Provider>
	)
}

export default App
