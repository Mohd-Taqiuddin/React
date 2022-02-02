import './App.css';
import Home from './pages/Home';
import SearchPage from './pages/SearchPage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>

        <Routes>
          {/* Home Page */}
          <Route exact path="/" element={<Home/>}/>

          {/* Search page / results */}
          <Route exact path="/search" element={<SearchPage />}/>

        </Routes>
      </Router>
     
      
    </div>
  );
}

export default App;
