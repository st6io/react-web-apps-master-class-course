import React from 'react';
import { render } from '@testing-library/react';

import Meme from '../../Meme';

describe('Meme Component', () => {
  it('should use props', () => {
    const { getByText } = render(
      <Meme
        className="new-class-name"
        topText="some text"
        bottomText="another text"
        image="https://some.test.img/jpg"
      />,
    );

    expect(getByText('some text')).toHaveAttribute('class', 'topText');
  });
});
