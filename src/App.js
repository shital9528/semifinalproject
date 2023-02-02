
import './App.css';
import Header from './component/Header';
import Home from './pages/Home';
import{Routes, Route, BrowserRouter} from 'react-router-dom';
import Products from './component/Products';
import Cart from './pages/Cart';
import Register from './pages/Register';
import Login from './pages/Login'
import Favorite from './pages/Favorite';
import Logout from './pages/Logout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products/:id" element={<Cart />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/fav" element={<Favorite />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
