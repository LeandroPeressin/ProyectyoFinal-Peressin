import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContextProvider from "./components/context/CartContext";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Agradecimiento from "./components/Agradecimiento";


function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />}/>
            <Route path="/category/:id" element={<ItemListContainer />}/>
            <Route path="/item/:id" element={<ItemDetailContainer />}/>
            <Route path="/cart" element={<Cart />}/>
            <Route path="/checkout" element={<Checkout />}/>
            <Route path="/agradecimiento/:orderId" element={<Agradecimiento />}/>
          </Routes>        
          <Footer />
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
