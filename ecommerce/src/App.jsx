
import NavBar from "./components/NavBar/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import {BrowserRouter, Routes, Route} from 'react-router-dom'  

function App() {

  return (
   <BrowserRouter>
    <NavBar />
    <Routes>
        path="/"
        element={<ItemListContainer greetings ={"Tienda de zapatillas"} />}
        <Route path="/category/:categoryId" element={<ItemListContainer />}/>

    </Routes>
   </BrowserRouter>
   
  );
  
}

export default App
