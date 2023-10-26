// src/components/ListAccount.jsx
import React from 'react';

function ListProduct() {
  // Tạo một state để lưu trữ thông tin sản phẩm từ API hoặc database
  const accounts = [
    // Dữ liệu sản phẩm
  ];

  return (
    <div>
      <h2>List of Accounts</h2>
      <table>
        <thead>
          <tr>
            <th>Account ID</th>
            <th>UserName</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Password</th>
            <th>Create_date</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((account) => (
            <tr key={account.account_id}>
              <td>{account.account_id}</td>
              <td>{account.user_name}</td>
              <td>{account.email}</td>
              <td>{account.phone_number}</td>
              <td>{account.password}</td>
              <td>{account.create_date}</td>
              <td>{account.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListAccount;
