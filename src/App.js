import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from './Menu';
import Footer from './Footer';
import Home from './Home';
import Origen from './Origen';
import Variantes from './Variantes';
import Villanos from './Villanos';
import Apariciones from './Apariciones';

function App() {
  return (
    <BrowserRouter>
    <Menu></Menu>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/origen' element={<Origen></Origen>}></Route>
      <Route path='/variantes' element={<Variantes></Variantes>}></Route>
      <Route path='/villanos' element={<Villanos></Villanos>}></Route>
      <Route path='/apariciones' element={<Apariciones></Apariciones>}></Route>
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
