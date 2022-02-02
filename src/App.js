import './App.css';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>

        <Switch>
          <Route path="/">
            {/* Home page /search engine  */}
            <Home />
          </Route>
          <Route path="/search">
            {/* Search page / results  */}
            <Home />
          </Route>
        </Switch>
      </Router>
     
      
    </div>
  );
}

export default App;
