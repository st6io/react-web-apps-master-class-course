import React from 'react';

import List from '../components/List';

const items = [{
  name: 'Item 1',
}, {
  name: 'Item 2',
}, {
  name: 'Item 3',
}];

const ListDemo = () => (
  <List items={items} selectedIndex={1} />
);

export default ListDemo;
