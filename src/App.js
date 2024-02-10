import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css';

import Index from './Components/Index';
import Order from './Components/Order';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
