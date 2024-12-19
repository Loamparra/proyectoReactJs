
import NavBar from "./components/NavBar/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import {BrowserRouter, Routes, Route} from 'react-router-dom' ; 
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import Cart from "./components/Cart/Cart.jsx";

import { NotificationProvider } from "./context/CartContext.jsx"
import Checkout from "./components/Checkout/Checkout.jsx"

function App() {

  return (
   <BrowserRouter>
   <CartProvider>
    <NotificationProvider>
    <NavBar cartCount={5} title={"LOVI"} />
    <Routes>
        <Route path="/" element={<ItemListContainer greetings=" Tienda de zapatillas" />} />
        <Route path="/category/:categoryId" element={<ItemListContainer greetings= "Tienda de zapatillas" />}/>
        <Route path="/detail/:productId" element={<ItemDetailContainer/>}/>

        <Route exact path="/cart" element={<Cart /> }/>
        <Route exact path="checkout" element={<Checkout />}/>
        <Route path="*" element={<h1>:( 404 Not found</h1>}/>
    </Routes>
    </NotificationProvider>
    </CartProvider>
   </BrowserRouter>
   
  );
  
}

export default App;
