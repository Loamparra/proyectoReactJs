import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList.jsx";
import { totalProducts } from "../../services/firebase/firestore/products.js";
import { useAsync } from "../../hooks/useAsync.js";
import { useNotification } from "../../hooks/useNotification.js"


function ItemListContainer({ greetings }) {
  
  const { categoryId } = useParams();
  const { setNotification } = useNotification();
  const asyncFunction = () => totalProducts(categoryId)

  const { data: products, loading, error } = useAsync(asyncFunction)


  useEffect(() => {
    setLoader(true)
    if(categoryId){

    }
    const collectionRef = categoryId
    ? query(collection(db, "prducts"), where("category", "==", categoryId)) 
    : collection (db , "products")
  
    getDocs(collectionRef)
    .then((querySnapshot)=>{
      const productos = querySnapshot.docs.map((doc)=>{
        return {id : doc.id, ...doc.data()}
      })
      setProducts(productos)
      setNotification("succes", "Producto encontrado");
    })
    .catch((error)=>{
      setNotification("danger", "No es posible obtener productos")
      console.log(error)
    })
    .finally (()=>{
      setLoader(false)
    })

  }, [categoryId]);

    if (loading) {
      return(
        <h4
        className="text-center"
        style={{backgroundColor: "red", color: "white", padding}}
        >
          Loading...
        </h4>
      );
    }

    if(error){
      return (
        <h4 style={{color: "white", backgroundColor: "#d68fff", textAlign: "center"}}>Error al cargar los productos</h4>
      )
    }


  return (
    <div className="container">
      <h2 className="tect-center">{greetings}</h2>
      <ItemList products={products} />
    </div>
  );
}

export default ItemListContainer;