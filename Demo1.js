import * as React from 'react';
import { useState } from 'react';
import { ItemList } from './ItemList';
import './styles.css';

function generateItems() {
  let items = [];
  for (let i = 0; i < 30000; i++) {
    items.push(`Item ${i}`);
  }

  return items;
}

const dummyItems = generateItems();

export default function Demo1() {
  const [filteredItems, setFilteredItems] = useState(dummyItems);
  const [filter, setFilter] = useState('');

  const filterItems = (e) => {
    const value = e.target.value;
    const filteredItems = dummyItems.filter((item) => item.includes(value));

    setFilter(value);
    setFilteredItems([...filteredItems]);
  };

  return (
    <div style={{height: '100vh', overflow: 'scroll', marginTop: '64px'}}>
      <input
        type="text"
        onChange={filterItems}
        className="searchbox"
        placeholder="Search"
        value={filter}
      />
      {<ItemList items={filteredItems} />}
    </div>
  );
}
