import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
import './login/login.css'
import './Home.css'
import Logout from './login/Logout.jsx'
// import Homepage from './Home.jsx'
import Login from './login/Login.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>,
)
