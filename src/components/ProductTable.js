import ProductRow from './ProductRow';

function ProductTable(props) {
  const { productInfo } = props;
  return <ProductRow productInfo={productInfo} />;
}

export default ProductTable;
