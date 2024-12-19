import { useState } from "react";
import { useCart } from "../../hooks/useCart";
import {db} from "../../services/firebase"
import { addDoc, collection, documentId, getDocs, query, where, writeBatch } from "firebase/firestore";


export default function Checkout(){
    conts [loading, setLoading] = useState(false)
    const [orderCreate, setOrderCreate] = useState(false)
   
    const {cart, totalQuantity, totalProducts, clearCart } = useCart()
    const total = totalProducts()

    const createOrder = async () =>{
        setLoading(true)
        const objOrder = {
            buyer: {
                firstName: "Andy",
                lastName: "Molina",
                phone: "3462577787",
                address: "Tucuman",
            },
            items: cart,
            totalQuantity,
            total,
            date: new Date()
        }

        const ids = cart.map((item) => item.id) 
        const productRef = collection(db, "products")

        const productsAddedFromFirestore = await getDocs( 
            query(productRef, where(documentId(), "in", ids)))

        const { docs } = productsAddedFromFirestore
        
        const outOfStock = [];
        const batch = writeBatch(db)

        docs.forEach((doc) => {
            const dataDoc = doc.data()
            const stockDb = dataDoc.stockDb

            const productsAddedToCart = cart.find((prod) => prod.id === doc.id)
            const prodQuantity = productsAddedToCart.quantity
            
            if(stockDb >= prodQuantity){
                batch.update(doc.ref, {stock: stockDb - prodQuantity})
            }else {
                outOfStock.push({id: doc.id, ...dataDoc});
            }
        })

        if(outOfStock.length === 0){
            batch.commit();
            const orderRef = colection(db, "orders")
            const orderAdded = await addDoc(aderRef, objOrder);
            console.log ('El id de su orden es $(orderAdded.id)')
            clearCart()
            setOrderCreated(true) 

            } else{
                    console.log("hay productos fuera de stock")
                }
            
        }

        if(orderCreate) {
            <h1>La orden fue creada correctamente</h1>
        }

    

    return <>
    <h1>Checkout</h1>
    <button className="btn btn-primary" onClick={createOrder}>Generar Orden</button>
    </>
}