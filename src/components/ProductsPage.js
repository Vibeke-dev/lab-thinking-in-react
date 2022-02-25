import { useState } from 'react';
//import jsonData from './../../data.json';
import jsonData from '../data.json';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [filteredProducts, setFilteredProducts] = useState(products);

  const filterBar = (str) => {
    let filteredList;

    if (str === '') {
      filteredList = products;
     } else{
      filteredList = products.filter((product) => {
        return product.name.toLowerCase().includes(str.toLowerCase());
      });
    } 
    console.log(filteredProducts);
    setFilteredProducts(filteredList);
  };

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar searchBar1={filterBar} />
      <ProductTable productInfo={filteredProducts} />
    </div>
  );
}

export default ProductsPage;
