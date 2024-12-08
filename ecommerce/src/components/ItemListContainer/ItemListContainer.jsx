import { useEffect, useState } from "react";
import { totalProducts, totalProductsCategory } from "../../asyncMock.js" ;
import { db } from "../../services/firebase/index.js";
import ItemList from "../ItemList/ItemList.jsx";
import { useParams } from "react-router-dom";
import {collection, getDocs, query, where} from 'firebase/firestore'

function ItemListContainer({ greetings }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    const collectionRef = categoryId ?
    query(collection(db, "prducts"), where("category", "==", categoryId)) : collection (db , "products")
  
    getDocs(collectionRef)
    .then((querySnapshot)=>{
      const products = querySnapshot.docs.map((doc)=>{
        return
      })
    })
  
  }, [categoryId]);

    if (loading) {
      return <p>Loading...</p>;
    }


  return (
    <>
      <h2>{greetings}</h2>
      <ItemList products={products} />
    </>
  );
}

export default ItemListContainer;