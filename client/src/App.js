import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { GlobalStyle } from "./App.style";
import { Home } from './pages/Home';
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
