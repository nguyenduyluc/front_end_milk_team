// src/components/AdminPanel.js
import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import ListProduct from './listProduct';
import ListAccount from './listAccount';
import ListOrder from './listOrder';
import ListPreview from './listPreview';

function AdminPanel() {
  return (
    <div>
      <div className="sidebar">
        <ul>
          <li>
            <Link to="/list-product">List Product</Link>
          </li>
          <li>
            <Link to="/list-account">List Account</Link>
          </li>
          <li>
            <Link to="/list-order">List Order</Link>
          </li>
          <li>
            <Link to="/list-preview">List Preview</Link>
          </li>
        </ul>
      </div>
      <div className="content">
        <Switch>
          <Route path="/list-product">
            <ListProduct />
          </Route>
          <Route path="/list-account">
            <ListAccount />
          </Route>
          <Route path="/list-order">
            <ListOrder />
          </Route>
          <Route path="/list-preview">
            <ListPreview />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default AdminPanel;
