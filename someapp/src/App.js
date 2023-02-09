import Navbar from './CartProject/Navbar'
import {store} from './CartProject/store'
import { Provider } from 'react-redux';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './CartProject/Cart';
import Home from './CartProject/Home';
import ProductDetail from './CartProject/ProductDetail';

function App() {
  return (
    <div className="App">
    
    <Provider store={store}>
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
    <Route path='/' element={<Home></Home>}></Route>
    <Route path='/cart' element={<Cart></Cart>}></Route>
    <Route path='/product' element={<ProductDetail></ProductDetail>}></Route>
    </Routes>
    </BrowserRouter>
    </Provider>
    </div>
  );
}

export default App;
