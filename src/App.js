
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Shop from './components/shop/Shop';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/inventory' element={<RequireAuth><Inventory></Inventory></RequireAuth>}></Route>
      </Routes>
    </div>
  );
}

export default App;
