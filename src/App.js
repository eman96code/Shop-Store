import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Shop from './components/Shop';
import Details from './components/Details';
import Donations from './components/Donations'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/donations" element={<Donations />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/Shop/:id" element={<Details/>} />
        </Routes>
    </Router>
  );
}

export default App;
