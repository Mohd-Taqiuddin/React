import './App.css';
import Home from './pages/Home';
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
          <Route exact path="/search" element={<Home/>}/>

        </Routes>
      </Router>
     
      
    </div>
  );
}

export default App;
