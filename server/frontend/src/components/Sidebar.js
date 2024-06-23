import React from 'react';

const Sidebar = () => {
  return (
    <aside>
      <ul>
        <li>Filter by Category</li>
        <li>Sort by Date</li>
        <li>Sort by Quantity</li>
        {/* Add more filters and sorting options as needed */}
      </ul>
    </aside>
  );
}

export default Sidebar;