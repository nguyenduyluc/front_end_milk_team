// src/components/listProduct.jsx
import React from 'react';

function ListProduct() {
  // Tạo một state để lưu trữ thông tin sản phẩm từ API hoặc database
  const products = [
    // Dữ liệu sản phẩm
  ];

  return (
    <div>
      <h2>List of Products</h2>
      <table>
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Description</th>
            <th>Price (M)</th>
            <th>Price (L)</th>
            <th>Category ID</th>
            <th>Image URL</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.product_id}>
              <td>{product.product_id}</td>
              <td>{product.product_name}</td>
              <td>{product.description}</td>
              <td>{product.price_M}</td>
              <td>{product.price_L}</td>
              <td>{product.category_id}</td>
              <td>{product.image_url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListProduct;
