import logo from './logo.svg';
import './App.css';
// frontend/src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import OrderList from './components/OrderList';

function App() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('/api/woocommerce/orders');
        setOrders(response.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };
    fetchOrders();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">WooCommerce Order Manager</h1>
      <OrderList orders={orders} />
    </div>
  );
}

export default App;
