import { addDoc, collection, getDocs } from "firebase/firestore"
import { db } from "../config/firebase.js"

// skd firebase

// users, products, providers, clients, purchases
const productsCollection = collection(db, "products")

const getAllProducts = async () => {
  const snapshot = await getDocs(productsCollection)
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }))
}

const addNewProduct = async (product) => {
  const docRef = await addDoc(productsCollection, product)
  return {
    id: docRef,
    ...product
  }
}

const updateProduct = async () => {
}

const deleteProduct = async () => {
}

export { getAllProducts, addNewProduct, updateProduct, deleteProduct }