import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import ProductListing from "./pages/ProductListing"
import Cart from "./pages/Cart"
import CheckoutDetails from "./pages/CheckoutDetails"
import CheckOut from "./pages/CheckOut"


function App() {
  return(
    <>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route index element= {<ProductListing />} />
        <Route path="/home" element= {<ProductListing />} />
        <Route path="/cart" element= {<Cart />} />
        <Route path="/checkout" element= {<CheckOut />} />
        <Route path="/checkoutdetails" element= {<CheckoutDetails />} />
      </Routes>
    </BrowserRouter>
    <Footer />
    </>
  )
    
}

export default App
