import React, { useEffect, useState } from 'react'
import ProductItem from '../../components/ProductItem/ProductItem'
import './inventory.css'
import Search from '../../components/SearchBar/search'
import { API_ENDPOINT } from '../../config';



export default function Inventory() {
  const [items, setItems] = useState([]);
  const getItems = () => {
    fetch(`${API_ENDPOINT}/items`)
      .then(res => res.json())
      .then(items => setItems(items));
  };
  useEffect(() => {
    getItems();
  }, []);

  return (
    <>
      <Search />
      <div className='inventory-page-container'>
          {items.map(item => (
              <ProductItem key={item.id} item={item} />
            ))
          }
      </div>
    </>
  );
}