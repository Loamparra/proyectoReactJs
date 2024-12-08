
import NavBar from "./components/NavBar/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import {BrowserRouter, Routes, Route} from 'react-router-dom' ; 
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx";
import { CartProvider } from "./context/CartContext.jsx";

function App() {

  return (
   <BrowserRouter>
   <CartProvider>
    <NavBar cartCount={5} title={"LOVI"} />
    <Routes>
        <Route path="/" element={<ItemListContainer greetings=" Tienda de zapatillas" />} />
        <Route path="/category/:categoryId" element={<ItemListContainer greetings= "Tienda de zapatillas" />}/>
        <Route path="/detail/:productId" element={<ItemDetailContainer/>}/>

        <Route path=""/>
    </Routes>
    </CartProvider>
   </BrowserRouter>
   
  );
  
}

export default App;
