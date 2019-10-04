import React from 'react';
import { shallow } from 'enzyme';

import Card from '../../Card';

describe('Card Component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(
      <Card>
        <span>Hello, World!</span>
      </Card>,
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot with className', () => {
    const wrapper = shallow(
      <Card className="new-class-name">
        <span>Hello, World!</span>
      </Card>,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
