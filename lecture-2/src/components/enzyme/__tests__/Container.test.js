import React from 'react';
import { shallow } from 'enzyme';

import Container from '../../Container';

describe('Container Component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(
      <Container>
        <span>Hello, World!</span>
      </Container>,
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot with className', () => {
    const wrapper = shallow(
      <Container className="new-class-name">
        <span>Hello, World!</span>
      </Container>,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
