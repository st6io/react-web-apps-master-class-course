import React from 'react';
import { shallow } from 'enzyme';

import Meme from '../../Meme';

describe('Meme Component', () => {
  it('smoke test', () => {
    const wrapper = shallow(<Meme className="new-class-name" />);

    expect(wrapper).toExist();
  });

  it('should match snapshot', () => {
    const wrapper = shallow(
      <Meme
        className="new-class-name"
        topText="some text"
        bottomText="another text"
        image="https://some.test.img/jpg"
      />,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
