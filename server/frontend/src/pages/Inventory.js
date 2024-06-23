import React, { useState, useEffect } from 'react';
import InventoryList from '../components/InventoryList';

const Inventory = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch inventory items from an API or local data source
    // Example: setItems(fetchInventoryItems());
  }, []);

  return (
    <div>
      <h1>Inventory</h1>
      <InventoryList items={items} />
    </div>
  );
}

export default Inventory;