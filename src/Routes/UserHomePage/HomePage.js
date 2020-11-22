import React, { useEffect, useState }  from 'react';
import Search from '../../components/SearchBar/search'
import ProductItem from '../../components/ProductItem/ProductItem'
import { API_ENDPOINT } from '../../config';


export default function HomePage() {
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
    <div>
      <Search />
      <p>View Items from local farms near you</p>
      <ProductItem key={items.id} item={items} />
      <ProductItem key={items.id} item={items} />
      <ProductItem key={items.id} item={items} />
      <ProductItem key={items.id} item={items} />
    </div>
  );
}
