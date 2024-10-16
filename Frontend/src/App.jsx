import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import LoginSignup from './Pages/LoginSignup';
import Cart from './Pages/Cart';
import Footer from './Components/Footer/Footer';
import cake_banner from './Components/Assets/banner_cake.png'
import icecream_banner from './Components/Assets/banner_icecream.jpg'
import chocolate_banner from './Components/Assets/chocolate_banner.jpg'
import ContactUsPage from './Pages/ContactUs';

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Shop/>} />
        <Route path='/cakes' element={<ShopCategory banner={cake_banner} category ="cakes"/>} />
        <Route path='/icecreams' exact element={<ShopCategory banner={icecream_banner} category ="icecreams"/>} />
        <Route path='/chocolates' exact element={<ShopCategory banner={chocolate_banner} category ="chocolates"/>} />
        <Route path='/product' exact element={<Product/>}>
          <Route path=':productId' exact element={<Product/>} />
        </Route>
        <Route path='/cart' exact element={<Cart/>} />
        <Route path='/login' exact element={<LoginSignup/>} />
        <Route path='/contactus' exact element={<ContactUsPage/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </>
  )
}

export default App
