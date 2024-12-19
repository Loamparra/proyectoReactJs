
import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount.jsx";
import {useCart} from "../../hooks/useCart.js";


function ItemDetail({product}) {
   
    const { addItem, isInCart } = useCart();
    

    const handleAdd = (count) => {
        const productToAdd = { 
            id, name, price, quantity: count
        }
        addItem(productToAdd)
    }

    return (

    <div className="container">
          <h2>{product.name}</h2>
        <div className="card">
            <img
            src={product.img}
            style={{width: 300}}
            className="card-img-top"
            alt={name}
            />
        

        <div className="card-body">
            <p className="card-text">{product.description}</p>
            <p className="card-text">Categoria: {product.category}</p>
            <h2 className="card-text">Precio: ${product.price}</h2>
            <h2 className="card-text">Stock disponible - {product.stock}</h2>
        </div>
    </div>
        <div>
        {quantity === 0 ? (
        <ItemCount stock={stock} onAdd ={handleAdd} />
        ):(
            <Link to="/cart">Finalizar compra</Link>
        )}
        </div>

        {isInCart(id) ? (
            <link to="/cart">Ir al carrito</link>
        ):
        (
            <ItemCount stock={stock} onAdd={handleAdd}/>
        )
        }

        </div>


  );
}

export default ItemDetail