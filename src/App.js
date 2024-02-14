import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css';

import Index from './Components/Index';
import Order from './Components/Order';
import Orders from './Components/Orders';
import Subs from './Components/Subs';

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
