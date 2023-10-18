import React, { useState } from 'react';

import { Button, Input, } from 'antd';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Xử lý đăng nhập ở đây
    console.log('Đăng nhập với username:', username, 'và password:', password);
  };

  return (
    <div className="form-container">
      <h1>Login</h1>
      <div className="form-group">
        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="form-group">
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <Button onClick={handleLogin}>Login</Button>
    </div>
  );
};

const Register = () => {
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Xử lý đăng ký ở đây
    console.log('Đăng ký với username:', username, 'số điện thoại:', phoneNumber, 'email:', email, 'và password:', password);
      // Lưu thông tin tài khoản vào cơ sở dữ liệu với quyền truy cập mặc định
      const newUser = {
        username,
        phoneNumber,
        address,
        email,
        password
      };
  
      // Tiếp theo, bạn có thể thực hiện lưu trữ thông tin tài khoản vào cơ sở dữ liệu (vd: Firebase, MongoDB, SQL, vv.)
  };
  

  return (
    <div className="form-container">
      <h1>Register</h1>
      <div className="form-group">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          placeholder="PhoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

const App = () => {
  const [isLoginPage, setIsLoginPage] = useState(true);

  return (
    <div className="container">
      {isLoginPage ? <Login /> : <Register />}
      <div className="toggle-form">
        {isLoginPage ? 'Don`t have an account? ' : 'already have an account? '}
        <span onClick={() => setIsLoginPage(!isLoginPage)}>
          {isLoginPage ? 'Register now!' : 'Login now!'}
        </span>
      </div>
    </div>
  );
};

export default App;

