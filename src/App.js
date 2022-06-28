import React from 'react'
import './App.css';
import Home from './Home';
import SearchPage from './SearchPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route exact path="/search" element={<SearchPage/>}/>
            <Route exact path="/" element={<Home />}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
