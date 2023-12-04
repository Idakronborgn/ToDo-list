import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Viewlist from './components/Viewlist';
import './style.css'; 


const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/viewlist" element={<Viewlist />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
