import React from 'react';

function ProductRow(props) {
//   console.log(props);
  const { productInfo } = props;
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {productInfo.map((product, i) => {
            return (
              <tr key={i}>
                {product.inStock ? (
                  <td>{product.name}</td>
                ) : (
                  <td className="red">{product.name}</td>
                )}
                <td>{product.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ProductRow;
