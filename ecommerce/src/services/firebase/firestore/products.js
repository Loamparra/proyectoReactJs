import {db} from '../../firebase'
import {createProductAdapterFromFirebase} from '../../../adapters/ProductAdapter'
import { collection, query, where, getDoc, doc, getDocs } from 'firebase/firestore';


export const totalProducts = (categoryId) => {

    const productsCollection = categoryId
    ? query(collection(db, "products"), where("category", "==", categoryId))
    :collection(db, "products") 

    return getDocs(productsCollection)
        .then((querySnapshot) => {
            const productAdapted = querySnapshot.docs.map((doc) => {
                return createProductAdapterFromFirebase(doc);
            });
            return productAdapted;
        })
        .catch((error) => {
            return error;
        });
}

export const totalProductId = (itemId) => {
    const productDoc = doc(db, "products", itemId);

    return getDoc(productDoc)
        .then((queryDocumentSnapshot) => {
            const productAdapted = createProductAdapterFromFirebase(
                queryDocumentSnapshot
            );
            return productAdapted;
        })
        .catch((error) => {
            return error;
        });

}
