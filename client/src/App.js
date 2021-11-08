import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { GlobalStyle } from './App.style';
import { Home } from './pages/home/Home';
import { Product } from './pages/product/Product';
function App() {
	return (
		<div className='App'>
			<GlobalStyle />
			<Router>
				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>
					<Route path='/product'>
						<Product />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
