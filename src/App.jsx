import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import {ThemeProvider} from './context/ThemeContext';
export default function App(){return <ThemeProvider><BrowserRouter><Navbar/><Routes><Route path="/" element={<Home/>}/><Route path="/products" element={<Products/>}/><Route path="/cart" element={<Cart/>}/></Routes></BrowserRouter></ThemeProvider>}
