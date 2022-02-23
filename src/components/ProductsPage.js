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
    console.log(str.length);

    if (str.length > 0) {
      filteredList = products.filter((product) => {
        return product.name.toLowerCase().includes(str.toLowerCase());
      });
    } else {
      filteredList = products;
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
