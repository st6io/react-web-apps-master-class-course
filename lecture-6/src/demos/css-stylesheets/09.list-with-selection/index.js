import React from 'react';

import ListWithSelection from '../components/ListWithSelection';

const items = [{
  name: 'Item 1',
}, {
  name: 'Item 2',
}, {
  name: 'Item 3',
}];

const ListWithSelectionDemo = () => (
  <ListWithSelection items={items} selectedIndex={1} />
);

export default ListWithSelectionDemo;
