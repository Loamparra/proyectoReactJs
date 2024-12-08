import {useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import {totalProductId} from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail.jsx'

function ItemDetailContainer(){
  const [product, setProducts] = useState({})
  const {productId} = useParams();

  useEffect(() => {
    totalProductId(productId)
    .then((res) => {
      setProducts(res)
    })
  }, [productId])

  return (
    <>
    <ItemDetail product = {product} />
    </>
  )
}

export default ItemDetailContainer