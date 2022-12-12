import * as React from 'react';

export const ItemList = ({ items }) => {

  return (
    <ul className='itemlist'>
      {items.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  );
};
