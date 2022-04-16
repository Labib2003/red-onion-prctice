import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/pages/Cart/Cart';
import Home from './components/pages/Home/Home';
import Login from './components/pages/Login/Login';
import Register from './components/pages/Register/Register';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Navbar from './components/shared/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/cart' element={<RequireAuth>
          <Cart></Cart>
        </RequireAuth>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
    </div>
  );
}

export default App;
