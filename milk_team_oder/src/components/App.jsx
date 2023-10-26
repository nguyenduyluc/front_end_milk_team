// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AdminPanel from './AdminPanel';

function Admin() {
  return (
    <Router>
      <div>
        <Route path="/admin" component={AdminPanel} />
      </div>
    </Router>
  );
}

export default Admin;
