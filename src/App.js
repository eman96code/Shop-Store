import NavBar  from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Shop from './components/Shop';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
    <NavBar/>
    <Routes>
      <Route path='/' Component={<Home/>}/>
      <Route path='/about' Component={<About/>}/>
      <Route path='/shop' Component={ <Shop/>}/>
    </Routes>
    
    </Router>
  );
}

export default App;
