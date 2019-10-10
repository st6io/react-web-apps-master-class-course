import React, { useState, useEffect } from 'react';
import { Container, Select, MenuItem } from '@material-ui/core';
import { unstable_trace as trace } from 'scheduler/tracing';

import fetchAww from './fetchAww';
import './App.css';

const useWindowSize = () => {
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  });

  return size;
};

export const Hooks = () => {
  const [sort, setSort] = useState('New');
  const [items, setItems] = useState([]);
  const size = useWindowSize();

  useEffect(() => {
    fetchAww(sort).then(items => setItems(items));
  }, [sort]);

  return (
    <Container maxWidth={size < 600 ? 'xs' : 'sm'} className="App">
      <Select
        className="AppNav"
        value={sort}
        onChange={event => {
          trace('Cange input', performance.now(), () =>
            setSort(event.target.value),
          );
        }}
      >
        <MenuItem value={'New'}>New</MenuItem>
        <MenuItem value={'Hot'}>Hot</MenuItem>
        <MenuItem value={'Top'}>Top</MenuItem>
      </Select>

      <div>
        {items.map((item, index) => (
          <img key={index} src={item.thumbnail} alt="Not found" />
        ))}
      </div>
    </Container>
  );
};

// export class Hooks extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       sort: 'New',
//       items: [],
//       size: window.innerWidth,
//     };
//   }

//   componentDidMount = () => {
//     const items = fetchAww(this.state.sort).then(items =>
//       this.setState({ items })
//     );

//     window.addEventListener('resize', this.handleResize);
//   };

//   componentDidUpdate = async (prevProps, prevState) => {
//     const { sort } = this.state;
//     if (sort !== prevState.sort) {
//       const items = await fetchAww(sort);
//       this.setState({ items });
//     }
//   };

//   componentWillUnmount = () => {
//     window.removeEventListener('resize', this.handleResize);
//   };

//   handleResize = () => this.setState({ size: window.innerWidth });

//   render() {
//     return (
//       <Container maxWidth={this.state.size < 600 ? 'xs' : 'sm'} className="App">
//         <Select
//           className="AppNav"
//           value={this.state.sort}
//           onChange={event => this.setState({ sort: event.target.value })}
//         >
//           <MenuItem value={'New'}>New</MenuItem>
//           <MenuItem value={'Hot'}>Hot</MenuItem>
//           <MenuItem value={'Top'}>Top</MenuItem>
//         </Select>

//         <div>
//           {this.state.items.map((item, index) => (
//             <img key={index} src={item.thumbnail} alt="Not found" />
//           ))}
//         </div>
//       </Container>
//     );
//   }
// }
