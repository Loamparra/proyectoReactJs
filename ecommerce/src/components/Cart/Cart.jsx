import { totalProducts } from "../../asyncMock";
import CartItem from "../CartItem/CartItem";
import { useCart } from "../../hooks/useCart";
import { Link } from "react-router-dom";

export default function Cart() {
    const {cart, clearCart, totalProducts, totalQuantity}  = useCart()
    const total = totalProducts();

    if (totalQuantity === 0){
        return <h1>No hay agregados en el carrito</h1>
    }
    
    return(
        <div>
          <h1>Carrito</h1>
          {cart.map ((item)=>(
            <CartItem key={item.id} {...item}/>
          ))}
        <h2>Total: ${total}</h2>
        <div>
            <button onClick={clearCart} className="btn btn primary">Limpiar Carrito</button>
        </div>
        <Link to='/checkout' className="btn btn-primary" >Finalizar compra</Link>
        </div>

    )
}