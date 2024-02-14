import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css';

import Index from './components/Index';
import Order from './components/Order';
import Orders from './components/Orders';
import Subs from './components/Subs';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/order" element={<Order />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/subscribers" element={<Subs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
