import React from 'react';
import { shallow } from 'enzyme';

import Row from '../../Row';

describe('Row Component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(
      <Row className="new-class-name">
        <span>Hello, World!</span>
      </Row>,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
