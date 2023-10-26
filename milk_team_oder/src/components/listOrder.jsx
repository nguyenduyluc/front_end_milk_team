// src/components/ListOrder.jsx
import React from 'react';

function ListOrder() {
  // Tạo một state để lưu trữ thông tin sản phẩm từ API hoặc database
  const orders = [
    // Dữ liệu sản phẩm
  ];

  return (
    <div>
      <h2>List of Orders</h2>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Account ID</th>
            <th>order Date</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((orders) => (
            <tr key={order.order_id}>
              <td>{orders. order_id}</td>
              <td>{orders.account_id}</td>
              <td>{orders.order_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListOrder;
