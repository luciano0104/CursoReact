import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, limit, query, where } from 'firebase/firestore';

const ItemListContainer = () => {

  const { categoryId } = useParams()

  const [item, setItems] = useState() 
  
  const getData = async (categoria) => {
    
    const querydb = getFirestore();
    const queryCollection = categoria ? query(collection(querydb, 'Items'), where("category", "==", categoria), limit(4))
      : collection(querydb, 'Items');
    const resultado = await getDocs(queryCollection)
    const datos = resultado.docs.map(p => ({ id: p.id, ...p.data() }))
    setItems(datos)
      }

  useEffect(() => {
    getData(categoryId)
  }, [categoryId])

};

export default ItemListContainer;