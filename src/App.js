import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Shop from './components/Shop';
import Details from './components/Details';
import Donations from './components/Donations'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TodoForm from './components/todo/ToDoForm';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/todoform" element={<TodoForm />} />
          <Route path="/donations" element={<Donations />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/registerForm" element={<RegisterForm />} />
          <Route path="/loginForm" element={<LoginForm />} />
          <Route path="/Shop/:id" element={<Details/>} />
        </Routes>
    </Router>
  );
}

export default App;
