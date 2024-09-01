import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from '../src/Pages/Home/Home'
import About from '../src/Pages/About/About'
import Cart from '../src/Pages/Cart/Cart'
import Contact from '../src/Pages/Contact/Contact'
import Login from '../src/Pages/Login/Login'
import Register from '../src/Pages/Register/Register'
import Product from '../src/Pages/Product/Product'
import Productoverview from '../src/Pages/ProductOverview/ProductOverview'
import OrderDetailsForm from '../src/Pages/OrderDetailsForm/OrderDetailsForm'
import Orders from '../src/Pages/Orders/Orders'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route index element={<Home />} />
            <Route path='/home' element ={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/product' element={<Product/>} />
            <Route path='/productOverview' element={<Productoverview />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/orderdetails' element={<OrderDetailsForm />} />
            <Route path='/order' element={<Orders />} />
        </Routes> 
      </BrowserRouter>
    </>
  )
}

export default App
