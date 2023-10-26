// src/components/ListPreview.jsx
import React from 'react';

function ListPreview() {
  // Tạo một state để lưu trữ thông tin sản phẩm từ API hoặc database
  const previews = [
    // Dữ liệu sản phẩm
  ];

  return (
    <div>
      <h2>List of Previews</h2>
      <table>
        <thead>
          <tr>
            <th>review_ID</th>	
            <th>Product ID</th>
            <th>Account ID</th>
            <th>Ratting</th>
            <th>ReviewText</th>
            <th>ReviewDate</th>
          </tr>
        </thead>
        <tbody>
          {previews.map((preview) => (
            <tr key={preview.product_id}>
              <td>{preview.product_id}</td>
              <td>{preview.product_name}</td>
              <td>{preview.description}</td>

              <td>{preview.product_id}</td>
              <td>{preview.account_id}</td>
              <td>{preview.ratting}</td>
              <td>{preview.review_text}</td>
              <td>{preview.review_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListPreview;
